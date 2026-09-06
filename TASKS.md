# TASKS.md — Website Implementation Plan

> **Purpose:** This file breaks the website build into small, controlled implementation tasks for Kiro CLI, Kiro IDE, Codex CLI, or another repository-aware coding agent.
>
> **Primary target:** Kiro CLI / Kiro IDE.
>
> **Dependencies:** `PROJECT.md`, `SITEMAP.md`, `DESIGN.md`, `CONTENT.md`, `AGENTS.md`.
>
> **Execution rule:** Complete tasks in order unless a dependency clearly allows parallel work.
>
> **Default model strategy:** Use the lowest-cost capable model for routine work. Escalate only when a task genuinely requires stronger reasoning.
>
> **Validation rule:** After meaningful code changes, run the relevant local checks. Prefer local `lint`, `typecheck`, and `build` over asking an AI model to reason about whether code probably works.

---

# 0. Approved Technical Stack

Use this stack unless explicitly changed before implementation begins.

```text
Framework: Next.js
Language: TypeScript
Styling: Tailwind CSS
Icons: Lucide
Content: Local structured content / page components
Database: None initially
Authentication: None initially
CMS: None initially
Deployment: Decide later
```

## Architecture Principle

Keep the site simple.

This is primarily a B2B marketing website, not a SaaS application.

Do not add:

- database
- authentication
- admin panel
- CMS
- global state library
- heavy animation framework
- unnecessary API layer
- complex backend

unless a later requirement justifies it.

---

# 1. Task Execution Format

For each task:

```text
1. Read AGENTS.md
2. Read only the relevant source sections
3. Inspect only the target files
4. Implement the task
5. Run required validation
6. Review git diff
7. Report changed files briefly
```

Recommended Kiro prompt:

```text
Read AGENTS.md and complete TASK-XX from TASKS.md.
Follow the approved source files.
Do not modify unrelated files.
Run the required validation and report changed files.
```

---

# TASK-01 — Create Project Scaffold

## Goal

Create the initial Next.js + TypeScript + Tailwind project structure.

## Read

- `AGENTS.md`
- relevant global setup rules from `DESIGN.md`

## Work

Create a clean project scaffold.

Recommended setup:

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- no unnecessary optional packages

Install Lucide only if required at this stage.

## Create / Confirm

```text
app/
components/
lib/
public/
styles/ or equivalent global styling location
```

Keep architecture minimal.

## Do Not

- build page content yet
- add database
- add CMS
- add auth
- add animation framework
- add form backend
- add analytics

## Acceptance Criteria

- project starts locally
- TypeScript is enabled
- Tailwind works
- ESLint works
- base route renders
- no unnecessary dependency errors

## Validation

```bash
npm run lint
npm run build
```

## Recommended Model

Low-cost model.

---

# TASK-02 — Establish Global Design Tokens

## Goal

Translate the approved `DESIGN.md` system into reusable project-level styles/tokens.

## Read

- `DESIGN.md` sections on:
  - colors
  - typography
  - spacing
  - radius
  - borders
  - shadows
  - motion
  - container
  - responsiveness

## Work

Create centralized tokens for:

- background
- surfaces
- text
- borders
- brand accent placeholder
- spacing
- radius
- shadows
- transitions
- container widths
- focus styles

The final brand accent remains replaceable.

## Important

Company branding is still partially:

`NEEDS INPUT`

Do not hard-code final brand identity assumptions.

## Acceptance Criteria

- no random repeated hex values
- no scattered arbitrary spacing system
- tokens are reusable
- dark/light surface rules are available
- visible focus treatment exists
- design can be globally updated later

## Validation

```bash
npm run lint
npm run build
```

## Recommended Model

Low-cost model.

---

# TASK-03 — Global Typography & Base Layout

## Goal

Implement the global typography system and page shell.

## Read

- `DESIGN.md` typography rules
- global layout guidance

## Work

Implement:

- font setup
- body styles
- heading styles
- readable line lengths
- global background/text behavior
- root layout
- page container utility/component
- generic section component if useful

## Do Not

Use multiple decorative fonts.

Use one professional primary font family unless explicitly approved otherwise.

## Acceptance Criteria

- typography is consistent
- headings scale responsively
- body copy remains readable
- no mobile overflow
- page container works at multiple viewport sizes

