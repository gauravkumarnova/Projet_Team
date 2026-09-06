# SITEMAP.md — Website Information Architecture & Customer Journey

> **Purpose:** This file defines the approved sitemap, page hierarchy, navigation, conversion paths, page responsibilities, CTA system, and internal-linking logic for the B2B Cloud Engineering + Managed Technology Services website.
>
> **Dependency:** Follow `PROJECT.md` as the master business strategy. If there is any conflict, `PROJECT.md` takes priority.
>
> **Important:** This is an information-architecture specification, not final website copy. Do not invent company facts, clients, testimonials, offices, certifications, statistics, case studies, or results.

---

# 1. Website Goal

The website exists primarily to generate **qualified B2B enquiries** and support the commercial journey:

**Visitor Problem → Relevant Service → Credibility → Engagement Model → Consultation / Assessment → Project → Managed Service**

The website must help visitors answer:

1. What does this company do?
2. Does it solve my specific problem?
3. Does the team have credible technical capability?
4. Why should I use this team instead of separate vendors?
5. What engagement model fits me?
6. What should I do next?

The website should support both:
- project-based opportunities
- recurring managed-service opportunities

Recurring relationships are strategically preferred.

---

# 2. Primary Navigation

Recommended desktop navigation:

- Home
- Services
- Solutions
- Experience
- About
- Insights
- Contact

Primary header CTA:

**Book a Technical Consultation**

Do not overcrowd the main navigation.

On mobile, use a clean accessible menu containing the same primary destinations and CTA.

---

# 3. Complete Sitemap

```text
/
├── Home
│
├── /services/
│   ├── Cloud & DevOps Engineering
│   ├── Managed Cloud & Infrastructure
│   ├── Cloud Migration & Modernisation
│   ├── Fractional / Dedicated Technology Team
│   ├── Software Engineering
│   ├── Backup & Disaster Recovery
│   └── Streaming Infrastructure
│
├── /solutions/
│   ├── For Startups & SaaS
│   ├── For SMEs & Growing Businesses
│   ├── For Agencies
│   └── For Media & Streaming Businesses
│
├── /experience/
│   └── Selected Technical Experience
│
├── /about/
│   └── Team
│
├── /insights/
│   └── Article Detail Template
│
├── /contact/
│
├── /privacy/
├── /terms/
└── /404/
```

## Initial Launch Note

The `/solutions/` pages are strategically useful but may be implemented after the core service pages if launch speed is important.

Do not remove their architecture. They provide future SEO and conversion landing pages for customer-specific intent.

---

# 4. URL Structure

Recommended clean URLs:

```text
/
/services/
/services/cloud-devops/
/services/managed-cloud-infrastructure/
/services/cloud-migration-modernisation/
/services/fractional-technology-team/
/services/software-engineering/
/services/backup-disaster-recovery/
/services/streaming-infrastructure/

/solutions/
/solutions/startups-saas/
/solutions/smes-growing-businesses/
/solutions/agencies/
/solutions/media-streaming/

/experience/
/about/
/insights/
/insights/[slug]/
/contact/
/privacy/
/terms/
```

Rules:

- Use lowercase URLs.
- Use hyphens, not underscores.
- Avoid dates in article URLs.
- Avoid unnecessary nesting.
- Avoid country subfolders at launch.
- Do not create fake local-office URLs for UAE, UK, USA, or other countries.
- Every indexable page must have one canonical URL.

---

# 5. Homepage — `/`

## Purpose

Introduce the company clearly, establish technical credibility, communicate the integrated Build + Run advantage, route visitors to relevant services, and generate qualified enquiries.

## Primary Visitors

- Founder / CEO
- CTO / Technology Head
- IT / Operations Manager
- Agency Owner
- International buyer evaluating remote technology partners

## Primary Search / Visitor Intent

Broad branded and commercial discovery.

The homepage should not try to rank for every service keyword.

## Recommended Homepage Sequence

### Section 1 — Hero

Answer immediately:

**What do we do?**

Core positioning:

**Cloud Engineering & Managed Technology Services for growing businesses.**

Supporting proposition:

**We build, deploy, manage and support reliable applications and cloud infrastructure.**

Primary CTA:

**Book a Technical Consultation**

Secondary CTA:

**Explore Services**

