# DESIGN.md — Visual System, UX Rules & Component Specification

> **Purpose:** This file defines the visual direction, UX principles, design system, responsive behavior, interaction rules, accessibility requirements, and reusable component language for the B2B Cloud Engineering + Managed Technology Services website.
>
> **Dependencies:** Read `PROJECT.md` and `SITEMAP.md` before implementing this file.
>
> **Priority:** `PROJECT.md` controls business positioning. `SITEMAP.md` controls information architecture. `DESIGN.md` controls visual and interaction design.
>
> **Important:** The website must look like a focused, credible technology engineering company capable of owning serious technical work. It must not look like a generic IT agency, freelancer portfolio, cheap template, crypto product, gaming site, or exaggerated cybersecurity company.

---

# 1. Design Objective

The design must help a business visitor quickly understand:

1. What the company does.
2. Which technical problems it solves.
3. Why the team is credible.
4. Why the integrated Build + Run model is valuable.
5. How to engage the company.
6. What action to take next.

The website should support the perception:

> **A focused technical team capable of owning serious technology work.**

The intended business impression is:

> **They can take technical ownership.**

---

# 2. Brand Personality

The website should feel:

- Credible
- Technical
- Precise
- Calm
- Modern
- Premium
- Reliable
- Structured
- Enterprise-ready
- International
- Competent
- Operationally mature

It should NOT feel:

- Cheap
- Loud
- Flashy
- Juvenile
- Trend-chasing
- Template-based
- Over-designed
- Crypto-like
- Gaming-like
- Cyberpunk
- Generic AI startup
- Generic Indian IT agency
- Freelancer portfolio
- Digital-marketing agency

---

# 3. Core Visual Principle

Use **clarity over decoration**.

Every visual element should serve at least one of these purposes:

- explain
- prioritize
- guide
- prove capability
- establish trust
- support conversion

If an element exists only to make the page look busy, remove it.

---

# 4. Visual Direction

Recommended direction:

## Technical Editorial + Enterprise Product Design

Combine:

- strong editorial typography
- clean enterprise layouts
- structured technical diagrams
- restrained product-style UI elements
- generous whitespace
- subtle borders
- clear hierarchy
- minimal but purposeful motion

The site should feel closer to a serious cloud/engineering consultancy or infrastructure product company than a traditional outsourcing agency.

---

# 5. Color Strategy

Do not hard-code final brand colors until the brand identity/logo is confirmed.

Use semantic design tokens so the palette can be changed centrally.

Recommended palette behavior:

### Base

- Light neutral background as primary surface
- Near-black/dark neutral primary text
- Muted neutral secondary text
- Subtle neutral borders

### Brand Accent

Use **one primary brand accent** for:

- primary buttons
- important links
- active navigation
- selected states
- small emphasis elements
- diagrams

### Secondary Accent

Optional.

Use only if it has a clear functional role.

Do not create a rainbow palette.

### Dark Sections

A small number of dark sections may be used strategically for:

- Build → Deploy → Run → Protect → Support
- strong CTA
- technical architecture visualization
- footer

Do not alternate dark/light sections mechanically.

---

# 6. Suggested Color Token Architecture

Use variables such as:

```css
--color-bg
--color-bg-subtle
--color-surface
--color-surface-elevated

--color-text-primary
--color-text-secondary
--color-text-muted
--color-text-inverse

--color-border
--color-border-strong

--color-brand
--color-brand-hover
--color-brand-active
--color-brand-soft

--color-success
--color-warning
--color-error
--color-info
```

Do not scatter raw hex values throughout components.

The final brand palette is:

`NEEDS INPUT`

Until approved, use a restrained professional placeholder palette that can be replaced through tokens without redesigning components.

---

# 7. Contrast

Text/background combinations must meet WCAG contrast expectations.

Never sacrifice readability for visual subtlety.

Especially verify:

- secondary text
- text on dark backgrounds
- buttons
- links
- form placeholders
- disabled states
- borders around inputs
- focus states

Do not use extremely light gray body copy.

---

# 8. Typography Strategy

Typography should communicate engineering credibility and clarity.

Recommended structure:

### Primary Sans Serif

Use a clean professional sans-serif for:

- navigation
- headings
- body
- buttons
- forms

Prefer a high-quality variable font if practical.

Do not use multiple decorative font families.

### Optional Technical Mono

A monospace font may be used sparingly for:

- protocol names
- technology labels
- code-like metadata
- diagram annotations

Do not use monospace for long body copy.

---

# 9. Typography Scale

Use fluid typography where appropriate with `clamp()`.

Suggested conceptual scale:

```text
Display XL
Display
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
Label
```

Recommended behavior:

### Hero H1
Desktop: approximately 56–72px depending on font/layout  
Mobile: approximately 38–48px

### H2
Desktop: approximately 40–52px  
Mobile: approximately 30–38px

### H3
Desktop: approximately 26–32px  
Mobile: approximately 22–28px

### Body
Approximately 16–18px

### Body Large
Approximately 18–21px

These are design ranges, not mandatory fixed values.

Prioritize readable line length and visual balance.

---

# 10. Typography Rules

- Use sentence case for most headings.
- Avoid ALL CAPS for long text.
- Keep hero copy concise.
- Avoid excessively wide headings.
- Use controlled maximum widths.
- Body paragraphs should generally remain around comfortable reading length.
- Avoid center-aligning long paragraphs.
- Use bold weight selectively.
- Do not make every heading oversized.

---

# 11. Grid System

Use a consistent responsive container.

Recommended desktop maximum content width:

Approximately **1200–1280px**

Allow selected visual/diagram sections to extend slightly wider when useful.

Suggested grid:

Desktop:
- 12 columns

Tablet:
- 8 columns

Mobile:
- 4 columns

Do not force every section into visible card grids.

---

# 12. Page Container

Use a central reusable container component.

Conceptually:

```text
Full viewport
└── Section
    └── Container
        └── Grid / Content
```

Container should manage:

- maximum width
- responsive horizontal padding
- alignment

Avoid individual pages inventing different container widths without reason.

---

# 13. Spacing System

Use a token-based spacing scale.

Example:

```text
4
8
12
16
20
24
32
40
48
64
80
96
120
144
```

Do not use random values repeatedly.

Large desktop section spacing may typically be around:

**96–144px**

Mobile section spacing may typically be around:

**64–96px**

Adjust based on content density.

---

# 14. Section Rhythm

Pages should have visual rhythm.

Avoid:

- every section looking identical
- card grid after card grid
- arbitrary background changes
- excessive separators
- giant empty spaces
- dense walls of content

Alternate visual composition intelligently:

- text + visual
- structured grid
- process diagram
- capability list
- experience block
- CTA
- editorial content

---

# 15. Border Radius

Use restrained radius.

Do not make every element look like a rounded mobile app card.

Recommended behavior:

- Buttons: moderate radius
- Inputs: moderate radius
- Cards: subtle/moderate radius
- Large containers: only when composition benefits

Avoid excessive pill shapes.

Pills are suitable primarily for:

- small labels
- tags
- status/category markers

---

# 16. Borders & Shadows

Prefer subtle borders over heavy shadows.

Cards should generally use:

- subtle border
- slight surface contrast

Use shadows only where elevation genuinely matters.

Avoid:

- large blurry shadows
- glowing cards
- neon borders
- glassmorphism everywhere

---

# 17. Header

## Desktop Header

Include:

- Company logo/name
- Primary navigation
- Services access
- Primary CTA

Recommended primary navigation:

- Home
- Services
- Solutions
- Experience
- About
- Insights
- Contact

Primary CTA:

**Book a Technical Consultation**

The header should remain visually clean.

### Sticky Behavior

A sticky header is acceptable if:

- it remains compact
- it does not cover content
- it does not constantly animate
- it improves navigation

Optional subtle background/border change after scroll.

---

# 18. Services Navigation

Desktop may use a simple dropdown or restrained mega-menu.

If using a mega-menu:

Organize services logically and keep it compact.

Do not create an enormous marketing mega-menu.

Approved service order:

1. Cloud & DevOps Engineering
2. Managed Cloud & Infrastructure
3. Cloud Migration & Modernisation
4. Fractional / Dedicated Technology Team
5. Software Engineering
6. Backup & Disaster Recovery
7. Streaming Infrastructure

---

# 19. Mobile Navigation

Requirements:

- clear menu button
- accessible label
- keyboard support
- focus management
- escape-to-close where appropriate
- body scroll handling
- sufficiently large touch targets

Do not rely on hover.

Do not use a tiny hamburger icon without an accessible name.

Primary CTA should remain easy to find.

---

# 20. Hero Design

The hero must communicate the business within seconds.

## Recommended Layout

Desktop:

```text
-------------------------------------------------
|                                               |
|  Eyebrow / Category                           |
|                                               |
|  Strong H1                         Visual /    |
|                                   Technical   |
|  Supporting copy                  System      |
|                                   Graphic     |
|  [Primary CTA] [Secondary]                    |
|                                               |
-------------------------------------------------
```

Alternative split layouts are acceptable if clarity improves.

## Hero Rules

- Do not use generic stock photography.
- Do not use random 3D objects.
- Do not use a fake dashboard without purpose.
- Do not fill the hero with technology logos.
- Keep the value proposition dominant.
- Keep CTA hierarchy obvious.

---

# 21. Hero Visual Direction

Preferred visual concepts:

### Option A — Technology Ownership System

A refined visual showing:

**Application → Cloud → Deployment → Monitoring → Operations**

### Option B — Build + Run Architecture

Visualize:

**BUILD → DEPLOY → RUN → PROTECT → SUPPORT**

### Option C — Layered Infrastructure Diagram

Show abstract layers:

```text
Applications
Cloud Infrastructure
Deployment Automation
Observability
Operations
```

The diagram should be understandable, not decorative complexity.

---

# 22. Problems We Solve Section

Do not use seven identical generic icon cards.

Preferred design:

- problem categories
- short diagnostic statements
- structured two-column or modular layout
- contextual service links

Examples:

**Deployments are still manual**  
→ Cloud & DevOps

**Nobody owns infrastructure operations**  
→ Managed Cloud

**Legacy systems are difficult to scale**  
→ Migration & Modernisation

This section should help visitors self-identify.

---

# 23. Services Section

Service hierarchy must be visible.

Do not make all services look equally important.

Recommended composition:

### Primary Services
Larger visual treatment:
- Cloud & DevOps
- Managed Cloud & Infrastructure

### Growth Services
Medium treatment:
- Cloud Migration & Modernisation
- Fractional Technology Team
- Software Engineering

### Specialist / Supporting Services
Smaller but clear:
- Backup & Disaster Recovery
- Streaming Infrastructure

All seven remain accessible.

---

# 24. Service Card Design

Each service card should contain only useful information:

- service name
- concise outcome/problem statement
- optional capability indicator
- clear link

Avoid:
- long paragraphs
- meaningless icons
- fake metrics
- excessive tags

Hover may subtly indicate interactivity.

Do not make important information hover-only.

---

# 25. Build → Deploy → Run → Protect → Support

This is a signature visual component.

It should appear prominently on the homepage and may be reused on About or Services.

Recommended stages:

### BUILD
Applications & Systems

### DEPLOY
Cloud & DevOps

### RUN
Managed Infrastructure

### PROTECT
Monitoring, Backup & DR

### SUPPORT
Ongoing Engineering & Operations

Design possibilities:

- horizontal flow on desktop
- vertical flow on mobile
- connected nodes
- restrained animated progression

Do not make it look like a generic sales funnel.

---

# 26. Process Component

For:

**Assess → Design → Build/Fix → Deploy → Monitor → Manage → Support**

Desktop:
- horizontal or staggered timeline where space permits

Mobile:
- vertical sequence

Each step:
- number
- short title
- concise explanation

Avoid long paragraphs.

---

# 27. Technical Experience Design

Heading:

**Selected Technical Experience**

This must visually distinguish team experience from company case studies.

Recommended card structure:

```text
Category / Context
Title
Short responsibility description
Technology / capability labels
Verified outcome if available
"Team Experience" marker
```

Do not use fake company logos.

Do not use fake client photos.

Do not imply the new company delivered previous employer projects.

---

# 28. Technology Capability Section

Avoid uncontrolled logo walls.

Group technologies by purpose.

Suggested UI:

```text
Cloud
AWS

Infrastructure & DevOps
Linux / Docker / Kubernetes / Terraform / Ansible

CI/CD
Jenkins / GitHub Actions / GitLab CI

Monitoring
Prometheus / Grafana / ELK / CloudWatch / Zabbix

Data / Web
MySQL / MongoDB / Redis / Nginx / Apache / PHP / JavaScript

Streaming
HLS / RTMP / SRT / UDP
```

Use text labels and restrained icons/logos.

Technology display is proof, not the headline.

---

# 29. Engagement Models

Three options:

### Fixed Project
### Monthly Managed Service
### Fractional / Dedicated Technology Team

Do not make these look like SaaS pricing cards.

