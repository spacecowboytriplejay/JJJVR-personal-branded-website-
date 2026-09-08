---
title: The Grid Becomes Venture-Shaped
slug: the-grid-becomes-venture-shaped
date: 2026-09-10
description: Four loads are landing on the world's wires in the same decade and only one of them can wait. There are three ways to respond, venture capital can live in two, and the reason those two are open is that utilities are paid to pour concrete, not to write software.
image: /assets/images/the-grid-becomes-venture-shaped.jpg
imageAlt: A transmission corridor of lattice towers and receding conductors with a single bright instrumented line running through it, the software layer laid over the wires
tags: [ai, energy, infrastructure, venture capital]
---

**In December 2025 a software company that was born inside a utility was spun out at a valuation of 8.65 billion dollars. In the same year the investor-owned utilities of the United States spent a record 204 billion dollars on capital projects and planned 239 billion for the next. Those two numbers describe the same industry and they do not describe the same business. The gap between them is where venture capital has just found a seat.**

*Architecting Alpha, Part VI*

Part V argued that the binding input on artificial intelligence is delivered electricity, that it is the one input you cannot buy on a purchase order, and that the capital is therefore moving to where the electrons are. This essay is about the wires themselves. It asks a narrower and more practical question: in an asset class that was uninvestable for venture capital for two decades, regulated by design and slow by design, what exactly changed, and where inside it can a fund actually own something?

The short answer is that the grid did not change. The load did. Four demand vectors that used to arrive one at a time are arriving together, one of them cannot flex, and the responses available to a system operator sort themselves cleanly by cost and by time. Two of the three responses are venture-shaped. The reason they are open is an incentive that has been sitting in the economics literature since 1962.

---

## The claim, and how it fails

**Grids everywhere face the same four loads at once: cooling, manufacturing, transport and AI. There are three responses, in ascending order of speed and descending order of capital: build more wires, make the existing wires carry more, and shape the demand so the wires are needed less. Venture capital cannot own the first, because it is regulated capex on a utility balance sheet. It can own the second and third, because they are sensors, software and control. Those two layers are open to new entrants in nearly every jurisdiction for one structural reason: regulated utilities earn a return on capital deployed, not on capacity unlocked, so they under-invest in anything that reduces the need for capital.**

That claim fails if the optimisation layer proves marginal relative to the problem, a 20 percent uplift on a line that needs to double. It fails if the load forecasts that create the urgency are inflated, so the queues clear on their own. It fails if regulators fix the incentive, in which case utilities adopt the technologies themselves and the startups selling them become suppliers on thin margins. And it fails if the largest loads simply bypass the grid with their own generation, which would leave the wires with a slower problem and the software with a smaller market. Each is taken up at the end.

---

## Part I. What a grid is, and why nobody looked

A grid is the physical network that moves electricity from where it is generated to where it is used: transmission lines at high voltage over long distances, substations and transformers that step the voltage down, distribution feeders that reach the plug. Its economics have been the same for a century. A utility is granted a monopoly over a territory, a regulator sets the return it may earn, and that return is earned on the capital it has invested, the rate base.

Averch and Johnson showed in 1962 what that arrangement does to a firm's behaviour: when the allowed return exceeds the cost of capital, the regulated firm has an incentive to over-invest in capital relative to other inputs, because capital is what it is paid on ([Averch and Johnson, American Economic Review, 1962](https://www.jstor.org/stable/1812181)). The effect has a name in every regulatory economics course and it has never gone away. The Bipartisan Policy Center put the modern version plainly this January: utilities "have a bias toward capital expenditures (such as building new transmission) that are eligible for rate base"; because grid-enhancing technologies "are typically considered operational investments, not capital expenditures, utilities do not earn a rate of return for deploying them"; and since "rates are nonvolumetric, more MWs flowing through a transmission line does not equate to more revenue for the utility" ([Bipartisan Policy Center](https://bipartisanpolicy.org/issue-brief/unlocking-the-potential-of-grid-enhancing-technologies-pathways-to-widespread-adoption/)).

For twenty years that structure produced an industry with low growth, predictable returns and nothing for a venture investor to buy. The International Energy Agency's 2023 grids report described the consequence at planetary scale: to hit stated climate and energy security goals, the world has to add or refurbish more than 80 million kilometres of grid by 2040, roughly the entire existing global network, and grid investment needs to nearly double to over 600 billion dollars a year by 2030. At the time of writing, at least 3,000 gigawatts of renewable projects were waiting in connection queues, 1,500 of them at advanced stages ([IEA](https://www.iea.org/reports/electricity-grids-and-secure-energy-transitions/executive-summary)).

The wires were already the constraint before AI arrived. AI is what made the constraint urgent, and urgency is what makes a market.

---

## Part II. Four loads, one set of wires

The pressure is not one thing. It is four things with four different daily shapes, and the shapes matter more than the totals.

