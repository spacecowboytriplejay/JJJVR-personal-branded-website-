---
title: The AI Sovereignty Playbook
slug: ai-sovereignty-playbook
date: 2026-08-17
description: How to stop renting your thinking and start running infrastructure you control. Three layers, real numbers, primary sources. For founders and operators who cannot afford to wake up locked out of their own stack.
image: /assets/images/ai-sovereignty-playbook.jpg
imageAlt: A monolithic sovereign compute obelisk under an orbital ring, dark and luminous
tags: [ai sovereignty, infrastructure, private ai]
---

<p class="thesis-kicker mono">SELFBUILTSYSTEMS / PLAYBOOK / FRONTIER AI SYSTEMS &amp; PRIVATE INFRASTRUCTURE</p>

**How to stop renting your thinking and start running infrastructure you control. A no-nonsense guide for founders and operators who cannot afford to wake up locked out of their own stack.**

<p class="thesis-byline mono">JEAN JACQUES JANSE VAN RENSBURG · SELFBUILTSYSTEMS · AUGUST 2026</p>

> **Read this first.** Every factual claim in this document is linked to a primary source. Where something commonly said in this market is not supported by evidence, we say so and cut it. That includes claims that would help us sell. A guide about not being deceived by your tools has to be checkable, or it is worth nothing.

## 1. The wake-up call

At 5:21pm on Friday 12 June 2026, a United States export-control directive arrived at Anthropic.

Three hours and thirty-nine minutes later, two frontier models were switched off. Not throttled. Not restricted to certain regions. Disabled, for every customer on Earth.

Anthropic's own words, published the same day: it "must abruptly disable Fable 5 and Mythos 5 for all our customers to ensure compliance." The order covered "any foreign national, whether inside or outside the United States, including foreign national Anthropic employees." Because no provider can verify the citizenship of everyone behind an API key, the only compliant action was to turn both models off globally.

They came back on 1 July. Nineteen days. Fable 5 returned capped at 50% of weekly usage limits for the first week. Mythos 5 returned restricted to a set of approved US organisations.

<figure class="fig" role="img" aria-label="Timeline of the June 2026 shutdown: directive arrives 12 June at 5:21pm, both models disabled globally 3 hours 39 minutes later, 19 days dark, partial restoration 1 July with a 50 percent usage cap and restricted access.">
<svg viewBox="0 0 720 190" xmlns="http://www.w3.org/2000/svg">
  <g style="font-family:JetBrains Mono,monospace;letter-spacing:0.06em" font-size="10">
    <line x1="40" y1="95" x2="680" y2="95" stroke="rgba(255,255,255,0.14)"/>
    <line x1="150" y1="95" x2="560" y2="95" stroke="#ffb450" stroke-opacity="0.55" stroke-width="2" stroke-dasharray="2 5"/>
    <circle cx="60" cy="95" r="5" fill="#f4f4f6"/>
    <text x="60" y="65" text-anchor="middle" fill="#9a9aa4">12 JUN · 17:21</text>
    <text x="60" y="128" text-anchor="middle" fill="#55555f">DIRECTIVE ARRIVES</text>
    <circle cx="150" cy="95" r="5" fill="#ffb450"/>
    <text x="150" y="45" text-anchor="middle" fill="#ffb450">+3H 39M</text>
    <text x="150" y="65" text-anchor="middle" fill="#9a9aa4">21:00</text>
    <text x="150" y="128" text-anchor="middle" fill="#55555f">DISABLED GLOBALLY</text>
    <text x="355" y="80" text-anchor="middle" fill="#ffb450" font-size="13">19 DAYS DARK</text>
    <text x="355" y="128" text-anchor="middle" fill="#55555f">EVERY CUSTOMER · NO RECOURSE</text>
    <circle cx="560" cy="95" r="5" fill="#8cc8ff"/>
    <text x="560" y="65" text-anchor="middle" fill="#9a9aa4">01 JUL</text>
    <text x="560" y="128" text-anchor="middle" fill="#55555f">RESTORED · 50% CAP WK 1</text>
    <text x="560" y="144" text-anchor="middle" fill="#55555f">MYTHOS: APPROVED ORGS ONLY</text>
    <text x="360" y="176" text-anchor="middle" fill="#55555f">THE COUNTERPARTY WAS NEVER YOUR VENDOR. IT WAS A GOVERNMENT YOUR VENDOR HAS TO OBEY.</text>
  </g>