There are no fabricated prices.

Recommended treatment:
- clear comparison of when each model fits
- short description
- relevant CTA

Managed Services may receive subtle emphasis because recurring relationships are strategically preferred.

---

# 30. Team Design

Team presentation should feel professional and understated.

Each profile may include:

- professional portrait if approved
- name
- functional role
- short capability summary
- selected expertise

Do not include:
- giant biographies
- resume-style timelines on homepage
- fake social links
- fake titles
- unnecessary personal details

If professional portraits are unavailable:

`NEEDS INPUT`

Use a deliberate non-photo layout rather than random stock people.

---

# 31. About Page Visual Direction

The About page should communicate:

- focused team
- complementary capabilities
- operating philosophy
- technical ownership
- delivery discipline

Avoid cliché agency imagery:

- handshake photos
- conference-room stock photos
- fake office photos
- “our culture” stock photography

---

# 32. Contact Page Design

The contact experience should feel low-friction and professional.

Recommended layout:

Desktop:
- contextual introduction / next steps on one side
- form on the other

Mobile:
- introduction
- form
- contact details

Fields:

- Name
- Business Email
- Company
- Country
- Service Required
- Short Project Description
- Optional Budget Range

Requirements:
- persistent visible labels
- clear required/optional states
- accessible errors
- clear success state
- clear failure state
- no unnecessary fields

Official contact information:

`NEEDS INPUT`

---

# 33. Form Design

Inputs should have:

- visible labels
- adequate height
- clear focus state
- readable text
- clear borders
- accessible validation

Do not use placeholder text as the only label.

Error messages should explain how to fix the issue.

Primary submit action should be visually obvious.

---

# 34. CTA Design

Use a controlled CTA hierarchy.

## Primary Button

Used for:
- Book a Technical Consultation
- Request a Cloud Assessment where it is the primary page goal
- Discuss Your Project on Software Engineering

Style:
- brand accent
- strong contrast
- obvious interactive state

## Secondary Button

Used for:
- Explore Services
- contextual secondary navigation

Style:
- neutral/outline/subtle

## Text Link

Used for:
- service detail links
- related resources
- inline navigation

Do not place three equally prominent buttons next to each other.

---

# 35. Button States

Implement:

- default
- hover
- active
- focus-visible
- disabled
- loading where applicable

Do not remove focus outlines without replacing them with an accessible focus treatment.

---

# 36. Icons

Use one coherent icon family.

Preferred:
- simple line icons
- consistent stroke
- restrained size

Do not mix:
- filled icons
- outline icons
- emoji
- random illustrations

Icons should support comprehension.

---

# 37. Diagrams & Technical Visuals

Technical diagrams are encouraged where they explain:

- Build + Run model
- cloud lifecycle
- migration process
- monitoring flow
- disaster recovery
- streaming architecture
- engagement process

Rules:

- keep diagrams conceptually accurate
- use readable labels
- provide accessible textual equivalent
- avoid tiny text
- adapt for mobile
- avoid decorative complexity

---

# 38. Imagery Strategy

Preferred imagery order:

1. Purpose-built technical diagrams
2. Real team portraits if available
3. Genuine work/environment imagery if available and approved
4. High-quality abstract technical visuals only when useful

Avoid generic stock imagery whenever possible.

Do not use fake offices, fake teams, fake data centers, or fake client meetings.

---

# 39. Motion Strategy

Motion should communicate state or structure.

Acceptable:

- subtle section reveal
- button interaction
- navigation transition
- diagram progression
- accordion transition
- restrained hover state

Avoid:

- constant floating elements
- parallax everywhere
- excessive scroll-triggered animation
- long intro animations
- cursor gimmicks
- text constantly moving
- background particles
- auto-playing decorative video

Respect `prefers-reduced-motion`.

---

# 40. Animation Timing

Keep most UI transitions fast and restrained.

Conceptual ranges:

- micro interactions: ~120–200ms
- component transitions: ~180–300ms
- larger reveal transitions: ~300–500ms

Do not delay content availability for animation.

---

# 41. Responsive Breakpoint Strategy

Do not design around devices alone.

Use content-driven breakpoints.

Suggested implementation starting points:

```text
Small mobile: ~360px+
Mobile: ~390–430px+
Tablet: ~768px+
Laptop: ~1024px+
Desktop: ~1280px+
Large desktop: ~1440px+
```

Exact CSS breakpoints may vary based on layout behavior.

