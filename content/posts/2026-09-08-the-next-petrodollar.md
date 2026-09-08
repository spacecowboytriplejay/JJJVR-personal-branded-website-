---
title: The Next Petrodollar
slug: the-next-petrodollar
date: 2026-09-08
description: Oil moved to capital. Electricity cannot move, so capital is moving to it. The last order was built on oil priced in dollars; the next one is being built on electricity priced in compute, and the input that decides who wins is the one you cannot buy on a purchase order.
image: /assets/images/the-next-petrodollar.jpg
imageAlt: Transmission pylons on the left feeding a single bright line of current into rows of glowing server racks on the right, the refinery that runs on electrons rather than barrels
tags: [ai, energy, infrastructure, capital allocation]
---

**In 2025 the world spent more building data centres than it spent finding and producing oil. The International Energy Agency puts the first figure at about 580 billion dollars and the second at about 540 billion. That crossover is the cleanest single fact about the decade, and almost nobody has followed it to its conclusion: the refinery of the new economy runs on electricity, electricity does not travel, and so for the first time since 1974 the capital is moving to the energy instead of the energy moving to the capital.**

*Architecting Alpha, Part V*

Three things happened in the last month that belong in the same sentence. Nvidia reported [89 billion dollars of data centre revenue in a single quarter](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027), up 117 percent, and its chief executive said the quiet part on the call: "compute is revenue." Meta [expanded its Hyperion campus in Louisiana to five gigawatts](https://about.fb.com/news/2026/07/teachers-local-businesses-win-as-meta-expands-louisiana-data-center/), and the release spent as many words on the seven new gas-fired generating plants and three grid-scale batteries that will feed it as on the compute itself. And Oracle and OpenAI [scrapped a planned 600 megawatt expansion at Abilene](https://www.tomshardware.com/tech-industry/oracle-and-openai-scrap-planned-600mw-abilene-expansion), the flagship Stargate site, for one stated reason: grid power would not be available for roughly a year.

The chips were available. The capital was available. The electrons were not.

I wrote in [Regime Change](/posts/regime-change-interregnum/) that compute is becoming collateral, an asset class that insurance and private credit balance sheets are learning to hold. This essay is about what that collateral is made of. Strip a data centre to its economics and it is a refinery: energy goes in, a higher-value product comes out, and the margin is set by the price and the availability of the feedstock. The feedstock is grid electricity. Everything that follows is a consequence of that one substitution, and of one physical property that oil has and electricity does not.

---

## The claim, and how it fails

**The binding constraint on artificial intelligence is not chips and it is not oil. It is delivered electricity: generation plus the grid that carries it to a site. Because a kilowatt-hour, unlike a barrel, cannot be shipped, the flow of capital reverses. Under oil, energy went to where the capital and the refineries were. Under compute, capital and refineries go to where the energy is. The winners of the next order are whoever controls generation and delivery, not whoever controls the crude, and the unit the order is priced in will be compute rather than dollars per barrel.**

That claim fails if any of the following happens. If demand forecasts collapse and the queues clear, which would mean electricity was never binding, only mis-forecast. If efficiency gains in models and hardware outrun the buildout so that tokens per kilowatt-hour rise faster than demand, in which case the refinery gets smaller rather than the feedstock getting scarcer. If chips, memory in particular, turn out to be the constraint that actually holds through 2027 and power is merely the constraint that is talked about. Or if on-site generation becomes so cheap and so fast that the grid is bypassed altogether, which would preserve the electricity thesis but kill the grid thesis. I take all four seriously at the end.

---

## Part I. The refinery

Jensen Huang has been trying to rename the data centre for two years. At Computex in May 2025 he put it plainly: "These AI data centers, if you will, are improperly described. They are, in fact, AI factories. You apply energy to it, and it produces something incredibly valuable, and these things are called tokens" ([Nvidia](https://blogs.nvidia.com/blog/computex-2025-jensen-huang)). Sam Altman took the thought to its end a month later: "the cost of intelligence should eventually converge to near the cost of electricity" ([Altman, June 2025](https://blog.samaltman.com/the-gentle-singularity)).

Both men have commercial reasons to say it. Both are also right about the mechanism, and the mechanism is older than either of them.

A refinery takes a low-value, abundant input and applies energy and capital to make a high-value, specific output. The oil refinery's input is crude and its output is gasoline, jet fuel and feedstock for plastics. The AI factory's input is electricity and its output is a stream of tokens that resolve into code, predictions, designs, targeting solutions and financial models. In both cases the output price falls as capacity is built, and in both cases the operator's margin ends up being a function of feedstock cost and feedstock access.

The price collapse in the output is already visible. Epoch AI tracks the cost of inference at a fixed capability level and finds it falling by between 9 and 900 times per year depending on the benchmark; a model at the GPT-3 level cost 60 dollars per million tokens in November 2021 and 7 cents by October 2024 ([Epoch AI](https://epoch.ai/data-insights/llm-inference-price-trends)). Andreessen Horowitz called this LLMflation and put the round number at a tenfold fall per year for equivalent performance ([a16z](https://a16z.com/llmflation-llm-inference-cost/)). That is what a refined product does once the refineries are built. It commoditises.

<figure class="post-fig">
  <p class="fig-title"><strong>Two refineries, one shape, one difference in the first box</strong></p>
  <p class="fig-sub">A barrel is portable; a kilowatt-hour is grid-bound. Everything downstream of the AI factory has to relocate to the electron.</p>
  <div class="fig-scroll"><svg viewBox="0 0 700 250" role="img" aria-label="Two parallel chains. Old economy: crude oil, portable, refined into fuels that power cars, ships, aircraft and armies, priced in dollars. New economy: electricity, grid-bound, refined by a data centre into tokens that power code, predictions, robotics and weapons, priced in compute.">
    <defs><marker id="p5a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#55555f"/></marker></defs>
    <g font-family="JetBrains Mono, monospace" font-size="10" letter-spacing="1.2">
      <text x="0" y="14" fill="#9a9aa4">OLD ECONOMY</text>
      <rect x="0" y="26" width="150" height="50" rx="4" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.08)"/>
      <text x="75" y="47" text-anchor="middle" fill="#f4f4f6">CRUDE OIL</text>
      <text x="75" y="64" text-anchor="middle" fill="#9a9aa4" font-size="9">PORTABLE</text>
      <line x1="150" y1="51" x2="192" y2="51" stroke="#55555f" marker-end="url(#p5a)"/>
      <rect x="194" y="26" width="150" height="50" rx="4" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.08)"/>
      <text x="269" y="47" text-anchor="middle" fill="#f4f4f6">REFINERY</text>
      <text x="269" y="64" text-anchor="middle" fill="#9a9aa4" font-size="9">CRACK, DISTIL</text>
      <line x1="344" y1="51" x2="386" y2="51" stroke="#55555f" marker-end="url(#p5a)"/>
      <rect x="388" y="26" width="150" height="50" rx="4" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.08)"/>
      <text x="463" y="47" text-anchor="middle" fill="#f4f4f6">FUELS</text>
      <text x="463" y="64" text-anchor="middle" fill="#9a9aa4" font-size="9">ENERGY PER BARREL</text>
      <line x1="538" y1="51" x2="580" y2="51" stroke="#55555f" marker-end="url(#p5a)"/>
      <text x="586" y="44" fill="#f4f4f6" font-size="9">CARS, SHIPS, ARMIES</text>
      <text x="586" y="60" fill="#9a9aa4" font-size="9">PRICED IN DOLLARS</text>

      <text x="0" y="146" fill="#8cbeff">NEW ECONOMY</text>
      <rect x="0" y="158" width="150" height="50" rx="4" fill="none" stroke="#8cbeff" stroke-width="1.5"/>
      <text x="75" y="179" text-anchor="middle" fill="#f4f4f6">ELECTRICITY</text>
      <text x="75" y="196" text-anchor="middle" fill="#8cbeff" font-size="9">GRID-BOUND</text>
      <line x1="150" y1="183" x2="192" y2="183" stroke="#8cbeff" marker-end="url(#p5a)"/>
      <rect x="194" y="158" width="150" height="50" rx="4" fill="none" stroke="#8cbeff" stroke-width="1.5"/>
      <text x="269" y="179" text-anchor="middle" fill="#f4f4f6">DATA CENTRE</text>
      <text x="269" y="196" text-anchor="middle" fill="#9a9aa4" font-size="9">CHIPS, COOLING</text>
      <line x1="344" y1="183" x2="386" y2="183" stroke="#8cbeff" marker-end="url(#p5a)"/>
      <rect x="388" y="158" width="150" height="50" rx="4" fill="none" stroke="#8cbeff" stroke-width="1.5"/>
      <text x="463" y="179" text-anchor="middle" fill="#f4f4f6">TOKENS</text>
      <text x="463" y="196" text-anchor="middle" fill="#9a9aa4" font-size="9">TOKENS PER KWH</text>
      <line x1="538" y1="183" x2="580" y2="183" stroke="#8cbeff" marker-end="url(#p5a)"/>
      <text x="586" y="176" fill="#f4f4f6" font-size="9">CODE, MODELS, WEAPONS</text>
      <text x="586" y="192" fill="#8cbeff" font-size="9">PRICED IN COMPUTE</text>
      <text x="0" y="240" fill="#55555f" font-size="9">THE ONLY PROPERTY THAT CHANGES: THE FEEDSTOCK IN THE FIRST BOX MOVES, OR IT DOES NOT.</text>
    </g>
  </svg></div>
  <p class="card-meta mono fig-src">SCHEMATIC · AUTHOR</p>
</figure>

What the analogy buys you is a discipline. Once you accept that the data centre is a refinery, three questions follow in order, and they are the questions a refiner asks. What is the feedstock, and what does it not run on? What does the feedstock actually cost, and what does it cost relative to everything else in the plant? And, the question that decides where refineries get built: can the feedstock be moved, or must the plant come to it?

---

## Part II. What it does not run on

Start with the thing that is not true, because a surprising number of investors still carry it. AI does not run on oil.

The US Energy Information Administration's summary for 2025 puts petroleum at about 0.7 percent of utility-scale generation, against 41 percent natural gas, 24 percent renewables, 18 percent nuclear and 17 percent coal ([EIA](https://www.eia.gov/energyexplained/electricity/electricity-in-the-us.php)). The more detailed 2023 breakdown, which separates petroleum liquids from petroleum coke, gets to 0.4 percent ([EIA](https://www.eia.gov/tools/faqs/faq.php?id=427&t=6)). Take either. It is under one percent, and it is falling.

The world is not much different. Ember's review of 2024 puts coal at 34.4 percent of global generation, gas at 22 percent and "other fossil fuels," which is mostly oil, at 2.8 percent ([Ember](https://ember-energy.org/latest-insights/global-electricity-review-2025/2024-in-review/)). In 2025 that oil-heavy residual fell again ([Ember](https://ember-energy.org/latest-insights/global-electricity-review-2026/2025-in-review/)).

The exceptions matter, because they are where this essay's geography gets interesting. Oil still supplied 20 percent of electricity generation across the Middle East and North Africa in 2024, burning about 1.8 million barrels a day, roughly the entire output of Mexico, with the share far higher in Iraq, Saudi Arabia and Kuwait ([IEA](https://www.iea.org/reports/the-future-of-electricity-in-the-middle-east-and-north-africa/executive-summary)). Saudi Arabia generated 38 percent of its electricity from oil in 2023 ([EIA](https://www.eia.gov/international/content/analysis/countries_long/saudi_arabia/)). Hold that thought. The states that built the petrodollar are, right now, burning the petro to make the electrons to make the compute.

| Jurisdiction | Oil share of electricity generation | Year | Source |
|---|---|---|---|
| United States | about 0.7% (0.4% in the detailed 2023 split) | 2025 / 2023 | [EIA](https://www.eia.gov/energyexplained/electricity/electricity-in-the-us.php) |
| World | 2.8% ("other fossil," mostly oil) | 2024 | [Ember](https://ember-energy.org/latest-insights/global-electricity-review-2025/2024-in-review/) |
| Middle East and North Africa | 20% | 2024 | [IEA](https://www.iea.org/reports/the-future-of-electricity-in-the-middle-east-and-north-africa/executive-summary) |
| Saudi Arabia | 38% | 2023 | [EIA](https://www.eia.gov/international/content/analysis/countries_long/saudi_arabia/) |

There is a second, subtler thing AI does not run on, and it is the one that decides the geography. It does not run on the energy system as a whole. Electricity is only 21 percent of total final energy consumption globally ([IEA World Energy Outlook 2025](https://www.iea.org/reports/world-energy-outlook-2025/executive-summary)). Oil, gas and coal still carry 86 percent of primary energy ([Energy Institute, via summary](https://dieselnet.com/news/2026/07energyreview.php)). AI sits entirely inside that 21 percent sliver, the part of the energy system that runs on wires. Which means the AI trade is not an energy trade in the broad sense. It is a wires trade.

---

## Part III. What it does run on

Ember's 2026 review carries the line that will be quoted for a decade: "For the first time in 100 years, renewables (33.8 percent, 10,730 TWh) overtook coal power (33.0 percent, 10,476 TWh)" ([Ember](https://ember-energy.org/latest-insights/global-electricity-review-2026/)). Solar alone grew 30 percent in 2025 to 8.7 percent of global generation, and China's 378 gigawatts of installations were 58 percent of the world's ([Ember](https://ember-energy.org/latest-insights/global-electricity-review-2026/electricity-demand-and-supply-trends/)).

That is the supply side of the refinery, and it is the reason "cheap power" has become a geopolitical phrase. But the hyperscalers' own procurement tells you what the refinery actually wants, and it is not intermittent solar. It is firm, around-the-clock supply, and it is being bought in every form that can be delivered.

Nuclear first, because it is the tell. Amazon signed for 1,920 megawatts from Talen's Susquehanna plant through 2042 ([Talen](https://ir.talenenergy.com/news-releases/news-release-details/talen-energy-expands-nuclear-energy-relationship-amazon)). Microsoft's 20-year agreement is restarting the 835 megawatt Crane unit at Three Mile Island, now targeted for 2027 ([Constellation](https://www.constellationenergy.com/news/2025/09/one-year-later-crane-clean-energy-center-still-in-the-spotlight-and-ahead-of-schedule.html)). Meta took 1,121 megawatts from Constellation's Clinton plant for 20 years from 2027 ([Constellation](https://www.constellationenergy.com/news/2025/constellation-meta-sign-20-year-deal-for-clean-reliable-nuclear-energy-in-illinois.html)). Google's first small modular reactor with Kairos is 50 megawatts, in 2030, under a 500 megawatt framework ([Kairos](https://www.kairospower.com/updates/google-kairos-power-tva-collaborate-to-meet-americas-growing-energy-needs)). Companies that could buy anything are buying baseload, and they are paying to un-retire plants.

Gas second, and this is where the queue becomes visible in the supply chain. The IEA recorded a 70 percent surge in gas turbine orders in 2025 and expects 15 to 27 gigawatts of on-site gas capacity at US data centres by 2030 ([IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)). GE Vernova's gas backlog and slot reservations rose from 100 to 116 gigawatts in a single quarter, with the company guiding to 125 gigawatts under contract by year end and a production ramp to 30 gigawatts a year by 2030 ([GE Vernova](https://www.gevernova.com/news/press-releases/ge-vernova-reports-second-quarter-2026-financial-results-raises-2026-financial)). Siemens Energy's turbine backlog is near 69 gigawatts with lead times of three years or more ([Utility Dive](https://www.utilitydive.com/news/siemens-gas-turbine-backlog-nears-70-gw-as-company-expands-manufacturing/827390/)). xAI ran 27 turbines, up to 495 megawatts, at its Memphis site without permits and is being sued for it ([SELC](https://www.selc.org/news/xai-built-an-illegal-power-plant-to-power-its-data-center/)). Meta's Hyperion release lists seven new gas plants. The refinery is building its own boilers because the grid cannot deliver in time.

<figure class="post-fig">
  <p class="fig-title"><strong>The power stack, and the layer that sets the pace</strong></p>
  <p class="fig-sub">Generation feeds the grid, the grid feeds the data centre, the data centre produces tokens, and tokens convert into economic, military and monetary power. The grid is the slowest layer to build.</p>
  <div class="fig-scroll"><svg viewBox="0 0 700 250" role="img" aria-label="Flow from generation sources, gas, nuclear, solar and wind, hydro and coal, and oil at under one percent, through the grid, marked as the bottleneck, into the data centre, out as tokens, into economic, military and monetary power.">
    <defs><marker id="p5b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#55555f"/></marker><marker id="p5c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8cbeff"/></marker></defs>
    <g font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.2">
      <text x="0" y="12" fill="#9a9aa4">GENERATION</text>
      <g fill="#f4f4f6">
        <rect x="0" y="22" width="120" height="26" rx="3" fill="rgba(255,255,255,.10)"/><text x="60" y="39" text-anchor="middle">GAS 41%</text>
        <rect x="0" y="54" width="120" height="26" rx="3" fill="rgba(255,255,255,.10)"/><text x="60" y="71" text-anchor="middle">RENEWABLES 24%</text>
        <rect x="0" y="86" width="120" height="26" rx="3" fill="rgba(255,255,255,.10)"/><text x="60" y="103" text-anchor="middle">NUCLEAR 18%</text>
        <rect x="0" y="118" width="120" height="26" rx="3" fill="rgba(255,255,255,.10)"/><text x="60" y="135" text-anchor="middle">COAL 17%</text>
        <rect x="0" y="150" width="120" height="26" rx="3" fill="none" stroke="#55555f" stroke-dasharray="3 2"/><text x="60" y="167" text-anchor="middle" fill="#9a9aa4">OIL UNDER 1%</text>
      </g>
      <g stroke="#55555f"><line x1="120" y1="35" x2="160" y2="35" marker-end="url(#p5b)"/><line x1="120" y1="67" x2="160" y2="67" marker-end="url(#p5b)"/><line x1="120" y1="99" x2="160" y2="99" marker-end="url(#p5b)"/><line x1="120" y1="131" x2="160" y2="131" marker-end="url(#p5b)"/><line x1="120" y1="163" x2="160" y2="163" marker-end="url(#p5b)" stroke-dasharray="3 2"/></g>
      <text x="222" y="12" text-anchor="middle" fill="#be8cff">BOTTLENECK</text>
      <rect x="162" y="22" width="120" height="154" rx="3" fill="none" stroke="#be8cff" stroke-width="1.5"/>
      <text x="222" y="60" text-anchor="middle" fill="#f4f4f6" font-size="10">THE GRID</text>
      <text x="222" y="84" text-anchor="middle" fill="#9a9aa4">LINES</text>
      <text x="222" y="100" text-anchor="middle" fill="#9a9aa4">TRANSFORMERS</text>
      <text x="222" y="116" text-anchor="middle" fill="#9a9aa4">QUEUES</text>
      <text x="222" y="146" text-anchor="middle" fill="#be8cff">5+ YEARS</text>
      <line x1="282" y1="99" x2="322" y2="99" stroke="#8cbeff" marker-end="url(#p5c)"/>
      <text x="384" y="12" text-anchor="middle" fill="#9a9aa4">CONVERSION</text>
      <rect x="324" y="22" width="120" height="154" rx="3" fill="none" stroke="#8cbeff" stroke-width="1.5"/>
      <text x="384" y="60" text-anchor="middle" fill="#f4f4f6" font-size="10">DATA CENTRE</text>
      <text x="384" y="84" text-anchor="middle" fill="#9a9aa4">GPUS</text>
      <text x="384" y="100" text-anchor="middle" fill="#9a9aa4">COOLING</text>
      <text x="384" y="116" text-anchor="middle" fill="#9a9aa4">MODELS</text>
      <text x="384" y="146" text-anchor="middle" fill="#8cbeff" font-size="8">KWH IN, TOKENS OUT</text>
      <line x1="444" y1="99" x2="484" y2="99" stroke="#8cbeff" marker-end="url(#p5c)"/>
      <text x="592" y="12" text-anchor="middle" fill="#9a9aa4">POWER</text>
      <g fill="#f4f4f6">
        <rect x="486" y="40" width="212" height="30" rx="3" fill="rgba(255,255,255,.10)"/><text x="592" y="59" text-anchor="middle">ECONOMIC: COST PER TOKEN</text>
        <rect x="486" y="84" width="212" height="30" rx="3" fill="rgba(255,255,255,.10)"/><text x="592" y="103" text-anchor="middle">MILITARY: AUTONOMY, CYBER</text>
        <rect x="486" y="128" width="212" height="30" rx="3" fill="rgba(255,255,255,.10)"/><text x="592" y="147" text-anchor="middle">MONETARY: THE UNIT OF ACCOUNT</text>
      </g>
      <text x="0" y="205" fill="#55555f">US GENERATION SHARES 2025, EIA. CHIPS SHIP IN MONTHS; A SUBSTATION TAKES YEARS.</text>
      <text x="0" y="222" fill="#55555f">CAPITAL MOVED FROM THE CONVERSION BOX TO THE GRID BOX IN 2025 BECAUSE THE GRID SETS THE PACE.</text>
    </g>
  </svg></div>
  <p class="card-meta mono fig-src">EIA 2025 · IEA ENERGY AND AI 2026 · LBNL QUEUED UP 2026</p>
</figure>

Demand is the other half of the refinery's books, and it is where the numbers have moved fastest. The IEA's April 2026 update puts data centre consumption at 485 terawatt-hours in 2025, up 17 percent in a year, with AI-specific load up 50 percent, heading to roughly 950 terawatt-hours by 2030, around 3 percent of global electricity ([IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)). In the United States data centres are about half of all electricity demand growth to 2030 ([IEA Electricity 2026](https://www.iea.org/reports/electricity-2026/demand)). Lawrence Berkeley National Laboratory's range for 2028 is 6.7 to 12 percent of all US electricity, from 4.4 percent in 2023 ([LBNL](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)).

Three percent of global electricity is small. Half of US demand growth is not. The marginal megawatt is where prices and queues are set, and the refinery has taken the margin.

---

## Part IV. The counterargument, conceded and then reversed

Here is the strongest objection to everything above, and I want to state it at full strength because most versions of the electricity thesis quietly avoid it.

Electricity is not the expensive part of a data centre. Chips are.

SemiAnalysis puts the all-in capital cost of an eight-GPU H100 server at about 250,000 dollars and a GB200 NVL72 rack at about 3.9 million ([SemiAnalysis](https://newsletter.semianalysis.com/p/h100-vs-gb200-nvl72-training-benchmarks)). Depreciate that over four or five years and the hardware line dwarfs the power line. Epoch AI's decomposition of frontier training runs puts hardware at 47 to 67 percent of cost, staff at 29 to 49 percent and energy at 2 to 6 percent ([Epoch AI](https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models)). My own estimate for a five-year total cost of ownership on an H100-class cluster, at an industrial tariff around 8 cents per kilowatt-hour and a power usage effectiveness of 1.2, lands electricity at roughly 12 percent, with chip depreciation near 70 percent; one vendor model at a higher tariff gets to about 13 percent ([Introl](https://introl.com/blog/gpu-infrastructure-tco-5-year-cost-model)). Call it one dollar in eight.

So the line "cheap power means cheap intelligence" is weak. A country with electricity at half the price gets tokens perhaps 6 percent cheaper. That does not decide a race. Whoever tells you cost per kilowatt-hour is the strategic variable has not done the arithmetic.

Now reverse it. The thing that makes electricity the bottleneck is not its price. It is that it is the only input in the plant that cannot be bought on a purchase order.

A chip is procured. Nvidia guided to 108 billion dollars of revenue next quarter; supply is tight, allocations are political, but the product ships in months and the constraint clears with fabs. Electricity is not procured, it is interconnected, and interconnection is a queue. At the end of 2025 there were 1,312 gigawatts of generation and 749 gigawatts of storage waiting in US interconnection queues, and the median project that reached commercial operation in 2025 had waited more than five years ([LBNL](https://emp.lbl.gov/publications/queued-2026-edition-characteristics)). Only 13 percent of the capacity that applied between 2000 and 2020 had ever been built. On the load side the picture is wilder: ERCOT told the Texas legislature in April 2026 it was tracking about 410 gigawatts of large loads seeking connection, 87 percent of them data centres ([ERCOT](https://www.ercot.com/files/docs/2026/04/09/ERCOTLargeLoadUpdate-April9HouseStateAffairsHearing.pdf)), on a system whose all-time peak, set this July, is 91.1 gigawatts ([Rigzone, citing EIA](https://www.rigzone.com/news/ercot_hourly_peak_load_sets_new_record-10-aug-2026-184338-article/)). The requests are four and a half times the record load.

Behind the queue sits the hardware that cannot be rushed. Large power transformer lead times ran 120 weeks on average in 2024 and 80 to 210 weeks for the largest units, up from about 50 weeks in 2021, with prices up 60 to 80 percent ([Wood Mackenzie](https://www.woodmac.com/news/opinion/supply-shortages-and-an-inflexible-market-give-rise-to-high-power-transformer-lead-times/)). Gas turbines: three years or more. A new transmission line: five to fifteen.

<figure class="post-fig">
  <p class="fig-title"><strong>How long each input takes to arrive</strong></p>
  <p class="fig-sub">A GPU order fills in months. A large transformer takes 80 to 210 weeks, a gas turbine three years or more, and the median grid interconnection built in 2025 had waited over five years.</p>
  <div class="fig-scroll"><svg viewBox="0 0 700 200" role="img" aria-label="Horizontal bars of lead time: GPUs about three to six months; large power transformers eighty to two hundred and ten weeks; gas turbines three years or more; grid interconnection median over five years.">
    <g font-family="JetBrains Mono, monospace" font-size="10" letter-spacing="1.2">
      <line x1="200" y1="16" x2="200" y2="176" stroke="rgba(255,255,255,.08)"/><line x1="300" y1="16" x2="300" y2="176" stroke="rgba(255,255,255,.08)"/><line x1="400" y1="16" x2="400" y2="176" stroke="rgba(255,255,255,.08)"/><line x1="500" y1="16" x2="500" y2="176" stroke="rgba(255,255,255,.08)"/><line x1="600" y1="16" x2="600" y2="176" stroke="rgba(255,255,255,.08)"/>
      <text x="200" y="192" text-anchor="middle" fill="#55555f" font-size="9">1 YR</text><text x="300" y="192" text-anchor="middle" fill="#55555f" font-size="9">2</text><text x="400" y="192" text-anchor="middle" fill="#55555f" font-size="9">3</text><text x="500" y="192" text-anchor="middle" fill="#55555f" font-size="9">4</text><text x="600" y="192" text-anchor="middle" fill="#55555f" font-size="9">5</text>
      <text x="0" y="36" fill="#f4f4f6">GPUS</text><rect x="100" y="26" width="40" height="14" fill="#8cbeff"/><text x="148" y="37" fill="#9a9aa4" font-size="9">3 TO 6 MONTHS</text>
      <text x="0" y="74" fill="#f4f4f6">TRANSFORMER</text><rect x="100" y="64" width="154" height="14" fill="rgba(255,255,255,.10)"/><rect x="254" y="64" width="250" height="14" fill="#be8cff"/><text x="512" y="75" fill="#9a9aa4" font-size="9">80 TO 210 WEEKS</text>
      <text x="0" y="112" fill="#f4f4f6">GAS TURBINE</text><rect x="100" y="102" width="300" height="14" fill="#be8cff"/><text x="408" y="113" fill="#9a9aa4" font-size="9">3 YEARS OR MORE</text>
      <text x="0" y="150" fill="#f4f4f6">INTERCONNECT</text><rect x="100" y="140" width="500" height="14" fill="#be8cff"/><text x="608" y="151" fill="#9a9aa4" font-size="9">5+ YRS MEDIAN</text>
    </g>
  </svg></div>
  <p class="card-meta mono fig-src">WOOD MACKENZIE 2024 · SIEMENS ENERGY VIA UTILITY DIVE 2026 · LBNL QUEUED UP 2026 · GPU LEAD TIME IS AN AUTHOR ESTIMATE</p>
</figure>

This is why the refinery analogy needs one correction before it is useful. In oil, the feedstock is cheap to move and the refinery is the fixed asset. In compute, the refinery is the thing you can build in eighteen months and the feedstock is the fixed asset. Abilene proves it in a single line: the compute was cancelled because the power was a year away.

So the strategic variable is not cost per kilowatt-hour. It is time to power. Cheap electricity matters only in the sense that jurisdictions with a surplus of it tend also to have it available, and available is the whole game.

---

## Part V. The geography flips

The petrodollar was an arrangement about direction. In July 1974 Treasury Secretary William Simon flew to Jeddah and, in a deal kept secret for 41 years, secured Saudi agreement to recycle oil revenue into US Treasuries outside the regular auctions in return for arms and security ([Bloomberg, via syndication](https://www.statesman.com/story/news/2016/09/03/the-untold-story-behind-saudi-arabias-41-year-u-s-debt-secret/10066775007/)). Oil flowed from producer to consumer, dollars flowed back, and dollars flowed back again as reserves. Half a century on, about 85 percent of the European Union's oil imports from outside the bloc are still invoiced in dollars ([ECB](https://www.ecb.europa.eu/pub/pdf/ire/focus/ecb.irebox201906_03~3e5a7878dd.en.pdf)).

The arrangement worked because crude moves. A tanker is a refinery's supply chain. The consumer states owned the refineries; the producer states owned the wells; the product travelled between them and the money travelled the other way. Energy went to capital.

Electricity does not move like that. High-voltage direct current can carry it a few thousand kilometres at a cost, but there is no tanker for electrons, no strategic reserve you can fill, and no spot cargo you can divert. If the feedstock cannot come to the refinery, the refinery must go to the feedstock. Capital goes to energy.

<figure class="post-fig">
  <p class="fig-title"><strong>The arrow reverses</strong></p>
  <p class="fig-sub">Under oil the feedstock travelled to the consumer state's refinery. Under compute the refinery travels to the power, and the product that leaves is weightless.</p>
  <div class="fig-scroll"><svg viewBox="0 0 700 230" role="img" aria-label="Top row: producer state ships barrels to a consumer state that owns the refinery and exports industrial output for dollars. Bottom row: the arrow reverses, capital and chips move to the cheap-power state, the data centre is built on site, and intelligence is exported over fibre.">
    <defs><marker id="p5d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#55555f"/></marker><marker id="p5e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8cbeff"/></marker></defs>
    <g font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.2">
      <text x="0" y="12" fill="#9a9aa4">PETRODOLLAR ORDER: THE FEEDSTOCK TRAVELS</text>
      <rect x="0" y="24" width="170" height="50" rx="4" fill="rgba(255,255,255,.10)"/><text x="85" y="45" text-anchor="middle" fill="#f4f4f6" font-size="10">PRODUCER STATE</text><text x="85" y="62" text-anchor="middle" fill="#9a9aa4">SELLS CRUDE FOR DOLLARS</text>
      <line x1="170" y1="49" x2="352" y2="49" stroke="#55555f" stroke-width="1.5" marker-end="url(#p5d)"/><text x="262" y="42" text-anchor="middle" fill="#9a9aa4">BARRELS MOVE</text>
      <rect x="354" y="24" width="170" height="50" rx="4" fill="rgba(255,255,255,.10)"/><text x="439" y="45" text-anchor="middle" fill="#f4f4f6" font-size="10">CONSUMER STATE</text><text x="439" y="62" text-anchor="middle" fill="#9a9aa4">OWNS THE REFINERIES</text>
      <line x1="524" y1="49" x2="566" y2="49" stroke="#55555f" marker-end="url(#p5d)"/><text x="572" y="45" fill="#f4f4f6">INDUSTRIAL OUTPUT</text><text x="572" y="61" fill="#9a9aa4">DOLLARS RECYCLED</text>

      <text x="0" y="132" fill="#8cbeff">COMPUTE ORDER: THE REFINERY TRAVELS</text>
      <rect x="0" y="144" width="170" height="50" rx="4" fill="none" stroke="#8cbeff" stroke-width="1.5"/><text x="85" y="165" text-anchor="middle" fill="#f4f4f6" font-size="10">CHEAP-POWER STATE</text><text x="85" y="182" text-anchor="middle" fill="#9a9aa4">ELECTRICITY STAYS HOME</text>
      <line x1="352" y1="169" x2="170" y2="169" stroke="#8cbeff" stroke-width="1.5" marker-end="url(#p5e)"/><text x="262" y="162" text-anchor="middle" fill="#8cbeff">CAPITAL AND CHIPS MOVE</text>
      <rect x="354" y="144" width="170" height="50" rx="4" fill="none" stroke="#8cbeff" stroke-width="1.5"/><text x="439" y="165" text-anchor="middle" fill="#f4f4f6" font-size="10">DATA CENTRE ON SITE</text><text x="439" y="182" text-anchor="middle" fill="#9a9aa4">THE REFINERY RELOCATES</text>
      <line x1="524" y1="169" x2="566" y2="169" stroke="#8cbeff" marker-end="url(#p5e)"/><text x="572" y="165" fill="#f4f4f6">INTELLIGENCE OUT</text><text x="572" y="181" fill="#8cbeff">OVER FIBRE, WEIGHTLESS</text>
      <text x="0" y="222" fill="#55555f">OIL REWARDED WHOEVER OWNED THE REFINERY. ELECTRICITY REWARDS WHOEVER OWNS GENERATION AND DELIVERY.</text>
    </g>
  </svg></div>
  <p class="card-meta mono fig-src">SCHEMATIC · AUTHOR</p>
</figure>

You can watch the reversal in the deal flow. OpenAI's Stargate programme has nearly seven gigawatts of US sites announced, more than 400 billion dollars committed, on the way to a stated ten ([OpenAI](https://openai.com/index/five-new-stargate-sites/)); Epoch AI's site-by-site tally projects more than nine gigawatts across seven American locations by 2029 ([Epoch AI](https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand)). The same programme is building a one gigawatt cluster in Abu Dhabi inside a five gigawatt campus, with the first 200 megawatts due this year ([OpenAI](https://openai.com/index/introducing-stargate-uae/)). Saudi Arabia's Humain launched with Nvidia at up to 500 megawatts, has since contracted for 600,000 GPUs over three years, and has told the Financial Times it targets 1.9 gigawatts by 2030 and 6.6 by 2034 on subsidised electricity ([Nvidia](https://nvidianews.nvidia.com/news/humain-and-nvidia-announce-strategic-partnership-to-build-ai-factories-of-the-future-in-saudi-arabia); [DCD](https://www.datacenterdynamics.com/en/news/saudi-arabias-ai-co-humain-looking-for-us-data-center-equity-partner-targets-66gw-by-2034-with-subsidized-electricity/)). China's "East Data, West Computing" programme routes non-real-time workloads to eight national hubs sited next to western solar and wind, and its data centre capacity is expected to double from 32 gigawatts at the end of 2025 to 60 by 2030 ([Carbon Brief](https://www.carbonbrief.org/explainer-how-china-is-managing-the-rising-energy-demand-from-data-centres); [Rystad](https://www.rystadenergy.com/news/chinas-data-center-capacity-doubling-of-power)).

Look at what those have in common. The refinery is being built where the electrons are, and the product leaves at the speed of light through fibre. Distance, which protected refining incumbents for a century, protects nobody now. A cheap-power state that once had to ship crude to be refined elsewhere can now refine intelligence at home and export it without a port.

And the petrodollar's original architects have noticed. The UAE's economy minister said it in October 2025 without euphemism: "AI is a state of sovereignty. Like you spend budgets on defence, on cyber, you have to spend budget on AI" ([Gulf News](https://gulfnews.com/business/ai-is-national-sovereignty-like-defence-or-cybersecurity-says-uae-minister-1.500305127)). The US Energy Secretary told Congress the AI race needs "all energy sources" and called it the next Manhattan Project ([FedScoop](https://fedscoop.com/energy-secretary-chris-wright-ai-manhattan-project/)). Huang's line to the Saudi audience was "AI is essential infrastructure, like electricity, every industry will use it, and every country will build it" ([Nvidia](https://www.prnewswire.com/news-releases/humain-expands-strategic-partnership-with-nvidia-advancing-global-ai-infrastructure-with-xai-global-ai-and-aws-at-the-us-saudi-investment-forum-302620854.html)).

Which brings us to the unit of account. Oil was priced in dollars per barrel, and the pricing was the power. What is compute priced in?

Not electricity, for the reason in Part IV. Tokens per dollar is the emerging retail unit, and it deflates tenfold a year. But the contracts that actually allocate the new order's scarce resource are not token contracts. They are power purchase agreements and interconnection rights: 20-year offtakes from a nuclear plant, a gigawatt of firm capacity at a substation, a slot in a turbine order book. Those are the new long-dated crude contracts, and they are denominated in megawatts and years. When I say the next order is priced in compute, I mean that the scarce thing being contracted for is delivered power converted into tokens, and that the balance sheets which hold those contracts will be the ones that get recognised. That is the collateral from Part II, now with its chemistry filled in.

---

## Part VI. Same refinery, six balance sheets

The comparison below reads each jurisdiction for the same two things: the pressure on its wires, and what it has committed to do about it. The register is deliberately flat, because the point is that the problem is the same everywhere and the balance sheets are not.

| Jurisdiction | Pressure signal | Response committed | Source |
|---|---|---|---|
| United States | 2,061 GW waiting in generation queues, median wait over 5 years; ERCOT tracking 410 GW of large loads, 87% data centres | Hyperscalers buying nuclear offtake and building on-site gas; 15 to 27 GW of on-site gas by 2030 | [LBNL](https://emp.lbl.gov/publications/queued-2026-edition-characteristics), [ERCOT](https://www.ercot.com/files/docs/2026/04/09/ERCOTLargeLoadUpdate-April9HouseStateAffairsHearing.pdf), [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) |
| China | First country past 10,000 TWh of consumption in 2025; internet-related power use up over 30% | State Grid 4 trillion yuan for 2026 to 2030, up 40%; data centre capacity 32 GW to 60 GW by 2030 | [State Council](https://english.www.gov.cn/archive/statistics/202601/17/content_WS696b548ec6d00ca5f9a08a0e.html), [China Daily](https://global.chinadaily.com.cn/a/202601/16/WS6969b2aea310d6866eb34243.html), [Rystad](https://www.rystadenergy.com/news/chinas-data-center-capacity-doubling-of-power) |
| European Union | Connection delays and congestion across member states | EUR 584 billion grid investment need this decade; Grids Package of December 2025 puts the figure at EUR 1.2 trillion to 2040 | [European Commission](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52023DC0757), [Council](https://www.consilium.europa.eu/en/press/press-releases/2026/06/26/european-grids-package-council-backs-modernised-energy-network-for-decarbonisation/) |
| India | Record peak of 270.8 GW on 21 May 2026 | INR 9.15 lakh crore, about 109 billion dollars, of transmission to 2032; 191,000 circuit-km of lines; planning for a 458 GW peak | [Down To Earth](https://www.downtoearth.org.in/energy/power-demand-tracker-india-meets-all-time-high-power-demand-of-2708-gw-renewable-energy-share-34), [PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2064751) |
| Gulf states | 38% of Saudi electricity still oil-fired; the region burning 1.8 million barrels a day for power | Humain 1.9 GW by 2030 and 6.6 GW by 2034 on subsidised power; 5 GW UAE-US campus with a 1 GW Stargate cluster | [EIA](https://www.eia.gov/international/content/analysis/countries_long/saudi_arabia/), [DCD](https://www.datacenterdynamics.com/en/news/saudi-arabias-ai-co-humain-looking-for-us-data-center-equity-partner-targets-66gw-by-2034-with-subsidized-electricity/), [OpenAI](https://openai.com/index/introducing-stargate-uae/) |
| Sub-Saharan Africa | 360 MW of active data centre capacity across the continent, 0.6% of the world's | South Africa's transmission plan: 14,494 km of new lines and 133 GVA of transformation to 2034; Kenya generating 47% of its electricity from geothermal | [ADCA](https://africadca.org/en/data-centres-in-africa-2026-the-economic-report), [NTCSA](https://www.ntcsa.co.za/wp-content/uploads/2024/12/TDP-2024-Public-Report_Rev1.pdf), [IEA](https://www.iea.org/reports/kenya-2024/executive-summary) |

Two rows deserve a second look. The Gulf row is the essay's thesis in one line: the states that invented the petrodollar are converting oil into electricity into compute on their own soil, at subsidised tariffs, because they have understood that the refinery now comes to the electron and they would rather host it than supply it. The last row is the inverse case, and it is instructive precisely because it is small: a region with a fraction of a percent of world compute but with some of the cheapest firm renewable generation on earth in specific places is the kind of arbitrage the reversal creates, and it will be claimed by whoever builds delivery first.

---

## The three positions

For an operator, the position is to treat power as a procurement discipline rather than a utility bill. The firms that will deploy intelligence at scale in 2028 are signing for megawatts in 2026, and the ones that assumed the grid would be there when the racks arrived are the ones writing Abilene-style press releases. If you run compute, own or contract your electrons on a horizon longer than your hardware's depreciation schedule, because the electrons are the asset that will not have depreciated.

For an investor, the position is to move down the stack from the conversion box to the delivery box, and to do it in the layer where a fund can actually own something. The trade is not "buy utilities." It is the equipment with a three-year backlog, the delivery capacity that turns a queue into a connection, and the software that makes existing wires carry more. That last layer is the subject of Part VI, because it is the one that is venture-shaped.

For a state, the position is to recognise that the export product of the next order is weightless and the input is immovable, and to price sovereignty accordingly. Every jurisdiction in the table above has already done this arithmetic in its budget. The ones that have not are the ones that still think of electricity as a cost of living rather than as a term of trade.

---

## How this could be wrong

This is a thesis, so it can lose, and there are four ways it loses.

The first is that the demand is mis-forecast. Grid Strategies estimates that the data centre portion of US utility load forecasts is overstated by roughly 25 gigawatts, because the same project is often counted by several utilities and load factors are set unrealistically high ([Grid Strategies](https://gridstrategiesllc.com/wp-content/uploads/Grid-Strategies-National-Load-Growth-Report-2025.pdf)). RMI notes that ERCOT's data centres have historically reached only about half of their requested load, and that developers asked AEP Ohio for 30 gigawatts and signed for 5.6 ([RMI](https://rmi.org/resources/planners-have-tools-to-manage-large-load-forecast-uncertainty-are-they-working/)). If the queues are inflated by speculative applications, the constraint is bureaucratic rather than physical, and it clears when the forecasts are cleaned.

The second is efficiency. Altman's own figure for an average query is 0.34 watt-hours ([Altman](https://blog.samaltman.com/the-gentle-singularity)), and tokens per kilowatt-hour are rising with every hardware generation. If that curve outruns demand, the refinery shrinks faster than the feedstock is constrained, and the essay becomes a story about 2025 rather than about the decade.

The third is that chips are still binding. The IEA expects the high-bandwidth memory shortage to persist through at least the end of 2027 ([IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)). If memory, not megawatts, decides who deploys in 2027, then power is the constraint people talk about and silicon is the one that actually holds.

The fourth is the one that would preserve the electricity thesis while killing the grid thesis: on-site generation. If the 15 to 27 gigawatts of behind-the-meter gas becomes 50, and small modular reactors arrive on schedule, the refinery brings its own boiler and never queues at all. The arrow still reverses, but it points at gas fields and uranium rather than at wires. I think this is the most likely partial failure, and it is why the next essay is about the wires specifically.

I hold the thesis with the four caveats attached rather than despite them. If you can show me which one breaks first, write to info@selfbuiltsystems.com with the number and the source. Short and specific gets an answer.

The order that was built on oil priced in dollars lasted fifty years because barrels move. The one being built now runs on a feedstock that does not. That single physical fact is rearranging where refineries get built, who owns them, and what the contracts that allocate them are written in. Watch where the transformers go. The capital is already following them.

*Architecting Alpha is published in the spirit of bold conjecture and ruthless criticism. Every claim is linked to its source. Where a figure is an author estimate or an analyst projection rather than a measurement, this essay says so.*
