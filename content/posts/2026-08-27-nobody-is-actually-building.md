---
title: Nobody Is Actually Building
slug: nobody-is-actually-building
date: 2026-08-27
description: Almost everyone you think you are competing with has bought a tool and stopped. The gap between adopting AI and building AI-natively is where the next multiple sits.
image: /assets/images/nobody-is-actually-building.jpg
imageAlt: A five-rung ladder of light rising through a dark field, each rung brighter than the last, the top rung detached and floating free
tags: [ai, systems, capital, operating]
---

**Almost nobody you think you are competing with is building anything. They have bought a tool, told the board, and stopped. The distance between that and a system written AI-natively from the first line is where the next decade of multiple expansion sits.**

*Architecting Alpha, Part II*

## Count them yourself

Take a hundred companies in a sector you know well. All of them have an AI strategy. Most of them have said so out loud.

Start subtracting.

Around 88 of them have adopted AI in some form, which sounds like near-total penetration until you ask what adoption means (reported in [Stanford's 2026 AI Index](https://hai.stanford.edu/ai-index/2026-ai-index-report), which takes organisational adoption from McKinsey's State of AI survey). Adoption is a survey answer. It is compatible with three people using a chatbot.

Now the part everybody quotes badly, and I am going to be careful here because the two surveys measure different populations and stacking them into one funnel would be exactly the sloppiness this essay is complaining about.

The MIT NANDA report that went around in August 2025, the one behind the "95 percent of GenAI pilots produce zero return" headline, does not say what the headline says. Its sample was 52 interviews and 153 leaders, and the authors themselves called it directionally accurate rather than rigorous. The 95 percent appears in essentially one sentence with no supporting table. The actual funnel underneath it: about 20 percent of organisations reached pilot, about 5 percent reached successful implementation against a six-month ROI test. Which means roughly three quarters of the pilots that actually ran missed the bar, not 95 percent of them ([NewMR's teardown](https://newmr.org/blog/myth-number-2-mit-showed-that-95-of-ai-pilots-fail/) is the most careful of the rebuttals; the coverage that made it famous is [here](https://finance.yahoo.com/news/mit-report-95-generative-ai-105412686.html)).

So the famous statistic is wrong about pilots and roughly right about organisations. Five in a hundred got something into production that paid. That is a small convenience sample and I would not build a fund on it, but it is the only funnel measurement anyone has published and it is in the direction every operator I know reports.

Keep subtracting, and here I am doing arithmetic rather than citing anyone. Of those five, one bought a vendor product and is now waiting for that vendor to ship the feature that makes their build redundant. One rotated: the agent framework they standardised on in February is the framework they are migrating off in August. That leaves three.

Three. In a sector of a hundred. That is your actual competitive set.

The parable is a construction, not a measurement, and you should treat it as one. But run it against the companies you actually know and see whether it lands wrong.

## What a collapsing layer looks like from the inside

I gave a talk recently to a room of finance operators. The topic was one I have been calling influencer infrastructure, and the reason it belongs in this essay is that the audience was not a marketing audience and the subject was not marketing. It was a live case study in a value chain re-chaining underneath the people standing in it.

Here is the setup. Almost every company that decides it needs a presence in new media does the same fragmented thing. It hires an influencer. It runs a personal branding exercise for a founder. It commissions a series. Each of these is a campaign: a discrete purchase with a start date, an end date, and no residue. When the contract ends, the capability leaves with the contractor. On the ladder below, that is rung 0 and rung 1 with a large invoice attached.

The alternative is to treat the whole thing as infrastructure. Owned pipes, an owned audience graph, an owned ledger of what was published and what it did. That is a rung-3 system, and eventually a rung-4 asset, and it behaves completely differently on a balance sheet: a campaign is an expense, and infrastructure is an asset with a book value and a decay curve.

Now the interesting part, which is what is happening to the layer that used to sell the campaigns.

Agencies are being compressed from both ends. Clients are cutting, and the agencies are cutting in turn. I met recently with a director at a large ad tech company who told me, flatly, that the agencies can no longer afford their product. Sit with that for a second. The tooling layer is losing its customers because the layer above it is losing its own budget. That is not a soft market. That is a link in the chain being priced out of the chain.

So the agencies are repositioning, and almost all of them are repositioning into the same place. They are quietly trying to sell AI. I have watched this happen at close range and I want to be careful about it, because there is a version of the observation that is just sneering and it would be both lazy and wrong.

The part I have no criticism of: they are using the tools. Good. That is exactly what everybody should be doing, and an operator who is playing with these systems every day is ahead of an operator who is reading about them.

The part that is a real structural problem: they cannot go deep, and they cannot weave. Depth means understanding what is actually happening underneath the abstraction well enough to know where it will fail. Weaving means connecting the intelligence layer to a ledger, to a data model, to a set of decision rules, and to the accounts, so that the thing produces a number rather than an impression. Without depth and without weaving, the only product available to sell is a tool bolted onto another tool, dressed as a system. Which is rung 1 sold at rung 3 prices.

None of this is a moral failure. It is what happens to any layer whose function was coordination when coordination stops being scarce. It is the first of the three effects in the next section, playing out in public, in an industry that happens to be visible. Anyone who allocates capital for a living can name a business one layer over with the identical exposure.

That was the actual argument I made from the stage. Across the kinds of firm I work with, the game is the same, because all of them are in the business of buying, improving and eventually selling cash flows. The strategy and the playbook differ, sometimes completely: a control position with an operating mandate is nothing like a minority position with an information right. But the question underneath is identical. Which of the links in this business are about to stop being scarce, and does anyone here own the part that survives.

## Value chains are re-chaining, not accelerating

The standard story is that AI makes each step in a business faster. That story is wrong in a way that costs money, because it leads you to buy speed for steps that should not exist.

A value chain is a sequence in which each link takes an input, converts it into something worth more, and hands it on. What AI does is not compress the links. It changes which links exist and who owns them.

Three things happen when a business is written AI-natively from the first line rather than retrofitted.

**Coordination links disappear.** A large share of the work inside any company is not conversion, it is handoff: briefing, chasing, reformatting, translating one team's output into another team's input. Those links produced no value; they existed because the two ends could not read each other. When both ends can read each other, the link goes, and with it the headcount that serviced it.

**Unaffordable links become affordable.** Every operator has a list of things they never do because a human hour costs too much to spend on them. Reconciling every invoice line rather than sampling. Reading every competitor's filing rather than the top three. Scoring every piece of content against every prior outlier rather than trusting instinct. Those are not efficiency gains. They are new links that did not previously exist at any price you would pay.

**A supervisory link appears.** This is the one people miss. An AI-native system needs a layer whose entire job is watching the system: catching drift, catching confident nonsense, comparing output against commitment. In a retrofitted business nobody owns that, which is precisely why retrofits stall at the pilot.

Retrofitting buys you the first category and none of the second or third. I think that is a large part of the explanation for the ninety-seven, though it is a taxonomy rather than a demonstrated cause and you should hold it as one.

## The ladder

Most conversations about AI capability collapse five very different things into one word. Here they are separated. Four rungs are about capability. The fifth is the only one a buyer pays for.

| Rung | What it is | Where the value goes |
| --- | --- | --- |
| 0 · Chat | You ask, it answers | Dies with the browser tab |
| 1 · Skills | The instruction is written down once and reused | Survives the tab |
| 2 · Agents | A goal, a bounded loop, real tools | Survives you |
| 3 · Systems | Agents wired to your data, your rules, your ledger | Compounds |
| 4 · Assets | Produces a number that appears in the accounts | Gets a multiple |

Most individuals never leave rung 0. Most companies stop at rung 1, write it up as transformation, and put it in the annual report. Rung 4 is the whole game and almost nobody is aiming at it, mostly because they have never been told it exists.

The reason rungs 2 and 3 became buildable by small teams is not that models got smarter, although they did. It is that the plumbing standardised. On 9 December 2025 Anthropic donated the Model Context Protocol to the Agentic AI Foundation under the Linux Foundation, co-founded with Block and OpenAI, supported by Google, Microsoft, AWS, Cloudflare and Bloomberg. At that point there were more than 10,000 active public MCP servers and over 97 million monthly SDK downloads across Python and TypeScript ([Anthropic](https://anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)).

That is not a product announcement. That is an industry agreeing on a socket. Once the socket is standard, the scarce thing stops being integration and starts being judgement about what to plug in.

The capability side moved in the same direction. METR measures how long a task a model can complete with 50 percent reliability. Their January 2026 update puts Claude Opus 4.5 at 320 minutes and GPT-5 at 214. Under their revised methodology the post-2023 doubling time is 131 days, against 165 days under their earlier method, and for models released since 2024 it is 89 days ([METR](https://metr.org/blog/2026-1-29-time-horizon-1-1/)). Read that carefully: 165 and 131 are the same period measured two ways, not a trend, and METR say the revised figure sits inside the old one's confidence interval. Human baselines exist for only 5 of their 31 long tasks. Treat every number in that paragraph as an estimate with a real error bar. The direction is not in doubt. The unit of work you can hand to a machine has gone from a task to a shift.

## Four tests, then a fifth

Before I build anything on rung 3, it has to pass four tests. They are deliberately blunt, because a test you can argue your way around is not a test.

**One: proprietary input.** What goes into the system that nobody else has. Not a better prompt. A dataset, a ledger, a decision history, a set of instrumented outcomes that exists because you ran the business and they did not. If the input is public, the output is a commodity and the model is doing the work, not you.

**Two: repeatability without you.** Same input, same quality, on a Tuesday when you are on a plane. This is the rung that most personal AI setups fail, because they are actually one talented operator with good habits and a chat window.

**Three: encoded judgement.** Your decision rules, written into the system, overriding the model's defaults. The model has a house style, a risk tolerance and a set of priors. If you have not overwritten them with yours, you have bought a generic wrapper at a proprietary price.

**Four: margin visibility.** The output lands on a line in the accounts. Not "productivity." A number: cost per unit, hours per close, revenue per head, outliers per ten attempts. If you cannot name the line, you do not have a system, you have a hobby with an API key.

Pass all four and you have a rung-3 system. The fifth test is what promotes it.

**Five: transferability.** Someone who did not build it can run it, and it can be sold, financed or underwritten separately from you. This is the difference between a system and an asset, and it is the difference between an operator who is expensive to lose and an operator who has created something with a multiple attached.

I will be honest about where I sit on that fifth test later, because I have not passed it yet.

## The worked example

Abstractions are cheap, so here is one of mine with the lid off. I need to frame it precisely before I open it.

I am not in the content business. I run business and AI strategy for technology companies and portfolio assets, and I own the conversion of intelligence into capital across four layers: intelligence, bits, atoms, electrons. Distribution is one path in that conversion. It is not the point. I am using it as the worked example for exactly one reason: it is the system I can show you end to end without breaching anybody's NDA. The engine underneath it is the same one I run where the unit is dollars, and the same one I run where the unit is electrons. Three different units, one engine. That portability is the actual claim, and the content system is just the instance of it I am allowed to open up.

The build is called the Content Factory. It is a rung-3 system, honestly assessed, and it looks like this.

**Same primitive as the financial system.** Event, normalise, compare against commitment, signal correction. In the financial build the unit is dollars. Here the unit is attention. I did not architect a second engine. That is a rule, not a preference: two engines means two sets of bugs and two sets of assumptions that drift apart.

**Ledger first, view second.** Every piece of content is an immutable event with lifecycle states: idea, reference, script, recorded, edited, posted, measured. One row per piece, platform postings as child events. Nothing is edited in place; corrections are new events. If you cannot reconstruct what you believed in March from the ledger alone, the ledger is decoration.

**A reference library, not a swipe file.** Proven outliers logged with format tags and an explicit note on why the thing worked, feeding a remake queue. The purpose of the system is raising outlier frequency, not raising output count. Volume without a reference pipeline is posting, not testing, and testing is the only mechanism by which the system learns anything.

**Every pillar scored on its own metric.** Reach content is scored on follows per view. Value content is scored on saves and inbound. Talking-head content is scored on watch time. One number across three categories is how a system lies to its operator, and it lies in the flattering direction every time.

**Commitments with teeth.** Quotas behave like envelopes. Breaches are visible. A commitment you can quietly miss is a wish.

**Tests pass before the engine ships.** Not aspirationally. The build does not deploy on a failing test.

Now the capital point, which is the only reason this example is in the essay. What makes that a system rather than a hobby is criterion four: it produces a number. Outliers per ten posts. Cost per qualified inbound. Those are underwritable. A buyer can look at them, discount them, and pay for them. "We are good at content" is not a number and nobody has ever paid a multiple for it.

And what stops it being a rung-4 asset today is criterion five. I have not handed it to an operator who did not build it and watched it survive a quarter. Until I do, it is a system with my fingerprints on the inside, which is worth a great deal to me and considerably less to anybody else.

## The part where I tell you what went wrong

Everything above is the case for building this way. Here is the bill.

Earlier this month I commissioned a research brief for one of these essays. It came back with sixteen sources and read beautifully. One of the sources was a Reuters URL that has never existed. Another was a Springer paper with an invented title. Three papers were attributed to *Nature* that were published elsewhere. I found them because I check, and I check because of the second thing.

The second thing is METR's randomised controlled trial from July 2025. Sixteen experienced open-source developers, 246 real issues in codebases they knew well. Allowed to use AI tools, they took 19 percent longer. Before the study they expected a 24 percent speedup. After the study, having personally been slowed down, they still believed AI had made them 20 percent faster ([METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/); [paper](https://arxiv.org/abs/2507.09089)). METR are careful to say this does not generalise to most developers or to other domains, and I will be careful too. The sample is 16 people.

But hold the two findings next to each other, because together they are the single most important operating fact in AI-native building.

The machine is confidently wrong at a rate you do not intuitively price. And your own sense of whether it is helping is the least reliable instrument in the building.

That is not an argument against building this way. It is an argument about what the supervisory link in the chain is actually for. It is why the third new link exists, why the ledger is immutable, and why the tests run before the deploy.

Verification is a build step. It is not a virtue, a personality trait, or something you do when you have time. In an AI-native operation it is a line item, and if it is not on your org chart or in your pipeline, you are one of the five in the hundred that reaches production and then quietly ships something wrong at scale.

## What this is worth

Something happened this week that looks like confirmation of everything above, which is exactly why I want to handle it carefully.

For most of the past year the consensus trade was that coding agents would make application software worthless, and horizontal software companies were sold on that basis. Then on 26 August 2026 Salesforce reported revenue of $11.3bn, up 11 percent, raised full-year guidance to between $46.1bn and $46.4bn, and the stock rose about 23 percent the following day ([CNBC](https://www.cnbc.com/2026/08/27/salesforce-stock-soars-on-track-for-second-best-day-ever.html)).

The reading that flatters my argument is that a system of record turned out to be the thing agents need rather than the thing agents replace, because an agent has to read from somewhere authoritative and write back to somewhere authoritative. I think that reading is broadly right.

I also think it is not what moved the price, and the honest version has to say so. Salesforce announced a partnership with Anthropic on the same call, and most contemporaneous coverage treated that as the catalyst rather than the revenue print.

Now open the composition, which matters more than the price.

Of the $5.90 of adjusted earnings per share, **$2.53 came from investment gains**, largely a mark on the company's own stake in Anthropic. The GAAP figure of $4.29 is not the clean number either, because roughly $2.43 of that is the same gains. Strip them out and earnings grew somewhere near 16 percent, which is a good quarter and not the one the headline describes ([Motley Fool](https://www.fool.com/investing/2026/08/27/salesforce-stock-just-soared-but-investment-gains-delivered-usd2-53-of-its-usd5-90-in-per-share-profit/)). The revenue line has its own composition: that 11 percent includes a $456m contribution from the acquired Informatica business, which puts organic growth nearer 6 percent.

None of this is hidden. All of it is in the release. But if you read the headline and not the composition, you concluded that an application software company earned its way to a 23 percent move, when a material share of the print was a paper gain on somebody else's model company and part of the growth was bought rather than built.

So my ladder was not confirmed this week. A price moved, for reasons that are partly a partnership announcement and partly accounting, and I would want several quarters of composition rather than one day of price before claiming anything from it. That is the discipline this essay keeps arriving at from different directions, and it bites hardest on evidence that appears to support you.

Here is the number that makes the argument in one line.

The median private SaaS company in 2026 produces about $141,000 of recurring revenue per employee, up from about $130,000 the year before, across a survey of more than 1,000 companies ([SaaS Capital](https://www.saas-capital.com/blog-posts/revenue-per-employee-benchmarks-for-private-saas-companies/)). Anysphere, the maker of Cursor, crossed $1 billion of ARR in November 2025. Its headcount was reported at roughly 150 in August 2025 ([Wikipedia, sourced to The Verge and contemporaneous coverage](https://en.wikipedia.org/wiki/Anysphere)).

I do not have a current headcount, so treat what follows as an estimate with a wide band. Even if they tripled to 450 people, revenue per head lands above $2.2 million. That is roughly sixteen times the median, and the gap is not explained by everyone at Anysphere being sixteen times smarter than everyone at the median company.

<figure class="post-fig">
<p class="fig-title"><strong>Revenue per head: median versus AI-native</strong></p>
<p class="fig-sub">Median private SaaS ARR per employee in 2026 is $141,125, up from $129,724 in 2025, across a survey of more than 1,000 companies. Anysphere crossed $1bn ARR in November 2025 with headcount last publicly reported at roughly 150 in August 2025. At an assumed 450 staff the implied figure is about $2.2m per head, roughly 16 times the median. The headcount is an estimate and the multiple moves with it.</p>
<div class="fig-scroll"><svg viewBox="0 0 700 190" role="img" aria-label="Median private SaaS revenue per employee of 141,125 dollars in 2026 against an estimated 2.2 million dollars per head at Anysphere, roughly sixteen times higher.">
<g font-family="var(--mono)" font-size="10" fill="var(--faint)" letter-spacing="1.4">
<text x="0" y="26">MEDIAN PRIVATE SAAS · 2026</text>
<text x="0" y="106">ANYSPHERE · ESTIMATED</text>
</g>
<rect x="0.5" y="38.5" width="40" height="25" rx="3" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.30)" stroke-width="1"/>
<text x="52" y="56" font-family="var(--mono)" font-size="11" fill="var(--dim)">$141,125 PER EMPLOYEE</text>
<rect x="0" y="118" width="623" height="26" rx="3" fill="#8cbeff"/>
<text x="12" y="136" font-family="var(--mono)" font-size="11" fill="#07070a" font-weight="700">~$2,200,000 PER EMPLOYEE</text>
<text x="0" y="176" font-family="var(--mono)" font-size="10.5" fill="var(--dim)">SAME MODELS AVAILABLE TO BOTH</text>
</svg></div>
<p class="card-meta mono fig-src">SOURCES · SAAS CAPITAL 2026 SURVEY · ANYSPHERE REPORTED ARR AND HEADCOUNT · HEADCOUNT ESTIMATED</p>
</figure>

Both companies can buy the same models at the same list price. One of them wrote its value chain assuming those models existed. The other is adding them to a chain designed for a world in which they did not.

Now the honest caveat, because this is the weakest evidence in the essay. Anysphere is n equals one, it is the most selection-biased case available, and a large part of its revenue density comes from *what it sells* into a land-grab market at venture-subsidised scale rather than from how AI-natively it runs itself. The comparison is illustrative, not controlled. I use it because the direction is visible in every AI-native operation I have looked at and because nobody has yet published the controlled version. If you want to reject the number, reject it; the argument does not depend on it, and the third failure mode at the end of this essay is precisely this objection taken seriously.

What "AI-native" means as a balance-sheet term rather than a marketing one is not a technology choice. It is a decision about which links you build in the first place.

## How to actually start

Thirty days, in order, no steps skipped.

1. **Pick one number.** Not a process, a number, and one that already exists in your accounts. Days to close. Cost per qualified lead. Hours per reconciliation. Outliers per ten attempts. If you cannot name it in a sentence, you are not ready.
2. **Build the ledger before the intelligence.** Events, immutable, one row per unit of work, lifecycle states. This is boring and it is the entire foundation. Skipping it is the single most common failure I see, because the intelligence layer is the fun part.
3. **Instrument the number for two weeks with no AI at all.** You need a baseline that predates the thing you are about to be enthusiastic about. Re-read the METR finding if you are tempted to skip this. Your post-hoc sense of improvement is worthless.
4. **Write the judgement down.** Your decision rules, your thresholds, your risk tolerance, in a document the system reads. Not in your head.
5. **Add one agent against one bounded loop.** One. With tools, with a stopping condition, with a log.
6. **Add the supervisory link.** Something whose only job is checking the output against the commitment and raising a flag. It can be a checklist and a human at first. It cannot be nothing.
7. **Compare to the baseline. Publish the comparison internally, including if it is worse.** Especially if it is worse.

Only then widen. Most of the ninety-seven start at step 5, discover at month six that they cannot prove anything, and file it under lessons learned.

## Two skills

If I had to name what actually separates the three from the ninety-seven, it is not model access, budget or engineering talent. All three are purchasable.

**The first is verification.** The ability to establish whether a claim is true, quickly, from a primary source, as a reflex. This has always mattered. What has changed is the ratio: the cost of producing plausible falsehood has gone to roughly zero, and while the cost of checking has also fallen (the same tools help), it has not fallen as far, because the last step of verification is a human deciding whether a primary source actually says the thing. That is a claim about a ratio, not a measurement, and I would like to be shown a real number for it. Every operator I know who is compounding treats checking as a reflex. Every one who is stalled has outsourced it to something that cannot do it.

**The second is translation.** Turning a working system into a number that a board, a buyer or a lender will underwrite. This is the skill that moves you from rung 3 to rung 4, and it is rarer than engineering by a wide margin. Plenty of people can build a system that works. Very few can express what it is worth in a form that survives contact with a diligence process.

Everybody has the same model. Almost nobody has a ledger.

## How I could be wrong

A thesis that cannot lose is not a thesis, so here are the three ways this one loses.

**The labs ship rung 3.** If the frontier providers productise the systems layer directly, with memory, orchestration and enterprise data wired in, then rung 3 commoditises and the only defensible criterion left is proprietary input. My four tests collapse to one. Given that the same providers already standardised the socket, this is the most likely failure mode, and I would put it above even odds within three years.

**The METR result generalises.** If it turns out that expert operators in familiar domains are systematically slower when working AI-natively, and that the wins are concentrated in unfamiliar domains and junior operators, then the efficiency case flips and this is a story about capability expansion rather than margin. That would not make the essay useless, but it would make the revenue-per-head argument wrong.

**Revenue per head at AI-native firms is a funding artefact.** If the gap is driven by valuation-chasing, land-grab pricing and heavy subsidy rather than by structurally different unit economics, then it compresses toward the median as the funding market normalises and the whole argument was a bubble read in disguise. I do not believe this, but I hold it loosely, and the thing that would change my mind is the first cohort of AI-native firms posting a full year of GAAP profitability at those headcounts.

## What I still cannot solve

Four open problems, stated plainly, because a list of solved things is a brochure.

**Attribution across pillars.** When three content types run simultaneously and inbound arrives, I cannot cleanly assign credit. I have proxies. I do not have an answer.

**My own instrument.** I still cannot tell, in the moment, whether a given AI-native workflow is making me faster. The baseline discipline in step 3 is a workaround for a defect I have not fixed.

**Reference decay.** What produced an outlier in March is dead by August. The library ages faster than the system learns from it, which means the remake queue is always slightly out of date and I do not yet have a decay function I trust.

**Transferability, unproven.** Criterion five, my own test, and I have not passed it. I have not handed one of these systems to an operator who did not build it and watched it run for a quarter without me. Until that happens I am a very well-equipped individual, not the owner of an asset, and I would rather write that down than let it sit unexamined.

---

*Architecting Alpha is a series about where intelligence converts into capital, across intelligence, bits, atoms and electrons. Part I, [Intelligence Meets Resistance](/posts/intelligence-meets-resistance/), argued that capital converts into intelligence almost without friction and cannot convert into transformers at all. This is Part II. It is filed under bits.*

*Errors are mine, and if you find one, [info@selfbuiltsystems.com](mailto:info@selfbuiltsystems.com).*