---

# 42. Responsive Rules

## Desktop

Use:
- stronger grid compositions
- side-by-side content
- horizontal process diagrams
- more generous whitespace

## Tablet

- reduce large gaps
- collapse complex grids intelligently
- ensure navigation remains usable
- avoid cramped multi-column cards

## Mobile

- prioritize reading order
- stack content naturally
- convert horizontal diagrams to vertical
- ensure buttons are touch-friendly
- avoid tiny text
- avoid horizontal scrolling
- keep important CTA visible without intrusive sticky overlays

---

# 43. Mobile-First Quality Standard

Mobile must not feel like a compressed desktop page.

Explicitly verify:

- heading wrapping
- paragraph width
- card stacking
- button width
- menu
- forms
- diagrams
- tables
- technology labels
- footer
- long service names
- CTA sections

---

# 44. Accessibility Standard

Target strong WCAG-aligned implementation.

Requirements:

- semantic HTML
- logical heading hierarchy
- keyboard navigation
- visible focus
- accessible menu
- sufficient contrast
- proper labels
- accessible form errors
- alt text
- meaningful link text
- reduced-motion support
- proper button/link semantics
- skip-to-content link where appropriate

Do not use ARIA to compensate for incorrect HTML structure.

---

# 45. Heading Hierarchy

Each page should generally have one primary H1.

Use H2 for major page sections.

Use H3/H4 for nested content.

Do not choose heading levels based on visual size.

Styling and semantic level are separate concerns.

---

# 46. Links

Link text should be descriptive.

Prefer:

**Explore Managed Cloud Services**

over:

**Click here**

External links should be visually/semantically appropriate.

Do not open every external link in a new tab by default without reason.

---

# 47. Focus States

All interactive elements require visible keyboard focus.

Focus style should be:

- high contrast
- consistent
- not dependent only on color

Test:
- header
- mobile menu
- buttons
- cards used as links
- accordions
- form controls
- footer

---

# 48. Cards

Do not turn the entire site into cards.

Use cards when content represents discrete objects such as:

- services
- experience items
- engagement models
- insights

Do not put ordinary paragraphs into bordered cards without a structural reason.

---

# 49. Accordions

Suitable for FAQs.

Requirements:
- accessible button semantics
- keyboard support
- expanded/collapsed state
- visible focus
- no hidden essential sales information

Do not hide core service information inside accordions merely to shorten pages.

---

# 50. Tables

Avoid complex tables on mobile.

If comparisons are necessary:
- simplify
- allow safe horizontal scrolling only when unavoidable
- maintain accessible headers

Engagement models should preferably use responsive structured content instead of a dense pricing-style table.

---

# 51. Insights / Article Design

Articles should prioritize reading.

Recommended structure:

- category
- H1
- summary
- author/date when available
- readable content column
- table of contents for long articles
- contextual service CTA
- related insights

Body content should not span the full desktop width.

Avoid intrusive newsletter popups.

---

# 52. Footer Design

Footer should be useful, not decorative.

Recommended groups:

### Services
All seven services

### Company
About
Experience
Insights
Contact

### Solutions
Startups & SaaS
SMEs & Growing Businesses
Agencies
Media & Streaming

### Legal
Privacy
Terms

### Contact
`NEEDS INPUT`

Footer may use a dark surface if it fits the final palette.

Do not fabricate social links.

---

# 53. Empty / Missing Content States

Never fill missing factual information with invented content.

Use:

`NEEDS INPUT`

for internal development placeholders.

Examples:
- company name
- logo
- official email
- official phone
- registered address
- social profiles
- legal entity
- professional team photos

Before production launch, unresolved `NEEDS INPUT` items must be reviewed.

---

# 54. Error States

Create professional states for:

- 404
- form submission failure
- validation errors
- missing content where applicable

Do not show raw stack traces or technical errors to users.

---

# 55. Loading States

Avoid unnecessary loaders on static content.

Use loading states only for genuine asynchronous operations.

Forms should show a clear submission state.

Do not block the entire page for minor network operations.

---

# 56. Performance-Oriented Design Rules

Design choices must support fast loading.

Avoid:
- autoplay background videos
- huge hero images
- excessive web fonts
- oversized JavaScript animation libraries
- unnecessary carousels
- dozens of third-party scripts
- large icon libraries when only a few icons are needed

Prefer:
- optimized SVG
- responsive images
- local/optimized fonts where licensing allows
- CSS transitions
- server-rendered/static content where appropriate