## Validation

Check:

- 1440px
- 1024px
- 768px
- 390px

Then:

```bash
npm run lint
npm run build
```

## Recommended Model

Low-cost model.

---

# TASK-04 — Build Reusable Buttons & Links

## Goal

Create consistent interactive primitives.

## Read

- `DESIGN.md` CTA/button rules
- `CONTENT.md` global CTA vocabulary

## Implement

- PrimaryButton
- SecondaryButton
- TextLink / IconLink if justified

States:

- default
- hover
- active
- focus-visible
- disabled
- loading where relevant

## Approved CTA Language

Primary site-wide:

**Book a Technical Consultation**

Infrastructure:

**Request a Cloud Assessment**

Software:

**Discuss Your Project**

Agency:

**Discuss a Partnership**

## Acceptance Criteria

- accessible focus
- consistent sizing
- no duplicate styles
- mobile-friendly touch target
- button vs link semantics are correct

## Validation

```bash
npm run lint
npm run build
```

## Recommended Model

Low-cost model.

---

# TASK-05 — Header & Desktop Navigation

## Goal

Build the primary site header.

## Read

- `SITEMAP.md` navigation
- `DESIGN.md` header/navigation rules
- `CONTENT.md` global navigation

## Implement

Desktop navigation:

- Home
- Services
- Solutions
- Experience
- About
- Insights
- Contact

Primary CTA:

**Book a Technical Consultation**

Services may use a restrained dropdown if appropriate.

## Acceptance Criteria

- navigation routes are correct
- header is visually clean
- sticky behavior, if used, is restrained
- keyboard navigation works
- active state can be supported
- no oversized mega-menu

## Validation

Desktop keyboard navigation.

Then:

```bash
npm run lint
npm run build
```

## Recommended Model

Low-cost model.

---

# TASK-06 — Mobile Navigation

## Goal

Create accessible mobile navigation.

## Read

- `DESIGN.md` mobile navigation rules

## Implement

- menu trigger
- accessible label
- open/close state
- focus behavior
- keyboard support
- Escape handling where appropriate
- body scroll handling
- CTA access

## Acceptance Criteria

- no hover dependency
- no horizontal overflow
- touch targets are usable
- menu can be closed reliably
- keyboard behavior works

## Validation

Test:

- 430px
- 390px
- 360px

Then:

```bash
npm run lint
npm run build
```

## Recommended Model

Mid-level model if state/focus handling becomes non-trivial; otherwise low-cost.

---

# TASK-07 — Footer

## Goal

Build the global footer.

## Read

- `SITEMAP.md` footer structure
- `CONTENT.md` footer copy
- `DESIGN.md` footer design

## Implement

Groups:

- Services
- Company
- Solutions
- Legal
- Contact

Keep contact values as:

`NEEDS INPUT`

internally until real values exist.

Do not expose fake contact information.

## Acceptance Criteria

- all internal links route correctly
- mobile stacking works
- footer remains useful and uncluttered
- no fake social icons

## Validation

```bash
npm run lint
npm run build
```

## Recommended Model

Low-cost model.

---

# TASK-08 — Build Shared Marketing Components

## Goal

Create reusable components needed across major pages.

## Read

- `DESIGN.md` component inventory

## Candidate Components

Build only those genuinely needed:

- Hero
- ServiceCard
- ProblemItem / ProblemList
- BuildRunFlow
- ProcessTimeline
- ExperienceCard
- TechnologyGroup
- EngagementModel
- TeamCard
- CTASection
- Breadcrumbs
- RelatedServices
- FAQ / Accordion

## Rule

Do not over-abstract.

A component should exist because it improves reuse, consistency, accessibility, or maintenance.

## Acceptance Criteria

- components accept clear typed props
- content is not hard-coded unnecessarily
- responsive behavior is built-in
- semantics are correct

## Validation

```bash
npm run lint
npm run build
```

## Recommended Model

Low-cost to mid-level.

---

# TASK-09 — Homepage Hero

## Goal

Implement the homepage hero.

## Read

- homepage hero in `CONTENT.md`
- homepage blueprint in `DESIGN.md`

## Copy

Eyebrow:

**Cloud Engineering · DevOps · Managed Technology**

H1:

**Build reliable technology. Run it with confidence.**

Supporting copy:

Use `CONTENT.md` exactly.

