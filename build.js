// build.js
// The engine. Markdown in, machine-readable HTML out.
// Clones the 20% of Ghost that matters for SEO and AI search:
// server-rendered semantic HTML, clean URLs, canonicals, OG/Twitter cards,
// JSON-LD, sitemap.xml, rss.xml, robots.txt, llms.txt. Zero CMS, zero lock-in.
// Publishing flow: drop a .md file in content/posts, `npm run build`, deploy dist/.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = __dirname;
const DIST = path.join(__dirname, "dist");
const config = JSON.parse(fs.readFileSync(path.join(SRC, "site.config.json"), "utf8"));

marked.setOptions({ mangle: false, headerIds: true });

/* ---------------- utilities ---------------- */

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const stripHtml = (h = "") => h.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const readingTime = (text) => Math.max(1, Math.round(stripHtml(text).split(/\s+/).length / 240));

const fmtDate = (iso) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric", timeZone: "UTC",
  });

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      val = val.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    } else {
      val = val.replace(/^["']|["']$/g, "");
    }
    data[key] = val;
  }
  return { data, body: m[2] };
}

function write(rel, content) {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log("  ✓ " + rel);
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, entry.name);
    const d = path.join(to, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

/* ---------------- load content ---------------- */

const postsDir = path.join(SRC, "content", "posts");
const posts = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
    const { data, body } = parseFrontmatter(raw);
    const html = marked.parse(body);
    const slug = data.slug || f.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
    return {
      ...data,
      slug,
      html,
      url: `${config.url}/posts/${slug}/`,
      path: `posts/${slug}/`,
      minutes: readingTime(html),
      excerpt: data.description || stripHtml(html).slice(0, 200) + "…",
      tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const aboutRaw = fs.readFileSync(path.join(SRC, "content", "pages", "about.md"), "utf8");
const about = parseFrontmatter(aboutRaw);
about.html = marked.parse(about.body);

const stackDir = path.join(SRC, "content", "stack");
const stackPages = fs
  .readdirSync(stackDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const { data, body } = parseFrontmatter(fs.readFileSync(path.join(stackDir, f), "utf8"));
    return { ...data, order: Number(data.order), html: marked.parse(body), url: `${config.url}/${data.slug}/`, path: `${data.slug}/` };
  })
  .sort((a, b) => a.order - b.order);

/* ---------------- structured data ---------------- */

const portraitUrl = `${config.url}/assets/images/jean-jacques-janse-van-rensburg.jpg`;

const personLd = {
  "@type": "Person",
  "@id": `${config.url}/#person`,
  name: config.author.name,
  url: config.url,
  jobTitle: config.author.jobTitle,
  description: config.description,
  sameAs: config.author.sameAs,
  knowsAbout: config.topics,
  image: {
    "@type": "ImageObject",
    "@id": `${config.url}/#portrait`,
    url: portraitUrl,
    contentUrl: portraitUrl,
    caption: config.author.name,
    creditText: config.author.name,
    license: "https://creativecommons.org/licenses/by/4.0/",
    acquireLicensePage: `${config.url}/about/`,
  },
  worksFor: { "@type": "Organization", name: "SelfBuiltSystems", url: "https://www.selfbuiltsystems.com" },
};

const websiteLd = {
  "@type": "WebSite",
  "@id": `${config.url}/#website`,
  url: config.url,
  name: config.siteName,
  description: config.tagline,
  publisher: { "@id": `${config.url}/#person` },
};

const ld = (graph) =>
  `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;

/* ---------------- layout ---------------- */

function layout({ title, description, canonical, image, jsonld, bodyClass = "", content, ogType = "website" }) {
  const img = image ? (image.startsWith("http") ? image : config.url + image) : `${config.url}/assets/images/og-default.jpg`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(config.siteName)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${img}">
<meta name="theme-color" content="#07070a">
<link rel="alternate" type="application/rss+xml" title="${esc(config.siteName)}" href="${config.url}/rss.xml">
<link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Michroma&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/main.css">
${jsonld}
<script defer data-domain="${config.plausibleDomain}" src="https://plausible.io/js/script.js"></script>
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <a class="brand" href="/" aria-label="${esc(config.siteName)}">
    <img class="brand-avatar" src="/assets/images/jjjvr-avatar.jpg" alt="" width="28" height="28">
    <span class="brand-name">${esc(config.siteName).toUpperCase()}</span>
  </a>
  <nav aria-label="Primary">
    ${config.nav.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join("\n    ")}
    <a class="nav-cta" href="/about/#work-with-me">Work with me</a>
  </nav>
</header>
<main id="main">
${content}
</main>
<footer class="site-footer">
  <div class="footer-stack mono" aria-hidden="true">${config.stack.join(" · ").toUpperCase()}</div>
  <nav class="footer-links" aria-label="Footer">
    ${config.footerLinks.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join("\n    ")}
  </nav>
  <p class="footer-copy">${esc(config.author.name)} © ${new Date().getFullYear()} · Built on my own rails.</p>
</footer>
<script src="/assets/js/field.js" defer></script>
</body>
</html>`;
}