</svg>
<figcaption>Figure 1. Nineteen days, globally, with three hours' warning. No enterprise agreement covered it.</figcaption>
</figure>

Now the part that should change how you architect your business.

Not one customer had contractual recourse. Not the enterprise accounts. Not the ones with negotiated commercial terms, indemnities and service credits. No agreement protects you here, because the counterparty was never your vendor. It was a government your vendor has to obey.

If your operations run through a single provider, this already happened to you. You just may not have noticed, because you were not on those two models.

## 2. What actually happened, and what did not

There is a lot of folklore in this market. Here is what the evidence supports, and what it does not.

### Bans are real, and larger than most people think

Anthropic is the only major AI provider that publishes an account enforcement figure. Between January and June 2026 it banned 11.4 million accounts. In the preceding six months the figure was 1.45 million. That is roughly an eightfold increase in half a year.

<figure class="fig statfig" aria-label="Anthropic enforcement figures for January to June 2026: 11.4 million accounts banned, up from 1.45 million in the prior six months, an eightfold increase. 398,000 appeals were filed and 42,000 overturned; only about 3.5 percent of banned users appealed.">
<div class="statgrid">
  <div class="stat"><span class="stat-n display">11.4M</span><span class="stat-l mono">ACCOUNTS BANNED<br>JAN–JUN 2026</span></div>
  <div class="stat"><span class="stat-n display">1.45M</span><span class="stat-l mono">PRIOR SIX MONTHS</span></div>
  <div class="stat"><span class="stat-n display stat-amber">8×</span><span class="stat-l mono">INCREASE IN HALF A YEAR</span></div>
</div>
<div class="statgrid">
  <div class="stat"><span class="stat-n display">398K</span><span class="stat-l mono">APPEALS FILED</span></div>
  <div class="stat"><span class="stat-n display">42K</span><span class="stat-l mono">OVERTURNED</span></div>
  <div class="stat"><span class="stat-n display stat-amber">3.5%</span><span class="stat-l mono">OF BANNED USERS<br>APPEALED AT ALL</span></div>
</div>
<figcaption>Figure 2. The provider's own transparency reporting. Source: Anthropic Transparency Hub, January to June 2026.</figcaption>
</figure>

398,000 appeals were filed. 42,000 were overturned.

Read that second number carefully. It is not a critic's estimate. It is the provider stating, in its own transparency reporting, that it wrongly terminated tens of thousands of accounts in a single half-year. And only about 3.5% of banned users appealed at all, so the number of wrongful bans that were simply absorbed and never contested is unknown and certainly larger.

OpenAI, Google and Meta publish no comparable figure for their AI products.

### What we will not claim

Three things are widely repeated in this market and we could not support any of them:

**"Providers train on your business data."** False for business tiers. Anthropic's Commercial Terms state plainly: "Anthropic may not train models on Customer Content from Services." The August 2025 consumer training change explicitly excludes Team, Enterprise, the API, Bedrock, Vertex, Gov and Education. The genuine exposure is your staff pasting company material into personal consumer accounts, where training is on by default and retention runs to five years. That is a shadow-IT problem, not a vendor problem.

**"GDPR, the EU AI Act or HIPAA require on-premise AI."** None of them do. GDPR governs international transfers, not hosting location. The EU AI Act regulates risk and transparency; its Article 50 transparency duties applied from 2 August 2026 and its high-risk obligations were deferred to 2 December 2027 under the May 2026 Digital Omnibus agreement. HIPAA is satisfied by a Business Associate Agreement, and both OpenAI and Anthropic sign them. Anyone telling you regulation forces you on-premise is either mistaken or selling hardware.

**"There is no appeal path."** Every major provider publishes one in writing. The defensible criticism is about efficacy and duration, not existence: roughly 89% of appeals fail, most people never file one, and OpenAI has told at least one user in writing that it "will no longer consider additional requests to appeal this case."

We cut these because they are the claims a competent CTO or compliance officer checks first, and getting one wrong costs you the entire room.

## 3. The real risk is not a ban. It is contingency.

Here is the reframe this whole document turns on.

Most people model the risk as: I might break a rule and get punished. That framing is comforting, because it implies control. Follow the rules, stay safe.