CTAs:

- Book a Technical Consultation
- Explore Services

## Visual

Use a technical ownership / Build + Run style visual.

Do not use:

- stock hero photography
- random 3D object
- fake dashboard
- generic AI visual

## Acceptance Criteria

- proposition is clear immediately
- mobile heading wraps well
- CTA hierarchy is obvious
- visual supports technical positioning
- hero does not dominate page height excessively

## Validation

Check 1440px / 768px / 390px.

## Recommended Model

Low-cost model.

---

# TASK-10 — Homepage Capability Introduction

## Goal

Implement the Engineering + Operations capability section.

## Read

Homepage capability content from `CONTENT.md`.

## Content Areas

- Cloud & DevOps
- Managed Infrastructure
- Software Engineering
- Streaming Infrastructure

## Acceptance Criteria

- software does not visually dominate
- Cloud & DevOps and Managed Infrastructure remain stronger
- section does not become generic icon-card clutter

## Validation

Responsive visual check.

## Recommended Model

Low-cost model.

---

# TASK-11 — Homepage Problems We Solve

## Goal

Build the problem-led navigation section.

## Read

Homepage Problems section from `CONTENT.md`.

## Problems

- Manual deployments
- No infrastructure owner
- Cloud architecture needs improvement
- Legacy limitations
- Missing DevOps capability
- Recovery uncertainty
- Business process needs better software

## Acceptance Criteria

- each problem maps clearly to relevant service
- not seven identical generic cards
- visitor can self-identify quickly
- service links are meaningful

## Recommended Model

Low-cost model.

---

# TASK-12 — Homepage Core Services

## Goal

Implement the seven-service section with deliberate hierarchy.

## Read

- approved service order in `PROJECT.md`
- homepage service copy in `CONTENT.md`
- hierarchy rules in `DESIGN.md`

## Visual Priority

### Strongest
- Cloud & DevOps
- Managed Cloud & Infrastructure

### Secondary
- Cloud Migration & Modernisation
- Fractional / Dedicated Technology Team
- Software Engineering

### Specialist / Supporting
- Backup & Disaster Recovery
- Streaming Infrastructure

## Acceptance Criteria

- all seven services visible
- not seven equally weighted cards
- service order preserved
- links use correct routes

## Recommended Model

Low-cost model.

---

# TASK-13 — Homepage Build → Deploy → Run → Protect → Support

## Goal

Build the signature lifecycle component.

## Stages

- BUILD
- DEPLOY
- RUN
- PROTECT
- SUPPORT

## Read

Exact descriptions from `CONTENT.md`.

## Responsive

Desktop:
- horizontal or connected structured flow

Mobile:
- vertical flow

## Optional Motion

Only restrained progression/reveal.

Respect reduced motion.

## Acceptance Criteria

- instantly understandable
- visually distinctive
- not decorative complexity
- no tiny labels
- accessible text exists in HTML

## Recommended Model

Mid-level if visual/responsive implementation becomes complex.

---

# TASK-14 — Homepage Why Us + Process

## Goal

Implement:

- Why Work With Us
- How We Work

## Process

- Assess
- Design
- Build / Fix
- Deploy
- Monitor
- Manage
- Support

## Acceptance Criteria

- process order preserved
- mobile process becomes vertical if needed
- no unnecessary animation
- copy remains concise

## Recommended Model

Low-cost model.

---

# TASK-15 — Homepage Experience Section

## Goal

Create the Selected Technical Experience section.

## Critical Rule

Clearly label this as team professional experience.

Do not present as company case studies.

## Experience Areas

Use approved items in `CONTENT.md`.

## Acceptance Criteria

- disclosure is visible
- no fake logos
- no fake client names
- no invented metrics
- team experience distinction is obvious

## Recommended Model

Low-cost model.

---

# TASK-16 — Homepage Technology Capability

## Goal

Build grouped technical capability section.

## Groups

- Cloud
- Infrastructure & DevOps
- CI/CD
- Monitoring & Observability
- Web, Backend & Data
- Streaming

## Rule

Do not create an uncontrolled logo wall.

## Acceptance Criteria

- organized by purpose
- readable on mobile
- technology is supporting proof, not primary marketing message

## Recommended Model

Low-cost model.

---

# TASK-17 — Homepage Engagement Models

## Goal

