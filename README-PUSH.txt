INTELLIGENCE MEETS RESISTANCE — what to do with each file
=========================================================

1. posts/intelligence-meets-resistance/index.html
   -> copy the folder to /posts/ in the repo.
   The file is complete EXCEPT for four blocks marked "PASTE n of 4".
   Open any existing post's index.html side by side and copy those four
   blocks across verbatim: the small inline script, the icon/font links,
   the second inline script plus inline style, and the site header and
   footer. They are identical on every post, so it is a straight copy.

2. assets/images/intelligence-meets-resistance.jpg
   -> drop straight in. No changes. The hero and the OG tags already
   point at this exact filename.

3. main.css.append.css
   -> do NOT add as a file. Nothing links it.
   Open assets/css/main.css and paste these nine lines at the end.
   It is the only new CSS on the site and it uses your tokens only.
   Without it the five charts render unstyled.

4. snippets-sitemap-rss-card.txt
   -> not a file to commit. Three snippets to paste into
   sitemap.xml, rss.xml, and the essays list on the home page.

Do not commit the .preview.html or the .md. The preview is a local
check only, and the markdown is the working source.

Order that avoids a broken deploy:
  main.css first, then the image, then the post folder,
  then sitemap, rss and the home page card. Push once.