The evidence says something different. Your access is contingent on decisions made by parties you have no contract with, for reasons that have nothing to do with your conduct.

Four documented channels, none of which involve you doing anything wrong:

**A government.** The June 2026 export-control directive. Three hours thirty-nine minutes, nineteen days, global, no recourse.

**A court.** In the New York Times copyright litigation, a court ordered OpenAI to preserve all output data including conversations users had deleted, overriding its own 30-day deletion policy. ChatGPT Free, Plus, Pro and Team users and API customers without a Zero Data Retention agreement were covered. Enterprise, Edu and ZDR customers were exempt. The obligation ran from roughly May to 26 September 2025. Your data retention posture is only as durable as your provider's litigation exposure, and your tier determines whether you are inside or outside the blast radius.

**Your provider's commercial strategy.** In June 2025 Anthropic cut the AI coding company Windsurf off from Claude 3.5 and 3.7 Sonnet with about five days' notice, amid reports that OpenAI would acquire it for $3bn. Co-founder Jared Kaplan said publicly: "I think it would be odd for us to be selling Claude to OpenAI." Windsurf warned its own users of short-term instability. No policy was violated. The company simply became commercially inconvenient.

**An automated classifier.** With a documented 10.6% overturn rate on the appeals that get filed.

Add to those the ordinary commercial reality. OpenAI's published deprecation policy guarantees only "at least 6 months" for generally available models, "at least 3 months" for specialised variants, and states that preview models may be retired with "much shorter notice, such as 2 weeks." GPT-4o, GPT-4.1 and o4-mini were retired from ChatGPT on 13 February 2026 with roughly two weeks' notice. At the GPT-5 launch on 7 August 2025 every legacy model was withdrawn overnight and only restored under public pressure. Anthropic moved Claude Pro and Max to weekly usage caps with one month's notice in July 2025, and in May 2026 announced that Agent SDK usage would move to separately billed credits, which the software company Zed publicly costed at a 15 to 30 times increase for heavy users, before pausing the change on the day it was due to take effect.

None of that is misconduct by anyone. It is what it looks like to build on a platform.

The question is not "will I get banned." It is "how many parties can interrupt my operations, and do I have a move when they do."

## 4. Your exit strategy: three layers

Think in layers, not in a binary choice between all-cloud and all-local. The binary is what people sell you. The layers are what actually works.

| | Objective | Timeframe | Cost | Who needs it |
|---|---|---|---|---|
| **Layer 1** | Remove single points of failure | This week | Near zero | Everyone, no exceptions |
| **Layer 2** | Make switching a config change | 30 to 60 days | Low | Everyone running AI in production |
| **Layer 3** | Run sensitive workloads on your own metal | 90 days plus | High | A specific minority, and possibly not you |

Most of the value in this document is in Layer 2. Most of the money in this market is sold at Layer 3. Those two facts are related, and we would rather you knew.

## 5. Layer 1: damage control, this week

Objective: stop being a single account.

**Separate your identities.** Personal and company accounts split. Production API in a different organisation from your chat subscriptions, with different billing. One documented business outage in November 2025 lasted seven days and was triggered by a compromised API key, not misconduct: separation would have contained it.

**Export what you can.** Conversation histories where supported. Custom instructions, system prompts, saved projects. Anything that exists only inside a provider's interface is not yours in any meaningful sense.

**Inventory your dependencies.** One page. Which tools call which models. Where the keys live. Who has access. What breaks first. Most teams cannot answer this, which is itself the finding.

**Move keys into a real secrets manager.** Not a .env file, not a shared doc, not the launch command.

**Write the one-page lockout plan.** If access disappears at 2am: who is notified, what breaks in the first hour, what the manual fallback is, and who has authority to switch providers without waiting for a meeting.

This solves nothing structural. It buys you time and options, and it costs you an afternoon.

## 6. Layer 2: the gateway, 30 to 60 days

This is the highest-return work in the entire document.

**Put a gateway in front of everything.** Your applications call your endpoint. Never a provider's endpoint directly. Ever.

We recommend LiteLLM, self-hosted. It is MIT licensed, normalises over 100 providers behind the OpenAI API format, and issues per-application virtual keys with budgets and rate limits. No vendor sits in your data path. Alternatives: Portkey if you want observability and evals without building them, Kong AI Gateway if you already run Kong.