/* ---------------- components ---------------- */

const subscribeForm = (context) => `
<form class="subscribe" action="https://buttondown.com/api/emails/embed-subscribe/${config.buttondownUsername}" method="post" data-context="${context}">
  <label class="visually-hidden" for="email-${context}">Email address</label>
  <input type="email" id="email-${context}" name="email" placeholder="you@firm.com" required>
  <button type="submit">Subscribe</button>
</form>
<p class="subscribe-note">Essays on AI systems, private equity, and AI sovereignty. Always free.</p>`;

const postCard = (p) => `
<article class="card reveal">
  <a href="/${p.path}">
    <div class="card-meta mono"><time datetime="${p.date}">${fmtDate(p.date)}</time><span>${p.minutes} min read</span></div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.excerpt)}</p>
  </a>
</article>`;

/* ---------------- pages ---------------- */

function homePage() {
  const [latest, ...rest] = posts;
  const content = `
<section class="hero">
  <canvas data-effect="pixels" aria-hidden="true"></canvas>
  <div class="hero-inner">
    <p class="kicker mono reveal">THE API LAYER</p>
    <h1 class="display reveal">JEAN JACQUES<br>JANSE VAN RENSBURG</h1>
    <p class="tagline reveal">${esc(config.tagline)}</p>
    <nav class="stackline mono reveal" aria-label="The stack">${stackPages
      .map((s) => `<a href="/${s.path}">${esc(s.title.toUpperCase())}</a>`)
      .join('<span class="sep" aria-hidden="true">/</span>')}</nav>
    <div class="hero-sub reveal">${subscribeForm("hero")}</div>
  </div>
</section>

${latest ? `
<section class="latest" aria-label="Latest essay">
  <p class="section-label mono">LATEST / ${fmtDate(latest.date).toUpperCase()}</p>
  <article class="latest-card reveal">
    <a href="/${latest.path}">
      <h2>${esc(latest.title)}</h2>
      <p>${esc(latest.excerpt)}</p>
      <p class="card-meta mono">${latest.minutes} min read · read the essay →</p>
    </a>
  </article>
</section>` : ""}

${rest.length ? `
<section id="essays" class="essays">
  <p class="section-label mono">ESSAYS</p>
  <div class="grid">
    ${rest.map(postCard).join("\n")}
  </div>
</section>` : `<span id="essays"></span>`}

<section class="stack-tiles" aria-label="The stack">
  <p class="section-label mono">THE STACK</p>
  <div class="iface-grid">
    ${stackPages
      .map(
        (s) => `<a class="iface stack-tile reveal" href="/${s.path}"><span class="mono">LAYER 0${s.order}</span><h3 class="display-sm">${esc(s.title.toUpperCase())}</h3><p>${esc(s.tagline)}</p><span class="tile-go">Enter →</span></a>`
      )
      .join("\n    ")}
  </div>
</section>

<section class="interfaces">
  <p class="section-label mono">INTERFACES</p>
  <div class="iface-grid">
    <div class="iface reveal"><span class="mono">01 / READ</span><h3>The essays</h3><p>Bold conjecture, ruthless criticism, biweekly. Start with the API essay above.</p></div>
    <div class="iface reveal"><span class="mono">02 / BUILD</span><h3>SelfBuiltSystems</h3><p>Frontier AI systems and private AI infrastructure for founders and firms. Access is by application.</p><a href="https://www.selfbuiltsystems.com">selfbuiltsystems.com →</a></div>
    <div class="iface reveal"><span class="mono">03 / INVEST</span><h3>Capital &amp; portfolio</h3><p>Business and AI strategy inside a private equity environment. Operators first, investors second.</p><a href="/about/">How I work →</a></div>
    <div class="iface reveal"><span class="mono">04 / ADVISE</span><h3>Advisory call</h3><p>${esc(config.advisory.price)}. ${esc(config.advisory.note)} Come with a specific problem.</p><a href="/about/#work-with-me">Book →</a></div>
  </div>
</section>

<section class="cta-band reveal">
  <h2>Separate signal from noise.</h2>
  ${subscribeForm("footer")}
</section>`;

  return layout({
    title: `${config.siteName} | ${config.tagline}`,
    description: config.description,
    canonical: `${config.url}/`,
    image: "/assets/images/og-portrait.jpg",
    jsonld: ld([personLd, websiteLd]),
    bodyClass: "home",
    content,
  });
}

