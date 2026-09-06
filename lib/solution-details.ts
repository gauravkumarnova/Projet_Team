import type { SolutionDetailConfig } from '../components/marketing/SolutionDetailPage';

export const solutionAudiences = [
  {
    title: 'Startups & SaaS',
    description: 'Cloud, DevOps, monitoring and fractional technical capability for teams focused on building and scaling products.',
    href: '/solutions/startups-saas/',
  },
  {
    title: 'SMEs & Growing Businesses',
    description: 'Modernisation, managed infrastructure and software engineering for businesses improving their technology operations.',
    href: '/solutions/smes-growing-businesses/',
  },
  {
    title: 'Agencies',
    description: 'White-label and fractional technical capability for agencies that need cloud, DevOps, backend or engineering support.',
    href: '/solutions/agencies/',
  },
  {
    title: 'Media & Streaming Businesses',
    description: 'Specialist streaming, live infrastructure and technical operations capability supported by broader cloud and infrastructure expertise.',
    href: '/solutions/media-streaming/',
  },
];

export const startupsSaas: SolutionDetailConfig = {
  eyebrow: 'Startups & SaaS',
  title: 'Cloud and DevOps capability without slowing down product development.',
  heroDescription: 'Growing product teams often reach a point where developers are also managing infrastructure, deployments, monitoring and production incidents.',
  introParagraphs: ['We can add focused cloud and DevOps capability around the existing engineering team.'],
  visualItems: ['Cloud and DevOps capability', 'Manual deployment improvement', 'Scaling and monitoring', 'Focused technical capacity'],
  problems: ['no dedicated DevOps engineer', 'manual deployments', 'infrastructure scaling', 'monitoring gaps', 'AWS complexity', 'backup/recovery uncertainty', 'engineering time consumed by operations'],
  services: [
    { title: 'Cloud & DevOps Engineering', href: '/services/cloud-devops/' },
    { title: 'Managed Cloud & Infrastructure', href: '/services/managed-cloud-infrastructure/' },
    { title: 'Fractional / Dedicated Technology Team', href: '/services/fractional-technology-team/' },
    { title: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery/' },
    { title: 'Software Engineering', href: '/services/software-engineering/' },
  ],
  finalCta: {
    title: 'Need infrastructure capability without building another full internal function?',
    action: { label: 'Book a Technical Consultation', href: '/contact/' },
  },
};

export const smesGrowingBusinesses: SolutionDetailConfig = {
  eyebrow: 'SMEs & Growing Businesses',
  title: 'Modern technology support for businesses outgrowing legacy processes and infrastructure.',
  heroDescription: 'Growth often exposes technical problems that were manageable at a smaller scale: manual processes, aging systems, fragmented infrastructure and unclear technical ownership.',
  introParagraphs: ['We help businesses modernise the systems behind their operations and establish a clearer path for ongoing support.'],
  visualItems: ['Modernisation and legacy improvement', 'Managed infrastructure', 'Business software', 'Clearer technical ownership'],
  problems: ['legacy applications', 'manual business processes', 'cloud migration', 'unreliable infrastructure', 'weak monitoring', 'limited internal specialist capability', 'backup/recovery concerns'],
  services: [
    { title: 'Cloud Migration & Modernisation', href: '/services/cloud-migration-modernisation/' },
    { title: 'Managed Cloud & Infrastructure', href: '/services/managed-cloud-infrastructure/' },
    { title: 'Software Engineering', href: '/services/software-engineering/' },
    { title: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery/' },
    { title: 'Fractional / Dedicated Technology Team', href: '/services/fractional-technology-team/' },
  ],
  finalCta: {
    title: 'Modern technology support for businesses outgrowing legacy processes and infrastructure.',
    action: { label: 'Book a Technical Consultation', href: '/contact/' },
  },
};

export const agencies: SolutionDetailConfig = {
  eyebrow: 'Agencies',
  title: 'Extend your technical delivery capability without building every skill in-house.',
  heroDescription: 'Agencies often encounter client requirements outside their core delivery capacity—cloud infrastructure, DevOps, backend engineering, deployment or ongoing technical operations.',
  introParagraphs: ['We can support defined technical work or operate as an agreed white-label/fractional delivery partner.'],
  visualItems: ['Cloud and DevOps', 'Backend engineering', 'Infrastructure and operations', 'White-label technical delivery'],
  capabilities: ['Cloud & DevOps', 'Infrastructure', 'Backend/application engineering', 'Managed operations', 'Technical troubleshooting', 'Fractional delivery support'],
  workingModel: {
    title: 'Clear responsibilities. Clear communication. Flexible capacity.',
    description: 'The exact client-facing model, scope, communication path and ownership should be agreed before work begins.',
  },
  services: [
    { title: 'Cloud & DevOps Engineering', href: '/services/cloud-devops/' },
    { title: 'Managed Cloud & Infrastructure', href: '/services/managed-cloud-infrastructure/' },
    { title: 'Software Engineering', href: '/services/software-engineering/' },
    { title: 'Fractional / Dedicated Technology Team', href: '/services/fractional-technology-team/' },
  ],
  finalCta: {
    title: 'Extend your technical delivery capability without building every skill in-house.',
    action: { label: 'Discuss a Partnership', href: '/contact/' },
  },
};

export const mediaStreaming: SolutionDetailConfig = {
  eyebrow: 'Media & Streaming Businesses',
  title: 'Technical infrastructure support for live and streaming operations.',
  heroDescription: 'Live and streaming environments require more than application development. Reliability depends on infrastructure, protocols, encoding, monitoring, redundancy and disciplined technical operations.',
  introParagraphs: ['Our specialist streaming capability is supported by broader experience across infrastructure, cloud, monitoring and operational troubleshooting.'],
  visualItems: ['Streaming infrastructure', 'Cloud and infrastructure', 'Monitoring and redundancy', 'Technical operations'],
  capabilities: ['Streaming architecture', 'Cloud infrastructure', 'Infrastructure monitoring', 'Redundancy planning', 'Disaster recovery', 'Operational troubleshooting'],
  services: [
    { title: 'Streaming Infrastructure', href: '/services/streaming-infrastructure/' },
    { title: 'Cloud & DevOps Engineering', href: '/services/cloud-devops/' },
    { title: 'Managed Cloud & Infrastructure', href: '/services/managed-cloud-infrastructure/' },
    { title: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery/' },
  ],
  finalCta: {
    title: 'Technical infrastructure support for live and streaming operations.',
    action: { label: 'Book a Technical Consultation', href: '/contact/' },
  },
};