Once that is in place, three things become true that were not true before:

- Swapping a model is a configuration change, not a rewrite.
- You can run a fallback chain, so a provider outage degrades your service instead of stopping it.
- You get one place to enforce access control, logging, budgets and data policy, instead of reimplementing all four in every application.

**Keep a warm open-weight fallback.** Not theoretically available. Actually deployed, actually tested, actually able to serve your traffic at reduced quality. Epoch AI measures the best open-weight models at an average of four months behind the frontier, a gap that has held steady for over eighteen months. Four months of capability is a cheap insurance premium against nineteen days of zero.

**Run the switching drill.** Pick your most load-bearing dependency and remove it for one working day, deliberately, with the team watching. Measure what stops. The organisations that discovered this on 12 June found out at 5:21pm on a Friday with no plan. You can buy the same information for the price of a Tuesday.

**Move one real workload onto a model you control.** Not a demo. Something with users. Prove the local path works before you need it.

## 7. Layer 3: private infrastructure, 90 days plus

Read this section as a filter, not a pitch.

Most businesses should not run their own inference. Here are the actual numbers.

**The economics.** Credible 2026 analysis puts the breakeven for self-hosting against a frontier API somewhere above 2 to 3 million tokens per day sustained on a 36-month horizon. Against hosted open-weight APIs, which give you MIT and Apache licensed models with no lock-in and zero operations, breakeven does not arrive until roughly 15 to 20 million tokens per day. Below about $50,000 per year of AI spend, the API is cheaper and it is not close.

<figure class="fig" role="img" aria-label="Self-hosting breakeven thresholds on a log scale of tokens per day: below 2 to 3 million tokens per day the API is cheaper; self-hosting beats a frontier API above 2 to 3 million; it only beats hosted open-weight APIs above 15 to 20 million tokens per day.">
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg">
  <g style="font-family:JetBrains Mono,monospace;letter-spacing:0.06em" font-size="10">
    <text x="20" y="24" fill="#55555f">SELF-HOSTING BREAKEVEN · TOKENS PER DAY, LOG SCALE · 36-MONTH HORIZON</text>
    <line x1="50" y1="150" x2="690" y2="150" stroke="rgba(255,255,255,0.14)"/>
    <rect x="50" y="120" width="255" height="30" fill="rgba(255,255,255,0.06)"/>
    <text x="177" y="112" text-anchor="middle" fill="#9a9aa4">API IS CHEAPER, AND IT IS NOT CLOSE</text>
    <rect x="305" y="120" width="230" height="30" fill="rgba(140,200,255,0.16)"/>
    <text x="420" y="112" text-anchor="middle" fill="#8cc8ff">BEATS A FRONTIER API</text>
    <rect x="535" y="120" width="155" height="30" fill="rgba(140,200,255,0.38)"/>
    <text x="612" y="112" text-anchor="middle" fill="#8cc8ff">BEATS HOSTED OPEN-WEIGHT</text>
    <line x1="305" y1="100" x2="305" y2="165" stroke="#8cc8ff" stroke-opacity="0.7"/>
    <text x="305" y="182" text-anchor="middle" fill="#9a9aa4">2–3M / DAY</text>
    <line x1="535" y1="100" x2="535" y2="165" stroke="#8cc8ff" stroke-opacity="0.7"/>
    <text x="535" y="182" text-anchor="middle" fill="#9a9aa4">15–20M / DAY</text>
    <text x="177" y="205" text-anchor="middle" fill="#55555f">BELOW ~$50K/YR AI SPEND: STAY ON THE API</text>
    <text x="360" y="230" text-anchor="middle" fill="#ffb450">IF SOMEONE SELLS YOU A LOCAL BUILD ON COST SAVINGS, ASK FOR THEIR ASSUMED GPU UTILISATION.</text>
  </g>
</svg>
<figcaption>Figure 3. Where self-hosting actually breaks even. Most of the market is sold to the left of the first line.</figcaption>
</figure>

**Why the spreadsheets lie.** Utilisation. The same deployment on the same hardware has been measured swinging 17 times in cost per token purely on traffic pattern: a Mixtral deployment on an H100 cost $15.25 per million output tokens at 1 request per second and $0.87 at 25. Idle GPUs cost exactly what busy ones cost. And in every published cost tier, staff cost dominates electricity by five to ten times. One MLOps engineer realistically covers four to six GPUs.

