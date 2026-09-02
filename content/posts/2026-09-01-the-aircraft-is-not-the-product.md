---
title: The Aircraft Is Not the Product
slug: the-aircraft-is-not-the-product
date: 2026-09-01
description: In an air taxi network the binding constraint is energy, the capital sink is the airframe, and the margin sits in the one layer no regulator has to certify. That gap is the whole investment case.
image: /assets/images/the-aircraft-is-not-the-product.jpg
imageAlt: A dark field of light with a single bright horizontal band suspended above a lattice of faint vertical structures, the schedule above the machine
tags: [ai, infrastructure, energy, aviation]
---

**Almost everything written about air taxis is roughly one certificate ahead of reality. The interesting part is not the exaggeration. It is that the layer which will actually get paid is not the layer everyone is watching, and you can point at the boundary between them with a regulation number.**

*Architecting Alpha, Part III*

I have been looking for a clean specimen. Something where intelligence, bits, atoms and electrons are all binding at once, where none of the four can be waved away, and where the sequence in which they bind is legible enough to argue about. Most systems let you ignore at least one layer. Software people ignore electrons. Infrastructure people ignore intelligence. The interesting questions live where you cannot ignore any of them.

Electric air taxis are that specimen. An aircraft that takes off vertically, transitions to winged cruise and runs on batteries is atoms moved by electrons and directed by bits, with the whole thing gated by a regulator. It is the four-layer thesis rendered as a physical object you could stand next to.

So this is Part III, and it sits in all four layers at once rather than being filed under one.

Before the argument, the facts, because the facts are not what is in circulation.

---

## What is actually certified, as of today

I went and checked every claim I had absorbed about this sector. Most of them were wrong, and wrong in the same direction.