Build engagement model section.

## Models

- Fixed Project
- Monthly Managed Service
- Fractional / Dedicated Technology Team

## Rule

Do not style as SaaS pricing cards.

No fabricated pricing.

Managed Service can receive subtle emphasis.

## Acceptance Criteria

- differences are understandable
- each model explains when it fits
- no fake rates

## Recommended Model

Low-cost model.

---

# TASK-18 — Homepage Team Section

## Goal

Implement team profiles.

## Roles

- Gaurav — Solutions & Delivery
- Aman — Cloud & DevOps Engineering
- Harsh — Growth & Software Engineering

## Read

Use exact approved capability copy from `CONTENT.md`.

## Photos

If no real approved portraits are available:

`NEEDS INPUT`

Do not use stock people.

## Acceptance Criteria

- role balance is clear
- no fake founder titles
- no oversized resume-style biography
- mobile layout works

## Recommended Model

Low-cost model.

---

# TASK-19 — Homepage Final CTA

## Goal

Implement final conversion section.

## Copy

H2:

**Tell us what is difficult to build, deploy or operate.**

CTAs:

- Book a Technical Consultation
- Request a Cloud Assessment

## Acceptance Criteria

- strong but not aggressive
- visually distinct
- no fake urgency

## Recommended Model

Low-cost model.

---

# TASK-20 — Homepage Full QA

## Goal

Review the completed homepage as one experience.

## Check

- hierarchy
- spacing
- service priority
- CTA consistency
- content accuracy
- mobile
- accessibility
- performance
- no fabricated content

## Viewports

- 1440
- 1280
- 1024
- 768
- 430
- 390
- 360

## Validation

```bash
npm run lint
npm run build
```

Also inspect browser console.

## Recommended Model

Mid-level only if needed.

---

# TASK-21 — Services Overview Page

## Route

`/services/`

## Goal

Build the service overview page using `CONTENT.md`.

## Include

- hero
- seven service summaries
- Build + Run model
- engagement models
- final CTA

## Acceptance Criteria

- service order preserved
- no duplicate homepage appearance
- clear service navigation

## Recommended Model

Low-cost model.

---

# TASK-22 — Cloud & DevOps Service Page

## Route

`/services/cloud-devops/`

## Goal

Implement full approved service page.

## CTA

Primary:
**Request a Cloud Assessment**

Secondary:
**Book a Technical Consultation**

## Include

- service hero
- when you need this
- capabilities
- approach
- relevant team experience
- related services
- FAQs
- final CTA

## Acceptance Criteria

- strongest technical detail among service pages
- AWS/DevOps claims remain factual
- no unverified cloud platforms added

## Recommended Model

Low-cost model.

---

# TASK-23 — Managed Cloud & Infrastructure Page

## Route

`/services/managed-cloud-infrastructure/`

## Goal

Build the recurring managed-service page.

## Include

- problem framing
- monitoring
- infrastructure maintenance
- troubleshooting
- backups
- reliability
- practical infrastructure hardening
- engagement scope
- FAQs

## Critical Rule

Do not invent SLA or response-time guarantees.

## Recommended Model

Low-cost model.

---

# TASK-24 — Cloud Migration & Modernisation Page

## Route

`/services/cloud-migration-modernisation/`

## Goal

Build migration page.

## Process

- Assess
- Design
- Prepare
- Migrate
- Validate
- Operate

## Acceptance Criteria

- migration framed around operational outcome
- assessment clearly precedes implementation
- managed service relationship may follow migration

## Recommended Model

Low-cost model.

---

# TASK-25 — Fractional / Dedicated Technology Team Page

## Route

`/services/fractional-technology-team/`

## Goal

Build fractional capability page.

## Audiences

- startups
- SaaS businesses
- agencies
- growing businesses

## Critical Rule

Do not imply local offices or teams in UAE/UK/USA.

## Include

- fractional DevOps
- cloud/infrastructure
- engineering support
- white-label technical delivery

## Recommended Model

Low-cost model.

---

# TASK-26 — Software Engineering Page

## Route

`/services/software-engineering/`

## Goal

Build software page without turning company identity into generic website development.

## Include

- business applications
- portals
- backend systems
- APIs
- Android
- modernization
- Build → Deploy → Monitor → Manage → Support differentiator

## CTA