Do not place multiple competing CTAs in the hero.

---

### Section 2 — Capability / Trust Introduction

Purpose:

Quickly demonstrate that the company covers more than development.

Communicate four broad capability areas:

- Cloud & DevOps
- Managed Infrastructure
- Software Engineering
- Specialist Streaming Infrastructure

Do not use fake statistics.

Do not show fake customer logos.

---

### Section 3 — Problems We Solve

Purpose:

Allow visitors to recognize their own problem before being shown technologies.

Examples of problem categories:

- Infrastructure is unreliable
- Deployments are still manual
- Cloud costs or architecture are difficult to control
- Monitoring and backup are weak
- Internal DevOps capability is missing
- Applications need modernization or scaling
- Technical operations lack clear ownership

CTA:

Contextual link to relevant services rather than a new sales CTA.

---

### Section 4 — Core Services

Display services in the approved strategic order:

1. Cloud & DevOps Engineering
2. Managed Cloud & Infrastructure
3. Cloud Migration & Modernisation
4. Fractional / Dedicated Technology Team
5. Software Engineering
6. Backup & Disaster Recovery
7. Streaming Infrastructure

Each item should explain:
- problem solved
- service outcome
- link to detailed page

Do not make all seven cards visually identical if this weakens the priority hierarchy.

Cloud & DevOps and Managed Infrastructure should receive the strongest emphasis.

---

### Section 5 — Integrated Technology Ownership

Purpose:

Communicate the central differentiator.

Visual narrative:

**BUILD → DEPLOY → RUN → PROTECT → SUPPORT**

Meaning:

- Build applications and systems
- Deploy through cloud and DevOps
- Run managed infrastructure
- Protect through monitoring, backup and recovery
- Support through ongoing engineering and operations

Core idea:

**One technology partner from application to infrastructure to ongoing operations.**

This section is strategically important and should not be removed.

---

### Section 6 — Why Work With Us

Focus on structural advantages, not unsupported marketing claims.

Possible themes:

- Engineering + operations in one team
- Build and run capability
- Infrastructure-first reliability mindset
- Flexible engagement models
- Long-term support capability
- Business and technical communication

Do not claim:
- “best”
- “leading”
- “world-class”
- guaranteed results
- unsupported SLA numbers

---

### Section 7 — How We Work

Recommended process:

**Assess → Design → Build/Fix → Deploy → Monitor → Manage → Support**

Explain that the exact stages depend on the engagement.

The process should feel operationally disciplined, not bureaucratic.

---

### Section 8 — Selected Technical Experience

Purpose:

Establish credibility without pretending previous professional experience was delivered by the new company.

Heading:

**Selected Technical Experience**

Possible themes supported by the team:

- Production AWS infrastructure
- Infrastructure automation
- CI/CD implementation
- Database migration
- Monitoring and alerting
- Backup and restore operations
- High-concurrency infrastructure exposure
- Technical/broadcast operations
- Live and streaming infrastructure
- Web and Android development

Mandatory credibility rule:

Clearly identify this as experience brought by the team.

Do not label these as new-company client case studies.

---

### Section 9 — Technology Capability

Organize technologies by purpose rather than showing an uncontrolled logo wall.

Suggested categories:

**Cloud**
- AWS

**Infrastructure & DevOps**
- Linux
- Docker
- Kubernetes
- EKS
- Helm
- Terraform
- Ansible
- CloudFormation

**CI/CD**
- Jenkins
- GitHub Actions
- GitLab CI

**Monitoring**
- Prometheus
- Grafana
- ELK
- CloudWatch
- Zabbix where relevant

**Web / Backend / Data**
- PHP
- JavaScript
- Nginx
- Apache
- MySQL
- MongoDB
- Redis where appropriately described

**Streaming**
- HLS
- RTMP
- SRT
- UDP
- Encoding / Decoding

Technology logos are supporting evidence, not the primary sales message.

---

### Section 10 — Engagement Models

Show three ways to work together:

#### Fixed Project
For implementation, migration, modernization, software, infrastructure and DR projects.

#### Monthly Managed Service
For infrastructure management, monitoring, maintenance, DevOps, backup and ongoing support.

#### Fractional / Dedicated Technology Team
For organizations needing additional technical capability without building every function internally.

Managed Services should be presented as a strategically important model.