**No Western regulator has type-certified a piloted eVTOL air taxi.** Not the FAA, not EASA. Joby began power-on testing of its first conforming aircraft in November 2025, which the company describes as part of the final stage of the FAA type certification process ([Joby](https://ir.jobyaviation.com/news-events/press-releases/detail/156/joby-begins-power-on-testing-of-first-conforming-aircraft)), and neither Joby nor the FAA has published a completion date. Archer is not certified in the United States. In Europe, Volocopter went through insolvency and was acquired; no EASA type certificate exists.

**The only eVTOL type certificate anywhere is China's, and it is not for the thing you are picturing.** CAAC issued the type certificate for EHang's EH216-S in October 2023 ([EHang](https://www.ehang.com/news/990.html)), the production certificate in April 2024 ([EHang](https://www.ehang.com/news/1058.html)), and operator certificates to two operators in March 2025 ([SEC filing](https://www.sec.gov/Archives/edgar/data/1759783/000119312525067664/d924668dex991.htm)). The EH216-S carries two passengers, has roughly 30 km of range, and has no pilot on board. The operator certificates authorise low-altitude tourism and urban sightseeing, and EHang's own description of the initial operating phase is hovering flight: takeoff and landing at the same location, point A to point A, with tickets sold at scenic-spot entrances ([EHang](https://www.ehang.com/news/1198.html)).

That is a genuine engineering achievement and it is not a transport network. The distinction between A-to-A sightseeing in a pilotless 30 km multirotor and A-to-B passenger transport in a certified piloted aircraft is the entire distance the sector still has to travel, and almost every summary I read collapsed it into one sentence about China leading.

**Joby did not launch commercial service in Dubai.** What happened was a piloted demonstration flight, Margham to Al Maktoum International, 17 minutes, on 9 November 2025, described by Joby as a landmark flight and a step toward a network ([Joby](https://www.jobyaviation.com/news/dubai-air-taxi-network-takes-flight-joby-completes-landmark-flight-and-announces-next-vertiport)). Its Q2 2026 results still speak of targeting first passengers in 2026.

**Archer's UAE milestone was a pathway, not a certificate.** In May 2026 the UAE regulator moved Midnight into a Restricted Type Certificate programme, with design and production organisation approval processes initiated ([Archer](https://investors.archer.com/news/news-details/2026/UAE-Regulator-And-Archer-Move-To-Streamlined-Approach-for-Certifying-Midnight-in-the-UAE/default.aspx)). Several outlets reported this as a certificate being won. It was not.

**The FAA programme is not eight companies.** It is the eVTOL Integration Pilot Program, created under an executive order in June 2025, and the eight participants selected in March 2026 are state and local government sponsors across 26 states, with companies attached as partners ([FAA](https://www.faa.gov/newsroom/future-aviation-here-trumps-transportation-secretary-sean-p-duffy-and-faa-unveil-eight)).

And one number that reframes the whole sector. Joby reported $38.6m of revenue in Q2 2026. Of that, $36.2m came from Blade, the by-the-seat and charter brokerage business it acquired in 2025 ([Joby](https://ir.jobyaviation.com/news-events/press-releases/detail/187/joby-reports-second-quarter-2026-financial-results)). Roughly 94 percent of the leading eVTOL company's revenue today comes from flying conventional aircraft.

I am not writing any of this to be sour about the sector. I think it will happen. I am writing it because the mispricing lives precisely in the gap between the reported position and the actual one, and because once you look at the actual one, the question of which layer gets paid answers itself differently than the coverage suggests.

---

## The four layers, and the order in which they bind

| Layer | What it is here | Who funds it | What caps the return |
| --- | --- | --- | --- |
| Electrons | Cells, packs, thermal management, vertiport chargers, distribution capacity | Operator and utility | Physics, then interconnection queues |
| Atoms | Airframe, distributed electric propulsion, vertiports, ground infrastructure | Equity and, eventually, project finance | Certification time and capital intensity |
| Bits | Dispatch, energy scheduling, demand forecasting, maintenance analytics, traffic deconfliction | Operator opex | Trust, and where the regulator draws a line |
| Intelligence | Autonomy: flight control, detect-and-avoid, pilot removal | Equity, for a long time | No binding approval pathway yet exists |

Read the last column downward. Three of those four ceilings are set by someone other than the builder. Only one of them is set by how good you are.

---

## Electrons: the arithmetic that decides everything else

The number everyone quotes is cell energy density. Joby has publicly stated it confirmed 288 Wh/kg cells. That figure comes from the company and I have not found an independent verification of it, so treat it as a vendor claim, but it is in the right range and I will use it.

Almost every model I have seen stops there. Three multiplications later you get the number the business actually runs on.

**First multiplication: cell to pack.** A pack is not cells. It is cells plus structure, wiring, contactors, and thermal management. NASA's X-57 programme is the cleanest built-hardware data point: 225 Wh/kg cells produced a 149 Wh/kg pack, a retention of 66 percent ([NASA Glenn](https://ntrs.nasa.gov/citations/20210017488)). The peer-reviewed eVTOL literature models the range at 0.55 to 0.75 with 0.65 as its working assumption ([Fay et al., *World Electric Vehicle Journal*, March 2025](https://www.mdpi.com/2032-6653/16/3/137)). At 0.65, a 288 Wh/kg cell becomes roughly 187 Wh/kg of pack.

**Second multiplication: reserve.** You cannot fly the pack to zero. The same study uses a minimum allowable state of charge of 30 percent at end of mission. So roughly 70 percent of the pack is missionable.

288 × 0.65 × 0.70 is about **131 Wh/kg of mission-usable energy**. Less than half the headline cell number, and that is the figure the unit economics actually run on.

One caveat on my own arithmetic, since the essay is about checking: 0.65 is a mid-range assumption, and the next paragraph argues that retention gets worse as cells get better. If that is right, a 288 Wh/kg cell probably sits nearer the bottom of the band than the middle, and 131 is the generous version of this number rather than the harsh one.

<figure class="post-fig">
<p class="fig-title"><strong>From the number on the slide to the number in the mission</strong></p>
<p class="fig-sub">A vendor-stated 288 Wh/kg cell becomes about 187 Wh/kg at pack level under a 0.65 mid-range cell-to-pack retention assumption, and about 131 Wh/kg of mission-usable energy once a 30 percent end-of-mission state-of-charge floor is applied. That is 45 percent of the headline figure. NASA's X-57 programme achieved 66 percent cell-to-pack retention in built hardware. The retention and reserve figures are modelling assumptions; the X-57 figure is a measurement.</p>
<div class="fig-scroll"><svg viewBox="0 0 700 200" role="img" aria-label="288 watt-hours per kilogram at cell level becomes 187 at pack level and 131 of mission-usable energy, about 45 percent of the headline figure.">
<g font-family="var(--mono)" font-size="10" fill="var(--faint)" letter-spacing="1.4">
<text x="0" y="20">CELL · VENDOR STATED</text><text x="0" y="76">PACK · NASA 0.65 RETENTION</text><text x="0" y="132">MISSION-USABLE · AFTER 30% RESERVE</text>
</g>
<rect x="0" y="28" width="630" height="24" rx="3" fill="#8cbeff"/>
<text x="12" y="45" font-family="var(--mono)" font-size="11" fill="#07070a" font-weight="700">288 Wh/kg</text>
<rect x="0" y="84" width="409" height="24" rx="3" fill="#be8cff"/>
<text x="12" y="101" font-family="var(--mono)" font-size="11" fill="#07070a" font-weight="700">187 Wh/kg</text>
<rect x="0.5" y="140.5" width="286" height="23" rx="3" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.32)" stroke-width="1"/>
<text x="12" y="157" font-family="var(--mono)" font-size="11" fill="var(--ink)">131 Wh/kg</text>
<text x="300" y="157" font-family="var(--mono)" font-size="10.5" fill="var(--dim)">45% OF THE HEADLINE</text>
</svg></div>
<p class="card-meta mono fig-src">SOURCES · JOBY COMPANY STATEMENT · NASA GLENN X-57 · FAY ET AL 2025 · AUTHOR'S ARITHMETIC</p>
</figure>

**Now the part that should change how you model the future.** The pack penalty does not stay constant as cells improve. It gets worse. NASA's scaling model has pack overhead rising from roughly 30 percent of pack mass at around 100 Wh/kg cells to roughly 50 percent at 400 Wh/kg, because higher-energy cells need more thermal management, not less. That is a model output rather than a measurement, but the conclusion it produces is stated plainly: doubling cell energy density does not double pack energy density.

Every model I have seen that projects eVTOL economics forward applies cell improvements linearly to pack performance. That is wrong, and it is wrong in the direction that flatters the forecast.

**And the headline result from the same peer-reviewed study.** Simulating a 730-second mission profile, Fay et al. find that with today's best commercial cells, a VoloCity finishes at 28.7 percent state of charge and an Archer Midnight at 27.5 percent. Both below the 30 percent floor. With a modelled 480 Wh/kg solid-state cell, both finish near 65 percent.

Read that carefully. At current chemistry, in that model, against that reserve rule, **the mission does not close**. Not "is tight". Does not close. These are simulation outputs and should be held as simulation outputs, and the reserve floor is the study's own choice rather than a regulation. But the direction is not seriously disputed, and it explains a great deal about why range figures in this sector are quoted the way they are.

The regulator understands the arithmetic too. The FAA's Powered-Lift SFAR, finalised in October 2024, took a performance-based approach to fuel and energy reserves: powered-lift aircraft may use helicopter minima if they can conduct a vertical landing continuously along the entire route, and airplane minima otherwise ([FAA final rule](https://www.faa.gov/sites/faa.gov/files/2120-AL72_Integration_Powered-Lift_Pilot_Certification_and_Operations_Miscellaneous_Amendments_Related_to_Rotorcraft_Airplanes_Final_Rule.pdf)). That is a relaxation from what the proposed rule had required. When a safety regulator finds a way to give you back reserve margin, it is telling you where the constraint is.

---

## Atoms: the vertiport is a grid asset with a helipad on it

The second thing everyone gets wrong is what a vertiport is. It is not an aviation asset with an electrical supply. It is a distribution-connected large industrial load that happens to have a landing pad on the roof.

The FAA commissioned NREL to work out what these sites actually draw ([NREL/TP-5R00-86245, *FAA Vertiport Electrical Infrastructure Study*, October 2023, revised December 2023](https://docs.nrel.gov/docs/fy24osti/86245.pdf)). The numbers:

- DC charging power of **300 kW to 1 MW per aircraft**, from surveyed OEM specifications.
- A constrained site of three chargers peaks at **900 kW**.
- An unconstrained site reaches **13.3 MW**.
Separately, one of the study's authors has put a typical vertiport peak at **1.5 to 2 MW**, which the trade press renders as the draw of roughly 700 to 2,000 homes ([Vertical](https://verticalmag.com/features/electrifying-vertiports/)).

NREL's warning is undervoltage and overloaded distribution lines and transformers, requiring grid upgrades or on-site storage. Their planning advice is to size for the top of that charger range so that the speed of market deployment stays aligned with utility upgrade timelines.

That last clause is the whole atoms problem. The build rate of this sector is not set by how fast anyone can make aircraft. It is set by how fast a utility can energise a new megawatt-scale load.

How fast is that? Nobody has published a proper answer, and the absence is itself worth reporting. The best available adjacent evidence is Lawrence Berkeley's *Queued Up*, which finds that median time from interconnection request to commercial operation exceeded five years for projects built in 2025, and that only 13 percent of capacity requesting interconnection between 2000 and 2020 had been built by the end of 2025 ([LBNL, May 2026](https://emp.lbl.gov/publications/queued-2026-edition-characteristics)). I want to be careful with that, because the dataset covers generation and storage seeking transmission interconnection and explicitly excludes load and distribution-connected projects. A vertiport is exactly the excluded category. So it is evidence that US grid connection is structurally slow, and it is not direct evidence about vertiports.

I looked for a primary dataset on large-load interconnection lead times and could not find one. The single most important scheduling input for vertiport capital planning appears to be unmeasured in public. If you are underwriting this sector, that gap is where I would spend my first week.

---

## Bits: the boundary is the business

Here is the part that decides where the margin lands, and it is a regulatory-structural fact rather than a technology one.

Airborne software is governed by DO-178C, with design assurance levels A through E. Ground-based communications, navigation and air traffic management software is governed by DO-278A, with its own assurance levels. Neither standard has provisions for machine learning. Both assume deterministic, traceable design. The FAA's own *Roadmap for Artificial Intelligence Safety Assurance* says of the companion hardware standard, DO-254, that its validation and verification methods "fall short when applied to AI," and commits the agency to building experience on lower-criticality functions before applying them to higher-criticality ones ([FAA](https://www.faa.gov/media/82891)). The agency has not published a means of compliance for non-deterministic machine learning at high design assurance levels in any of the three standards. EASA's first actual regulatory proposal on AI in aviation, NPA 2025-07, opened for consultation in November 2025 and remains a proposal ([EASA](https://www.easa.europa.eu/en/newsroom-and-events/news/easas-first-regulatory-proposal-artificial-intelligence-aviation-now-open)).

So draw the line.

| Inside the airworthiness boundary | Outside it |
| --- | --- |
| Flight control laws, transition control | Fleet scheduling and dispatch |
| Battery management, state-of-charge estimation | Charge scheduling, vertiport energy management |
| Onboard energy and reserve computation | Demand forecasting and dynamic pricing |
| Onboard detect-and-avoid | Predictive maintenance analytics |
| Autoflight, safety-critical displays | Crew rostering, routing recommendation |

Everything in the left column is slow, certified, revalidated on change, and today effectively closed to non-deterministic machine learning at high assurance levels. Everything in the right column is governed by operational approval rather than a type certificate, iterates at software speed, and can be improved on a Wednesday afternoon.

One honest caveat, because it is the thing that would break this argument. The boundary is functional, not geographic. DO-278A exists precisely because ground software can affect safety comparably to airborne software. Ground scheduling that *commands* aircraft state rather than advising an operator comes back inside the perimeter. If you build on the right-hand column and then quietly cross into commanding, you have moved yourself into a certification regime without noticing.

In Part I of this series I argued that value in this cycle migrates from the model to the seam between layers. This is a seam you can point at with a regulation number.

---

## The trap that closes the loop

Now the uncomfortable part, and it is the strongest thing in this essay because it links the intelligence layer directly to the capital layer.

NASA's commissioned market work on advanced air mobility, published in peer-reviewed form, models near-term operating cost for a five-seat eVTOL at roughly **$6.25 per passenger-mile, plus or minus 50 percent**, against a revenue-maximising consumer price of roughly **$2.50 to $2.85 per passenger-mile** ([Goyal et al., *Sustainability*, 2021](https://www.mdpi.com/2071-1050/13/13/7421); underlying [NASA UAM Market Study](https://ntrs.nasa.gov/citations/20190001472)).

At the point estimate, cost is between 2.2 and 2.5 times the price the market will bear. The study finds that closing that gap requires roughly a 60 percent cost reduction, achieved through increased operational efficiency and technological advances "such as autonomous flight."

Be careful with that ratio, because I nearly was not. The cost figure carries a plus or minus 50 percent band. At the optimistic edge the ratio is about 1.1 times and the gap is close to a rounding error. At the pessimistic edge it is about 3.7 times and the gap is four times larger than the headline. The entire tension I am about to describe lives inside an error bar wide enough to erase it. I still think the central case is the right one to plan against, because operators have to price against expected cost rather than best case, but anyone using this number to underwrite should be sizing the band, not the point.

<figure class="post-fig">
<p class="fig-title"><strong>The gap, and what closes it</strong></p>
<p class="fig-sub">Modelled near-term operating cost for a five-seat eVTOL is about $6.25 per passenger-mile with an error band of plus or minus 50 percent. The revenue-maximising consumer price is about $2.50 to $2.85 per passenger-mile. Closing the gap takes roughly a 60 percent cost reduction, which lands at $2.50 and which the study attributes to operational efficiency and technological advances such as autonomous flight. Autonomy is the largest named lever, and it is the one that sits inside the certification boundary with no binding machine-learning approval pathway. All figures are model outputs.</p>
<div class="fig-scroll"><svg viewBox="0 0 700 196" role="img" aria-label="Modelled eVTOL operating cost of 6.25 dollars per passenger-mile against a revenue-maximising price of about 2.50 to 2.85 dollars per passenger-mile.">
<g font-family="var(--mono)" font-size="10" fill="var(--faint)" letter-spacing="1.4">
<text x="0" y="20">MODELLED OPERATING COST</text><text x="0" y="86">REVENUE-MAXIMISING PRICE</text>
</g>
<rect x="0" y="28" width="638" height="24" rx="3" fill="#8cbeff"/>
<text x="12" y="45" font-family="var(--mono)" font-size="11" fill="#07070a" font-weight="700">$6.25 / PASSENGER-MILE</text>
<rect x="0" y="94" width="291" height="24" rx="3" fill="#be8cff"/>
<text x="12" y="111" font-family="var(--mono)" font-size="11" fill="#07070a" font-weight="700">$2.85 / PASSENGER-MILE</text>
<line x1="255" y1="88" x2="255" y2="132" stroke="rgba(255,255,255,.28)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="638" y1="22" x2="638" y2="132" stroke="rgba(255,255,255,.28)" stroke-width="1" stroke-dasharray="3 3"/>
<text x="256" y="168" font-family="var(--mono)" font-size="10.5" fill="var(--dim)">THE 60% REDUCTION THE STUDY MODELS · LANDS AT $2.50</text>
<path d="M255 142 L634 142" stroke="var(--dim)" stroke-width="1"/>
<path d="M255 142 l7 -3.5 l0 7 z" fill="var(--dim)"/><path d="M638 142 l-7 -3.5 l0 7 z" fill="var(--dim)"/>
</svg></div>
<p class="card-meta mono fig-src">SOURCE · GOYAL ET AL, SUSTAINABILITY 2021 · NASA UAM MARKET STUDY · MODEL OUTPUTS, NOT MEASUREMENTS</p>
</figure>

And autonomous flight sits **inside** the certification boundary, in exactly the category where no binding machine-learning approval pathway exists, and where both regulators have said in writing that they intend to start with low-criticality functions and work upward.

So the largest single lever on the unit economics is the one thing that cannot currently be certified. That is the central tension of the sector, and it is the reason I do not think the timelines being underwritten are the timelines that will happen.

---

## Where the margin actually goes

Three claims, in descending order of my confidence in them.

**One. In the near term these are capital-markets businesses, not transport businesses.** Joby: $38.6m of revenue, $245.4m of net loss, $2.3bn of cash and short-term investments at 30 June 2026, and 94 percent of that revenue from the acquired brokerage ([Q2 2026](https://ir.jobyaviation.com/news-events/press-releases/detail/187/joby-reports-second-quarter-2026-financial-results)). Archer: $5.0m of revenue, $263.2m of net loss, $1.56bn of cash ([Q2 2026](https://investors.archer.com/news/news-details/2026/Archer-Announces-Second-Quarter-2026-Results-Announces-Deal-with-Boeing-to-Shape-Physical-AI-Future-of-Aerospace-and-Defense/)). That is roughly half a billion dollars of combined quarterly loss against about $7.4m of combined revenue from anything other than conventional aircraft. The arithmetic in that last sentence is mine, not theirs.

I do not say this as an indictment. Certification-gated hardware businesses are supposed to look like this before they work. I say it because it tells you what the operating businesses can and cannot buy for the next several years, and it is not premium optional software.

**Two. The historical analogue deserves more weight than the sector gives it, and it is a primary source.** Blade Air Mobility was the only publicly traded pure-play urban air mobility operator with material passenger revenue. In August 2025 it announced the sale of its entire passenger division to Joby, at a price the release puts at up to $125m including up to $35m of earnouts ([Blade](https://ir.stratacritical.com/news-events/press-releases/detail/121/blade-announces-sale-of-passenger-division-to)); FlightGlobal reported the completed deal at $76m in stock ([FlightGlobal](https://www.flightglobal.com/airframers/2025/08/joby-completes-acquisition-of-blades-passenger-division-for-76-million/)). The remaining company rebranded to Strata Critical Medical and is now a pure-play medical logistics business.

The reason is in Blade's own disclosure. Medical was about 84 percent of 2024 segment adjusted EBITDA on about 59 percent of revenue, which puts the passenger business at roughly 41 percent of revenue and about 16 percent of segment EBITDA. A company that had spent a decade building urban short-hop rotorcraft demand looked at its own P&L and kept the organ transport.

Before that, Uber launched Uber Copter between Lower Manhattan and JFK in 2019 ([CNBC](https://www.cnbc.com/2019/08/19/the-race-between-lyft-uber-copter-blade-helicopter-to-jfk-airport.html)) and sold Uber Elevate to Joby in December 2020, taking equity and an app integration rather than staying in the business ([TechCrunch](https://techcrunch.com/2020/12/08/uber-sells-air-taxi-business-elevate-to-joby-aviation-shedding-its-last-moonshot/)).

I want to be precise about what those two cases do and do not show. Neither company declared the demand dead. Both stopped *operating* the demand side and took paper in someone who would keep going, and in Blade's case the buyer was Joby, which plainly does think it is a business. What the cases establish is narrower and still important: two well-capitalised operators ran real urban short-hop networks, saw the actual margins, and chose to be shareholders rather than operators. That is a statement about the operating economics, not about the addressable market.

**Three. Therefore the layer that gets paid reliably in the next five years is the one outside the certification boundary, sold to whoever owns the certified assets.** Dispatch and fleet scheduling. Energy scheduling and vertiport load management. Demand forecasting. Maintenance analytics.

Not because it is more glamorous. Because of three structural properties:

Its cost of iteration is not set by a regulator. Its learning compounds across every aircraft, every site and every operator, rather than being locked to one type certificate. And it attacks the two numbers that actually determine whether an operator survives, which are aircraft utilisation hours per day and energy cost per available seat-mile.

There is a fourth property that matters more than the first three and that almost nobody prices. **A type certificate is jurisdictional. A schedule is not.** Certification is granted by a national authority, and while bilateral safety agreements let certificates be validated across borders, validation is a process with its own timeline and its own conditions rather than a copy operation. An operating system that learns how to keep aircraft moving against energy constraints, weather, demand and grid limits crosses borders immediately and gets better with every new operator that connects to it. The hardware layer is a set of national franchises with a slow reciprocity mechanism. The scheduling layer is one business.

---

## How I would read the diligence

If you are looking at anything in the operating layer of this sector, whether as an investor, an acquirer or an operator deciding what to build in-house, the tests from Part II of this series apply almost without modification. Four questions, in the order I would ask them.

**What is the proprietary input?** In this sector the answer is flight-by-flight telemetry: energy consumed against energy predicted, dwell time, charger occupancy, weather at both ends, load factor, cancellations and their causes. Almost nobody outside the operators has it, and most operators are not instrumented to retain it in a form that improves anything. If the input is a public schedule and a weather API, the output is a commodity.

**Does it run without the people who built it?** A schedule has to hold on a Tuesday with nobody clever in the room. Most systems in this category are currently one talented operations lead with good spreadsheets.

**Whose judgement is encoded?** Reserve policy, dispatch rules, and above all the conditions under which the system declines a mission. Those are decisions, not predictions, and they are where a firm's actual risk posture gets written down. A model that only predicts is a forecast. A system that also refuses is an operating control.

**Which line does it move?** Two numbers decide whether an operator in this sector survives: utilisation hours per aircraft per day, and energy cost per available seat-mile. If a system does not move those, it is reporting, and reporting does not carry a multiple.

Then the fifth question from Part II, the one that separates a system from an asset: can an operator who did not build it run it. The first four tell you whether the thing works. Only the fifth tells you what it is worth to anyone other than its author.

---

## How I could be wrong

**The constraint moves.** If solid-state cells arrive earlier and better than NASA's pack-scaling penalty implies, missions close with real margin, utilisation rises, and a meaningful share of the value returns to the airframe manufacturer. When a binding constraint stops binding, everything downstream reprices. This is the failure mode I consider most likely, and the thing to watch is not cell announcements but pack-level integration data, which is where the penalty actually lives.

**The boundary closes.** If regulators pull the operational layer inside the certification perimeter, and the mechanism already exists in DO-278A, then scheduling software becomes slow and capital-intensive too and the seam I am pointing at disappears. Anything that commands rather than advises is the leading edge of this.

**The category never reaches the price.** If $6.25 does not come down to $2.50 without autonomy, and autonomy does not certify this decade, the addressable market is a handful of premium corridors in wealthy cities and the whole sector is a smaller, slower business than current balance sheets are underwriting. Blade's decision is live evidence for this reading, and I hold it as the strongest bear case.

**I am reading the analogue wrong.** Helicopters are loud, maintenance-heavy and pilot-limited. Distributed electric propulsion plausibly changes all three. If it changes them enough, the historical failure of short-hop rotorcraft says nothing useful about eVTOL and I have anchored on the wrong precedent. I think it says something. I would not bet the thesis on it alone.

---

## What I still cannot resolve

**No published measurement of large-load interconnection lead times.** The most important schedule input in the entire atoms layer is unmeasured in public. Everyone in this sector is planning against a number nobody has.

**No credible bottom-up maintenance cost model at scale.** Distributed electric propulsion should be cheaper to maintain than a turbine helicopter. "Should" is doing a great deal of work in that sentence, and the operating hours to settle it do not yet exist.

**The demand side is a model, not a measurement.** The same NASA-derived study found that roughly 98 percent of modelled air taxi demand comes from trips where ground transport exceeds about 30 minutes, and that discretionary trips showed minimal demand at plausible prices ([Goyal et al.](https://www.mdpi.com/2071-1050/13/13/7421)). Every serious analysis models supply carefully and demand loosely. The first properly instrumented commercial network anywhere will produce more useful information in six months than the last decade of modelling has.

---

The pattern across this series keeps coming out the same way. In Part I, capital converted into intelligence almost frictionlessly and could not convert into transformers at all, and the value sat in the seam. In Part II, the companies that got paid were the ones whose systems produced a number somebody could underwrite. Here both hold at once, and the seam has a regulation number on either side of it.

The certificate is what you buy. The schedule is what you own.

---

*Architecting Alpha is a series about where intelligence converts into capital, across intelligence, bits, atoms and electrons. Part I, [Intelligence Meets Resistance](/posts/intelligence-meets-resistance/), argued that capital converts into intelligence almost without friction and cannot convert into transformers at all. Part II, [Nobody Is Actually Building](/posts/nobody-is-actually-building/), argued that almost nobody you think you are competing with has built anything that produces a number. This is Part III, and it is the first piece in the series that sits in all four layers at once.*

*Figures are linked to their sources, model outputs are marked as model outputs, and the two places where the arithmetic is mine rather than a source's are marked as mine. One figure, the 288 Wh/kg cell, rests on a company statement I could not independently verify, and is flagged in the text. If you find an error, [info@selfbuiltsystems.com](mailto:info@selfbuiltsystems.com).*