**Discuss Your Project**

## Recommended Model

Low-cost model.

---

# TASK-27 — Backup & Disaster Recovery Page

## Route

`/services/backup-disaster-recovery/`

## Goal

Build recovery-focused page.

## Core Message

**A backup is only useful when recovery works.**

## Include

- backup assessment
- database backup
- snapshots
- restore procedures
- recovery planning
- DR
- recovery testing

## Critical Rule

Do not publish unsupported RPO/RTO promises.

## Recommended Model

Low-cost model.

---

# TASK-28 — Streaming Infrastructure Page

## Route

`/services/streaming-infrastructure/`

## Goal

Build specialist streaming page.

## Include

- architecture
- HLS
- RTMP
- SRT
- UDP
- encoding / decoding
- monitoring
- reliability / redundancy
- operations support

## Critical Rule

Keep this specialist, not primary company identity.

## Recommended Model

Low-cost model.

---

# TASK-29 — Service Pages Shared QA

## Goal

Review all seven service pages together.

## Check

- route correctness
- consistent breadcrumbs
- CTA logic
- related-service links
- typography
- mobile layouts
- no duplicated generic filler
- no fabricated claims

## Validation

```bash
npm run lint
npm run build
```

## Recommended Model

Mid-level only if required.

---

# TASK-30 — Solutions Overview

## Route

`/solutions/`

## Goal

Build audience-based solution routing.

## Audiences

- Startups & SaaS
- SMEs & Growing Businesses
- Agencies
- Media & Streaming

## Acceptance Criteria

- audience framing differs from service framing
- no country-specific fake pages

## Recommended Model

Low-cost model.

---

# TASK-31 — Startups & SaaS Solution Page

## Route

`/solutions/startups-saas/`

## Goal

Build startup/SaaS audience page.

## Key Problems

- no DevOps
- manual deployments
- scaling
- monitoring gaps
- AWS complexity
- backup/recovery
- engineering time consumed by operations

## Recommended Model

Low-cost model.

---

# TASK-32 — SMEs & Growing Businesses Solution Page

## Route

`/solutions/smes-growing-businesses/`

## Goal

Build SME/growing-business page.

## Focus

- modernization
- legacy
- manual processes
- managed infrastructure
- software
- backup/recovery
- fractional technical support

## Recommended Model

Low-cost model.

---

# TASK-33 — Agencies Solution Page

## Route

`/solutions/agencies/`

## Goal

Build agency partnership page.

## CTA

**Discuss a Partnership**

## Include

- cloud/DevOps
- backend engineering
- infrastructure
- managed operations
- white-label technical delivery

## Critical Rule

Do not invent agency partner/client relationships.

## Recommended Model

Low-cost model.

---

# TASK-34 — Media & Streaming Solution Page

## Route

`/solutions/media-streaming/`

## Goal

Build media/streaming audience page.

## Connect

- streaming
- cloud
- infrastructure
- monitoring
- DR

## Recommended Model

Low-cost model.

---

# TASK-35 — Experience Page

## Route

`/experience/`

## Goal

Build the Selected Technical Experience page.

## Critical Disclosure

Professional experience brought by team members is not automatically company project work.

## Categories

- Cloud & DevOps
- Technical Operations
- Streaming
- Software

## Acceptance Criteria

- disclosure prominent
- no fake client logos
- no fake project metrics
- no employer/client names added unless explicitly approved

## Recommended Model

Low-cost model.

---

# TASK-36 — About Page

## Route

`/about/`

## Goal

Build company/team narrative.

## Include

- who we are
- Build + Run philosophy
- team
- operating principles
- CTA

## Critical Rule

Do not invent:

- founding year
- office
- team size
- company history

## Recommended Model

Low-cost model.

---

# TASK-37 — Insights Landing Page

## Route

`/insights/`

## Goal

Build the initial Insights landing page.

## Current State

No fake article history.

Use approved empty-state messaging if no real articles exist.

## Prepare Architecture

Allow future real articles without requiring redesign.

## Do Not

Generate placeholder “published” articles.

## Recommended Model

Low-cost model.

---

# TASK-38 — Article Template

## Goal

Prepare a reusable article layout for future content.

## Include

- category
- H1
- summary
- content column
- optional TOC
- service CTA
- related insights

## Rule

Do not create fake article entries.