---

### Section 11 — Team

Introduce:

- Gaurav — Solutions & Delivery
- Aman — Cloud & DevOps Engineering
- Harsh — Growth & Software Engineering

Use concise professional summaries.

Do not publish full resumes.

Do not invent founder/C-level titles.

Link to About/Team details.

---

### Section 12 — Final Conversion Section

Purpose:

Move a qualified visitor into a conversation.

Primary CTA:

**Book a Technical Consultation**

Secondary contextual option:

**Request a Cloud Assessment**

The section should explain briefly what happens after contact so the CTA does not feel like a blind form submission.

---

# 6. Services Overview — `/services/`

## Purpose

Help visitors identify the service that matches their current technical problem.

## Page Structure

1. Hero
2. Service selection/introduction
3. Seven service categories in approved priority
4. Problems mapped to services
5. Build → Deploy → Run → Protect → Support model
6. Engagement models
7. Cross-service capability
8. Final CTA

## Primary CTA

**Book a Technical Consultation**

## Internal Links

Link to all seven detailed service pages.

---

# 7. Cloud & DevOps Engineering — `/services/cloud-devops/`

## Strategic Priority

**Highest**

## Primary Visitors

- CTO
- Technology Head
- Founder
- Engineering Manager
- Software company without sufficient DevOps capability

## Problems Addressed

- Manual deployments
- Unreliable environments
- Poor cloud architecture
- Scaling difficulty
- Lack of automation
- Weak monitoring
- Infrastructure configuration inconsistency

## Page Structure

1. Problem-led hero
2. When this service is needed
3. Capabilities
4. AWS / Linux / DevOps expertise
5. CI/CD
6. Containers
7. Infrastructure as Code
8. Monitoring and observability
9. Typical engagement examples
10. How we work
11. Related technical experience
12. Related services
13. FAQ
14. CTA

## Capability Scope

- AWS architecture and infrastructure
- Linux
- CI/CD
- Jenkins
- GitHub Actions
- GitLab CI
- Docker
- Kubernetes
- EKS
- Helm
- Terraform
- Ansible
- CloudFormation
- Deployment automation
- Infrastructure as Code
- Monitoring
- Performance optimization

## Primary CTA

**Request a Cloud Assessment**

## Secondary CTA

**Book a Technical Consultation**

## Related Services

- Managed Cloud & Infrastructure
- Cloud Migration & Modernisation
- Backup & Disaster Recovery
- Fractional Technology Team

---

# 8. Managed Cloud & Infrastructure — `/services/managed-cloud-infrastructure/`

## Strategic Priority

**Very High / Recurring Revenue**

## Primary Visitors

- Founder
- CTO
- IT Manager
- Operations Manager
- Company without a dedicated infrastructure operations team

## Problems Addressed

- Nobody owns infrastructure
- Reactive incident management
- Weak monitoring
- Poor maintenance discipline
- Backup uncertainty
- Lack of ongoing DevOps capability

## Page Structure

1. Hero
2. The operational problem
3. What we manage
4. Monitoring and alerting
5. Infrastructure maintenance
6. Backup operations
7. Incident and troubleshooting support
8. Performance and reliability
9. Security hardening within supported scope
10. How managed engagement works
11. Suitable customer profiles
12. Related experience
13. Related services
14. FAQ
15. CTA

## Primary CTA

**Book a Technical Consultation**

## Secondary CTA

**Request a Cloud Assessment**

## Important Conversion Goal

This page should make ongoing technical ownership clear.

Do not make Managed Services appear like generic low-level IT support.

---

# 9. Cloud Migration & Modernisation — `/services/cloud-migration-modernisation/`

## Primary Visitors

- CTO
- Founder
- IT Manager
- Business with legacy infrastructure/application

## Problems Addressed

- Legacy servers
- Difficult deployments
- Old database/infrastructure environments
- Scaling constraints
- Poor cloud architecture
- Lack of automation
- Migration risk

## Page Structure

1. Hero
2. Migration triggers
3. Assessment
4. Target architecture
5. Migration planning
6. Database/application migration
7. Containerization where appropriate
8. CI/CD modernization
9. Monitoring implementation
10. Cutover and validation
11. Post-migration managed support
12. Related technical experience
13. FAQ
14. CTA

## Primary CTA