function postPage(p) {
  const postLd = {
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description || p.excerpt,
    datePublished: p.date,
    dateModified: p.updated || p.date,
    url: p.url,
    image: p.image ? config.url + p.image : undefined,
    author: { "@id": `${config.url}/#person` },
    publisher: { "@id": `${config.url}/#person` },
    mainEntityOfPage: p.url,
    keywords: p.tags.join(", "),
  };
  const content = `
<article class="post">
  <header class="post-header">
    <p class="card-meta mono"><time datetime="${p.date}">${fmtDate(p.date)}</time><span>${p.minutes} min read</span>${p.tags
      .map((t) => `<span class="tag">${esc(t)}</span>`)
      .join("")}</p>
    <h1>${esc(p.title)}</h1>
  </header>
  ${p.image ? `<figure class="post-hero fx-city"><img src="${p.image}" alt="${esc(p.imageAlt || p.title)}" loading="eager"><canvas data-effect="city" aria-hidden="true"></canvas></figure>` : ""}
  <div class="prose">
    ${p.html}
  </div>
  <footer class="post-footer">
    <div class="cta-band">
      <h2>Get the next essay.</h2>
      ${subscribeForm("post")}
    </div>
  </footer>
</article>`;
  return layout({
    title: p.title,
    description: p.description || p.excerpt,
    canonical: p.url,
    image: p.image,
    ogType: "article",
    jsonld: ld([personLd, postLd]),
    bodyClass: "post-page",
    content,
  });
}

function aboutPage() {
  const content = `
<article class="post">
  <header class="post-header">
    <p class="card-meta mono">ABOUT</p>
    <h1>${esc(about.data.title || "About")}</h1>
  </header>
  <div class="prose">
    ${about.html}
  </div>
</article>`;
  return layout({
    title: `About | ${config.siteName}`,
    description: `Who ${config.siteName} is, what he builds, and how to work with him.`,
    canonical: `${config.url}/about/`,
    image: "/assets/images/og-portrait.jpg",
    jsonld: ld([personLd, { "@type": "AboutPage", url: `${config.url}/about/`, about: { "@id": `${config.url}/#person` }, primaryImageOfPage: { "@id": `${config.url}/#portrait` } }]),
    bodyClass: "about-page",
    content,
  });
}

function stackPage(s, i) {
  const prev = stackPages[(i + stackPages.length - 1) % stackPages.length];
  const next = stackPages[(i + 1) % stackPages.length];
  const content = `
<section class="stack-hero">
  <canvas data-effect="${s.effect}" aria-hidden="true"></canvas>
  <div class="stack-hero-inner">
    <p class="kicker mono">THE STACK / LAYER 0${s.order} OF 4</p>
    <h1 class="display">${esc(s.title.toUpperCase())}</h1>
    <p class="tagline">${esc(s.tagline)}</p>
  </div>
</section>
<article class="post stack-body">
  <div class="prose">
    ${s.html}
  </div>
  <nav class="stack-nav mono" aria-label="Stack layers">
    <a href="/${prev.path}">← ${esc(prev.title.toUpperCase())}</a>
    <span class="stack-nav-all">${stackPages
      .map((x) => (x.slug === s.slug ? `<span class="here">${esc(x.title.toUpperCase())}</span>` : `<a href="/${x.path}">${esc(x.title.toUpperCase())}</a>`))
      .join(" / ")}</span>
    <a href="/${next.path}">${esc(next.title.toUpperCase())} →</a>
  </nav>
  <footer class="post-footer">
    <div class="cta-band">
      <h2>Plug into this layer.</h2>
      <p class="cta-links"><a href="/posts/an-api-for-working-with-me/">Read the API essay</a> · <a href="/about/#work-with-me">Work with me</a> · <a href="https://www.selfbuiltsystems.com">SelfBuiltSystems</a></p>
      ${subscribeForm("stack-" + s.slug)}
    </div>
  </footer>
</article>`;
  return layout({
    title: `${s.title} | The Stack | ${config.siteName}`,
    description: s.description,
    canonical: s.url,
    jsonld: ld([
      personLd,
      { "@type": "WebPage", url: s.url, name: `${s.title} | The Stack`, description: s.description, isPartOf: { "@id": `${config.url}/#website` }, author: { "@id": `${config.url}/#person` } },
    ]),
    bodyClass: "stack-page",
    content,
  });
}