<figure class="fig" role="img" aria-label="Two charts. Left: the same Mixtral deployment on an H100 costs 15.25 dollars per million output tokens at 1 request per second and 0.87 dollars at 25 requests per second, a 17x swing on utilisation alone. Right: an owned H200 costs about 2.29 dollars per GPU hour all-in at 70 percent utilisation over three years, versus 3.99 on demand and 1.99 spot rented.">
<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
  <g style="font-family:JetBrains Mono,monospace;letter-spacing:0.06em" font-size="10">
    <text x="30" y="24" fill="#55555f">SAME HARDWARE, SAME MODEL: $/M OUTPUT TOKENS</text>
    <rect x="60"  y="50" width="70" height="150" fill="rgba(255,180,80,0.45)"/>
    <text x="95" y="42" text-anchor="middle" fill="#ffb450">$15.25</text>
    <text x="95" y="218" text-anchor="middle" fill="#9a9aa4">1 REQ/S</text>
    <rect x="180" y="191" width="70" height="9" fill="rgba(140,200,255,0.7)"/>
    <text x="215" y="184" text-anchor="middle" fill="#8cc8ff">$0.87</text>
    <text x="215" y="218" text-anchor="middle" fill="#9a9aa4">25 REQ/S</text>
    <text x="155" y="245" text-anchor="middle" fill="#55555f">17× ON UTILISATION ALONE</text>
    <line x1="330" y1="40" x2="330" y2="230" stroke="rgba(255,255,255,0.1)"/>
    <text x="370" y="24" fill="#55555f">H200, $/GPU-HOUR ALL-IN</text>
    <rect x="380" y="118" width="70" height="82" fill="rgba(255,255,255,0.28)"/>
    <text x="415" y="110" text-anchor="middle" fill="#f4f4f6">$2.29</text>
    <text x="415" y="218" text-anchor="middle" fill="#9a9aa4">OWNED · 70% UTIL</text>
    <rect x="490" y="57" width="70" height="143" fill="rgba(255,255,255,0.12)"/>
    <text x="525" y="49" text-anchor="middle" fill="#9a9aa4">$3.99</text>
    <text x="525" y="218" text-anchor="middle" fill="#9a9aa4">ON-DEMAND</text>
    <rect x="600" y="129" width="70" height="71" fill="rgba(140,200,255,0.5)"/>
    <text x="635" y="121" text-anchor="middle" fill="#8cc8ff">$1.99</text>
    <text x="635" y="218" text-anchor="middle" fill="#9a9aa4">SPOT</text>
    <text x="525" y="245" text-anchor="middle" fill="#55555f">OWNERSHIP LOSES TO SPOT OUTRIGHT</text>
  </g>
</svg>
<figcaption>Figure 4. The two numbers that decide the Layer 3 conversation: utilisation and the rent-versus-own arithmetic.</figcaption>
</figure>

If someone is selling you a local build on cost savings, ask for their assumed GPU utilisation. If they cannot answer, there is no business case.

**So when is Layer 3 right?** Three situations, and they are not about money:

1. **Your data legally or contractually cannot leave your network.** Healthcare, legal, defence, some financial services, some government procurement. Here the cost conversation is irrelevant. It is a requirement.
2. **Your questions are the sensitive asset.** What you ask reveals your strategy, your weaknesses and what you consider important, and it accumulates on infrastructure you do not control. Strategic inquiry is a small, well-defined workload and an excellent candidate for private deployment.
3. **You have genuinely high, steady, predictable volume on a narrow task.** Note all three adjectives.

**What you give up, honestly.** The best model you can run on hardware you own is roughly where the frontier was six to twelve months ago. You will not notice on summarisation, retrieval over your own documents, drafting, classification and routine code. You will notice immediately on the hardest reasoning, on long autonomous agent runs, and on video or computer control. You also give up improvement-by-default: an API gets better while you sleep, and your local model is frozen the day you deploy it. Since the open-weight leaderboard reshuffles every few months, staying current is a recurring project, not a migration. That is the cost nobody puts in the spreadsheet, and it is the one that kills local deployments eighteen months in.