**Request a Cloud Assessment**

## Strategic Conversion Path

**Assessment → Migration/Remediation → Managed Service**

---

# 10. Fractional / Dedicated Technology Team — `/services/fractional-technology-team/`

## Primary Visitors

- SaaS founder
- CTO
- Agency owner
- International client
- Company unable to justify a complete internal specialist team

## Core Problem

> We need technical expertise, but we do not need or cannot justify building every capability in-house.

## Page Structure

1. Hero
2. When fractional support makes sense
3. Available capability areas
4. Fractional DevOps
5. Cloud/infrastructure support
6. Engineering support
7. White-label agency support
8. Collaboration model
9. Communication and ownership
10. Engagement options
11. Related services
12. FAQ
13. CTA

## Primary CTA

**Book a Technical Consultation**

## International Relevance

This is an important page for UAE, UK and US prospects.

Do not claim physical presence in these markets.

---

# 11. Software Engineering — `/services/software-engineering/`

## Primary Visitors

- Founder
- Product Head
- Operations Head
- Business needing a custom application
- Company modernizing existing software

## Positioning Rule

Do not turn this into a generic low-cost web-development page.

## Problems Addressed

- Manual business processes
- Need for internal portals
- Need for customer portals
- Need for APIs/backend systems
- Legacy application limitations
- Need for Android/mobile solutions
- Need for an application that can also be deployed and operated reliably

## Page Structure

1. Hero
2. Business problems we solve
3. Business applications
4. Web applications
5. Portals
6. Backend/API systems
7. Android capability
8. Application modernization
9. Build + Deploy + Operate advantage
10. Development approach
11. Related technical experience
12. Related services
13. FAQ
14. CTA

## Primary CTA

**Discuss Your Project**

## Secondary CTA

**Book a Technical Consultation**

## Related Services

- Cloud & DevOps
- Managed Infrastructure
- Cloud Migration & Modernisation

---

# 12. Backup & Disaster Recovery — `/services/backup-disaster-recovery/`

## Primary Visitors

- CTO
- IT Manager
- Operations Manager
- Founder responsible for business continuity

## Core Problem

> **Having backups and being able to recover are not the same thing.**

## Page Structure

1. Hero
2. Backup vs recovery problem
3. Assessment
4. Backup architecture
5. Database backup
6. Infrastructure snapshots
7. Restore procedures
8. Recovery planning
9. Recovery testing
10. Disaster recovery
11. Ongoing backup management
12. Related services
13. FAQ
14. CTA

## Primary CTA

**Request a Cloud Assessment**

## Cross-Sell

Managed Cloud & Infrastructure.

---

# 13. Streaming Infrastructure — `/services/streaming-infrastructure/`

## Strategic Role

Specialist differentiator.

Do not let this page redefine the whole company as a media-only provider.

## Primary Visitors

- Media company
- Streaming platform
- Broadcast/digital video business
- Technical operations team

## Capability Areas

- Streaming architecture
- HLS
- RTMP
- SRT
- UDP
- Encoding/decoding
- Live infrastructure
- Monitoring
- Redundancy
- Operational support

## Page Structure

1. Hero
2. Streaming reliability problems
3. Architecture
4. Protocol capability
5. Encoding/decoding
6. Live workflows
7. Monitoring
8. Redundancy/reliability
9. Operational support
10. Relevant team experience
11. Related infrastructure services
12. FAQ
13. CTA

## Primary CTA

**Book a Technical Consultation**

---

# 14. Solutions Overview — `/solutions/`

## Purpose

Organize capabilities around customer situations rather than technologies.

This section supports:
- buyer-specific landing pages
- outbound campaigns
- SEO
- easier non-technical navigation

## Solution Segments

1. Startups & SaaS
2. SMEs & Growing Businesses
3. Agencies
4. Media & Streaming Businesses

---

# 15. For Startups & SaaS — `/solutions/startups-saas/`

## Problems

- No dedicated DevOps
- Scaling
- Deployment automation
- Infrastructure cost
- Monitoring
- Need for fractional technical capability

## Recommended Services

- Cloud & DevOps
- Managed Cloud
- Fractional Technology Team
- Software Engineering
- Backup & DR

## CTA

**Book a Technical Consultation**

---

# 16. For SMEs & Growing Businesses — `/solutions/smes-growing-businesses/`

