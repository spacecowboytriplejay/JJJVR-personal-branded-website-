---
title: Everything Converts
slug: everything-converts
date: 2026-09-30
description: A book published this year argues that machine learning dissolves all media into one space of universal commensurability. It is right about the mechanism. The conclusion people are drawing from it is wrong, and the music industry already ran the experiment.
image: /assets/images/everything-converts.jpg
imageAlt: Many distinct human silhouettes rendered as light particles, dissolving left to right into a single undifferentiated cloud, with one figure at the edge still holding its outline.
tags: [content, capital allocation, AI, media]
---

**Half of all new music uploaded to Deezer is now fully machine generated. Those tracks account for one to three percent of listening. Hold those two numbers next to each other, because they are the whole argument. Everything can now be converted into everything else, and the conversion turns out to be worth almost nothing. What that does to the value of human creative output is not what most people writing about this think it is, and there is a natural experiment from the last time reproduction became free that tells us exactly where the money goes instead.**

*Working note. Version one.*

This started with a piece of video commentary a friend sent me, about an AI-generated character that was, in the same week, both a genuine viral hit and the front end of a cryptocurrency pump and dump. The commentary made a large claim: that what we are watching is the moment human creative uniqueness becomes as commensurable as human labour became on the factory floor a century ago, and that the process is now unstoppable.

The claim is serious and I think it is mostly right about the mechanism. But the commentary got four things factually wrong, and the conclusion it draws from the mechanism does not follow. Both of those are worth going through, because the errors are the interesting part.

## The claim, and how it fails

**Machine learning has made cultural objects mutually convertible. That is real, it is new, and it is correctly described as commensuration rather than imitation. But commensurability is not substitutability. Making things comparable on one axis does not make buyers treat them as interchangeable, and the historical record says the opposite happens: when reproduction becomes free, the premium does not disappear, it relocates to whatever remains non-reproducible, and it concentrates far more tightly than it was concentrated before. The operational question is therefore not whether AI can make your thing. It is which part of what you sell cannot be embedded, and whether you own that part.**

Three ways this is wrong. If the plateau in AI content share is a measurement artifact rather than a ceiling, then I am calling a top on a curve that is still climbing. If the premium relocates but accrues to the previously invisible rather than to the already-established, which is what one good study of the music file-sharing era found, then my conclusion about where value lands is backwards. And there is a 2025 study of an actual creative labour market where commensuration compressed the premium on skill and hit the highest earners hardest, which is the direct empirical refutation of my position. I take all three at the end.

## Part I. The book is real. The quotation is not.

The commentary attributes the phrase "the supremacy of vector media" to two researchers. The phrase does not exist. Neither author has written it and it appears nowhere in the scholarly record. If you repeat it you will be quoting nobody.