**Cooling.** The IEA has called air conditioning the fastest-growing use of energy in buildings; cooling already accounts for about a tenth of all global electricity, and the world's stock of air conditioners is projected to rise from 1.6 billion units to 5.6 billion by 2050 ([IEA](https://www.iea.org/reports/the-future-of-cooling); [IEA](https://www.iea.org/news/air-conditioning-use-emerges-as-one-of-the-key-drivers-of-global-electricity-demand-growth)). In India, where about one household in five owns a unit, cooling is a tenth of annual demand but a third of consumption on hot summer nights, and the IEA expects it to more than double by 2035 ([IEA](https://www.iea.org/commentaries/india-s-electricity-demand-grows-at-night-managing-rising-cooling-demand)). Cooling's shape is an evening peak that lands exactly when solar leaves.

**Manufacturing.** US manufacturing construction spending hit a record 233 billion dollars in 2024, up 20 percent in a year ([US Census Bureau](https://www.census.gov/construction/c30/pdf/pr202412.pdf)), before rolling over in 2026 ([Census](https://www.census.gov/construction/c30/pdf/release.pdf)). A single semiconductor fab is a power plant's worth of load: TSMC's first Arizona phase draws roughly 200 megawatts and the full campus could exceed a gigawatt ([CSIS](https://www.csis.org/analysis/energy-considerations-dawn-strategic-manufacturing)). Behind that sits industrial heat, only about 5 percent of which is electrified today; electrifying all of it would add at least 6,000 terawatt-hours to US demand, more than the country's entire current consumption ([ACEEE](https://www.aceee.org/wp-content/uploads/2026/05/how_to_decarbonize_industrial_process_heat_while_building_american_manufacturing_competitiveness.pdf)). Manufacturing's shape is flat and heavy.

**Transport.** Electric cars passed 20 million sales in 2025, a quarter of the global market, and close to 55 percent of new cars in China ([IEA Global EV Outlook 2026](https://www.iea.org/reports/global-ev-outlook-2026/executive-summary); [IEA](https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars)). The fleet drew about 250 terawatt-hours in 2025, roughly 1 percent of global electricity, on its way past 1,500 terawatt-hours by 2035 ([IEA](https://www.iea.org/reports/global-ev-outlook-2026/outlook-for-electric-mobility-chap-9-11)). Transport's shape is a night trough that can be moved almost anywhere if the price tells it to.

**AI.** Data centres consumed 485 terawatt-hours in 2025 and are heading to roughly 950 by 2030 ([IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)). The largest sites under construction will draw twenty times what a typical data centre draws today ([IEA](https://www.iea.org/reports/energy-and-ai/executive-summary)). ERCOT is tracking about 410 gigawatts of large loads seeking connection, 87 percent of them data centres ([ERCOT](https://www.ercot.com/files/docs/2026/04/01/ERCOT_LargeLoad_Update_April2026_B-C_-Hearing.pdf)), and its vice president has said the surge has "outgrown the process that was established for reviewing these large loads" ([Utility Dive](https://www.utilitydive.com/news/ercots-large-load-queue-jumped-almost-300-last-year-official/808820/)). PJM's ten-year growth forecast has gone from 0.3 percent a year in 2021 to 3.6 percent ([PJM](https://insidelines.pjm.com/pjms-updated-20-year-forecast-continues-to-see-significant-long-term-load-growth/)). AI's shape is a flat line at full height, twenty-four hours a day, and it does not move for price.

| Load | Daily shape | Can it flex? | Scale signal | Source |
|---|---|---|---|---|
| Cooling | Evening peak, worst on hot nights | Partly, with efficiency and pre-cooling | 10% of global electricity; 5.6bn units by 2050 | [IEA](https://www.iea.org/reports/the-future-of-cooling) |
| Manufacturing | Flat, continuous | Barely | A fab at 200 MW to 1 GW | [CSIS](https://www.csis.org/analysis/energy-considerations-dawn-strategic-manufacturing) |
| Transport | Night trough, movable | Yes, if priced | 250 TWh in 2025 to 1,500+ by 2035 | [IEA](https://www.iea.org/reports/global-ev-outlook-2026/outlook-for-electric-mobility-chap-9-11) |
| AI and data centres | Flat at full height, 24/7 | No, for training and most inference | 485 TWh in 2025 to ~950 by 2030 | [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) |

<figure class="post-fig">
  <p class="fig-title"><strong>Four loads, one set of wires, the same decade</strong></p>
  <p class="fig-sub">Three of the four loads can be shaped. AI cannot, which is what turns a slow utility problem into an urgent one.</p>
  <div class="fig-scroll"><svg viewBox="0 0 700 230" role="img" aria-label="Four demand vectors, cooling, manufacturing, transport and AI, converge on a single box labelled the grid, which has fixed capacity today and takes years to expand. AI is highlighted as the one load that cannot flex.">
    <defs><marker id="p6a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#55555f"/></marker><marker id="p6b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8cbeff"/></marker></defs>
    <g font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.2">
      <rect x="0" y="14" width="200" height="38" rx="3" fill="rgba(255,255,255,.10)"/><text x="10" y="30" fill="#f4f4f6" font-size="10">1 COOLING</text><text x="10" y="45" fill="#9a9aa4">EVENING PEAK, PARTLY FLEXIBLE</text>
      <rect x="0" y="64" width="200" height="38" rx="3" fill="rgba(255,255,255,.10)"/><text x="10" y="80" fill="#f4f4f6" font-size="10">2 MANUFACTURING</text><text x="10" y="95" fill="#9a9aa4">FLAT, HEAVY, BARELY FLEXIBLE</text>
      <rect x="0" y="114" width="200" height="38" rx="3" fill="rgba(255,255,255,.10)"/><text x="10" y="130" fill="#f4f4f6" font-size="10">3 TRANSPORT</text><text x="10" y="145" fill="#9a9aa4">NIGHT TROUGH, MOVABLE IF PRICED</text>
      <rect x="0" y="164" width="200" height="38" rx="3" fill="none" stroke="#8cbeff" stroke-width="1.5"/><text x="10" y="180" fill="#f4f4f6" font-size="10">4 AI AND DATA CENTRES</text><text x="10" y="195" fill="#8cbeff">FLAT AT FULL HEIGHT, 24/7, NO FLEX</text>
      <g stroke="#55555f"><line x1="200" y1="33" x2="330" y2="96" marker-end="url(#p6a)"/><line x1="200" y1="83" x2="330" y2="104" marker-end="url(#p6a)"/><line x1="200" y1="133" x2="330" y2="112" marker-end="url(#p6a)"/></g>
      <line x1="200" y1="183" x2="330" y2="120" stroke="#8cbeff" stroke-width="1.5" marker-end="url(#p6b)"/>
      <rect x="332" y="66" width="150" height="84" rx="3" fill="none" stroke="#be8cff" stroke-width="1.5"/>
      <text x="407" y="98" text-anchor="middle" fill="#f4f4f6" font-size="11">THE GRID</text>
      <text x="407" y="116" text-anchor="middle" fill="#9a9aa4">FIXED CAPACITY TODAY</text>
      <text x="407" y="131" text-anchor="middle" fill="#be8cff">YEARS TO EXPAND</text>
      <line x1="482" y1="108" x2="524" y2="108" stroke="#55555f" marker-end="url(#p6a)"/>
      <text x="532" y="92" fill="#f4f4f6" font-size="10">PEAK RISES FASTER</text><text x="532" y="107" fill="#f4f4f6" font-size="10">THAN LINES GET BUILT</text>
      <text x="532" y="128" fill="#9a9aa4">SAME FOUR LOADS IN THE US,</text><text x="532" y="142" fill="#9a9aa4">CHINA, THE EU AND INDIA</text>
      <text x="0" y="222" fill="#55555f">INDIA'S PEAK HIT 270.8 GW ON 21 MAY 2026; ITS TRANSMISSION PLAN TARGETS A 458 GW PEAK BY 2032.</text>
    </g>
  </svg></div>
  <p class="card-meta mono fig-src">IEA · ERCOT · PJM · DOWN TO EARTH CITING GRID-INDIA</p>
</figure>

India is the cleanest single specimen of the stack, which is why it appears in the figure. Peak demand hit a record 270.8 gigawatts on 21 May 2026, with coal supplying 171.7 of them and renewables 34 percent of the peak ([Down To Earth, citing Grid-India](https://www.downtoearth.org.in/energy/power-demand-tracker-india-meets-all-time-high-power-demand-of-2708-gw-renewable-energy-share-34)). The national transmission plan is built for a 458 gigawatt peak by 2032 ([Ministry of Power](https://x.com/MinOfPower/status/1877726926913028247)). That is a system planning to add roughly 190 gigawatts of peak in six years, with all four loads contributing.

---

## Part III. Response one: build more

Every jurisdiction with the problem is doing this, and the numbers are the largest in the essay.

China's State Grid has committed 4 trillion yuan, about 553 billion dollars at January exchange rates, to fixed-asset investment across 2026 to 2030, a 40 percent increase on the previous five-year plan, with cross-regional transmission capacity to rise more than 30 percent through ultra-high-voltage direct current ([China Daily](https://global.chinadaily.com.cn/a/202601/16/WS6969b2aea310d6866eb34243.html)). The European Commission's own estimate is 584 billion euros of grid investment needed this decade ([European Commission](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52023DC0757)), and the December 2025 Grids Package extends the horizon with an estimated 100,000 kilometres of new lines and more than half of the 2030 transmission projects still without permits ([ENTSO-E](https://www.entsoe.eu/european-grids-package/)). India's plan is 9.15 lakh crore rupees, about 109 billion dollars, to 2032, taking the network from 4.85 to 6.48 lakh circuit-kilometres and nearly doubling transformation capacity ([PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2064751); [IBEF](https://www.ibef.org/news/india-sets-a-us-109-50-billion-rs-9-15-lakh-crore-blueprint-for-power-sector-to-meet-458-gw-demand-by-2032)). US investor-owned utilities spent a record 204 billion dollars in 2025 and project 1.4 trillion across 2026 to 2030 ([EEI](https://www.electricperspectives.com/capital-expenditures-grid-investment/)). South Africa's transmission plan calls for 14,494 kilometres of new lines and 133 gigavolt-amperes of transformation over ten years, with the first 1,164 kilometres put out to private bidders ([NTCSA](https://www.ntcsa.co.za/wp-content/uploads/2024/12/TDP-2024-Public-Report_Rev1.pdf); [Engineering News](https://www.engineeringnews.co.za/article/lawmakers-updated-on-plans-to-procure-first-independent-transmission-projects-2025-05-28)).

None of this is venture-shaped, and it is important to be precise about why. It is not that the sums are large. It is that the returns are regulated, the assets are owned by the monopoly or by the state, and the timelines are set by permitting and by the supply chain rather than by the company. A large transformer took 120 weeks on average in 2024, and 80 to 210 for the biggest units, up from about 50 in 2021 ([Wood Mackenzie](https://www.woodmac.com/news/opinion/supply-shortages-and-an-inflexible-market-give-rise-to-high-power-transformer-lead-times/)). The median US generation project connected in 2025 had waited more than five years, and only 13 percent of everything that applied between 2000 and 2020 was ever built ([LBNL](https://emp.lbl.gov/publications/queued-2026-edition-characteristics)). FERC's Order 1920 now requires transmission providers to plan on a 20-year horizon with at least three scenarios ([FERC](https://www.ferc.gov/explainer-transmission-planning-and-cost-allocation-final-rule)). Twenty-year planning is a good thing. It is not a venture fund's timeline.

This layer belongs to utility balance sheets, infrastructure funds, sovereign wealth and the equipment makers with three-year backlogs. It will absorb trillions and it will be slow. Which is precisely why the next two layers exist.

---

## Part IV. Response two: make the existing wires carry more

A transmission line's rating is a number on a piece of paper. It was set conservatively, for a hot, still day, when the line was built. On most days, in most weather, the conductor can carry considerably more than that number, and nobody knows by how much because nobody is measuring. Grid-enhancing technologies are the sensors and software that measure, and then let the operator use what was always there.

The evidence base is unusually clean for an infrastructure category. Brattle's study for the WATT Coalition found that dynamic line rating gives about 20 percent more capacity than the static rating for 90 percent of operating hours; that a one million dollar DLR deployment on a PPL line substituted for 20 to 60 million dollars of reconductoring or rebuild; and that in the Southwest Power Pool, 90 million dollars of grid-enhancing technologies enabled 5,200 megawatts of new generation where more than a billion dollars of conventional transmission would otherwise have been needed, with the production-cost savings paying back the investment in six months ([Brattle](https://www.brattle.com/wp-content/uploads/2023/04/Building-a-Better-Grid-How-Grid-Enhancing-Technologies-Complement-Transmission-Buildouts.pdf)). RMI's study of PJM found the same technologies could connect 6.6 gigawatts of queued projects and save about a billion dollars a year across thirteen states, and that they "can be deployed in a matter of months" ([RMI](https://rmi.org/press-release/rmi-study-reveals-large-opportunity-for-clean-energy-and-customer-savings-in-pjm-by-deploying-gets/)). The Department of Energy's own liftoff analysis puts dynamic line rating at a 10 to 30 percent capacity gain for under 5 percent of the cost of a rebuild, and estimates that each of the advanced grid technologies could add 20 to 100 gigawatts of peak capacity on the existing system ([DOE](https://www.energy.gov/articles/doe-releases-new-report-accelerating-deployment-grid-solutions-lower-costs-and-improve)).

Reconductoring, the hardware end of the same idea, is larger still. Replacing conductors on existing towers with advanced composite-core cable roughly doubles a line's capacity without a new right of way. The Berkeley and GridLab study found that reconductoring could add about 64 terawatt-miles of new inter-zonal capacity by 2035 against about 16 from building new lines alone, at 85 billion dollars of system savings, and in 18 months to 3 years rather than 5 to 15 ([GridLab and UC Berkeley](https://www.2035report.com/wp-content/uploads/2024/04/GridLab_2035-Reconductoring-Technical-Report.pdf)).

<figure class="post-fig">
  <p class="fig-title"><strong>Three responses, plotted where a fund can live</strong></p>
  <p class="fig-sub">Building new lines is 5 to 15 years and regulated capex. Optimising existing lines is months and under 5 percent of rebuild cost. Bending demand sits between. Venture sits in the bottom-left.</p>
  <div class="fig-scroll"><svg viewBox="0 0 700 270" role="img" aria-label="Chart with time to deploy on the horizontal axis from months to fifteen years and capital per megawatt unlocked on the vertical axis. Build more sits top right, regulated and slow. Optimise what exists sits bottom left, months and cheap, marked venture-shaped. Bend demand sits in the middle, also marked venture-shaped.">
    <g font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.2">
      <line x1="50" y1="16" x2="50" y2="220" stroke="rgba(255,255,255,.08)"/><line x1="50" y1="220" x2="690" y2="220" stroke="rgba(255,255,255,.08)"/>
      <text x="14" y="120" fill="#55555f" transform="rotate(-90 14 120)" text-anchor="middle">CAPITAL PER MW UNLOCKED</text>
      <text x="370" y="242" fill="#55555f" text-anchor="middle">TIME TO DEPLOY</text>
      <text x="56" y="234" fill="#55555f">MONTHS</text><text x="690" y="234" fill="#55555f" text-anchor="end">5 TO 15 YEARS</text>
      <rect x="470" y="26" width="216" height="72" rx="3" fill="rgba(255,255,255,.10)"/>
      <text x="578" y="46" text-anchor="middle" fill="#f4f4f6" font-size="10">A. BUILD MORE</text>
      <text x="578" y="62" text-anchor="middle" fill="#9a9aa4">LINES, SUBSTATIONS, PLANTS</text>
      <text x="578" y="76" text-anchor="middle" fill="#9a9aa4">UTILITY AND SOVEREIGN CAPEX</text>
      <text x="578" y="90" text-anchor="middle" fill="#9a9aa4">NOT VENTURE-SHAPED</text>
      <rect x="60" y="136" width="216" height="72" rx="3" fill="none" stroke="#8cbeff" stroke-width="1.5"/>
      <text x="168" y="156" text-anchor="middle" fill="#f4f4f6" font-size="10">B. OPTIMISE WHAT EXISTS</text>
      <text x="168" y="172" text-anchor="middle" fill="#9a9aa4">DLR, TOPOLOGY, RECONDUCTORING</text>
      <text x="168" y="186" text-anchor="middle" fill="#9a9aa4">UNDER 5% OF REBUILD COST</text>
      <text x="168" y="200" text-anchor="middle" fill="#8cbeff">VENTURE-SHAPED</text>
      <rect x="290" y="88" width="166" height="72" rx="3" fill="none" stroke="#8cbeff" stroke-width="1.5"/>
      <text x="373" y="108" text-anchor="middle" fill="#f4f4f6" font-size="10">C. BEND DEMAND</text>
      <text x="373" y="124" text-anchor="middle" fill="#9a9aa4">BATTERIES, VPPS, TARIFFS</text>
      <text x="373" y="138" text-anchor="middle" fill="#9a9aa4">CONTROL LAYER</text>
      <text x="373" y="152" text-anchor="middle" fill="#8cbeff">VENTURE-SHAPED</text>
      <text x="50" y="262" fill="#55555f">DLR: 10 TO 30% MORE CAPACITY FOR UNDER 5% OF REBUILD COST. NEW LINES: 5 TO 15 YEARS.</text>
    </g>
  </svg></div>
  <p class="card-meta mono fig-src">DOE LIFTOFF 2024 · BRATTLE 2023 · GRIDLAB 2024 · POSITIONS ARE SCHEMATIC</p>
</figure>

The money has started to arrive, in venture-sized cheques with utility and hyperscaler strategics on the cap tables. Heimdall Power raised 25 million dollars for line sensors it says lift capacity by 40 percent on average, across 40 utilities in 17 countries ([Heimdall](https://www.heimdallpower.com/news/heimdall-power-raises-25-million-usd-series-b-to-accelerate-power-grid-optimization-globally)). TS Conductor raised 60 million from Wellington, Breakthrough Energy, National Grid Partners, Quanta, NextEra and Edison to build advanced conductor in the United States ([TS Conductor](https://www.prweb.com/releases/ts-conductor-raises-60-million-from-industry-leading-investors-to-expand-us-production-of-high-capacity-power-lines-302207238.html)). Smart Wires took 65 million of growth capital explicitly to serve data centre demand ([DCD](https://www.datacenterdynamics.com/en/news/smart-wires-raises-65m-to-scale-grid-solutions-for-data-center-market/)). Splight raised 12.4 million for machine-learning topology control over more than 3 gigawatts of assets ([Splight](https://www.prnewswire.com/news-releases/splight-raises-12-4m-to-expand-transmission-capacity-with-machine-learning-amid-surging-demand-from-data-centers-and-utilities-302538185.html)). LineVision's Series C brought in Microsoft's climate fund and National Grid Partners ([LineVision](https://www.linevisioninc.com/news/linevision-announces-33m-series-c-in-growth-capital-to-accelerate-the-net-zero-grid)). Across the category, Sightline counted 40.5 billion dollars of climate-tech venture and growth investment in 2025, with energy at 14.4 billion, up 31 percent to a three-year high, and described the capital as "anchored to electrons, not emissions" ([Sightline Climate](https://www.currence.ai/blog/40-5bn-and-8-uptick-as-power-demand-drives-25-investment)).

| Company | Layer | Round | Backers of note | Source |
|---|---|---|---|---|
| Heimdall Power | Line sensors, DLR | $25M Series B | Orlen, NRP Zero | [Heimdall](https://www.heimdallpower.com/news/heimdall-power-raises-25-million-usd-series-b-to-accelerate-power-grid-optimization-globally) |
| TS Conductor | Advanced conductors | $60M | Wellington, Breakthrough, NextEra, Quanta | [PRWeb](https://www.prweb.com/releases/ts-conductor-raises-60-million-from-industry-leading-investors-to-expand-us-production-of-high-capacity-power-lines-302207238.html) |
| Smart Wires | Power flow control | $65M growth | BP Energy Partners | [DCD](https://www.datacenterdynamics.com/en/news/smart-wires-raises-65m-to-scale-grid-solutions-for-data-center-market/) |
| Splight | Topology optimisation software | $12.4M | Blue Bear Capital | [PR Newswire](https://www.prnewswire.com/news-releases/splight-raises-12-4m-to-expand-transmission-capacity-with-machine-learning-amid-surging-demand-from-data-centers-and-utilities-302538185.html) |
| LineVision | Non-contact line monitoring | $33M Series C | Microsoft Climate Innovation Fund, National Grid Partners | [LineVision](https://www.linevisioninc.com/news/linevision-announces-33m-series-c-in-growth-capital-to-accelerate-the-net-zero-grid) |
| Amperon | Load forecasting | $20M Series B | Energize Capital | [Amperon](https://www.amperon.co/newsroom/amperon-raises-20-million-series-b-to-accelerate-energy-analytics-and-grid-decarbonization) |

Note what these rounds are not. They are not billion-dollar infrastructure raises. They are software and sensor businesses, selling into a customer that has just discovered it needs capacity in months rather than years, with strategic investors who are also the customers. That is what venture-shaped looks like in a regulated industry: the fund does not own the line, it owns the thing that makes the line worth 20 percent more.

The policy side is moving, slowly, and the slowness is itself evidence for the incentive argument in Part VI. FERC's Order 881 required ambient-adjusted ratings, the softer cousin of DLR, with compliance due in July 2025; the commission granted "numerous extensions," PJM only fully implemented in March 2026, and MISO and NYISO are not expected until 2028 ([Carbon Direct](https://www.carbon-direct.com/insights/dynamic-line-rating-the-fastest-gigawatt-is-the-one-you-already-have)). The DLR rulemaking itself has sat at the advance-notice stage since June 2024 ([FERC](https://www.ferc.gov/explainer-implementation-dynamic-line-ratings)). The Department of Energy opened a 1.9 billion dollar programme in March 2026 with reconductoring and advanced transmission technologies in the title ([Holland and Knight](https://www.hklaw.com/en/insights/publications/2026/03/doe-releases-1-9-billion-funding-opportunity-for-grid-upgrades)). The technology is proven, the money is available, and adoption is still measured in single lines per utility. That is not a technology gap. It is an incentive gap, and the next section names it.

---

## Part V. Response three: bend the demand

The third response does not touch the wires at all. It changes when and where the load arrives, so that the wires are needed less at the moment they are scarcest.

Batteries are the hardware end. BloombergNEF's 2025 survey put average pack prices at 108 dollars per kilowatt-hour, with stationary storage packs at 70, down 45 percent in a year ([BNEF](https://about.bnef.com/insights/clean-transport/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour-despite-rising-metal-prices-bloombergnef/)). Global battery additions reached 108 gigawatts in 2025, up around 40 percent, with China at 63 and the United States near 19 ([IEA](https://www.iea.org/commentaries/battery-storage-is-scaling-up-and-taking-on-a-larger-system-role)). US utility-scale storage added a record 15 gigawatts in 2025 with 24 planned for 2026 ([EIA](https://www.eia.gov/todayinenergy/detail.php?id=67205)). On 9 July 2026 batteries discharged 12.99 gigawatts into the California grid, 36 percent of the system's demand at that moment ([SEIA](https://seia.org/blog/6-records-solar-and-storage-have-crushed-in-the-first-half-of-2026/)). A battery is a line you did not have to build, because it moves solar noon to the cooling peak.

Virtual power plants are the software end, and the more interesting one for a venture investor because the value is in aggregation and control rather than in cells. The Department of Energy's liftoff report estimated that tripling VPP deployment to 80 to 160 gigawatts by 2030 could absorb a share of more than 200 gigawatts of peak demand growth and cut grid costs by 10 billion dollars a year ([DOE](https://www.energy.gov/edf/articles/doe-releases-new-report-pathways-commercial-liftoff-virtual-power-plants)). On 29 July 2025 a single two-hour test dispatched 535 megawatts from home batteries across California's three utilities ([PG&E](https://www.pge.com/en/newsroom/currents/future-of-energy/power-to-the-people--california-s-biggest-battery-test-ever-just.html)). Sunrun now runs 416 megawatts of peak VPP capacity from more than 106,000 customers, up from about 20,000 a year earlier, and dispatched more than 1,300 times in 2025 ([Sunrun](https://investors.sunrun.com/news-events/press-releases/detail/361/sunrun-builds-the-nations-largest-distributed-power)). Demand response is already a market-clearing resource: PJM's latest capacity auction cleared 7,299 megawatts of it at 333 dollars per megawatt-day ([PJM](https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2025-releases/20251217-pjm-auction-procures-134479-mw-of-generation-resources.pdf)), and ERCOT counts about 4,100 megawatts of demand response, with 64 percent of its emergency response service coming from crypto miners ([ERCOT](https://www.ercot.com/files/docs/2026/04/13/11.1-Strategic-Discussion-on-Resource-Adequacy-and-the-Role-of-Demand-Response.pdf)).

And then there is the deal from the first paragraph. Kraken began as the software Octopus Energy built to run its own retail business. It now serves more than 70 million household and business accounts under licence to EDF, E.ON, National Grid's US business, Origin and Tokyo Gas, with 500 million dollars of committed annual revenue ([Kraken](https://www.kraken.tech/press-releases/octopus-energy-group-to-spin-off-kraken)), and it was spun out at 8.65 billion dollars in a round led by D1 Capital ([Ontario Teachers'](https://www.otpp.com/en-ca/about-us/news-and-insights/2026/octopus-energy-group-to-spin-out-kraken-at-valuation-of-8-65bn/)). That is the existence proof. A software layer, born inside a utility, licensed to its competitors, valued like a technology company. The control layer of the grid is a venture asset because one already got priced.

---

## Part VI. Why the white space is open everywhere

The obvious explanation for why startups can sell grid software is that utilities are slow. That explanation is easy to vary and therefore weak: it would predict the gap closes as utilities modernise, and it says nothing about which jurisdictions it holds in.

The hard-to-vary explanation is the one from 1962. A regulated utility earns its return on capital deployed, not on capacity delivered. Anything that unlocks capacity without deploying capital is, to its income statement, a cost with no offsetting revenue, and it competes with the rebuild that would have gone into rate base. Senator Angus King put it to FERC's commissioners in July: transmission owners "have an incentive to invest as much as possible ... to earn as much return as possible," and the fix is "some kind of incentive to the companies to make these investments," a shared-savings mechanism; FERC responded by forming a task force on GETs incentives ([Utility Dive](https://www.utilitydive.com/news/ferc-grid-enhancing-technology-incentives-atts-senate-hearing/825992/)). PPL, the utility in Brattle's headline case, has deployed dynamic line rating on nine congested lines since 2022 ([Carbon Direct](https://www.carbon-direct.com/insights/dynamic-line-rating-the-fastest-gigawatt-is-the-one-you-already-have)). Nine, at the company that proved it works.

This explanation predicts three things, and all three are observed. It predicts that adoption is slow even where the evidence is overwhelming, which Order 881's extensions confirm. It predicts that the buyers who move first are not utilities but the parties who bear the cost of the queue, which is why the strategic investors in the deal table are hyperscaler climate funds, developers and equipment makers rather than the transmission owners. And it predicts that the gap exists in every jurisdiction with rate-of-return regulation, and is different in kind, not absent, where the grid is a state monopoly: China's State Grid does not face the Averch-Johnson incentive, and it is answering the same four loads with ultra-high-voltage capex rather than with software, which is exactly what a state-owned builder with no return-on-capital constraint would do.

That last point sets the boundary of the thesis. The optimisation layer is open where the grid is regulated for return. It is a different, smaller opportunity where the grid is a state instrument, and a different, larger one where the grid barely exists and delivery, not optimisation, is the whole problem.

---

## Part VII. Same loads, six balance sheets

| Jurisdiction | The load | Build response | Where the software layer sits | Source |
|---|---|---|---|---|
| United States | ERCOT 410 GW of large-load requests; PJM growth 3.6% a year from 0.3% | IOU capex $1.4tn 2026 to 2030; 2,061 GW queued, median wait 5+ years | Open; rate-of-return utilities, FERC incentive task force just formed | [ERCOT](https://www.ercot.com/files/docs/2026/04/01/ERCOT_LargeLoad_Update_April2026_B-C_-Hearing.pdf), [EEI](https://www.electricperspectives.com/capital-expenditures-grid-investment/), [LBNL](https://emp.lbl.gov/publications/queued-2026-edition-characteristics) |
| China | Past 10,000 TWh of consumption; internet-related use up 30% | State Grid 4tn yuan 2026 to 2030, UHV cross-region capacity up 30% | Narrow; state builder answers with capex, 63 GW of batteries added in 2025 | [China Daily](https://global.chinadaily.com.cn/a/202601/16/WS6969b2aea310d6866eb34243.html), [IEA](https://www.iea.org/commentaries/battery-storage-is-scaling-up-and-taking-on-a-larger-system-role) |
| European Union | Half of 2030 transmission projects unpermitted | EUR 584bn this decade; Grids Package, 100,000 km of lines | Open and already priced: Kraken licensed to EDF and E.ON, spun out at $8.65bn | [European Commission](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52023DC0757), [ENTSO-E](https://www.entsoe.eu/european-grids-package/), [OTPP](https://www.otpp.com/en-ca/about-us/news-and-insights/2026/octopus-energy-group-to-spin-out-kraken-at-valuation-of-8-65bn/) |
| India | 270.8 GW peak; one in five households with AC; planning for 458 GW | INR 9.15 lakh crore (about $109bn) to 2032; 4.85 to 6.48 lakh circuit-km | Open; few domestic incumbents in DLR or VPP; cooling peak makes storage the first product | [Down To Earth](https://www.downtoearth.org.in/energy/power-demand-tracker-india-meets-all-time-high-power-demand-of-2708-gw-renewable-energy-share-34), [PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2064751), [IEA](https://www.iea.org/commentaries/india-s-electricity-demand-grows-at-night-managing-rising-cooling-demand) |
| South Africa | Generation constraint giving way to a transmission constraint | 14,494 km of lines and 133 GVA of transformation to 2034; first 1,164 km to private bidders | Delivery, not optimisation, is the binding layer; the software opportunity follows the wires | [NTCSA](https://www.ntcsa.co.za/wp-content/uploads/2024/12/TDP-2024-Public-Report_Rev1.pdf), [Engineering News](https://www.engineeringnews.co.za/article/lawmakers-updated-on-plans-to-procure-first-independent-transmission-projects-2025-05-28) |
| Kenya | Record peak of 2,362 MW in July 2025 | Geothermal at 47% of generation, renewables near 90% | Firm, cheap generation with a small grid: an export-of-compute case rather than an optimisation case | [KenGen](https://www.kengen.co.ke/kenya-hits-record-peak-power-demand-as-kengen-leads-with-geothermal/), [IEA](https://www.iea.org/reports/kenya-2024/executive-summary) |

Read the fourth column and the pattern is the boundary from Part VI. Where the grid is regulated for return and reasonably built out, the optimisation layer is open and is being bought. Where the grid is a state instrument, the answer is capex and the software market is narrow. Where the grid is thin, the first product is delivery, and optimisation is the second act.

---

## The three positions

For an operator running large loads, the position is to become the customer that the optimisation layer was built for. If your site is in a queue, the fastest gigawatt is the one already on the wires you are waiting to connect to; sponsoring a dynamic line rating or reconductoring study on the constrained corridor is cheaper than a year of idle racks, and it turns you from an applicant into the party that unlocked the capacity.

For an investor, the position is to underwrite the layer, not the line. The line belongs to the utility and the infrastructure fund. The sensor, the rating software, the topology engine, the aggregation platform and the forecasting model belong to whoever builds them first with a utility or a hyperscaler on the cap table. Underwrite on capacity unlocked per dollar and months to deploy, because those are the two variables the customer is buying. And watch the shared-savings docket at FERC, because the day utilities are paid for capacity unlocked is the day the customer changes and the margins with it.

For a state, the position is to notice that the incentive gap is a policy choice. A regulator that pays for capacity delivered rather than capital deployed will get the optimisation layer from its own utilities. One that does not will get it from startups, later, at a markup, or not at all. Either is defensible. Pretending the choice does not exist is not.

---

## How this could be wrong

The thesis has four failure modes and I rank them in order of how worried I am.

The most likely is that the optimisation layer is real but marginal. The Department of Energy is explicit that grid-enhancing technologies are a bridge to conventional buildout, not a substitute for it, and 10 to 30 percent on a line does not meet a system that plans to add 190 gigawatts of peak in six years ([DOE](https://www.energy.gov/articles/doe-releases-new-report-accelerating-deployment-grid-solutions-lower-costs-and-improve)). Brattle's own report is titled as a complement to transmission, not a replacement ([Brattle](https://www.brattle.com/wp-content/uploads/2023/04/Building-a-Better-Grid-How-Grid-Enhancing-Technologies-Complement-Transmission-Buildouts.pdf)). My answer is the time value: 20 percent unlocked in months buys the years the corridor needs, and the venture return sits in that gap rather than in solving the whole problem. But if the gap is small, so is the return.

The second is that the load is inflated. Grid Strategies estimates utility forecasts overstate the data centre component by about 25 gigawatts ([Grid Strategies](https://gridstrategiesllc.com/wp-content/uploads/Grid-Strategies-National-Load-Growth-Report-2025.pdf)); RMI reports that ERCOT's data centres have reached only about half of their requested load and that AEP Ohio signed 5.6 gigawatts of contracts from 30 gigawatts of requests ([RMI](https://rmi.org/resources/planners-have-tools-to-manage-large-load-forecast-uncertainty-are-they-working/)); PJM trimmed its own near-term forecast in January after stricter vetting ([Utility Dive](https://www.utilitydive.com/news/pjm-interconnection-load-forecast-data-centers/809717/)). If a third of the queue is speculative, the urgency that makes the market is partly a paperwork artefact, though cooling, manufacturing and transport do not go away.

The third is regulatory success. If FERC's task force produces a shared-savings incentive and utilities start earning on capacity unlocked, they will deploy the technologies themselves, and the startups that sell them become component suppliers to a monopsony. That is good for the grid and bad for the venture case. It is the failure mode I would most like to see.

The fourth is bypass. If the largest loads bring their own generation, as Part V described, the wires face a slower problem and the optimisation layer serves a smaller market. The demand-shaping layer survives this, because on-site generation still wants storage and control, but the transmission software does not.

If you hold a position in this stack and think one of those four is already happening, write to info@selfbuiltsystems.com with the number and where it came from. Specific gets an answer.

The grid did not become interesting because it changed. It became interesting because the loads did, all at once, and one of them refuses to wait. For twenty years there was nothing here for a fund to own. Now there is a layer, thin, fast and software-shaped, between the wires and the demand, and the reason it is available is written into the way utilities have been paid since before the transistor.

*Architecting Alpha is published in the spirit of bold conjecture and ruthless criticism. Every claim is linked to its source. Where a chart's positions are schematic rather than measured, the caption says so.*