## Recommended Model

Low-cost model.

---

# TASK-39 — Contact Page UI

## Route

`/contact/`

## Goal

Build contact page and form UI.

## Fields

- Name
- Business Email
- Company
- Country
- Service Required
- Short Project Description
- Optional Budget Range

Budget range values remain:

`NEEDS INPUT`

unless approved.

## Acceptance Criteria

- visible labels
- accessible validation
- responsive
- success/error UI exists
- no fake contact details

## Recommended Model

Mid-level if form logic is non-trivial.

---

# TASK-40 — Contact Form Handling

## Goal

Implement form submission only after the real handling method is selected.

## Current Status

Form provider/backend:

`NEEDS INPUT`

## Possible Future Options

Implementation may later use an approved:

- server action
- email service
- form service
- API endpoint

## Critical Rule

Do not invent credentials or endpoints.

## Acceptance Criteria

- secrets use environment variables
- `.env.example` contains placeholders only
- errors handled safely
- no credentials in Git

## Recommended Model

Mid-level.

---

# TASK-41 — Privacy Page

## Route

`/privacy/`

## Goal

Create page shell only until final legal policy is approved.

## Content

Display approved final legal content only when supplied.

Current status:

`NEEDS INPUT — FINAL LEGAL CONTENT`

## Do Not

Invent a legal policy.

## Recommended Model

Low-cost model.

---

# TASK-42 — Terms Page

## Route

`/terms/`

## Goal

Create page shell until approved legal terms exist.

Current status:

`NEEDS INPUT — FINAL LEGAL CONTENT`

## Do Not

Invent legal jurisdiction or liability language.

## Recommended Model

Low-cost model.

---

# TASK-43 — 404 Page

## Goal

Build custom 404 page.

## Actions

- Return Home
- Explore Services
- Contact Us

## Acceptance Criteria

- visually consistent
- lightweight
- useful navigation

## Recommended Model

Low-cost model.

---

# TASK-44 — Metadata & SEO Implementation

## Goal

Implement approved metadata.

## Read

SEO titles and descriptions from `CONTENT.md`.

## Include

Where applicable:

- title
- meta description
- canonical handling
- Open Graph basics
- logical headings
- internal links

## Critical Rule

Do not generate fake city/country landing pages.

## Recommended Model

Low-cost model.

---

# TASK-45 — Structured Data Review

## Goal

Determine whether basic structured data is appropriate.

Potential safe types may include:

- Organization
- WebSite
- BreadcrumbList
- Article when actual articles exist

## Critical Rule

Only include factual fields that are known.

Do not invent:

- address
- telephone
- founding date
- social profiles
- rating
- reviews

## Recommended Model

Mid-level only if implementation is unclear.

---

# TASK-46 — Accessibility Pass

## Goal

Run a dedicated accessibility review.

## Check

- semantic headings
- buttons vs links
- keyboard navigation
- focus states
- skip link
- form labels
- form errors
- alt text
- menu behavior
- contrast
- reduced motion
- accordion semantics

## Acceptance Criteria

No known critical accessibility issue remains.

## Recommended Model

Mid-level.

---

# TASK-47 — Responsive QA Pass

## Goal

Review all major pages at required widths.

## Required Widths

- 1440
- 1280
- 1024
- 768
- 430
- 390
- 360

## Check

- no horizontal overflow
- no clipping
- heading wrapping
- navigation
- cards
- forms
- process flows
- Build/Run flow
- footer
- CTAs

## Recommended Model

Low-cost for targeted fixes; mid-level if difficult layout issue.

---

# TASK-48 — Performance Review

## Goal

Reduce unnecessary frontend cost.

## Check

- image sizes
- font loading
- unused JS
- excessive client components
- icon imports
- animation cost
- third-party scripts
- bundle behavior

## Rule

Prefer static/server-rendered content.

Do not optimize prematurely with complex architecture.

## Recommended Model

Mid-level if profiling requires reasoning.

---

# TASK-49 — Link & Navigation Audit

## Goal

Verify internal site navigation.

## Check

- header links
- footer links
- service links
- related services
- CTAs
- breadcrumbs
- solution links
- 404 paths

## Acceptance Criteria

No known broken internal links.

## Recommended Model

Low-cost model.

---

# TASK-50 — `NEEDS INPUT` Audit

## Goal