function notFoundPage() {
  return layout({
    title: `404 | ${config.siteName}`,
    description: "Signal not found.",
    canonical: `${config.url}/404.html`,
    jsonld: "",
    content: `<section class="post"><header class="post-header"><h1>404</h1></header><div class="prose"><p>This endpoint does not exist. <a href="/">Return to the API layer</a>.</p></div></section>`,
  });
}

/* ---------------- feeds & machine files ---------------- */

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
<title>${esc(config.siteName)}</title>
<link>${config.url}/</link>
<description>${esc(config.tagline)}</description>
<language>en</language>
<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (p) => `<item>
<title>${esc(p.title)}</title>
<link>${p.url}</link>
<guid isPermaLink="true">${p.url}</guid>
<pubDate>${new Date(p.date + "T08:00:00Z").toUTCString()}</pubDate>
<description>${esc(p.excerpt)}</description>
<content:encoded><![CDATA[${p.html}]]></content:encoded>
</item>`
  )
  .join("\n")}
</channel>
</rss>`;

const urls = [`${config.url}/`, `${config.url}/about/`, ...stackPages.map((s) => s.url), ...posts.map((p) => p.url)];
const withPortrait = new Set([`${config.url}/`, `${config.url}/about/`]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls
  .map((u) =>
    withPortrait.has(u)
      ? `<url><loc>${u}</loc><image:image><image:loc>${portraitUrl}</image:loc></image:image></url>`
      : `<url><loc>${u}</loc></url>`
  )
  .join("\n")}
</urlset>`;

// Explicitly welcome AI crawlers. Being read is the point.
const robots = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${config.url}/sitemap.xml`;

const llms = `# ${config.siteName}

> ${config.tagline} ${config.description}

Canonical identity: ${config.url}
Canonical portrait: ${portraitUrl} (free to use under CC BY 4.0)
Also: ${config.author.sameAs.join(", ")}

Operating stack: ${config.stack.join(", ")}.
Topics: ${config.topics.join(", ")}.

## Essays

${posts.map((p) => `- [${p.title}](${p.url}): ${p.description || p.excerpt}`).join("\n")}

## The stack

${stackPages.map((s) => `- [${s.title}](${s.url}): ${s.description}`).join("\n")}

## Pages

- [About](${config.url}/about/): background, thesis, and how to work with me.

## Working with me

Advisory calls are ${config.advisory.price}. ${config.advisory.note} See ${config.url}/about/#work-with-me
`;

/* ---------------- run ---------------- */

console.log("Building " + config.url);
try { fs.rmSync(DIST, { recursive: true, force: true }); } catch { /* some environments block delete; overwrite in place */ }
copyDir(path.join(SRC, "assets"), path.join(DIST, "assets"));
console.log("  ✓ assets/");
write("index.html", homePage());
write("about/index.html", aboutPage());
stackPages.forEach((s, i) => write(`${s.path}index.html`, stackPage(s, i)));
for (const p of posts) write(`${p.path}index.html`, postPage(p));
write("404.html", notFoundPage());
write("rss.xml", rss);
write("sitemap.xml", sitemap);
write("robots.txt", robots);
write("llms.txt", llms);
console.log(`Done. ${posts.length} post(s), ${urls.length} URLs.`);
