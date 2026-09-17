---
title: The AI Leadership Problem
slug: the-ai-leadership-problem
date: 2026-09-17
description: Across a portfolio, one pattern keeps repeating. The person made responsible for AI is usually the person who found the first easy win with it, which is almost never the person who can redesign how the company runs. A thought experiment about where that leads.
image: /assets/images/the-ai-leadership-problem.jpg
imageAlt: A hierarchy of glowing particle nodes with the entire middle tier missing, and faint particles arcing across the empty band without landing.
tags: [operating structure, private equity, venture building, capital allocation]
---

**In 2025 a very large number of companies answered the question "who should own AI" by looking around the table and picking whoever was already using it. Usually that was someone in marketing. I want to argue that this was a rational choice with an expensive second-order consequence, that the consequence is now visible in the data, and that the gap it leaves open is the most interesting unfilled position in the modern org chart. I also want to be honest that I have a position in the answer, so read the last section first if you prefer.**

*Notes from the portfolio. An observation and a thought experiment, not a thesis.*

This is not part of the Architecting Alpha series. It is a working note. My team and I sit across an unusual range: building companies from zero on one end, and on the other end the investing layer, where you look at many companies at once and get to see what is actually happening to their numbers rather than what their decks say is happening. The pattern below is what shows up when you hold those two vantage points at the same time. I am publishing it as a conjecture because the strongest counterargument to it is good, and I would rather have it attacked than agreed with.

## The claim, and how it fails

**Companies did not fail to adopt AI. They adopted it exactly where adoption was cheapest to justify, which is the function where output is fast to verify, failure is reversible and nobody signs a liability. That is marketing. The consequence is that the technology diffused into the functions that could absorb it without anyone changing a decision right, and stalled at the boundary of every function that could not. What is missing is not tooling, budget or talent. It is a person who holds enough business context to know which decisions should move and enough technical understanding to know which ones can.**

Three ways this is wrong, and I mean these seriously.

It may be that the gap closes by itself. Every general-purpose technology looks like it needs a translator in its first decade and then stops needing one, because the capability becomes ordinary and gets absorbed into the roles that already exist. If that happens here, the position I am describing is a temporary artifact of novelty rather than a structural feature.

It may be that the gap gets filled by vendors rather than by employees, in which case I am right about the problem and wrong about the shape of the answer.

And it may simply be that the base rate defeats me. The corporate world has tried inserting a translation layer into the middle of the org chart twice in fifteen years, and both attempts ended with the capability being absorbed back into line roles. I take that seriously enough to give it its own section below, because it is the argument I would make against myself.

## 1. Marketing was not a mistake. It was the lowest-tolerance function.

The standard version of this story is that companies made a category error by putting a marketing person in charge of AI. I do not think that is quite right, and the uncharitable version is also the less useful one.

Marketing was the correct first landing site for a specific and structural reason. It is the function in most companies where the cost of a wrong output is lowest, the feedback loop is shortest, and no external party has to accept liability for the result. A bad headline gets replaced. A bad campaign gets switched off. Nobody is certified, nothing is audited, and no regulator reads the draft.

Move one function in any direction and that stops being true. In finance, someone signs. In operations, a wrong output has physical consequences and a supplier contract attached. In anything touching a customer's money, health or safety, there is a named human whose professional standing is on the line. This is the same tolerance argument that governs where industrial automation lands: robots did spot welding for thirty years before anyone let them near a surgical field, and the reason was never the robot.

So AI went to marketing first for the same reason water finds the lowest point. The problem is not that companies chose wrong. The problem is what happened next, which is that they mistook the landing site for the destination.

## 2. Where AI actually sits, in federal statistics

This is the part where the pattern stops being anecdotal.

The US Census Bureau runs a survey that asks firms directly, rather than asking vendors about their customers. A Census working paper published in April 2026, [The Microstructure of AI Diffusion](https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-25.html), uses that survey to break down where AI is being used inside adopting firms. The top three functions:

Sales and Marketing, 52 percent. Strategy and Business Development, 45 percent. Information Technology, 41 percent.

Marketing is not a caricature of where AI sits. It is literally, measurably, where AI sits.

Two more numbers from the same paper matter more than the first one. Among firms using AI, **57 percent use it in three or fewer business functions**. And **66 percent use it solely to augment existing tasks**, with AI-related employment reductions occurring in only 2 percent of firms.

Read those together. The median adopting company has put AI into a couple of functions, is using it to make existing work faster, and has changed nothing about how the work is arranged. That is not a failure of adoption. Adoption is real and rising. It is a failure of transmission. The technology got in the building and never reached the operating model.

One methodological note, because it matters and almost nobody mentions it. The Census question changed in November 2025, from whether a firm used AI to produce goods and services to whether it used AI in any business function. So the widely repeated claim that US adoption roughly doubled into 2026 is partly a definitional artifact, not pure growth. I would not build an argument on that trend line. The function breakdown and the concentration figures are the parts worth using, because they are measured within a single consistent survey.