Find every unresolved placeholder before production.

## Search

```text
NEEDS INPUT
```

## Classify

### Must resolve before production
- company name
- official email
- legal entity
- privacy
- terms
- form backend
- final domain/brand settings

### Optional depending on display
- phone
- address
- team photos
- social links
- budget ranges

## Critical Rule

Do not hide unresolved placeholders by inventing values.

## Recommended Model

Low-cost model or simple local search.

---

# TASK-51 — Security & Secrets Review

## Goal

Check for accidental secrets and unsafe implementation.

## Review

- `.env`
- `.env.example`
- API routes
- form handling
- client-exposed variables
- committed tokens
- credentials
- debug output

## Acceptance Criteria

- no real secrets in repo
- production secrets supplied externally
- client bundle exposes no private credential

## Recommended Model

Mid-level if needed.

---

# TASK-52 — Final Code Quality Pass

## Goal

Clean only real maintainability issues.

## Review

- duplicated code
- dead imports
- unused components
- type errors
- inconsistent naming
- accidental debug code
- unnecessary dependencies

## Critical Rule

Do not perform a giant stylistic rewrite.

Make targeted cleanup only.

## Validation

```bash
npm run lint
npm run build
```

Run typecheck separately if not included by framework build.

## Recommended Model

Low-cost / mid-level.

---

# TASK-53 — Browser Console QA

## Goal

Inspect production-like local preview.

## Check

- runtime errors
- hydration warnings
- broken image warnings
- accessibility warnings where visible
- missing keys
- failed network requests
- form errors

## Acceptance Criteria

No known relevant console error remains.

## Recommended Model

Low-cost for simple fixes; mid-level for difficult hydration issues.

---

# TASK-54 — Production Readiness Review

## Goal

Decide whether the site is ready for deployment.

## Must Verify

- required pages exist
- build passes
- mobile works
- navigation works
- approved content used
- no fabricated proof
- no unresolved public placeholders
- form strategy finalized
- legal pages approved
- metadata present
- secrets safe
- contact details correct
- company name/logo/domain confirmed

## Output

Produce a concise blocker list.

Do not deploy if critical business/legal/contact inputs are unresolved.

## Recommended Model

Mid-level.

---

# TASK-55 — Deployment Setup

## Goal

Configure deployment after provider selection.

## Deployment Provider

`NEEDS INPUT`

Possible provider should be selected based on actual hosting preference, cost and required features.

## Work

Once selected:

- deployment config
- environment variables
- production build
- custom domain
- HTTPS verification
- production form configuration
- final smoke test

## Critical Rule

Do not create paid resources or subscriptions without explicit approval.

## Recommended Model

Mid-level.

---

# TASK-56 — Post-Deployment Smoke Test

## Goal

Verify the live site after deployment.

## Test

- homepage
- all service routes
- all solution routes
- experience
- about
- insights
- contact
- privacy
- terms
- 404
- navigation
- forms
- mobile
- HTTPS
- metadata
- console

## Acceptance Criteria

No critical production issue found.

## Recommended Model

Low-cost / manual browser checks.

---

# 2. Optional Phase 2 Tasks

Do not execute these during the initial build unless explicitly requested.

---

# OPTIONAL-01 — Real Case Studies

Only after genuine company projects exist.

Create:

- challenge
- scope
- implementation
- verified outcome
- approved client attribution where allowed

Never fabricate case studies.

---

# OPTIONAL-02 — Testimonials

Only use genuine approved testimonials.

Never generate synthetic testimonials.

---

# OPTIONAL-03 — Insights Content Program

Create real technical articles around:

- AWS infrastructure
- DevOps
- CI/CD
- infrastructure operations
- backup/recovery
- migration
- fractional DevOps
- streaming infrastructure

Content must be useful, not keyword filler.

---

# OPTIONAL-04 — Country Market Landing Pages

Consider later only if there is a genuine market-specific strategy.

Potential future markets:

- India
- UAE
- UK
- USA

Do not create fake office pages.

---

# OPTIONAL-05 — CMS

Only add a CMS if the publishing workflow genuinely needs one.

Do not add CMS merely because marketing sites often have one.

---

# OPTIONAL-06 — Analytics

Add analytics only after:

- provider selected
- privacy implications reviewed
- cookie/legal requirements understood

---

