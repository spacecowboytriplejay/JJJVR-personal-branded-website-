---
title: The Rationing Regime
slug: the-rationing-regime
date: 2026-11-10
description: In one week a leading AI lab heading to market disclosed that almost none of its compute can be cancelled, and the largest data centre state elected a governor who promised to stop approving new ones. Compute has moved from a price regime to a rationing regime, and in a rationing regime the rent goes to whoever controls allocation.
image: /assets/images/the-rationing-regime.jpg
imageAlt: An hourglass drawn in blue and violet light particles, its narrow neck formed by a single server chip, with a dense field of particles above and a thin stream falling through.
tags: [compute, capital allocation, AI infrastructure, policy]
---

**On 26 October Anthropic made its prospectus public, and most of the coverage went to the revenue: $16.3 billion in the first half of 2026, up roughly fourteen times on the year. The more important disclosure sat further back. Of at least $518 billion of compute the company has committed to buy over the next decade, about 80 percent is non-cancellable or payable whether used or not, and only one contract, with SpaceX, can be cancelled on notice. Eight days later voters in Texas, one of the fastest-growing data centre markets in the world, elected a governor who had promised a moratorium on approving new ones. Read together, the two events say one thing. Compute is no longer simply bought. It is allocated.**

*Architecting Alpha, Part XII*

[Regime Change](/posts/regime-change-interregnum/) argued that compute was becoming collateral, an asset banks would learn to lend against. [The Restricted Group](/posts/the-restricted-group/) argued that the adjustment in a long-duration business arrives as a legal event at the edge of a structure, not as a price. [The Load That Talks Back](/posts/the-load-that-talks-back/) argued that the binding question in the electron layer is no longer who generates the power but who controls the load. This essay is where those three arguments meet.

Until recently the AI economy behaved like a market with a shortage. Prices were high, but anyone with capital could buy. That is changing. Access to compute is now set less by what a buyer will pay than by what has already been contracted, what memory supply allows, what a substation can carry, and what a governor will permit. That is a different regime, with different winners.

## The claim, and how it fails

**AI compute is moving from a price regime to a rationing regime. In a price regime the rent goes to whoever owns the scarce asset. In a rationing regime it goes to whoever controls allocation: contracted capacity, the right to walk away, permitted and energised land, memory supply, and the software that routes workloads to whatever is available. Duration, which was an asset when compute was abundant, becomes a liability for whoever holds it on the wrong side. My conjecture is that over the next three years more value is created and destroyed by the terms on which compute is allocated than by the price at which it is sold.**

Five ways this is wrong. The shortage may be cyclical, and a glut may arrive before the regime sets. The demand may be partly circular, funded by the same venture capital that funds the buyers. Small open models running locally may make data centre scarcity matter less than this essay claims. The moratoria may be bargaining chips rather than stops. And the strongest evidence for the regime, one company's margins, may be a reading taken at the top of a cycle. I take all five at the end.

## Part I. The best business, and its other half