---

# 57. SEO-Friendly Design Rules

Design must support:

- visible textual headings
- semantic page structure
- crawlable navigation
- meaningful links
- readable content
- breadcrumbs where useful
- article structure
- service-specific pages

Do not replace important text with text embedded inside images.

---

# 58. Component Inventory

Create reusable components where appropriate.

Suggested component architecture:

```text
Layout
├── Header
├── DesktopNavigation
├── MobileNavigation
├── Footer
├── Container
├── Section
└── Breadcrumbs

Typography
├── SectionEyebrow
├── Heading
├── BodyText
└── TextLink

Actions
├── PrimaryButton
├── SecondaryButton
└── IconLink

Marketing
├── Hero
├── ProblemList
├── ServiceCard
├── ServiceGrid
├── CapabilityGroup
├── BuildRunFlow
├── ProcessTimeline
├── ExperienceCard
├── EngagementModel
├── TeamCard
├── TechnologyGroup
├── FAQ
├── CTASection
└── RelatedServices

Forms
├── TextInput
├── EmailInput
├── Select
├── TextArea
├── FieldError
├── FormStatus
└── ContactForm

Content
├── ArticleCard
├── ArticleHeader
├── TableOfContents
└── RelatedInsights
```

Do not create abstraction for its own sake.

---

# 59. Design Token Structure

Recommended token groups:

```text
colors
typography
spacing
container
breakpoints
radius
border
shadow
z-index
motion
```

Centralize them.

Avoid arbitrary component-level values where a shared token makes sense.

---

# 60. Z-Index Strategy

Use a small documented scale.

Example conceptual layers:

```text
base
sticky
dropdown
overlay
modal
toast
```

Do not use arbitrary values such as `999999`.

---

# 61. Content Density

The website should feel substantial without becoming exhausting.

Rules:

- concise hero
- clear section introductions
- scan-friendly service content
- technical depth on detailed pages
- avoid unnecessary repetition
- use diagrams/lists when they communicate better than paragraphs

Do not repeat the same value proposition verbatim on every page.

---

# 62. International UX

Design for an international B2B audience.

Avoid:
- country flags as credibility devices
- fake local offices
- overly regional visual clichés
- excessive local slang
- currency/pricing assumptions where pricing is not published

Use professional international English in final content.

---

# 63. Trust Without Fake Social Proof

Since the company is new, trust should come from:

- clear positioning
- verified team experience
- technical specificity
- transparent process
- professional design
- clear engagement models
- realistic claims
- strong operational thinking
- useful technical content over time

Do not compensate for missing testimonials by inventing substitutes.

---

# 64. Homepage Visual Blueprint

Recommended desktop flow:

```text
[HEADER]

[HERO]
Positioning + CTA
Technical ownership visual

[CAPABILITY INTRO]
Cloud / Infrastructure / Software / Streaming

[PROBLEMS WE SOLVE]
Problem-led navigation

[CORE SERVICES]
Primary services emphasized

[BUILD → DEPLOY → RUN → PROTECT → SUPPORT]
Signature technical ownership visual

[WHY WORK WITH US]
Structural differentiators

[HOW WE WORK]
Assess → Design → Build/Fix → Deploy → Monitor → Manage → Support

[SELECTED TECHNICAL EXPERIENCE]
Verified team experience

[TECHNOLOGY CAPABILITY]
Grouped technology stack

[ENGAGEMENT MODELS]
Project / Managed / Fractional

[TEAM]
Three functional profiles

[FINAL CTA]
Consultation / Assessment

[FOOTER]
```

Mobile must preserve this logical reading order.

---

# 65. Service Page Visual Blueprint

Recommended pattern:

```text
[HEADER]

[BREADCRUMB]

[SERVICE HERO]
Problem + outcome + CTA

[WHEN YOU NEED THIS]
Diagnostic/problem section

[WHAT WE DO]
Capabilities

[HOW IT WORKS]
Process

[TECHNICAL CAPABILITY]
Relevant technologies only

[RELATED EXPERIENCE]
Verified team experience

[ENGAGEMENT / DELIVERY MODEL]

[RELATED SERVICES]

[FAQ]

[FINAL CTA]

[FOOTER]
```

Do not force identical visual composition across every service page.

---

# 66. About Page Visual Blueprint