**The correct architecture is hybrid, and the gateway is what makes it reversible.** Route the bulk of traffic to a model you control, let the hard fraction escape to a frontier API through the same interface, and keep the ability to change your mind in either direction. That reversibility is worth more than any individual model choice, because every model named in the next section will be superseded within a year.

## 8. Reference stack, August 2026

Current as of writing. Verify before you commit budget: this section ages faster than any other.

### Models worth running

**General purpose, single GPU (24 to 32GB):** Qwen3.8-27B or Qwen3.6-27B (Apache 2.0) · Gemma 4 31B (Apache 2.0, roughly 18GB at INT4) · Mistral Small 3.2 24B (Apache 2.0) · gpt-oss-20b (Apache 2.0)

**Coding:** Qwen3-Coder-Next (Apache 2.0, 80B total but only 3B active, 70.6% SWE-bench Verified, roughly 46GB at Q4). This is the model that makes local coding agents economically real. · Devstral Small 2 24B (Apache 2.0, 68.0%, roughly 12GB at Q4) if you have one consumer card. · Devstral 2 123B (72.2%) if you have 96GB.

**Large, if you have the hardware:** DeepSeek V4-Flash (284B total, 13B active, MIT) is the best MIT-licensed model you can realistically self-host. · Mistral Large 3 (Apache 2.0) · GLM-5.2 · Qwen3.8-2.4T (Apache 2.0)

**Small and edge:** Ministral 3 in 3B, 8B and 14B (Apache 2.0, each with a reasoning variant) · Gemma 4 E2B and E4B · Nemotron 3 Nano

**Fully reproducible, for when provenance is a procurement requirement:** Olmo 3.1 from Ai2, 7B and 32B, published with its full training corpus, code and checkpoints. Roughly a generation behind the leaders. Choose it when you must be able to prove what went into the model, not when you want maximum capability.

**Obsolete, remove from any plan that still names them:** Llama 3.x and Code Llama (Meta has exited open weights), Mistral-Nemo, Qwen 2.x, StarCoder.

### Serving

vLLM is the default for serving a team. SGLang if you run agents with heavy shared prefixes or structured output. TensorRT-LLM only if your model and GPU are pinned for months and you need the last 20 to 30%. Ollama or LM Studio on a single developer machine. llama.cpp or MLX on Apple Silicon. All of them expose an OpenAI-compatible endpoint, which is what makes the gateway work.

Pin your engine version and read the model card's launch command. "Supports the architecture" does not mean your checkpoint runs.

### Retrieval

Start with Postgres and pgvector. Under roughly 10 million vectors this is unambiguously correct: you already run Postgres, you already back it up, you already have access control on it, and your metadata filters are just SQL. Add pgvectorscale to 50 million. Move to Qdrant or Milvus above that, or earlier if you need native hybrid search or true multi-tenant isolation.

Most "our retrieval is bad" problems are chunking, reranking and query rewriting problems, not database problems. A reranker in front of pgvector beats a fancier vector database without one.

### Hardware

Decode speed is roughly memory bandwidth divided by model size. Capacity determines whether a model runs; bandwidth determines whether it is usable. Below 15 tokens per second is noticeable, below 5 is unusable.

| Tier | Configuration | Memory | Indicative cost | Runs |
|---|---|---|---|---|
| Solo | RTX 5090 | 32GB, 1,792 GB/s | $3,000 to $5,000 | Up to 30B. Devstral Small 2 at 25 to 35 tok/s |
| Solo, serious | RTX PRO 6000 Blackwell | 96GB, 1,792 GB/s | Roughly $8,500 MSRP, street higher | Qwen3-Coder-Next at 40 to 59 tok/s |
| Solo, quiet | Mac Studio M3 Ultra | Up to 96GB, 819 GB/s | From roughly $5,300 | 70B at Q4, 16 to 22 tok/s |
| Team | 2 to 4 × RTX PRO 6000 | 192 to 384GB | $30,000 to $60,000 | Devstral 2 123B at concurrency |
| Org | 8 × HGX H200 | 1,128GB | $320,000 to $420,000 | GLM-5.2, Mistral Large 3 |

One arithmetic check before anyone signs a purchase order: an owned H200 works out around $2.29 per GPU-hour all-in at 70% utilisation over three years. Rented H200 is roughly $3.99 on demand and $1.99 spot. Ownership beats on-demand only if you sustain high utilisation, and loses to spot outright.

