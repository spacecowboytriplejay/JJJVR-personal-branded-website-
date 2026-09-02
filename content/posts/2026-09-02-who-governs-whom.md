---
title: Who Governs Whom
slug: who-governs-whom
date: 2026-09-02
description: Europe reached ChatGPT with a platform law, not its AI law. That is the pattern everywhere: the instruments that actually bind are trade law, market access and procurement, not AI acts.
image: /assets/images/who-governs-whom.jpg
imageAlt: Six vertical bands of light of very different heights standing on a dark plane, one of them casting its glow across all the others
tags: [ai, governance, policy, capital]
---

**The world's first binding international treaty on artificial intelligence has twenty-one signatures and one ratification. It is not in force anywhere. That gap, between what states sign and what states can enforce, is the entire subject of this essay.**

*Architecting Alpha, Part IV*

The Council of Europe Framework Convention on Artificial Intelligence, Human Rights, Democracy and the Rule of Law opened for signature in Vilnius on 5 September 2024. It was reported everywhere as the first binding international AI treaty. Twenty-one signatures followed, including the United States, the United Kingdom, Canada, Japan and Israel ([Council of Europe](https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence)).

Almost two years later there is exactly one ratification: the European Union, deposited on 15 May 2026 ([Council of Europe](https://www.coe.int/en/web/artificial-intelligence/-/european-union-ratifies-the-council-of-europe-framework-convention-on-artificial-intelligence)). Article 30 requires five, of which at least three must be Council of Europe member states, before it enters into force at all ([treaty text](https://rm.coe.int/1680afae3c)).

Signing is a statement. Ratifying is a commitment. Enforcing is a capability. Almost everything reported as AI governance stops at the first, is counted as though it were the second, and is discussed as though it were the third.

I have written before about sovereignty over intelligence, and argued there that it is not ownership but two capabilities: the ability to verify what a model gives you, and the ability to leave a provider inside a week. This essay is the state-level companion to that argument, and it asks a narrower question. Not who has rules. Who has reach.

---

## The claim, and how it fails

**AI governance is not converging on a common set of rules. It is diverging on chokepoints. Nearly every jurisdiction is now writing rules, and almost none of them can enforce one against a party that does not wish to comply. The instruments that actually bind are not AI law. They are trade law, market-access law and procurement. So the map that matters is not who has an AI act. It is who holds a chokepoint and who is downstream of somebody else's.**

That claim fails if any of the following happens. If a jurisdiction holding no chokepoint compels a frontier developer to materially change its behaviour. If the European Commission's new fining power produces an enforcement action in the next eighteen months that changes how models are built or released globally. If the Framework Convention reaches five ratifications and starts to bite. I will come back to all three.

---

## Six jurisdictions, read for reach rather than intent

The usual comparison sorts countries by philosophy: the American market-driven model, the Chinese state-driven model, the European rights-driven model. That taxonomy comes from Anu Bradford's *Digital Empires* and it is genuinely useful, but it describes what states want. I want to sort them by what they can make happen to somebody who says no.

### United States: governs by trade, not by law

There is no comprehensive federal AI statute. This is easy to establish: the December 2025 executive order on a national policy framework asks Congress to *create* one ([White House](https://www.whitehouse.gov/fact-sheets/2025/12/fact-sheet-president-donald-j-trump-ensures-a-national-policy-framework-for-artificial-intelligence/)), and the executive would not need to ask if it existed.

What exists instead is a stack of executive orders, which bind agencies and reach private parties only through procurement, plus one genuinely load-bearing category that nobody files under AI governance.

The most recent order, signed 2 June 2026, creates a classified benchmarking process for designating covered frontier models by cyber capability, and asks developers to give the government up to thirty days of pre-release access. Participation is voluntary, and the text contains an explicit disclaimer: nothing in it authorises "the creation of a mandatory governmental licensing, preclearance, or permitting requirement" ([Federal Register, 91 FR 34565](https://www.federalregister.gov/documents/2026/06/05/2026-11415/promoting-advanced-artificial-intelligence-innovation-and-security)). That is the United States, in one clause, declining to build the instrument that everyone assumes it has.

The binding surface is elsewhere, and in 2026 it moved in a direction most commentary has the wrong way round.

The AI Diffusion Rule, the global three-tier licensing regime issued in January 2025, was **rescinded before its compliance date** in May 2025, and no equivalent global licensing framework has been issued since ([BIS](https://www.bis.gov/press-release/department-commerce-rescinds-biden-era-artificial-intelligence-diffusion-rule-strengthens-chip-related)). A final rule effective 15 January 2026 then moved advanced-computing exports to China from a presumption of denial to case-by-case review below defined performance thresholds ([91 FR 1684](https://www.federalregister.gov/documents/2026/01/15/2026-00789/revision-to-license-review-policy-for-advanced-computing-commodities)). That is a partial liberalisation, not an escalation.

Then, on 31 May 2026, the Bureau of Industry and Security issued guidance confirming that a licence is required for advanced computing items destined to any entity **headquartered in, or ultimately parented in, a Country Group D:5 state or Macau, regardless of where that entity physically sits** ([BIS guidance](https://www.bis.gov/media/documents/bis-guidance-may-31-2026.pdf)). BIS's position is that this requirement has existed since November 2023 and merely needed stating.

Sit with the form of that instrument. It is interpretive guidance, not a rule. It went through no notice and comment. It was issued by a trade agency with no AI safety mandate. It reaches by corporate parentage rather than geography. I would argue it has reshaped more corporate behaviour in 2026 than every AI act on earth combined, and the test I would accept is simple: name another 2026 instrument that forced comparable restructuring at named companies.

At state level, California's Transparency in Frontier Artificial Intelligence Act, signed 29 September 2025, is the most significant binding frontier-AI obligation in the United States: transparency reports and critical safety incident reporting to the state within fifteen days for developers of models trained above 10²⁶ FLOP, with the published safety framework obligation falling on the subset above $500m of annual revenue ([SB 53](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53)).

### The Colorado episode, which is the whole essay in miniature

Colorado passed the first comprehensive US state AI act in May 2024, with algorithmic discrimination duties and an effective date eventually set at 30 June 2026.

xAI filed suit on 9 April 2026. The Department of Justice filed a companion complaint on 24 April. A stipulated order halting enforcement followed on 27 April ([McDermott](https://www.mcdermottlaw.com/insights/colorado-ai-law-in-flux-comprehensive-replacement-bill-signed-after-federal-court-blocks-predecessors-enforcement/)). On 14 May 2026 the governor signed a replacement bill repealing the original and substituting a narrower notice-based regime with the algorithmic discrimination duties dropped ([Seyfarth](https://www.seyfarth.com/news-insights/colorado-enacts-artificial-intelligence-replacement-law.html)).

Roughly five weeks from complaint to repeal. Congress passed nothing. A subordinate government wrote a rule, and parties with more leverage litigated it out of existence before it ever applied to anyone.

Hold that case. It is the domestic-scale model of what happens internationally, and I will come back to it.

### China: governs by market access

China's system is vertical, service-layer and filing-based. It does not regulate models. It regulates services offered to the public, and it does so through an ex ante gate rather than an ex post liability regime.

The Interim Measures for Generative AI Services, effective 15 August 2023, require providers of services with public-opinion properties to complete a security assessment and an algorithm filing ([translation](https://www.chinalawtranslate.com/en/generative-ai-interim/)). Content labelling measures, explicit and implicit, took effect 1 September 2025 ([translation](https://www.chinalawtranslate.com/en/ai-labeling/)).

The gate has a number attached, which is the useful thing about it. As of 30 June 2026, **988 generative AI services had completed filing and 598 applications or functions had completed registration**, up from 346 filed services in March 2025 ([CAC](https://www.cac.gov.cn/2026-07/10/c_1785427810632554.htm)).

And the newest instrument is the one worth watching. Interim Measures for AI Anthropomorphic Interactive Services, promulgated 10 April 2026 and effective 15 July 2026, regulate AI companion services: crisis identification and intervention, parental consent for minors, anti-dependency measures, labelling, security assessment ([CAC](https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm)).

That is a binding regulation of a specific AI use case, and it is worth noting who got there first, because it was not China. California's SB 243 on companion chatbots was signed on 13 October 2025 and took effect on 1 January 2026, with crisis protocols, protections for minors, disclosure and annual reporting ([SB 243](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB243)). A US state legislature beat the Chinese state to a binding companion-AI rule by roughly six months, while the American federal government has nothing. Note also what is *not* binding: the AI Safety Governance Framework 2.0, released in September 2025, is designated a technical document and has no legal force ([Global Times](https://www.globaltimes.cn/page/202509/1343585.shtml)). The filing regime is the teeth. The safety framework is the vocabulary.

The correct reading is not that China is stricter. It is that China's instrument is domestic market access, which reaches everyone who wants Chinese users and nobody who does not.

### European Union: governs by product law, and just deferred its hardest part

The AI Act is real, in force, and has more enforcement architecture than anything else in the world. It has also just been amended by its own legislature in the direction of delay, and that fact is more informative than the Act itself.

Regulation (EU) 2026/1744, the Digital Omnibus on AI, was adopted by Parliament on 16 June 2026 and by Council on 29 June, and entered into force on 27 July 2026 ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng); [Council](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/)). This is adopted law, not a proposal, and a great deal of commentary still describes it as pending.

What it did: moved standalone high-risk obligations under Annex III from 2 August 2026 to **2 December 2027**, and embedded-product high-risk obligations from 2027 to **2 August 2028**.

What is actually live today: the prohibitions and AI literacy duties since February 2025; general-purpose AI obligations since August 2025; Article 50 transparency and the Commission's power to fine GPAI providers since 2 August 2026. Maximum penalties are €35m or 7 percent of worldwide turnover for prohibited practices, and €15m or 3 percent for most other duties ([Commission](https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act)).

Enforcement actions brought under the AI Act to date: **none**. Every live EU action against an AI product has been brought under the Digital Services Act instead, starting with the Commission's January 2026 investigation into Grok and X's recommender systems ([Commission](https://digital-strategy.ec.europa.eu/en/news/commission-investigates-grok-and-xs-recommender-systems-under-digital-services-act)). That pattern is about to become the whole point.

Capacity is the part nobody counts. The AI Office holds more than 140 staff, including more than 40 in its safety unit, according to a written answer given by Executive Vice-President Henna Virkkunen to a parliamentary question on 8 June 2026. That is the body responsible for supervising every general-purpose model placed on the European market. There is no published establishment table, and the think tank Pour Demain has argued that general-purpose supervision alone needs at least 160 staff by 2030 ([Lawfare](https://www.lawfaremedia.org/article/how-much-power-does-the-eu-ai-office-actually-have)).

Now the honest read on the Brussels Effect, because everyone invokes it and almost nobody tests it.

Bradford's mechanism requires a large market, high compliance costs, and crucially the **non-divisibility of production**: firms globalise the strictest rule because separating products by market is more expensive than complying everywhere. Ben Crum's 2025 analysis argues this condition fails for AI, because AI applications are dispersed and divisible across markets in a way that consumer goods and data-processing systems were not, so the EU's structural leverage is weaker than the GDPR precedent suggests ([*Internet Policy Review* 14(3)](https://policyreview.info/articles/analysis/brussels-effect-or-experimentalism)).

Marco Almada and Anca Radu make the more uncomfortable version: the diffusion will happen, and that is the problem. Because EU competence forced the Act into a product-safety frame, exporting it exports a template that under-protects fundamental rights while crowding out stronger principle-based alternatives ([*German Law Journal* 25(4)](https://doi.org/10.1017/glj.2023.108)).

The Digital Omnibus is the best natural experiment available on this question, and it does not flatter the strong version. A regime operating at full external strength does not defer its own core obligations by sixteen months, and the embedded-product regime by a further year, under competitiveness pressure. The counter-evidence is also real: the GPAI chapter took effect on schedule, and 21 companies signed the voluntary Code of Practice including every major American laboratory except Meta ([Commission](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai)). Both readings are live. I lean toward the weaker version, and I would change my mind on a single serious enforcement action.

### 31 August 2026: Europe reached ChatGPT, and not with its AI law

On 31 August 2026 the Commission designated **ChatGPT as a Very Large Online Search Engine**, and Reddit and Roblox as Very Large Online Platforms, under the Digital Services Act. Each had declared at least 45 million average monthly users in the European Union. They have four months, to January 2027, to comply ([Commission](https://digital-strategy.ec.europa.eu/en/news/commission-designates-chatgpt-reddit-roblox-under-digital-services-act)).

The obligations that attach are not cosmetic. Designated services must assess and mitigate the systemic risks arising from the service and its algorithmic systems, covering the dissemination of illegal content, negative effects on minors, users' physical and mental wellbeing, fundamental rights, electoral processes and public security. The Commission supervises directly. Maximum fine is 6 percent of global annual turnover, with periodic penalty payments of up to 5 percent of average daily worldwide turnover for each day of non-compliance with a remedy, or for obstructing an inspection ([Commission](https://digital-strategy.ec.europa.eu/en/policies/dsa-enforcement)).

Now, the obvious thing. A chatbot has been legally classified as a search engine. That is funny. The phrase "Very Large Online Search Engine" applied to ChatGPT is funny in the specific way that only regulatory drafting can be, and anyone who enjoyed it this week was entitled to. Enjoy it now, because the rest of this is not funny at all.

Look at what the category choice actually tells you, because it is the cleanest confirmation of this essay's argument I could have asked for.

The European Union wrote a dedicated AI law. It spent five years doing it. And when it wanted to reach the most widely used AI product in the world, it did not use that law. It used a platform regulation from 2022, through a definition drafted with Google and Bing in mind.

It did that because the AI Act does not currently give it the grip. High-risk obligations do not apply until December 2027. The general-purpose chapter is largely transparency, documentation and copyright policy. Neither reaches systemic risk in a consumer product at population scale. The Digital Services Act does, today, with a headline penalty larger than most of the AI Act's own tiers.

So Europe used the instrument it had rather than the instrument it wrote. That is not embarrassing, it is competent, and it is precisely what a jurisdiction does when its chokepoint is market access. The legal category is a vehicle. You take whichever vehicle actually reaches.

There is also a detail in the sequencing that deserves more attention than it will get. The Digital Omnibus that entered into force on 27 July 2026 gave the AI Office exclusive supervision over AI systems inside very large online platforms and search engines. Five weeks later the Commission placed the largest AI product in the world into exactly that category. Whether that ordering was designed or merely convenient, the effect is that Europe's AI regulator now supervises ChatGPT through a platform designation rather than through the AI Act's own risk classes.

### The same week, read across three jurisdictions

Set the three side by side and the differences stop looking philosophical and start looking mechanical.

**The United States** reaches AI through export control. A licence requirement that follows the hardware wherever it goes and binds by corporate parentage rather than geography. No AI statute, and in June 2026 an executive order that expressly declined to create a licensing power.

**China** reaches AI through a filing gate at the edge of its own market. Nine hundred and eighty-eight services through the gate, no public-facing service without it, and a binding use-case regulation for companion AI in force since July.

**The European Union** reaches AI through the size of its consumer market and a platform law that was already sitting there. Forty-five million users is the trigger, designation is the instrument, and the AI Act is not involved.

Three jurisdictions, three completely different levers, and one thing in common. In none of the three cases is the operative instrument the thing anybody calls AI governance. It is trade law, market-access filing, and platform law. Every AI act on earth is downstream of all of it.

Which brings me back to the joke, because I think most people laughed at the wrong half of it. The funny reading is that Europe has decided a chatbot is a search engine. The accurate reading, and the considerably more expensive one, is that Europe's AI law could not reach the most important AI company in the world and its platform law could.

### Australia: governs by deciding not to

Australia is the most interesting case in this list precisely because it is the least dramatic.

It published a [Voluntary AI Safety Standard](https://www.industry.gov.au/publications/voluntary-ai-safety-standard) in September 2024 and, in the same month, a proposals paper on mandatory guardrails for high-risk AI. Then it looked at the problem for a year and, in the National AI Plan of 2 December 2025, declined to carry the guardrails forward. The stated approach is to build on existing legal frameworks, with regulators retaining responsibility within their own domains and new regulation only "if more regulation is needed" ([National AI Plan](https://www.industry.gov.au/sites/default/files/2025-12/national-ai-plan.pdf)).

There is no binding AI-specific statute. The closest thing is an automated-decision-making transparency duty added to the Privacy Act, commencing 10 December 2026, which requires disclosure and nothing more. The Australian AI Safety Institute, announced on 25 November 2025 and funded at AUD 29.9m under the National AI Plan a week later, is advisory and holds no enforcement power ([DISR](https://www.industry.gov.au/science-technology-and-innovation/technology/artificial-intelligence/ai-safety-institute)).

A wealthy, competent, rule-of-law state examined the question carefully and concluded that a dedicated regime was not worth the cost. That is a considered judgment rather than a failure. It is also, read honestly, an admission about leverage.

### African Union: a strategy without an organ

The Continental Artificial Intelligence Strategy was adopted by the Specialised Technical Committee on Communication and ICT in June 2024 and endorsed by the Executive Council in July 2024, with implementation running 2025 to 2030 and a midterm review in 2027 ([AU](https://au.int/en/documents/20240809/continental-artificial-intelligence-strategy)).

It is non-binding. It has no enforcement organ and no funding mechanism; implementation is devolved to member states. The Africa Declaration on AI adopted at the Kigali summit in April 2025 calls for a $60bn Africa AI Fund ([reporting](https://allafrica.com/stories/202504140440.html)), and I want to be precise about that figure because it is widely repeated: it is a summit resolution with no identified sponsor, legal vehicle or disbursement mechanism. It is an aspiration, not a fund. Thirteen national AI strategies have been adopted in the region since 2018 ([OECD, April 2026](https://www.oecd.org/en/publications/oecd-artificial-intelligence-case-studies_c517fcf5-en/ai-governance-in-africa_1ff55135-en.html)).

The base rate that should discipline expectations here is the AU's own. The Malabo Convention on Cyber Security and Personal Data Protection was adopted in June 2014 and entered into force in June 2023, nine years later, on the fifteenth ratification. The AU's own status list, dated July 2024, records 16 ratifications out of 55 member states ([AU status list](https://au.int/sites/default/files/treaties/29560-sl-AFRICAN_UNION_CONVENTION_ON_CYBER_SECURITY_AND_PERSONAL_DATA_PROTECTION.pdf)).

That is the demonstrated conversion rate on a **binding** continental instrument. The AI Strategy is not binding.

### South Africa: a 2013 statute doing 2026 work

There is no AI-specific legislation. The operative provision is section 71 of the Protection of Personal Information Act of 2013, which gives a data subject the right not to be subject to a decision with legal consequences, or affecting them substantially, based solely on automated processing intended to provide a profile, and which requires that safeguards allow the subject to contest the decision and oblige the responsible party to provide "sufficient information about the underlying logic of the automated processing" ([POPIA s 71](https://popia.co.za/section-71-automated-decision-making/)).

Read that against most of the AI acts written since. A statute drafted before the transformer architecture existed contains a contestability right and a logic-disclosure duty, which is more than several dedicated AI regimes deliver.

The policy track is a harder story. A National AI Policy Framework appeared in August 2024, with a consultation version in October ([DCDT](https://www.dcdt.gov.za/sa-national-ai-policy-framework/file/338-sa-national-ai-policy-framework.html)). Cabinet approved a draft National AI Policy on 25 March 2026, it was gazetted for comment on 10 April, and it was **withdrawn on 26 April 2026** after fabricated citations were found in its reference list. The minister's statement is the primary source and is worth quoting exactly: "This failure is not a mere technical issue but has compromised the integrity and credibility of the draft policy" ([SAnews, 26 April 2026](https://www.sanews.gov.za/south-africa/minister-announces-withdrawal-draft-ai-policy)). A revised policy is targeted at Cabinet in November 2026 and publication in January 2027 ([Polity](https://www.polity.org.za/article/south-africa-targets-january-2027-for-revised-ai-policy-after-earlier-withdrawal-2026-05-26)).

The narrow lesson, and it generalises well beyond one country: that instrument was not defeated by an adversary or a lobby. It was defeated by its own drafting tooling. One incident is not a law of nature, but the sequence it implies is hard to argue with: a state that intends to govern AI output should be able to verify AI output first.

---

## The scoreboard

| Jurisdiction | The instrument that actually binds | Mechanism | Who it reaches | Observed activity |
| --- | --- | --- | --- | --- |
| United States | Export controls; federal procurement; two state statutes | Licence requirement by corporate parentage; contract terms | Anyone downstream of US compute, anywhere | Licensing operates continuously on every covered shipment |
| China | Filing and registration for public-facing services | Ex ante market-access gate | Anyone wanting Chinese users | 988 services through the gate; the gate is not enforcement |
| European Union | In practice the Digital Services Act, not the AI Act | Designation above a user threshold; product law | Anyone selling into, or read by, the single market | ChatGPT, Reddit and Roblox designated 31 Aug 2026; zero AI Act actions |
| Australia | Existing sectoral law; a disclosure duty from Dec 2026 | General regulators in their own domains | Domestic conduct | None AI-specific |
| African Union | Non-binding continental strategy | Member-state adoption | Nobody directly | Not applicable |
| South Africa | POPIA section 71 | Data-protection right, contestability | Domestic processing | No published section 71 case found |

---

## Three kinds of rule, and only two of them travel

Read the table again and a structure falls out that has nothing to do with philosophy.

**Rules about placing on the market** reach anyone who wants the market. That is the EU and, in its own way, China. The reach is proportional to how badly a firm wants those users, and the legal wrapper is almost incidental, which is why Europe could reach ChatGPT through a search-engine definition without amending anything.

**Rules about export** reach anyone downstream of the supply chain, whether or not they ever wanted anything to do with the exporting state. That is the United States, and it is the only category with genuinely global compulsion, which is why it is the only one that produces immediate corporate reorganisation.

**Rules about conduct** reach people already inside your jurisdiction who were already inclined to comply. That is most of the world's AI legislation.

Almost every AI act written since 2023 is the third kind. This is why so many of them will never be felt by a frontier developer, and why the correct question about a new national AI law is not what it prohibits but whether anyone outside its borders has to care.

---

## The chokepoint literature, and what it admits about itself

The intellectual case for reading governance this way is well made and, unusually, honest about its own weaknesses.

"Computing Power and the Governance of Artificial Intelligence" ([arXiv:2402.08797](https://arxiv.org/abs/2402.08797), nineteen authors including Sastry, Heim, Anderljung, Hadfield, Bengio and Coyle) argues that compute is the most tractable point of intervention in the AI stack because it has four properties the other inputs lack: it is **detectable**, because frontier training needs physically visible facilities; **excludable**, because hardware is rival in a way that copyable weights are not; **quantifiable**, because FLOP is measurable; and **concentrated**, because fabrication, lithography and design each pass through a handful of firms. From those properties they derive three capacities: visibility, allocation and enforcement.

The paper's own limitations section is the part worth reading twice. It concedes that compute thresholds are imperfect proxies for capability or risk, that algorithmic efficiency erodes any fixed threshold, that low-compute specialised systems can pose serious risks while falling below any line, and that compute governance centralises power among the states and firms that hold compute.

Sara Hooker's critique ([arXiv:2407.05694](https://arxiv.org/abs/2407.05694)) sharpens the first of those into the strongest published objection: the compute-to-risk relationship is uncertain and changing fast, so any fixed threshold is arbitrary and rapidly obsolete, and thresholds give regulators false confidence about which capabilities emerge at which scale.

Note where that leaves things. The best available critique of compute governance is already conceded inside compute governance's founding paper. That is a field behaving honestly. It is also a field telling you its main instrument is blunt.

---

## The chokepoint nobody legislated

Everything above assumes chokepoints belong to states, because states hold export licences and market access. That assumption was tested in the last week of August, and it did not survive.

On 26 August 2026 The Information reported that Nvidia had agreed to acquire Hugging Face for **$12.9bn**, with the report carried the following day by CNBC and others ([CNBC](https://www.cnbc.com/2026/08/27/nvidia-hugging-face-acquisition.html)). It is a press report rather than a company confirmation, and other reporting the same day described talks that had not yet produced a signed agreement. Hold it as reported, and as possibly not yet signed.

Read it against the four properties. Compute is governable because it is detectable, excludable, quantifiable and concentrated, and Nvidia *is* the concentration. Hugging Face is the primary public distribution point for open model weights outside China, hosting more than two million models across more than fifty thousand organisations. Inside China the equivalent role sits with ModelScope, which matters in an essay whose main axis is the compute relationship between those two countries. One company would then hold both the layer that makes frontier training possible and the layer through which open weights actually reach the world.

No parliament voted on that. No AI act on earth contemplates it. A transaction of this size does require premerger clearance in the United States, so a regulator will see it, but the instrument is competition law rather than anything anyone calls AI governance. A chokepoint changed hands in a private deal, reported by a trade publication, in the same week the same company posted quarterly revenue of **$96.2bn, up 106 percent year on year**, operating income of **$63.7bn** and GAAP net income of **$59.7bn**, for the quarter ended 26 July 2026 ([SEC filing](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm)).

Those two profit figures are worth one careful paragraph, because the record claim is widely mangled. On **operating** profit, the $63.7bn is the largest quarterly figure an American public company has recorded, ahead of the same company's $53.5bn a quarter earlier and Apple's $50.9bn before that. On **GAAP net income** the $59.7bn is not a record and is not close: Alphabet reported $112.2bn in the second quarter of 2026 on $40.8bn of operating income, the difference being roughly $99bn of gains on equity securities. That is a paper gain, not a quarter's trading. The two claims are different claims, and only one of them is about a business.

Two consequences for the argument in this essay, and the first one cuts against me.

**My framing is incomplete if it only looks at states.** The most consequential chokepoint event of 2026 may turn out not to be an executive order, a designation or a filing regime. It may be an acquisition.

**And it exposes what every jurisdiction here is actually regulating.** All six regulate *deployment*: what may be placed on a market, offered to users, disclosed. None regulates *diffusion*: who owns the distribution layer for open model weights. The AI Act does not. The Digital Services Act does not. Export control reaches the hardware and stops at the repository. If a state wanted to govern how AI spreads rather than how it is sold, the instrument it would need is competition law. I have found no competition authority that has framed open-weight repositories as a market in their own right, though the UK's foundation-model work already treats routes to market and exclusive distribution arrangements as competition concerns, which is the nearest thing to a foothold.

## And the measurement is worse than the argument

<figure class="post-fig">
<p class="fig-title"><strong>The most important number in AI geopolitics, and its error bar</strong></p>
<p class="fig-sub">Epoch AI estimates the United States hosts roughly 75 percent of global AI supercomputer performance against China's 15 percent, leaving roughly 10 percent for everywhere else, which is my subtraction rather than a measured figure. The lower row is a different quantity on the same percentage scale: Epoch's separate frontier data centre tracking covers 86 sites and 13.3 GW of IT capacity and estimates it observes about 46 percent of deployed AI compute as of June 2026, with a 90 percent interval of 26 to 79 percent. No government anywhere publishes a national compute inventory.</p>
<div class="fig-scroll"><svg viewBox="0 0 700 244" role="img" aria-label="Estimated 75 percent United States, 15 percent China and 10 percent rest of world share of AI supercomputer performance, shown above a separate estimate that the underlying dataset observes 46 percent of global compute with a 90 percent interval of 26 to 79 percent.">
<g font-family="var(--mono)" font-size="10" fill="var(--faint)" letter-spacing="1.4">
<text x="0" y="20">SHARE OF AI SUPERCOMPUTER PERFORMANCE · ESTIMATED</text>
</g>
<rect x="0" y="28" width="479" height="26" rx="3" fill="#8cbeff"/>
<text x="12" y="45" font-family="var(--mono)" font-size="11" fill="#07070a" font-weight="700">UNITED STATES ~75%</text>
<rect x="483" y="28" width="96" height="26" rx="3" fill="#be8cff"/>
<rect x="583" y="28" width="64" height="26" rx="3" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.28)" stroke-width="1"/>
<text x="483" y="72" font-family="var(--mono)" font-size="11" fill="#be8cff">CHINA ~15%</text>
<text x="583" y="72" font-family="var(--mono)" font-size="11" fill="var(--dim)">REST ~10%</text>
<line x1="0" y1="104" x2="638" y2="104" stroke="rgba(255,255,255,.08)" stroke-width="1"/>
<g font-family="var(--mono)" font-size="10" fill="var(--faint)" letter-spacing="1.4">
<text x="0" y="130">A DIFFERENT QUANTITY, SAME SCALE · SHARE OF GLOBAL COMPUTE THE DATASET OBSERVES</text>
</g>
<line x1="166" y1="158" x2="504" y2="158" stroke="rgba(255,255,255,.30)" stroke-width="1"/>
<line x1="166" y1="151" x2="166" y2="165" stroke="rgba(255,255,255,.30)" stroke-width="1"/>
<line x1="504" y1="151" x2="504" y2="165" stroke="rgba(255,255,255,.30)" stroke-width="1"/>
<circle cx="293" cy="158" r="5.5" fill="#8cbeff"/>
<text x="150" y="188" font-family="var(--mono)" font-size="10.5" fill="var(--dim)">26%</text>
<text x="272" y="188" font-family="var(--mono)" font-size="10.5" fill="#8cbeff">46%</text>
<text x="488" y="188" font-family="var(--mono)" font-size="10.5" fill="var(--dim)">79%</text>
<text x="0" y="232" font-family="var(--mono)" font-size="10.5" fill="var(--faint)">THE LOWER ROW IS A 90% INTERVAL, NOT A SHARE OF ANYTHING IN THE UPPER ROW</text>
</svg></div>
<p class="card-meta mono fig-src">SOURCES · EPOCH AI, TRENDS IN AI SUPERCOMPUTERS, APRIL 2025 · EPOCH AI, DATA ON AI DATA CENTERS, UPDATED 31 AUGUST 2026 · REST-OF-WORLD SHARE IS THE AUTHOR'S SUBTRACTION</p>
</figure>

Two different datasets sit behind that chart and they should not be run together, so here they are separately. The 75 and 15 percent shares come from Epoch's *Trends in AI Supercomputers*, whose authors state that coverage varies across companies, sectors and hardware types because public reporting is uneven, while arguing the distribution remains broadly representative ([Epoch AI](https://epoch.ai/publications/trends-in-ai-supercomputers)). The 46 percent coverage estimate and its interval come from Epoch's separate frontier data centre tracking, built from satellite imagery and construction permits, whose own documentation notes the database consists mostly of US sites ([Epoch AI](https://epoch.ai/data/ai-data-centers)). The rest-of-world share in the chart is my subtraction from the first two, not a measured figure.

Chinese facilities are systematically harder to observe. No government publishes an official inventory. So the variable that anchors most strategic commentary about the AI race is estimated by an outside party from photographs of roofs and planning applications. I am not claiming any state has relied on these estimates in a specific decision, because I cannot show that. I am claiming that if a better number exists, no one has published it.

---

## Where this leaves anybody who actually operates

Here is the part that matters commercially and that the jurisdictional survey format usually buries.

**For a company, the binding jurisdiction is not the one you are in. It is the strictest one you sell into, and the one whose compute you sit on.**

A firm anywhere in the world shipping a high-risk system into Europe will be governed by Annex III from 2 December 2027, whatever its own parliament does or does not pass. A firm using American accelerators is governed by BIS guidance regardless of where it is incorporated, because since 31 May 2026 the operative test is where its ultimate parent is headquartered, not where its servers sit.

So the practical governance map for an operator has three entries, and none of them is their own government:

1. **Which markets you sell into.** That determines your product-law exposure, and the date that governs most of it is 2 December 2027.
2. **Whose compute you sit on.** That determines your export-control exposure, and the test is corporate parentage, not geography.
3. **Whose weights you depend on.** That is currently governed by provider terms rather than by law. China's commerce ministry is reported to be considering adding AI model weights and training data to its restricted-export catalogue ([Financial Times reporting, July 2026](https://www.tomshardware.com/tech-industry/artificial-intelligence/china-is-considering-export-controls-on-ai-technologies-including-banning-local-companies-from-using-tsmc-report-claims-restrictions-would-also-advanced-ai-models-training-data-and-overseas-acquisitions)). No catalogue revision has been published. Treat it as deliberation, not law, and watch it, because it would be the first genuine second chokepoint.

Four things follow, and they are the practical residue of the whole essay.

**Map exposure by market and supply chain, not by domicile.** Most compliance functions are organised around where the company is registered. That is the least informative variable on the list.

**Treat 2 December 2027 as real.** It moved once, so it can move again. It is nonetheless the nearest hard date carrying serious penalties that applies to anyone selling a high-risk system into the largest regulated market in the world, and the compliance work behind it takes longer than the time remaining.

**Build the verification function before the policy function.** South Africa's withdrawn draft is the cleanest available demonstration of what happens when a state writes AI policy faster than it can check AI output. The same failure sequence is available to any company writing its own internal AI standards with the same tools.

**Watch the Colorado mechanism, because it is the template.** Where a rule is inconvenient to a party with more leverage than the government that wrote it, the rule now gets litigated out of existence rather than debated. That happened inside one country in five weeks. There is no structural reason the same dynamic stops at a border, and a good deal of the international soft-law architecture is built on the assumption that it does.

---

## How this could be wrong

**The Commission enforces, hard, under the AI Act specifically.** Its fining power over general-purpose model providers went live on 2 August 2026 and has never been used. One serious action against a major laboratory, with a real penalty and a behavioural remedy, would demonstrate that the AI Act is a chokepoint in its own right and that I have ranked the instruments wrongly. This is the failure mode I consider most likely, and I would treat the first case as decisive rather than as an outlier.

Be careful about what would and would not refute me here, because the January 2027 deadline will produce headlines either way. If the Commission compels changes to ChatGPT through the Digital Services Act, that **confirms** the market-access reading rather than contradicting it. What would refute me is the AI Act producing that result on its own, or a jurisdiction with neither a large market nor supply-chain leverage producing it at all.

**The treaty ratifies.** Four more ratifications, three of them from Council of Europe members, and the Framework Convention enters into force. The signature-to-ratification gap I have built the opening on would then be a lag rather than a verdict. Watch the states that signed early and have parliamentary majorities.

**A second chokepoint appears.** If China publishes the export catalogue covering model weights and training data, the map goes from one-sided to bipolar, and every downstream country acquires a choice it does not currently have. That would change the strategy for everyone outside the two blocs more than any national AI act will.

**A competition authority reaches a private chokepoint.** Review here is not the test, because a deal this size cannot close without premerger clearance and will be seen either way. The test is whether an authority **conditions or blocks** it. If one does, that is a state reaching a chokepoint held by a company, using an instrument I left out of the table entirely. The windows are short and checkable: the initial United States waiting period runs thirty days from filing, extendable by a second request, and a European Phase I review runs twenty-five working days. I do not expect a challenge. I would be glad to be wrong, because a state that can condition this deal is a state with more reach than this essay credits it with.

**Compute stops being the constraint.** This is Hooker's argument taken to its conclusion. If capability decouples sufficiently from training compute, detectability and excludability both weaken, and the American instrument loses its grip without anyone repealing anything. The chokepoint thesis is an argument about a physical bottleneck, and physical bottlenecks move.

---

## What I still cannot resolve

**There is no authoritative count of countries with binding AI legislation.** I went looking for the comparison everyone makes casually, binding laws against national strategies, and neither the OECD, UNESCO nor the Stanford AI Index publishes it. The AI Index counts bills passed rather than countries, and cautions that volume is not a measure of significance. The OECD's policy observatory counts initiatives across more than 80 jurisdictions but publishes no aggregate of strategies. The reason appears to be that "binding AI legislation" resists definition, and I think that difficulty is the more interesting fact than any number would have been.

**No national compute inventory exists anywhere.** See the chart. This is a measurement gap at the centre of a geopolitical argument.

**Nobody publishes regulator capacity.** We can count clauses in any jurisdiction in an afternoon. We cannot count evaluators, and the second number predicts enforcement far better than the first. The EU AI Office figure in this essay came from a parliamentary answer, not a published establishment table. I would rather have the capacity number for all six jurisdictions than every statute in full.

---

The pattern across this series has been consistent enough that I now expect it. In Part I, capital converted into intelligence almost frictionlessly and could not convert into transformers at all, and the value sat in the seam. In Part II, the firms that got paid were the ones whose systems produced a number somebody could underwrite. In Part III, the seam had a regulation number on either side of it, and the certified layer turned out to be the one that could not travel.

Here the regulation numbers themselves turn out to have wildly different reach, and the difference is not written anywhere in their text. It is written in whether the state issuing them holds anything the governed party needs.

Everyone now has an AI policy. Almost nobody has a chokepoint. Only one of those two things is governance.

---

*Architecting Alpha is a series about where intelligence converts into capital, across intelligence, bits, atoms and electrons. Part I, [Intelligence Meets Resistance](/posts/intelligence-meets-resistance/). Part II, [Nobody Is Actually Building](/posts/nobody-is-actually-building/). Part III, [The Aircraft Is Not the Product](/posts/the-aircraft-is-not-the-product/). This is Part IV, filed under intelligence.*

*Disclosure: I run an AI systems firm and advise companies on exactly the exposure-mapping described in the closing section. Read the recommendations with that in mind. They are also what I would tell someone who never spoke to me again.*

*Figures are linked to their sources. Estimates are marked as estimates, the one number that is my own arithmetic is marked as mine, and where a treaty count or a headcount rests on a single official statement rather than a published register, the essay says so. If you find an error, [info@selfbuiltsystems.com](mailto:info@selfbuiltsystems.com).*
