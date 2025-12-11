import { BlogPost, CurriculumModule, Partner, TeamMember, Resource } from './types';

export const RECENT_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Monetary Policy Challenges in West Africa',
    category: 'Policy Brief',
    summary: 'An in-depth look at inflation targeting mechanisms used by central banks across the ECOWAS region.',
    author: 'Dr. Amina Diop',
    date: 'Oct 12, 2023',
    imageUrl: 'https://picsum.photos/seed/finance1/800/600',
  },
  {
    id: '2',
    title: 'Digital Currency and Financial Inclusion',
    category: 'Economic Analysis',
    summary: 'How CBDCs are reshaping the landscape of unbanked populations in rural diverse economies.',
    author: 'Samuel Okafor',
    date: 'Sep 28, 2023',
    imageUrl: 'https://picsum.photos/seed/tech1/800/600',
  }
];

export const ALL_POSTS: BlogPost[] = [
  ...RECENT_POSTS,
  {
    id: '3',
    title: 'Trade Agreements: AfCFTA Implementation',
    category: 'Policy Brief',
    summary: 'Analyzing the logistical bottlenecks and tariff adjustments required for successful implementation.',
    author: 'Sarah Mbeki',
    date: 'Sep 15, 2023',
    imageUrl: 'https://picsum.photos/seed/trade/800/600',
  },
  {
    id: '4',
    title: 'Agricultural Resilience in a Changing Climate',
    category: 'Economic Analysis',
    summary: 'Data-driven approaches to crop insurance and subsidy models for smallholder farmers.',
    author: 'David Mensah',
    date: 'Aug 30, 2023',
    imageUrl: 'https://picsum.photos/seed/farm/800/600',
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Eze Uchechukwu',
    role: 'Executive Director & Founder',
    imageUrl: 'https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420277/Eze_Uchechukwu__Profile_-_Uchechukwu_Eze_1_ofjcru.jpg',
    email: 'uchechukwue300@gmail.com',
    bio: 'Provides strategic leadership and vision for AMAP. Representing the program externally, mobilizes resources and builds partnerships. The vision is clear: to create a pan-African network of skilled economists who will shape policy, drive research, and lead economic development across our continent.'
  },
  {
    id: '2',
    name: 'Nwanosike Chinonso Amos',
    role: 'Director of Programs',
    imageUrl: 'https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420304/Chinonso_Amos_s1uv1m.png',
    email: 'chinonsoamos22@gmail.com',
    bio: 'Curates a network of expert facilitators and ensures program design is grounded in current economic trends. Lead curriculum delivery, cohort recruitment, and moderation of sessions.'
  },
  {
    id: '3',
    name: 'Edwin-Ugodu Stephen Chidi',
    role: 'Director of Operations',
    imageUrl: 'https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420398/Stephen_Chidi_Edwin-Ugodu_qirxej.jpg',
    email: 'steven360chi@gmail.com',
    bio: 'Oversees program logistics including scheduling, facilitator engagement, and weekly assessments. Tracks key performance indicators (KPIs) for program delivery.'
  },
  {
    id: '4',
    name: 'Nwankwo Esther Chioma',
    role: 'Human Resources Manager',
    imageUrl: 'https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420360/Chioma_Esther_lhhfds.jpg',
    email: 'beautychiest25@gmail.com',
    bio: 'Manages recruitment of scholars, interns, and staff. Serves as the primary liaison for scholars during the program, addressing welfare and concerns.'
  },
  {
    id: '5',
    name: 'Egwuchukwu Maryann',
    role: 'Programme Manager – Content & Delivery',
    imageUrl: 'https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420329/chiamaka_egwuchukwu_pglwgi.png',
    email: 'egwuchukwuemmauella024@gmail.com',
    bio: 'Leads the content creation team and ensures learning materials are up to date. Supports project planning, curriculum scheduling, and overall program management.'
  },
  {
    id: '6',
    name: 'Ezeh Patrick',
    role: 'Director of Media & Communications',
    imageUrl: 'https://res.cloudinary.com/dttoqt6w7/image/upload/v1765420383/Ezeh_Patrick_pqo84f.jpg',
    email: 'saintpatrickforchrist@gmail.com',
    bio: 'Manages AMAP\'s social media accounts and external communications. Oversees media strategy to strengthen AMAP\'s visibility and reputation.'
  }
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'African Dev Bank', logoUrl: 'https://picsum.photos/seed/logo1/200/100' },
  { id: '2', name: 'EconPolicy Inst', logoUrl: 'https://picsum.photos/seed/logo2/200/100' },
  { id: '3', name: 'Global Data Corp', logoUrl: 'https://picsum.photos/seed/logo3/200/100' },
  { id: '4', name: 'Future Africa', logoUrl: 'https://picsum.photos/seed/logo4/200/100' },
];

export const CURRICULUM: CurriculumModule[] = [
  {
    id: 'mod1',
    title: 'Monetary Policy Analysis',
    description: 'Understanding central banking, inflation targeting, and currency dynamics.',
    topics: ['Central banking in African economies', 'Inflation targeting and price stability', 'Currency dynamics and foreign exchange markets', 'Monetary policy tools', 'Impact of global monetary trends']
  },
  {
    id: 'mod2',
    title: 'Fiscal Policy & Development',
    description: 'Government spending, taxation, and sustainable growth strategies.',
    topics: ['Government revenue and expenditure analysis', 'Taxation policy', 'Budget deficits and debt sustainability', 'Public investment', 'Fiscal federalism']
  },
  {
    id: 'mod3',
    title: 'External Sector Economics',
    description: 'Trade flows, balance of payments, and Africa\'s global economic integration.',
    topics: ['Balance of payments analysis', 'Trade agreements (AfCFTA, ECOWAS, SADC)', 'Commodity price volatility', 'FDI and capital flows', 'Exchange rate management']
  },
  {
    id: 'mod4',
    title: 'Economic Modeling & Forecasting',
    description: 'Data-driven tools for predicting and analyzing economic trends.',
    topics: ['Economic data collection', 'Forecasting key indicators (GDP, Inflation)', 'Building macroeconomic models', 'Scenario analysis', 'Data visualization']
  },
  {
    id: 'mod5',
    title: 'Policy Writing & Communication',
    description: 'Translating complex analysis into actionable policy recommendations.',
    topics: ['Structure of policy briefs', 'Writing for different audiences', 'Evidence-based argumentation', 'Communicating economic concepts', 'Building persuasive narratives']
  }
];

export const RESOURCES: Resource[] = [
  { id: '1', title: 'Macroeconomic Data Sheet 2023', type: 'Dataset', date: '2023-10-01', url: '#' },
  { id: '2', title: 'Guide to Policy Writing', type: 'PDF', date: '2023-09-15', url: '#' },
  { id: '3', title: 'Lecture 4: Inflation Dynamics', type: 'Video', date: '2023-10-10', url: '#' },
];