Start with the numbers that made the prospectus famous. First-half revenue of $16.3 billion against $1.2 billion a year earlier. Cost of revenue of $2.4 billion, which implies a gross margin of about 85 percent on [one reading of the filing](https://www.webull.com/news/15842533775547392). An operating loss of only $693 million for the half, smaller than the $1.1 billion the company earned in interest on its cash, according to [an analysis of the S-1](https://hackernoon.com/anthropics-s-1-shows-$163b-in-half-year-revenue-a-900percent-nrr-and-an-$807b-loss-that-mostly-isnt). On those figures it is one of the most capital-efficient growth businesses ever filed.

Now the other half. The 85 percent margin is computed against cost of revenue, which carries the cost of serving the models. The cost of training them, $9.7 billion in the half, is booked in research and development. The fees paid to the three largest cloud providers for reselling the models sit in sales and marketing. None of that is unusual accounting. It does mean the margin describes the business of running a model, not the business of staying at the frontier.

Behind both sits the commitment. [Reuters reported](https://www.businessday.co.za/world/international-companies/2026-09-29-anthropic-plans-518bn-ai-infrastructure-spend-80-non-cancellable/) from the prospectus a planned infrastructure spend of at least $518 billion over a decade with six partners, about 80 percent of it non-cancellable or payable regardless of use. Google's agreement runs to 2033, Amazon's to 2036, Microsoft's to 2033, and an equipment lease with Broadcom of about $161 billion can be cancelled by neither side short of default. Non-cancellable purchase commitments reached $265.6 billion at 30 June, from [about $55 billion](https://labmemo.com/?p=60354) six months earlier, and [Bloomberg Government](https://news.bgov.com/financial-accounting/anthropic-ipo-filing-reveals-nearly-900-billion-in-future-debt) counts close to $900 billion of future obligations once leases not yet begun are included. "Whether the company gets the revenue or not," one accounting analyst told it, "they're on the hook to pay for these commitments."

The prospectus [describes](https://www.webull.com/news/15842533775547392) the shape of the risk. Compute is contracted twelve to eighteen months ahead, so costs land in tranches when capacity comes online, while customer revenue is largely consumption-based. The spending is locked in. The revenue is not.

This is [The Restricted Group](/posts/the-restricted-group/) in reverse. Aston Martin was a long-duration asset funded by short-duration money, and the adjustment arrived at the covenant perimeter. A frontier lab is a short-duration revenue stream carrying long-duration obligations. Neither is a mistake. Both are bets that the world which made the duration rational will still exist when the bill arrives. **The lab's capital efficiency is real, and it is made possible by leverage that sits on other people's balance sheets.**

## Part II. Where the leverage sits

If the lab is capital-efficient, the capital went somewhere. Much of it went into the companies that build and rent the capacity, financed with debt secured on the chips and on the customer contracts that sit inside special-purpose vehicles.

That is where the stress showed first. In mid-October [Reuters reported](https://www.businessday.co.za/world/international-companies/2026-10-15-ai-credit-fears-push-tech-default-insurance-to-record-highs/) that CoreWeave's five-year credit default swaps had blown out past 1,000 basis points, implying roughly a 63 percent chance of default over five years against about 30 percent a year earlier. The company owed nearly $50 billion, and its 2032 bonds traded at about 78 cents on the dollar, yielding just over 16 percent. An analyst quoted in the same report called it the AI trade's canary in the coal mine.

Two cautions. A CDS spread is a risk-neutral price. It bundles the odds of default with a premium for bearing the risk and a premium for illiquidity, so 63 percent is the price of fear, not a forecast. And recovery on a well-structured box, secured by chips with years of useful life and an investment-grade tenant, should be far higher than on unsecured paper. The interesting finding is not that a neocloud might fail. It is the mechanism. A fixed-price, long-duration contract sold to a lab, financed with debt priced off a rising risk-free rate, is squeezed from both ends at once. The ten-year Treasury yield has become an input to the cost of intelligence, and it belongs in the model the way the price of fuel belongs in an airline's.

Then there is the supplier. Nvidia reported $89 billion of data centre revenue in the quarter to July, up 117 percent on the year, and Jensen Huang summarised the moment in four words: [now, compute is revenue](https://www.unite.ai/nvidia-posts-96-2b-quarter-as-data-center-revenue-hits-89b/). Take the demand claim as true. The questions that matter sit elsewhere. Nvidia is [reported](https://www.webull.com/news/15509283432375296) to be helping its customers secure third-party capital, which makes part of its order book reflexive. And its largest buyers are learning to need it less: the Anthropic prospectus [describes](https://labmemo.com/anthropic-s1-ipo-filing-nasdaq-ant-2026-10/) chips from Nvidia, AMD, Amazon and Google as a single pool, with software that routes each workload to whichever is most efficient. Every routed workload is a margin negotiation. A vendor that finances its customers while its customers build substitutes is a pattern with history, and the history is not uniformly kind.

## Part III. Duration flips

In an abundant market, the seller of capacity wants long contracts, because long contracts lock in demand, and the buyer wants short ones, because prices are falling. In a shortage the incentives invert. The seller wants short contracts, because spot prices are rising. The buyer wants long ones, because access is what matters.

That inversion explains the most revealing line in the prospectus. Of six partners, only SpaceX holds a contract cancellable on notice. The filed terms describe [$1.25 billion a month](https://capefearadvisors.substack.com/p/spacex-adding-it-up-the-ninety-day) for capacity across the Colossus clusters running through May 2029; Elon Musk has described the same agreement in public as a 180-day lease with 90 days' notice of mutual cancellation thereafter, and neither company has reconciled the two descriptions. Either way, the one counterparty that owns its own chips, its own power and its own model kept the option to walk.

That option is worth the spread between the contract price and the spot price, and the spread widens as the shortage deepens. The party that can exercise it first captures the repricing. The party that cannot is a renter of its own future. **In a rationing regime, optionality is the asset and duration is the liability, and you can tell who understood that by who kept the exit.**

The same logic reaches every buyer of compute, not only the labs. Every supply agreement now carries a hidden question: who holds the option to walk, at what notice, and what happens to your roadmap if they use it?

## Part IV. Memory is the ration book

If compute is rationed, something does the rationing. The most consistent answer across the stack is memory.

Nvidia has [described](https://pcgamer.com/hardware/nvidia-says-it-would-be-making-a-whole-lot-more-money-if-it-werent-for-the-memory-crisis-its-contributing-to/) its own growth outlook as constrained by memory supply, with the unconstrained number significantly higher. The same shortage shows up at the other end of the market. Apple's new Mac Studio offers 512 gigabytes of unified memory, enough to hold a very large open model on a desk, and [the memory upgrade alone costs $15,500](https://www.tweaktown.com/rss/click/news/114370/?c=news-mf) on a machine that starts at $5,499. In March 2025 a whole 512 gigabyte Mac Studio of the previous generation [listed at $9,499](https://www.servethehome.com/new-512gb-unified-memory-apple-mac-studio-is-the-local-ai-play/). The hyperscaler and the desk are bidding for the same scarce input.

Which makes one remark on the All-In podcast, recorded the week of the election, worth taking seriously. Jason Calacanis, whose venture firm employs about 20 people and spends, by his estimate, $40,000 to $50,000 a year on frontier model subscriptions, said the firm was "on the verge of ordering everybody a Mac Studio" at about $20,000 each, "running local models first and then falling back" to frontier models, "because we don't want to be throttled. We want to have unmetered intelligence."

On cost alone the decision is wrong. Twenty machines at about $21,000 come to roughly $420,000; spread over three years, about $140,000 a year before power and support, three times the subscriptions they partly replace. On his own estimate of the value those subscriptions create, about $2 million a year, it is cheap insurance. That is the point. When access is rationed, the cost that matters is not the price of a token. It is the cost of not getting one when you need it.

Three things are easy to miss in that decision. A desk machine idles most of the day, while agents work through the night, so the economics belong to a pooled cluster behind a router, not a box per person. The buyer is paying peak prices for the very input that is scarce, so a lease or a smaller pooled cluster captures most of the option for less. And the durable asset is not the hardware but the routing policy: what runs locally, what escalates to a frontier model, and what never leaves the building. That policy survives every hardware generation. The box does not.

It is also a regulatory hedge. A few hundred large data centres are easy to license. Millions of desks are not. If compute becomes the point at which governments choose to regulate AI, unmetered local inference is the tier hardest to reach. Enterprises already appear to be moving that way; Lenovo [reported](https://www.channeldive.com/news/nvidia-earnings-show-strong-ai-demand/806184/) customers shifting inference from public cloud to their own premises.

## Part V. The veto moves down

The third ration is permission, and on 3 November it changed hands.

Democrats [won control of the US Senate](https://aljazeera.com/news/2026/11/4/democratic-party-flips-us-senate-in-2026-midterm-elections), ending single-party control of Washington for the last two years of the current term. Divided government rarely produces comprehensive legislation, and a federal AI statute that survives a presidential veto is unlikely before 2029. Expect hearings, subpoenas, procurement standards and appropriations riders instead. The decisions that bind will be made lower down.

Texas shows how low. In August its Republican governor, Greg Abbott, ordered an audit of every data centre in the state grid operator's interconnection queue, and the state's environmental regulator then paused data centre permits. On 3 November voters elected Gina Hinojosa, a Democrat, who had called that pause a scam and promised a formal moratorium on new approvals until the Legislature passes new protections ([Baxtel](https://baxtel.com/news/texas-governor-elect-pledges-moratorium-on-new-data-center-approvals), [Reuters](https://gvwire.com/2026/11/04/texas-data-centers-face-uncertain-future-after-hinojosa-wins-governors-race/)). The audit is due in December, the Legislature meets in January, and she takes office on 19 January. Developers have already withdrawn at least one proposal in the state ([DCD](https://datacenterdynamics.com/en/news/texas-governor-elect-gina-hinojosa-promises-continued-data-center-moratorium-further-legislation)).

The easy reading is partisan, and it is wrong. The pause began under a Republican and is being extended by a Democrat. The pressure came from below: rural communities, water, local power bills, and a sense that the buildings deliver wealth to their owners and costs to their neighbours. A revolt that crosses party lines is more durable than one that does not, because no single election ends it.

This is [The Load That Talks Back](/posts/the-load-that-talks-back/) with political weight behind it. That essay argued that the terms of a grid connection, firm or flexible, are becoming a priced variable. The election adds a second variable: whether a community will allow the connection at all. The most consequential AI policy of the next two years will not be written in a federal AI bill. It will be written into large-load tariffs, interconnection rules and local permits, where the question is whether a data centre lowers the electricity bill of the people who live near it or raises it. **The electricity bill is the political interface of AI.** Whoever makes it fall earns the right to build. Whoever makes it rise loses the permit.

## Part VI. Who gets paid when compute is rationed

Put the rations side by side and the rent becomes visible.

The **contract** ration is held by whoever owns contracted capacity and the option to walk. The rent goes to owners of capacity who sell short, and to buyers who negotiated exits.

The **memory** ration is held by the suppliers of high-bandwidth and conventional memory, and it sets the price of both the cloud and the edge.

The **permission** ration is held by communities, utilities and states. The rent goes to whoever holds permitted, energised land, and to anything that makes a large load lower a local bill rather than raise it: behind-the-meter supply, storage, flexible connections and verified load control.

The **routing** ration is held by software. When chips from four vendors become one pool, and local machines become the first tier of a hybrid stack, the layer that decides where each workload runs captures the difference between the cheapest available capacity and the most expensive.

Underneath all four, intelligence itself is commoditising faster than anyone priced. On 26 October OpenAI announced that an internal model had produced a refutation of the Exponential Time Hypothesis, a 27-year-old conjecture in complexity theory. Within hours Anthropic posted [a second, independent proof](https://www.buildmvpfast.com/blog/openai-exponential-time-hypothesis-false-ai-proof-2026), written by Claude by a different method. Neither result is yet peer reviewed, and neither threatens modern cryptography or makes hard problems easy; on Anthropic's own analysis, its algorithm beats brute force only for inputs beyond 10^10,000 variables ([summary](https://levelup.gitconnected.com/two-ai-labs-disproved-the-exponential-time-hypothesis-on-the-same-day-b0d2694f21b6)). The news is not the proof. It is the tie. Two labs reached the same frontier result on the same day, which is what parity looks like. As in [Everything Converts](/posts/everything-converts/), commensuration does not abolish the premium. It relocates it, here away from the model and towards verifiability, owned context and the control of allocation.

## The three positions

**Operator: design for being rationed.** Assume that the frontier model you depend on will be rate-limited, repriced or withdrawn at the worst moment. Build a routing layer that sends routine work to local or open models and escalates only what needs the frontier, keep the data that must never leave the building on hardware you control, and read every compute agreement for who holds the option to walk.

**Investor: underwrite payback, duration and permission, not valuation.** An asset that pays back in a year survives a correction. One that pays back in five, financed at 15 percent, does not. In every AI infrastructure deal ask four questions: what is the payback relative to the asset's useful life, who holds the option to walk and at what notice, how exposed is the financing to the ten-year yield, and is every permit in hand, including the late ones for air, water and interconnection. In a correction the scarce inputs stay scarce, so the opportunity is in quality assets sold by forced sellers: permitted and energised sites, secured box debt with strong tenants, and fleets of still-useful chips.

**State: allocate through prices, or allocation will happen through politics.** A jurisdiction that refuses large loads exports the industry and its tax base. One that admits them on any terms imports a backlash that ends in a moratorium. The middle path is to make the connection conditional on what the load does for its neighbours: flexibility, self-supply, and a visible reduction in local bills. Rationing by rule is slower and less efficient than rationing by price, but it is the only kind a voter can see.

## How this could be wrong

The shortage may be cyclical. Memory capacity responds to price within two years, custom chips add supply, and the cost of each task keeps falling fast. If memory prices ease and the rental price of an hour of GPU time falls through 2027, rationing was a phase, not a regime, and the long contracts that look dangerous today will look prudent. This is the strongest objection, and the test is simple: watch spot GPU prices against frontier lab revenue.

The demand may be partly circular. If a large share of spending on the most advanced models comes from companies funded by venture capital, a funding downturn turns a credit event into a demand collapse. That is the 2000 pattern, in which the supply was real and the demand was borrowed. Revenue retention among customers that are not venture-funded is the number to watch.

Abundance at the floor may defeat scarcity at the top. If small open models running on local machines handle most commercial work, data centre rationing matters less than this essay claims. There is a real tension between the edge argument in Part IV and the rationing argument in the rest. My answer is that both can hold at once, because the edge is bought as insurance against the rationing; but if enterprise token volume shifts to local models faster than frontier volume grows, the edge wins and the rationing story is overstated.

The moratoria may be bargaining chips. Governors want better terms, not empty land. If Texas legislates in 2027 and approvals resume within a year on modest conditions, permission was a price after all, and the veto story is too strong.

The best business may be a reading at the top. A rival's run rate coming in below expectations and valuation talk [falling from about $2 trillion to $1.5 trillion](https://www.storagenewsletter.com/?p=306454) before a listing are also what a peak looks like. If the listing prices well below recent private valuations and trades down in its first quarter, the margins in Part I described a moment rather than a structure.

If one of those five breaks first, write to info@selfbuiltsystems.com and tell me which. Short and specific gets an answer.

For two years the question in AI infrastructure was who could buy the most. It is becoming who decides who gets served, on what terms, and for how long. That question has been answered in other industries before: in spectrum, in landing slots, in pipeline capacity and in water rights. In every one the long-run winners were not the largest owners of the scarce thing. They were the ones who understood the allocation rules first and wrote themselves into them. Compute is about to learn the same lesson.

*Architecting Alpha is published in the spirit of bold conjecture and ruthless criticism. Figures from the Anthropic prospectus are taken from the reporting linked beside them; the filing itself is [on EDGAR](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm). Remarks made on podcasts are quoted from the published recording. Judgements are mine and marked as such.*