```text
[HEADER]

[ABOUT HERO]

[WHO WE ARE]

[BUILD + RUN PHILOSOPHY]

[COMPLEMENTARY CAPABILITIES]

[HOW WE WORK]

[TEAM]

[OPERATING PRINCIPLES]

[CTA]

[FOOTER]
```

---

# 67. Experience Page Visual Blueprint

```text
[HEADER]

[EXPERIENCE HERO]

[DISCLOSURE]
Experience brought by team members

[EXPERIENCE CATEGORIES]

[SELECTED TECHNICAL EXPERIENCE ITEMS]

[CAPABILITY SUMMARY]

[CTA]

[FOOTER]
```

The disclosure must be clear enough to prevent the impression that all previous work was delivered by the new company.

---

# 68. Contact Page Visual Blueprint

```text
[HEADER]

[CONTACT HERO / INTRO]

[WHAT HAPPENS NEXT]

[CONTACT FORM + CONTEXT]

[CONTACT DETAILS — NEEDS INPUT]

[PRIVACY NOTE]

[FOOTER]
```

---

# 69. Visual QA Breakpoints

At minimum visually inspect:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px
- 360px

Check:

- horizontal overflow
- clipping
- heading wrapping
- card balance
- navigation
- form layout
- diagrams
- CTA prominence
- footer
- spacing
- touch targets

---

# 70. Design QA Checklist

Before design is considered complete:

- [ ] Homepage communicates company purpose quickly
- [ ] Cloud & DevOps is visually prominent
- [ ] Managed Infrastructure is visually prominent
- [ ] Software Engineering does not dominate company identity
- [ ] Streaming remains a specialist capability
- [ ] Build → Deploy → Run → Protect → Support is clear
- [ ] No generic agency-template appearance
- [ ] No fake social proof
- [ ] No fake company history
- [ ] CTA hierarchy is consistent
- [ ] Mobile experience is deliberately designed
- [ ] Typography is readable
- [ ] Contrast is accessible
- [ ] Focus states are visible
- [ ] Forms are accessible
- [ ] Technology stack is organized, not a logo wall
- [ ] Team experience is clearly distinguished from company work
- [ ] Visuals explain rather than decorate
- [ ] Animation is restrained
- [ ] Page speed is not sacrificed for effects
- [ ] Design tokens are centralized

---

# 71. Final AI Agent Instructions

When implementing this design:

1. Read `PROJECT.md`.
2. Read `SITEMAP.md`.
3. Read this `DESIGN.md`.
4. If `CONTENT.md` exists, use it for final approved copy.
5. Do not independently change company positioning.
6. Do not independently reorder service priorities.
7. Do not invent brand facts.
8. Do not use generic stock imagery merely to fill space.
9. Do not fabricate dashboards, statistics, testimonials, clients, or awards.
10. Do not turn the site into a generic SaaS landing-page template.
11. Do not overuse gradients, glows, rounded cards, or animations.
12. Build reusable components and centralized design tokens.
13. Design mobile intentionally rather than shrinking desktop.
14. Maintain strong accessibility.
15. Keep performance in mind while selecting fonts, images, icons, and animation libraries.
16. Use technical diagrams where they improve comprehension.
17. Preserve the Build → Deploy → Run → Protect → Support signature narrative.
18. Preserve clear distinction between Team Experience and Company Work.
19. Use `NEEDS INPUT` for missing factual or brand information.
20. Do not declare the design complete until responsive and accessibility QA has been performed.

---

# 72. Brand Assets Still Required

The following are not defined by this file and must not be invented:

- Company name — `NEEDS INPUT`
- Final logo — `NEEDS INPUT`
- Final brand accent color — `NEEDS INPUT`
- Final font selection — may be proposed during implementation, then approved
- Official email — `NEEDS INPUT`
- Official phone — `NEEDS INPUT`
- Registered/legal entity — `NEEDS INPUT`
- Registered address — `NEEDS INPUT`
- Team portraits — `NEEDS INPUT`
- Approved social profiles — `NEEDS INPUT`

The implementation should make these values easy to update centrally.

---

# 73. Design North Star

When uncertain between two visual choices, choose the one that makes the company appear:

**more credible, more precise, easier to understand, and more capable of technical ownership.**

Do not choose a visual treatment simply because it is fashionable.

The final website should communicate:

> **Serious engineering capability without pretending to be a giant corporation.**

And reinforce the business proposition:

> **One technology partner from application to infrastructure to ongoing operations.**