What does exist is better. *Vector Media*, by Leonardo Impett of Cambridge and Fabian Offert of UC Santa Barbara, published this year by meson press and the University of Minnesota Press, and available as a [free open-access PDF](https://meson.press/wp-content/uploads/2026/09/978-3-95796-098-6-Vector-Media-OA.pdf). Offert describes it on his own site as "the first comprehensive history and theory of vector space as a space of universal commensurability in contemporary machine learning."

Their actual argument, from page 17: "Almost all contemporary artificial intelligence systems, we argue, can be understood as vector media: They no longer embody a theory of vision alone, but also a theory of knowledge manifested in the central role that vector spaces play in the modeling of culture."

And the payoff concept, which they build by deliberate analogy with Marx. From page 20: "We thus propose to understand 'foundation models' ... and 'multimodal models' ... as facilitating a universal equivalence of cultural objects, which we, by way of analogy with the terms of political economy, call neural exchange value." In a Berkeley lecture in March 2025 Offert defined it as "value that specific cultural objects obtain once they become part of a vector space, and that exists exclusively as a function of their neural commensurability."

That is a real and serious idea, and it is the correct frame. The labour analogy in the commentary is not a rhetorical flourish; it is the authors' own analytical move, made carefully.

Three mechanical corrections while I am here, because they matter to anyone reasoning from the technology.

**Video is not decomposed into movement, lighting and shade.** These models compress video into a learned latent space whose axes correspond to no human-nameable property. Nothing in the architecture holds a lighting dimension. Disentangled representation learning is a separate and largely unsolved research problem. OpenAI's own technical description is that the encoder "takes raw video as input and outputs a latent representation that is compressed both temporally and spatially," which is then cut into spacetime patches that act as transformer tokens.

**Conditioning does not run on word vectors.** It runs on contextual text encoders, and in most production systems the user's prompt is first rewritten into a longer caption by a language model before it is encoded at all. The interface is natural language routed through a captioner, not a lexicon.

**The flagship models do not superimpose a character onto existing footage.** They generate from noise. Superimposing a new character onto a real performance is a different and real technique called motion transfer, productised most visibly as Runway's Act-Two, where you supply a driving performance video plus a character image and it transfers expression and gesture onto the character. Conflating the two makes the technology sound more like puppetry and less like synthesis than it is. Worth noting that the distinction is contested at the frontier: when ByteDance's Seedance 2.0 drew cease-and-desist letters from Disney and Paramount Skydance in February, part of the discussion was whether certain outputs were pure generation or video-to-video work over green-screen stunt footage.

## Part II. Twelve days

The case that prompted all this is worth laying out with dates, because the timeline is the argument.

An AI-generated character, styled as an eccentric European in a brown suit, posting silent shadowboxing videos in escalating locations. First post: 17 September 2026. Within two days a single video was at 5.6 million views. Within a week the account was past 145,000 followers on one platform and rival AI personas had appeared, one of them already past 110,000 followers of its own. One video has been reported at 35.9 million views.

A Solana token bearing the character's name launched on pump.fun around the same time. It reached a roughly $4.6 million notional market capitalisation by 20 September and about $8.8 million by 25 September. It peaked at $0.02845 on 21 September and, per [LADbible's reporting](https://www.ladbible.com/news/world-news/influencer-jean-phil-ai-generated-302949-20260928), "lost more than 99 percent of its value before the day was over."

Two things need saying plainly. First, nobody has established that the character's creators launched or profited from the token. It is widely assumed and nowhere demonstrated, and the creator remains unidentified by any outlet. Second, the market capitalisation figure is nearly meaningless: Dexerto noted the main trading pool held about $415,000, and a notional cap prices every coin at the last trade. I am describing a documented sequence, not a proven conspiracy.

Now compare it to the other 2026 case. *Fruit Love Island*, an AI-generated micro-drama with anthropomorphised fruit, ran from 13 to 28 March 2026. Three million followers in nine days. Over 300 million total views. Coverage in CNN, the Wall Street Journal, the BBC and NBC. Fifteen days, start to finish, then nothing.

The pattern in both is identical and it is not a content pattern. It is an origination pattern. The cost of manufacturing attention fell to roughly zero, which means attention stopped being something you accumulate and became something you *originate*, spend and abandon. A token is simply the fastest available instrument for converting a spike of attention into cash before the spike decays. The pump and dump is not a scam that happened to attach itself to AI video. It is the purest expression of what AI video is currently good for: producing a large, brief, monetisable attention event with no residual value.

## Part III. Half the supply, none of the demand

This is where the data stops being anecdotal.

**Music.** Deezer reported in July 2026 that at the June peak, [90,000 fully AI-generated tracks were being uploaded per day, more than 50 percent of all new music](https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/), up from 44 percent in April. Fully AI-generated music accounts for **one to three percent of streams**. And up to 85 percent of the streams those tracks did get were fraudulent.

Half of supply. A rounding error of demand. That single pair of numbers is commensurability without substitutability, measured, in the one medium where the technology is furthest along.

**Text.** Graphite's sampling of Common Crawl found AI-generated articles overtook human-written ones in November 2024. Their updated study in May 2026, across 55,400 URLs and three detectors, found the share reached 48 percent at two years and then **plateaued at roughly 50 percent through March 2026**. The plateau is the finding, not the fifty percent. AI content stopped taking share about eighteen months ago.

**Video.** Here I have to tell you that there is no credible measurement. The only quantified study I found sampled 500 YouTube Shorts on a single fresh account and was published by a company that sells AI video tools. TikTok says it has labelled over three billion videos as AI-generated, up from 1.3 billion eight months earlier, but publishes no denominator, so that is volume rather than share. The absence is itself worth noting: the medium generating the most commentary is the one with the least measurement.

**And the flagship product is dead.** OpenAI announced on 24 March 2026 that it was discontinuing Sora, shutting the app, the iOS app and the website, and reallocating the compute to world-simulation research. The web and app experiences ended 26 April. The API sunset on 24 September, six days ago. A reported billion-dollar Disney character deal signed in December was terminated with, per Axios, "no money ever changed hands." Downloads had fallen 45 percent by January.

Sora 2 launched on 30 September 2025 and hit number one on the US App Store within days. Seven months later it was gone. The most hyped consumer instantiation of vector media in the cycle could not sustain a business, and the reason is the same one the Deezer numbers show: producing infinite convertible content is not the same as producing anything anyone will pay for twice.

## Part IV. The last time reproduction became free

We have run this experiment. Recorded music is the cleanest natural experiment available, because the reproduction cost of a recording went to zero roughly twenty-five years ago and we can now see where the money went.

The theory first. Sherwin Rosen's "The Economics of Superstars" (*American Economic Review*, December 1981) gives the mechanism, and it is precisely the one this argument needs. From [page 846](https://milescorak.com/wp-content/uploads/2018/09/rosen-1981-aer-economics-superstars.pdf): "Lesser talent often is a poor substitute for greater talent. The worse it is the larger the sustainable rent accruing to higher quality sellers because demand for the better sellers increases more than proportionately."

Read that against the vector-media claim. Commensurability is a statement about comparison. Rosen's engine is *imperfect substitution*, which is a statement about demand. Nothing about being embeddable in the same space makes a buyer treat a worse thing as a replacement for a better one, and Rosen's point is that the worse the substitution, the larger the rent at the top.

Now the outcome. US recorded music revenue, inflation-adjusted to 2023 dollars, peaked at $25.6 billion in 1998 and stood at $17.1 billion in 2023. Still roughly a third below its peak a quarter of a century later, in the year that was the highest *nominal* year ever recorded. Global recorded music reached [$31.7 billion in 2025](https://www.ifpi.org/global-music-report-2026-global-recorded-music-revenues-grow-6-4-as-record-companies-drive-innovation/), an eleventh consecutive year of growth, nearly 70 percent of it streaming.

And live. [Live Nation reported $25.2 billion of revenue for 2025](https://www.musicbusinessworldwide.com/live-nation-annual-revenues-top-25b-in-2025-up-2b-yoy-with-adjusted-operating-profit-of-2-4b/), up nine percent, 159 million attendees across 55,000 shows. One company selling access to events that cannot be reproduced now earns close to what the entire global recorded music industry earns, and Live Nation is not the whole live market. Pollstar's top 100 worldwide tours grossed $8.9 billion in 2025, with average ticket prices up from $96.17 in 2019 to $132.62.

Alan Krueger stated the causal chain directly: "recorded music has become cheap to replicate and distribute, and it is difficult to police unauthorized reproductions. This has cut into the revenue stream of the best performers, and caused them to raise their prices for live performances."

**Here is the part nobody quotes, and it is the part that should worry you.** Connolly and Krueger's [Rockonomics](https://pages.stern.nyu.edu/~wgreene/entertainmentandmedia/Rockonomics.pdf) found that the share of US concert revenue captured by the top one percent of artists went from **26 percent in 1982 to 56 percent in 2003**. The top five percent went from 62 percent to 84 percent.

So the premium did relocate from the reproducible thing to the non-reproducible thing. It also more than doubled the concentration at the very top while it moved. Free reproduction did not democratise anything. It hollowed out the middle and handed the surplus to the people who were already winning.

The current-day version of the same fact: Luminate reported 106,000 tracks delivered to streaming platforms per day in 2025, and 88 percent of all tracks generated a thousand streams or fewer.

## Part V. Every platform has already conceded the point

The most persuasive evidence is not in the data. It is in what the platforms are quietly doing with their own revenue models.

Spotify removed over 75 million spam tracks in the twelve months to September 2025, banned unauthorised vocal impersonation outright, and began requiring AI disclosure through DDEX credits that distinguish AI use in vocals, instrumentation and post-production. YouTube clarified its Partner Program rules in July 2026 to demonetise channels carrying excessive "generic or repetitive content easily made with AI, CGI, or templates," and specifically named AI personas discussing finance, legal and medical topics. Meta began prioritising original content in Feed and Reels in March 2026 and reported removing over 20 million impersonation accounts in 2025. TikTok is embedding invisible watermarks readable only by the platform, so provenance labels survive re-upload and re-editing. And in August 2026 ARIA banned wholly AI-generated music from the Australian charts, after an AI-vocal Madonna cover reached number four.

Notice what none of them did. Nobody banned AI content. Every one of them, independently, re-engineered charts, monetisation, feed rank or labelling to make **non-reproducible origin legible and payable**. That is five commercial organisations with no shared interest arriving at the same conclusion: when supply becomes infinite, the scarce and therefore priceable thing is provenance.

## Part VI. What cannot be embedded

If the artefact is convertible and worthless, what is left? Two things, and the evidence for both comes from inside the AI-slop economy itself.

**Persistence.** The Italian brainrot characters were AI-generated, free, and copied endlessly. Nobody made money on the characters. The money was made by *Steal a Brainrot*, a Roblox game built on top of them, which reached 25.4 million concurrent users in October 2025, the first Roblox game ever past that mark, and hosted a Bruno Mars event in January 2026 that drew 12.8 million concurrents. The infinitely copyable thing was the input. The thing people paid attention to was a shared, scheduled event that could only happen once. Panini sticker albums, toys and Fortnite skins followed the same logic.

**Provenance, and the tell in who is actually getting paid.** There is a well-known AI character account with a real following whose visible monetisation is not the character at all. It is a paid masterclass teaching other people the method, circulating widely enough to be pirated, plus job listings hiring creators "inspired by" it. That is a picks-and-shovels business wearing a character-IP costume. When the content itself cannot hold value, the reliable revenue is in selling the production method to the next wave, which is exactly what you would expect in a gold rush and exactly what it implies about the gold.

The counter-example that proves the rule is Breaking Rust, a fully AI country act that reached number one on Billboard's Country Digital Song Sales chart. It did so on roughly **3,000 units**. A US chart topper for the sales volume of a small local gig.

## The three positions

**Operator: stop asking whether AI can make your thing, and find the part of your offer that cannot be embedded.** For almost everyone reading this it is one of three things: a live or time-bound event, an accountable relationship where someone's name is on the outcome, or a proprietary data or distribution position. If your business is the artefact itself, you are selling the thing whose marginal cost just went to zero. The test is blunt: if a competitor could generate a perfect copy of your output tonight, what would your customers still be paying you for tomorrow, and is that thing written down anywhere in how you charge?

**Investor: underwrite provenance and persistence, and price the concentration.** The platforms have already told you where the moat is being dug. But do not read "value moves to the non-reproducible" as a broad opportunity. The last time this happened, the top one percent's share of the relevant revenue pool more than doubled inside twenty years. That makes it a power-law market, and power-law markets punish diversified exposure to the middle. The dangerous position is a portfolio of good-not-great content businesses, which is precisely the profile most media assets have.

**State and platform: the labelling fight is a pricing mechanism, not a truth mechanism.** Every provenance regime now being built is in practice a scarcity regime, deciding which origins get monetised. That is an industrial policy decision being made by product teams, and it will determine who captures the surplus from a technology built on the collected output of people who will not be paid for it.

## How this could be wrong

**The plateau may be an artifact.** The Graphite study's own authors concede the AI-versus-human binary is decaying as a measurement, because a human may use AI for outlining, drafting or editing. If the plateau is a detection ceiling rather than a real one, I am calling a top on a curve that is still climbing, and the one-to-three-percent Deezer number is a snapshot of an early moment rather than an equilibrium.

**The premium may accrue to the wrong people for my argument.** Mortimer, Nosko and Sorensen studied the file-sharing era and found that free reproduction increased live revenue **for small artists**, plausibly through increased awareness, while the effect on large well-known artists was negligible. If free reproduction functions primarily as discovery, then the beneficiaries are the previously invisible, not the already-established, and my concentration story runs backwards.

**And the strongest objection, which is from the labour market I invoked.** Hui, Reshef and Zhou, in *Organization Science* in March 2025, studied an online freelance marketplace after generative AI arrived. Their finding: "For every one percent increase in a freelancer's past earnings, they experience an additional 0.5 percent drop in job opportunities and a 1.7 percent decrease in monthly income." Commensuration compressed the premium on skill, and it hit the top hardest. That is the direct empirical refutation of this essay in a real creative labour market.

My defence is available and I think it holds, but it is a defence rather than a rebuttal. Online freelance marketplaces are *already* a commensuration technology. Reputation scores and hourly rates had long since stripped out the non-commodifiable signals that sustain a premium elsewhere, so what AI ate there was a premium for legibility, not a premium for irreplaceability. That predicts the boundary condition precisely: the premium survives where the non-reproducible thing is scarce and embodied, and it dies wherever the market had already reduced it to a number. If that distinction turns out to be special pleading, the essay fails.

If one of those breaks first, write to info@selfbuiltsystems.com and tell me which. Short and specific gets an answer.

Everything converts. That is the finding, and it is correct. The mistake is assuming that because everything converts, everything is therefore worth the same. What actually happens is that the convertible part goes to zero and the non-convertible part gets repriced upward, harder and more narrowly than before. The only question worth your time is which half of your business you are sitting on.

*Published as a working note rather than a finished argument. Every claim is linked to its source. Where a widely repeated number could not be traced to a primary source, it is described that way in the text rather than borrowed.*