While I am on the subject of numbers that travel further than their evidence: the much-cited finding that 95 percent of enterprise AI pilots produce no measurable return comes from a preliminary, non-peer-reviewed paper built on 52 interviews and 153 survey responses collected at industry conferences, and it counts the roughly 80 percent of firms that never ran a pilot at all as failures. It is a denominator artifact. I mention it only because an argument about organisations mistaking activity for change should not lean on the least examined number in the field.

## 3. The two-sided gap

Here is the structural problem, stated as plainly as I can.

The person who knows which decisions in a company actually matter is the CEO, or someone very close to that seat. They know which processes are load-bearing, which customer relationships are fragile, which parts of the business are held together by one person's judgment, and which reported number everyone quietly distrusts. That knowledge is almost never written down. It is the most valuable undocumented asset in any company.

The person who knows what the technology can actually do, as opposed to what it is marketed as doing, is technical, usually junior to the executive team, and does not have the organisational context to know which of those decisions are worth touching. They can build almost anything and have no defensible basis for choosing what.

Neither of them is missing information the other could simply email over. The CEO's knowledge is tacit and the engineer's is conditional, and the translation between them is itself a skilled act.

The organisations I have watched handle this well have one person or one small group that sits across the seam. The organisations that handle it badly have either a technical team building impressive things nobody adopts, or an executive mandate that produces a tool procurement exercise and an unchanged company.

There is survey evidence that the ownership question is genuinely unresolved rather than merely under-discussed. A Pearl Meyer survey run in mid-2026 found that only 34 percent of C-suite executives said it was consistently clear which executive or team makes AI decisions, against 53 percent of board members and 57 percent of managers below C-level. The sample is small, 116 respondents, so treat it as illustrative rather than conclusive. But the inversion is the interesting part: the people closest to the decision rights were the least confident about who holds them, and the people furthest away were the most confident. That is what an unassigned responsibility looks like from the inside.

## 4. The argument against me, which is strong

Now the part I would use to attack this if someone else had written it.

"A new translation role emerges in the middle of the org chart" is not a new claim. It has been made twice in recent memory, and both times the role was created at speed, peaked, and was then absorbed back into existing line functions.

**The Chief Digital Officer.** PwC Strategy& tracked the role across the world's 2,500 largest listed companies. Penetration went from 6 percent in 2014 to 19 percent in 2016 to 21 percent in 2018. But the flow tells a different story from the stock: new appointments per year went from [160 in 2016 to 54 in 2018](https://www.pwc.com.au/digitalpulse/chief-digital-officer-study-2019-past-peak.html), a two-thirds collapse in creation while the installed base was still nominally growing. PwC called it past peak in 2019. Their stated explanation is almost word for word the counterargument to this essay: organisations concluded that transformation "should be led by the broader organisation, rather than fall on one person."

**The Chief Data Officer.** A Wavestone benchmark of 125 Fortune 1000 and comparable organisations found that 84.3 percent had appointed a CDO or CDAO, up from 12 percent in 2012. Near-universal adoption. Then the self-assessment: 47.6 percent characterised the role as very successful and well established, and 47.6 percent described it as nascent, evolving, or a revolving door. Thirteen years in, the people holding the role are split exactly in half on whether it works. Tenure matches: 53.7 percent under three years.