## Problems

- Legacy systems
- Manual processes
- No internal specialist team
- Cloud migration
- Infrastructure reliability
- Need for custom business applications

## Recommended Services

- Cloud Migration
- Managed Infrastructure
- Software Engineering
- Backup & DR
- Fractional Technology Team

## CTA

**Book a Technical Consultation**

---

# 17. For Agencies — `/solutions/agencies/`

## Problems

- Client delivery capacity
- Missing DevOps expertise
- Missing backend/cloud expertise
- Need for white-label technical support
- Variable project demand

## Recommended Services

- Fractional / Dedicated Technology Team
- Cloud & DevOps
- Software Engineering
- Managed Infrastructure

## CTA

**Discuss a Partnership**

This CTA may be used only on the agency-specific solution page.

---

# 18. For Media & Streaming — `/solutions/media-streaming/`

## Problems

- Live infrastructure reliability
- Streaming monitoring
- Encoding/decoding
- Protocol/workflow issues
- Infrastructure operations
- Redundancy

## Recommended Services

- Streaming Infrastructure
- Cloud & DevOps
- Managed Infrastructure
- Backup & DR

## CTA

**Book a Technical Consultation**

---

# 19. Selected Technical Experience — `/experience/`

## Purpose

Provide credible proof of technical capability without misrepresenting previous individual work as work delivered by the new company.

## Required Introductory Disclosure

The page must make it clear that the examples represent **professional experience brought by members of the team**, unless a specific item was actually delivered by the new company.

## Potential Experience Themes

Only use supported facts:

- Production AWS infrastructure
- Infrastructure automation
- CI/CD pipelines
- Zero-downtime MySQL migration experience
- Monitoring and alerting
- Backup and restoration operations
- High-concurrency infrastructure exposure
- Technical/broadcast operations
- Live infrastructure
- Streaming protocols/workflows
- Web development
- Android development
- Technical implementation and delivery

## Recommended Experience Item Structure

For each item:

1. Context / Challenge
2. Technical Responsibility
3. Technologies / Capability
4. Outcome — only if verified
5. Attribution category: Team Experience

Do not invent metrics.

Do not name previous employers/clients unless explicitly approved.

## CTA

**Discuss Your Requirements**

---

# 20. About — `/about/`

## Purpose

Explain who the team is, how it works, and why its combination of capabilities matters.

This page should build confidence without pretending the new company has a long corporate history.

## Page Structure

1. Who we are
2. What we do
3. Why the company exists / operating philosophy
4. Build + Run approach
5. How we work
6. Team
7. Capability mix
8. Engagement philosophy
9. CTA

## Team Roles

### Gaurav — Solutions & Delivery

Emphasize:
- technical operations
- infrastructure
- monitoring
- streaming/live systems
- troubleshooting
- backup/DR
- technical documentation
- project coordination
- enterprise communication
- 12+ years relevant professional experience

### Aman — Cloud & DevOps Engineering

Emphasize:
- AWS
- Linux
- DevOps
- CI/CD
- Docker/Kubernetes
- Terraform/Ansible
- monitoring
- infrastructure automation
- production cloud operations
- 3+ years relevant professional experience

### Harsh — Growth & Software Engineering

Emphasize:
- 5+ years freelance web-development experience
- Android development
- PHP/JavaScript/web technologies
- requirement gathering
- project scoping
- business development
- partnerships
- market research
- client communication

## Credibility Rule

Do not invent:
- founder titles
- executive titles
- company founding date
- office locations
- employee count
- company-history milestones

Use `NEEDS INPUT` where necessary.

---

# 21. Insights — `/insights/`

## Purpose

Create a future organic acquisition and credibility channel.

Do not launch with fabricated articles.

If no approved content exists, either:
- keep the page out of primary navigation until content exists, or
- launch a minimal page without fake publication activity

## Recommended Content Pillars

### Cloud & Infrastructure
Examples:
- cloud architecture
- AWS operations
- cloud cost
- monitoring

### DevOps
Examples:
- CI/CD
- Infrastructure as Code
- containers
- deployment reliability

### Managed Technology
Examples:
- when to use managed infrastructure
- fractional DevOps
- infrastructure ownership

### Business Continuity
Examples:
- backup
- restore
- disaster recovery