Avoid buying for capacity alone. A 128GB unified-memory box at 273 GB/s will load a large model and then generate at about 5 tokens per second, which is not a working system.

### Governance

Secrets in a real store, never in launch commands. Per-application virtual keys from the gateway so you can revoke one app without rotating everything. Immutable audit logs that capture prompts, responses and tool calls (tool calls are the ones people forget and the ones that matter in an incident). Explicit allowlists on agent tool execution: an agent with a shell tool and no allowlist is a remote code execution vulnerability with good branding. Inference nodes on a private subnet with no default egress. Map to NIST AI RMF and ISO/IEC 42001 if you will ever be audited.

Implement all of it once, at the gateway. Per-application implementations diverge within a quarter.

## 9. The checklist

Print it. If you cannot tick most of these, you are one email away from a bad quarter.

**Layer 1, this week**

- Production API lives in a separate organisation from chat subscriptions
- Backup account exists with at least one alternative provider
- Keys are in a secrets manager, not in code, docs or launch commands
- Conversation histories, prompts and configs exported
- One page listing every integration and what breaks first
- One-page lockout plan written, with a named decision-maker
- Staff told, in writing, not to put company material into personal AI accounts

**Layer 2, 30 to 60 days**

- A gateway sits in front of every model call
- No application calls a provider endpoint directly
- Fallback chain configured and tested under real failure
- An open-weight model is deployed, warm and serving something real
- The switching drill has been run at least once, deliberately
- Per-application keys, budgets and rate limits are enforced centrally
- Prompts, responses and tool calls are logged immutably

**Layer 3, only if it applies to you**

- You can state, in one sentence, which workloads must never leave your network and why
- You have a measured token volume, not an estimated one
- You have an assumed GPU utilisation figure you would defend
- You have named who operates this at 2am
- You have budgeted for model refresh as a recurring project

## 10. Where this goes next

Three things are worth doing, in this order, and the first two you can do without us.

**Run the switching drill this week.** Remove your most load-bearing AI dependency for one working day and write down what stopped. That single exercise will tell you more about your exposure than any audit.

**Put the gateway in.** It is the highest-return work available and it makes every subsequent decision reversible.

**Then decide about Layer 3 on evidence**, not on fear and not on a sales deck. Including ours.

If you want help, [SelfBuiltSystems](https://www.selfbuiltsystems.com) does three things here: we audit an existing AI stack for single points of failure and produce the dependency map and lockout plan; we design and build the gateway and hybrid architecture so your operations survive a provider disappearing; and we deploy private inference for the specific workloads that genuinely require it, and tell you plainly which of your workloads do not.

---

## Sources

[Anthropic Transparency Hub, enforcement figures Jan to Jun 2026](https://www.anthropic.com/transparency/system-trust-reporting) · [Anthropic on the Fable 5 and Mythos 5 suspension, 12 Jun 2026](https://www.anthropic.com/news/fable-mythos-access) · [Anthropic on restoration, 30 Jun 2026](https://www.anthropic.com/news/redeploying-fable-5) · [Anthropic Commercial Terms](https://www.anthropic.com/legal/commercial-terms) · [Anthropic consumer terms update](https://www.anthropic.com/news/updates-to-our-consumer-terms) · [OpenAI API deprecation policy](https://developers.openai.com/api/docs/deprecations) · [OpenAI on retiring GPT-4o and older models](https://openai.com/index/retiring-gpt-4o-and-older-models) · [OpenAI response to NYT data demands](https://openai.com/index/response-to-nyt-data-demands) · [TechCrunch on Anthropic cutting Windsurf's access, 5 Jun 2025](https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai) · [Zed on the Anthropic subscription change](https://zed.dev/blog/anthropic-subscription-changes) · [Epoch AI on the open to closed capability gap](https://epoch.ai/data-insights/open-closed-eci-gap) · [EU AI Act implementation timeline](https://artificialintelligenceact.eu/implementation-timeline) · [Gibson Dunn on the Digital Omnibus deferral](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes) · [Ai2 on Olmo 3](https://allenai.org/blog/olmo3)

Figures verified as at 17 August 2026. The reference stack in section 8 will date faster than the argument. Check before you commit budget.