**And the third run is happening now.** Gartner forecasts that by 2027, [75 percent of chief data and analytics officers not seen as essential to their organisation's AI success will lose their C-level position](https://www.gartner.com/en/newsroom/press-releases/2025-05-12-gartner-survey-finds-seventy-percent-of-cdaos-are-responsible-for-artificial-intelligence-strategy-and-operating-model). The same analyst house that called the first cycle is calling the second.

The honest reading of this evidence is that the default outcome for a translation role is absorption, and that anyone announcing a new one bears the burden of explaining why this time is different.

The only answer I can construct that is hard to vary is this. Digital changed the channel. Data changed the substrate. Neither changed what a decision costs to make. This one does, because it changes the unit cost of cognition, which is an input to every function rather than a capability inside one. If that is right, the thing being repriced is not a department. It is the org chart itself, which is a compression of a company's decision latency and was designed when thinking was expensive.

That is a real distinction. It is also exactly the kind of distinction that sounds compelling and turns out, in ten years, to have been special pleading. I would put it at better than even and nowhere near certain.

## 5. The other way this gets solved, which is not a hire

If the gap is real and the internal role is historically fragile, there is an obvious third path: you do not hire the translator, you buy one.

That model has a name and a twenty-year history. Palantir built its business on engineers embedded directly inside client operations, and describes the approach in its own filings as embedding with customers to tackle their problems while improving the product. It also concedes the cost in its risk factors, in language worth quoting because it is the least flattering account available: the sales model "has historically required us to spend months and invest significant resources working with customers on pilot deployments at no or low cost to them."

The model is now being copied at speed by the frontier labs, with dedicated deployment engineering groups and acquisitions to staff them. If that is how the gap actually closes, then the answer to "who owns AI in your company" is not a seat on your org chart. It is a line item in your services budget, and the capability never becomes yours.

I will declare my position here rather than let it sit implied. My firm is on the vendor side of that answer. We build the systems inside companies rather than the infrastructure underneath them, and the existence of this gap is commercially good for us. That should raise your prior that I am motivated to describe the gap as large and permanent. Discount accordingly. I have tried to write the counterargument section as though I had the opposite interest, and the base-rate evidence above genuinely does cut against my own conclusion.

One thing worth noting about the buy-versus-build question: I could not find published unit economics for embedded deployment engineering at any company. No cost per deployment, no margin disclosure, no salary bands from a primary source. The economics of the model are asserted everywhere and disclosed nowhere. Draw your own conclusion about what that usually means.

## 6. The thought experiment

Here is the exercise, which is the actual point of writing this down.

Take a company you own, run, or are underwriting. Do not ask where you could add AI. That question has an answer and the answer is worth very little, because you will get a list of tasks and a procurement plan and a company that operates exactly as it did before.

Ask instead: **if this company were being built today, by people who assumed intelligence was cheap and abundant, what would be different?**

Not which tools it would buy. What would be *structurally* different. How many approval steps would exist. How many roles would exist at all. Which functions would be one person and a system instead of nine people and a process. Where the company would choose to be slow on purpose, because judgment and liability genuinely belong to a human, and where it is currently slow by accident.

Then do the subtraction. The distance between the company you described and the company you have is your actual AI opportunity. Everything else is tooling.

Most people who run this exercise honestly arrive somewhere uncomfortable, which is that the binding constraint was never the technology. It was that nobody has the authority to move a decision right across a functional boundary, and nobody whose job depends on that boundary will propose it.

## 7. What this means at the investing layer

This is the part that does not usually get written, because most commentary on this subject is aimed at operators.

If the argument above is roughly correct, three things follow for anyone holding a portfolio rather than a single company.

**It is a diligence question, and it is about decision rights rather than tooling.** "What AI are you using" produces a vendor list and tells you almost nothing. "What decision does someone make differently this quarter than they did last year, and who changed it" produces either a precise answer or a silence, and the silence is the finding. A company with twenty AI tools and an unchanged approval chain has bought efficiency inside departments and will not show it in the P&L, which is consistent with what the survey evidence keeps finding: high reported productivity gains, materially lower reported revenue impact.

**The role is probably a fund-level resource before it is a company-level hire.** This is the non-obvious part. If the translation capability is genuinely scarce, genuinely expensive, and historically fragile as a single seat inside one company, then a portfolio is the natural unit at which to hold it. One group that has now done this work across nine companies has a pattern library that no individual portfolio company can develop, arrives with the authority of the owner rather than the standing of a new hire, and does not have to survive the eighteen-month honeymoon that kills the role internally. The base-rate evidence against the internal role is not evidence against the capability. It is evidence about where the capability should sit.

**And the asymmetry is already visible in the firm-size data.** Every official statistic that measures this, in the US, the EU and the UK, disagrees on the headline adoption rate because they all define it differently, but they agree cleanly on one thing: adoption scales hard with company size, and the smallest firms are barely moving. Census found no significant change at all among firms with fewer than 20 employees over the six months to May 2026. That gap is either the largest arbitrage available in lower mid-market ownership, or it is a rational response by small companies to a technology whose returns require a scale of reorganisation they cannot afford. I do not yet know which. That is the thing I would most like to be argued with about.

## How this could be wrong

The base rate is the strongest objection and I have given it a section rather than a sentence, because two prior attempts at this exact organisational move ended in absorption, and PwC's explanation for the first one is a direct refutation of mine.

The measurement may not support the interpretation. Sixty-six percent of firms using AI purely to augment tasks is consistent with my reading, that nothing structural has changed. It is equally consistent with the benign reading, that augmentation is simply the correct first phase and reorganisation follows adoption rather than preceding it. Two years of data cannot distinguish those. Five might.

The vendor path may win outright, in which case the interesting position is not inside companies at all and the honest version of this essay would be much shorter.

And the conflict of interest is real, stated above, and should be weighted.

If one of those breaks first, I would like to know which. Write to info@selfbuiltsystems.com. Short and specific gets an answer.

The question is not who should own AI. Ownership is a title, and titles have a poor record here. The question is which decisions in your company are currently slow by accident, who has the authority to move one, and whether that person exists.

*Published as a working note rather than a finished argument. Figures are linked to primary sources, and where a widely repeated number could not be traced to one, it is described that way in the text rather than borrowed.*