### Software Modernisation
Examples:
- migration
- legacy applications
- deployment modernization

### Streaming Infrastructure
Use selectively for specialist authority.

## Article Template

Each article should support:
- clear title/H1
- author if approved
- publish/update date
- introduction
- structured content
- relevant internal service links
- contextual CTA
- Article schema
- Open Graph metadata

Do not create articles solely for keyword stuffing.

---

# 22. Contact — `/contact/`

## Purpose

Convert qualified visitors with minimal friction.

## Form Fields

Required:
- Name
- Business Email
- Company
- Country
- Service Required
- Short Project Description

Optional:
- Budget Range

Do not collect unnecessary personal information.

## Service Dropdown

Use approved service names:
- Cloud & DevOps Engineering
- Managed Cloud & Infrastructure
- Cloud Migration & Modernisation
- Fractional / Dedicated Technology Team
- Software Engineering
- Backup & Disaster Recovery
- Streaming Infrastructure
- Not Sure / Need Guidance

## Page Structure

1. Clear contact heading
2. Short explanation
3. What happens next
4. Contact form
5. Official contact information — `NEEDS INPUT`
6. Relevant trust statement
7. Privacy note

## CTA / Submit Label

**Send Project Details**

or another approved equivalent.

## Important

Do not create:
- fake booking calendar
- fake office
- fake WhatsApp number
- fake email address

Missing contact information must remain `NEEDS INPUT`.

---

# 23. Privacy Policy — `/privacy/`

## Purpose

Explain website data collection and handling.

The final legal text depends on actual:
- company/legal entity
- analytics configuration
- contact-form processing
- cookies
- email provider
- hosting
- applicable jurisdiction

Until confirmed, legal-specific items are:

`NEEDS INPUT`

Do not let an AI invent legally binding company details.

---

# 24. Terms — `/terms/`

Use as a website terms/legal placeholder until actual legal requirements are confirmed.

Required business/legal details:

`NEEDS INPUT`

Do not fabricate them.

---

# 25. 404 Page

## Purpose

Recover visitors from broken/incorrect URLs.

Include:
- clear message
- Home link
- Services link
- Contact link

Optional:
- links to major services

Do not make the 404 page visually disconnected from the main site.

---

# 26. CTA System

Keep the CTA vocabulary deliberately small.

## Primary Site-Wide CTA

**Book a Technical Consultation**

Best for:
- homepage
- header
- managed services
- fractional team
- streaming
- general pages

## High-Intent Infrastructure CTA

**Request a Cloud Assessment**

Best for:
- Cloud & DevOps
- Migration
- Backup & DR
- infrastructure problem sections

## Software CTA

**Discuss Your Project**

Best for:
- Software Engineering
- relevant experience pages

## Agency-Specific CTA

**Discuss a Partnership**

Only where agency/white-label intent is explicit.

Do not invent dozens of CTA labels.

---

# 27. Engagement Model Routing

Visitors should be able to understand the commercial model without needing a separate pricing page.

## Fixed Project

Route suitable leads from:
- Cloud Migration
- DevOps implementation
- Software Engineering
- DR implementation
- Infrastructure projects

## Monthly Managed Service

Route suitable leads from:
- Managed Infrastructure
- Cloud & DevOps
- Backup management
- Post-migration support

## Fractional / Dedicated Team

Route suitable leads from:
- SaaS/startup pages
- Agency pages
- International visitors
- Fractional Technology Team page

Do not publish fabricated pricing.

---

# 28. Customer Journey — Founder Without DevOps

```text
Search / Referral / Outreach
↓
Homepage or Startup/SaaS Solution
↓
Recognizes "No dedicated DevOps" problem
↓
Cloud & DevOps or Fractional Team
↓
Sees technical capability
↓
Sees flexible engagement model
↓
Book a Technical Consultation
↓
Assessment / Discovery
↓
Implementation
↓
Potential Managed Service
```

---

# 29. Customer Journey — CTO With Unreliable Infrastructure

```text
Cloud/Infrastructure Landing Page
↓
Reliability + monitoring + deployment problems
↓
Cloud & DevOps
↓
Selected Technical Experience
↓
Build/Deploy/Run model
↓
Request a Cloud Assessment
↓
Assessment
↓
Remediation
↓
Managed Cloud
```