# OPTIONAL-07 — CRM Integration

Only after sales workflow is defined.

Possible later need:

- contact enquiry routing
- lead tracking
- pipeline integration

Do not implement before real requirements exist.

---

# 3. Recommended Execution Batches

To reduce Kiro credit usage, work in batches without making them too large.

## Batch A — Foundation

```text
TASK-01
TASK-02
TASK-03
TASK-04
TASK-05
TASK-06
TASK-07
TASK-08
```

Recommended prompt size:
small to medium.

Do not ask the agent to build the entire site in this batch.

---

## Batch B — Homepage

```text
TASK-09
TASK-10
TASK-11
TASK-12
TASK-13
TASK-14
TASK-15
TASK-16
TASK-17
TASK-18
TASK-19
TASK-20
```

Prefer breaking this into 3–4 Kiro sessions.

Example:

```text
Session 1: TASK-09 to TASK-12
Session 2: TASK-13 to TASK-16
Session 3: TASK-17 to TASK-20
```

---

## Batch C — Services

```text
TASK-21 to TASK-29
```

Do not generate all service pages blindly in one huge request if quality drops.

A good approach:

```text
Services overview
↓
Cloud & DevOps
↓
Managed Cloud
↓
Remaining related pages in small groups
↓
Shared QA
```

---

## Batch D — Solutions + Company

```text
TASK-30 to TASK-38
```

---

## Batch E — Contact + Legal

```text
TASK-39 to TASK-43
```

Note that real form handling and legal content may remain blocked by `NEEDS INPUT`.

---

## Batch F — Quality

```text
TASK-44 to TASK-54
```

Use local deterministic checks aggressively here.

---

## Batch G — Deployment

```text
TASK-55
TASK-56
```

Only after explicit approval.

---

# 4. Model Routing Guide

## Low-Cost Model

Default for most tasks.

Use for:

- scaffolding
- static page creation
- content placement
- basic styling
- repeated service pages
- metadata
- simple refactoring
- straightforward responsive fixes

## Mid-Level Model

Use when required for:

- focus-managed mobile navigation
- complex responsive flow
- form logic
- accessibility debugging
- difficult hydration issue
- deployment setup
- architecture-sensitive implementation

## Strong Model

Escalate only for:

- persistent build failures
- unclear framework architecture issue
- difficult state or rendering bug
- major cross-cutting refactor
- final high-risk technical review

Do not use strong model for routine page construction.

---

# 5. Credit-Saving Rules

To minimize Kiro / AI usage:

1. Never ask “analyze the entire repo and improve everything.”
2. Reference a specific task ID.
3. Do not paste full Markdown files into prompts.
4. Let the agent read repository instructions.
5. Keep tasks bounded.
6. Run build/lint locally.
7. Use local search for exact text/placeholder checks.
8. Use lower-cost models for repetitive implementation.
9. Escalate only after a real failure is observed.
10. Avoid repeated architecture discussions after the stack is approved.
11. Reuse shared components rather than asking AI to recreate patterns.
12. Do not regenerate content already approved in `CONTENT.md`.
13. Review diffs before asking for another rewrite.
14. Fix specific failures instead of requesting broad cleanup.
15. Stop a task when acceptance criteria are met.

---

# 6. First Kiro Session

Once these files are inside the project workspace:

```text
PROJECT.md
SITEMAP.md
DESIGN.md
CONTENT.md
AGENTS.md
TASKS.md
```

Use this first prompt:

```text
Read AGENTS.md and TASKS.md.

Then complete TASK-01 only.

Use Next.js + TypeScript + Tailwind CSS as defined in TASKS.md.
Do not build website pages yet.
Do not add unnecessary dependencies.
Run lint and build after setup.
Report only:
1. what you created,
2. changed files,
3. validation results,
4. any blocker.
```

After TASK-01 passes, proceed to TASK-02.

---

# 7. Completion Standard

The project is complete only when:

- TASK-01 through TASK-54 are complete or explicitly marked not applicable
- all critical `NEEDS INPUT` items are resolved
- deployment has been explicitly approved
- TASK-55 is completed
- TASK-56 passes

Do not equate “pages render” with “project complete”.

The target is:

**a credible, maintainable, accessible, responsive, production-ready B2B technology website built with controlled AI usage and minimal unnecessary complexity.**