---

# 30. Customer Journey — Business Planning Cloud Migration

```text
Cloud Migration Page
↓
Assessment
↓
Migration approach
↓
Automation + monitoring
↓
Technical credibility
↓
Request a Cloud Assessment
↓
Migration Project
↓
Post-Migration Managed Service
```

---

# 31. Customer Journey — Custom Software Buyer

```text
Software Engineering Page
↓
Business problem
↓
Application / portal / API capability
↓
Build + Deploy + Operate differentiation
↓
Selected Technical Experience
↓
Discuss Your Project
↓
Discovery
↓
Software Project
↓
Cloud Deployment
↓
Potential Ongoing Support
```

---

# 32. Customer Journey — UAE SME

```text
Homepage / SME Solution Page
↓
Understands remote technology-partner positioning
↓
Relevant business problem
↓
Cloud / Software / Managed Service
↓
Team credibility
↓
Engagement model
↓
Book a Technical Consultation
```

Do not imply a UAE physical office.

---

# 33. Customer Journey — UK/US Company Seeking Fractional Support

```text
Fractional Technology Team
↓
Understands capability without full internal hiring
↓
Cloud / DevOps / engineering support
↓
Team capability
↓
Collaboration model
↓
Book a Technical Consultation
↓
Discovery
↓
Fractional / Dedicated Engagement
```

---

# 34. Customer Journey — Agency

```text
Agency Solution Page
↓
White-label delivery problem
↓
Fractional / Dedicated Technology Team
↓
Cloud + Software capability
↓
Collaboration / ownership
↓
Discuss a Partnership
↓
Discovery
↓
White-label / Dedicated Engagement
```

---

# 35. Customer Journey — Media / Streaming Company

```text
Streaming Infrastructure Page
↓
Recognizes live/streaming reliability problem
↓
Streaming capability
↓
Infrastructure + monitoring capability
↓
Relevant team experience
↓
Book a Technical Consultation
↓
Technical discovery
↓
Project / Ongoing Operations Support
```

---

# 36. Internal Linking Rules

Every service page should link naturally to relevant adjacent services.

## Cloud & DevOps
Link to:
- Managed Cloud
- Migration
- Backup & DR
- Fractional Team

## Managed Cloud
Link to:
- Cloud & DevOps
- Backup & DR
- Fractional Team

## Migration
Link to:
- Cloud & DevOps
- Managed Cloud
- Backup & DR

## Fractional Team
Link to:
- Cloud & DevOps
- Managed Cloud
- Software Engineering

## Software Engineering
Link to:
- Cloud & DevOps
- Managed Cloud
- Migration

## Backup & DR
Link to:
- Managed Cloud
- Cloud & DevOps
- Migration

## Streaming
Link to:
- Cloud & DevOps
- Managed Cloud
- Backup & DR

Do not add links simply for SEO. Links must help the visitor continue a logical journey.

---

# 37. Footer Architecture

Recommended footer groups:

## Services
- Cloud & DevOps Engineering
- Managed Cloud & Infrastructure
- Cloud Migration & Modernisation
- Fractional Technology Team
- Software Engineering
- Backup & Disaster Recovery
- Streaming Infrastructure

## Company
- About
- Selected Technical Experience
- Insights
- Contact

## Solutions
- Startups & SaaS
- SMEs & Growing Businesses
- Agencies
- Media & Streaming

## Legal
- Privacy
- Terms

## Contact
Official company details:

`NEEDS INPUT`

Do not fabricate social-media accounts.

---

# 38. Header Behaviour

Desktop:
- Logo / company name
- Primary navigation
- Services dropdown or mega-menu only if it remains simple
- Primary CTA

Mobile:
- Accessible menu button
- Full navigation
- Clear CTA
- No hover-dependent interactions

Header should remain visually clean.

Do not show all service links directly in the top-level navigation.

---

# 39. Search Intent Mapping

Do not keyword-stuff.

Broad intent mapping:

| Page | Primary Intent |
|---|---|
| Home | Cloud engineering / managed technology company |
| Cloud & DevOps | AWS / cloud / DevOps engineering services |
| Managed Cloud | Managed cloud / infrastructure management |
| Migration | Cloud migration / modernization |
| Fractional Team | Fractional DevOps / remote technology team |
| Software Engineering | Custom business software / application engineering |
| Backup & DR | Cloud backup / disaster recovery |
| Streaming | Streaming infrastructure / live technical infrastructure |
| Startups & SaaS | Cloud/DevOps support for startups and SaaS |
| Agencies | White-label technical / DevOps partner |
| Experience | Technical credibility / capability proof |
| Insights | Informational technical search intent |

Final keyword research may be performed separately before final SEO copy.

---

# 40. Content Hierarchy Rules

Every important commercial page should approximately answer:

1. What problem is this page about?
2. What do we provide?
3. Who is it for?
4. What capabilities are included?
5. How do we approach the work?
6. Why is the team credible?
7. What related service may be needed?
8. What should the visitor do next?

Do not force this into an identical visual template on every page.

---

# 41. Credibility Rules

Across the entire sitemap:

### Allowed
- Verified team capabilities
- Verified years of individual professional experience
- Supported technology experience
- Clearly labeled Selected Technical Experience
- Genuine future company case studies once available

### Not Allowed
- Fake client logos
- Fake testimonials
- Fake reviews
- Fake awards
- Fake certifications
- Fake offices
- Fake customer counts
- Fake project counts
- Unsupported performance metrics
- Unsupported savings claims
- Presenting previous employment work as new-company work

Missing facts:

`NEEDS INPUT`

---

# 42. International Positioning Rules

The website may be designed for prospects in:
- India
- UAE
- UK
- USA
- other international markets

However:

- Do not claim offices that do not exist.
- Do not create fake country addresses.
- Do not create country-specific legal claims without verification.
- Do not pretend the company already has customers in those markets.
- Do not use flags as a substitute for credible international positioning.

International credibility should come from:
- professional design
- clear English
- technical competence
- transparent engagement model
- strong operational process
- credible team experience

---

# 43. Pages Not Required at Initial Launch

Do not add these without a business reason:

- Pricing
- Careers
- Investor Relations
- Press
- Partners
- Certifications
- Client Portal
- Login
- Marketplace
- E-commerce
- Community
- Separate country office pages

They can be added later if real business requirements emerge.

---

# 44. Launch Priority

## Phase 1 — Must Have

1. Home
2. Services Overview
3. Cloud & DevOps
4. Managed Cloud & Infrastructure
5. Cloud Migration & Modernisation
6. Fractional Technology Team
7. Software Engineering
8. Backup & Disaster Recovery
9. Streaming Infrastructure
10. Selected Technical Experience
11. About / Team
12. Contact
13. Privacy
14. Terms placeholder
15. 404

## Phase 2 — Growth

1. Solutions Overview
2. Startups & SaaS
3. SMEs & Growing Businesses
4. Agencies
5. Media & Streaming
6. Insights
7. Article templates

Architecture should support Phase 2 from the beginning even if Phase 1 launches first.

---

# 45. Definition of Success

The information architecture is successful when a visitor can quickly determine:

- what the company does
- whether it solves their problem
- which service is relevant
- why the team is technically credible
- how the company differs from a generic IT agency
- how the engagement works
- how to start a conversation

The architecture must support the central business message:

> **One technology partner from application to infrastructure to ongoing operations.**

And the business North Star:

> **They can take technical ownership.**

---

# 46. Instructions for AI Coding Agents

When using this file during implementation:

1. Read `PROJECT.md` first.
2. Treat this file as the source of truth for sitemap and navigation.
3. Do not add or remove major pages without explicit approval.
4. Preserve the approved service priority.
5. Keep Cloud & DevOps and Managed Infrastructure prominent.
6. Keep Streaming Infrastructure specialist rather than dominant.
7. Do not convert the site into a generic web-development agency.
8. Maintain the distinction between Company Work and Team Experience.
9. Do not fabricate content to fill empty sections.
10. Use `NEEDS INPUT` for missing factual information.
11. Keep CTA vocabulary controlled.
12. Ensure every page has a logical conversion path.
13. Implement internal links according to visitor intent, not keyword stuffing.
14. Do not create fake international office/location pages.
15. Preserve future architecture for Solutions and Insights.
16. Do not write final marketing copy from this file if an approved `CONTENT.md` exists; `CONTENT.md` should control final copy.
17. Do not redesign business strategy; follow `PROJECT.md`.
