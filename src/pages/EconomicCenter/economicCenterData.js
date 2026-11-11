import {
  ShoppingBag, Building, FileText, Globe, Monitor,
  Truck, FileCheck, Users, Database, GridIcon,
} from '../../components/Icons'

export const hero = {
  eyebrow: 'Public Sector · Enterprise Software',
  title: 'Digitizing Market Operations.\n{Simplifying Management.}',
  description: 'Empowering Growth. A comprehensive Economic Center Management System that brings public information, ticketing and finance into one digital environment.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'All Projects', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const overview = {
  title: 'Transforming traditional\nmarket operations.',
  paragraphs: [
    {
      before: 'Pentarix Labs developed a comprehensive Economic Center Management System to transform traditional market operations through modern digital technologies. The platform combines a ',
      strong: 'public-facing website with an integrated management system',
      after: ', enabling efficient handling of daily operations, financial activities, ticketing services, and public information from one centralized digital environment.',
    },
    {
      before: 'Designed to reduce manual work and simplify complex administrative processes, the solution helps improve operational efficiency, financial visibility, and information accessibility while supporting the digital transformation of agricultural marketplace management.',
    },
  ],
}

export const meta = [
  { label: 'Category', value: 'Public Sector' },
  { label: 'Type', value: 'Website + Management System' },
  { label: 'Domain', value: 'Agricultural Marketplace' },
  { label: 'Developed by', value: 'Pentarix Labs' },
]

export const featuresIntro = {
  eyebrow: 'Key Features',
  title: 'Everything the market needs,\nin one platform.',
  text: 'From public price boards to tenant arrears and profit calculations, every part of daily market life is connected.',
}

export const groups = [
  {
    id: 'portal',
    title: 'Public Information Portal',
    text: 'A public-facing website that keeps farmers, traders, tenants and the general public informed.',
    features: [
      { Icon: ShoppingBag, title: 'Daily Market Price Updates', text: 'Publishes daily fruit and vegetable prices with historical price information, helping users make informed market decisions.' },
      { Icon: Building, title: 'Market Information Management', text: 'Provides essential market details, open-house information, contact numbers, services, and facility information through a centralized platform.' },
      { Icon: FileText, title: 'News & Announcements', text: 'Enables the publication of public notices, events, announcements, and important updates.' },
      { Icon: Globe, title: 'Multilingual Access', text: 'Makes market information accessible to a wider audience through multiple language options.' },
      { Icon: Monitor, title: 'Digital Information Portal', text: 'Offers convenient online access to market information and public updates for farmers, traders, tenants, and the general public.' },
    ],
  },
  {
    id: 'operations',
    title: 'Operations & Ticketing',
    text: 'Day-to-day market operations, digitized and recorded in an organized way.',
    features: [
      { Icon: Truck, title: 'Vehicle Ticketing System', text: 'Digitizes vehicle ticketing activities and maintains organized records to support smoother operational workflows.' },
      { Icon: FileCheck, title: 'Sanitary Ticketing System', text: 'Streamlines sanitary service-related ticketing and transaction record management.' },
      { Icon: Users, title: 'Tenant Management', text: 'Simplifies tenant administration through centralized records, monthly rental payment updates, arrears tracking, and the management of fines and penalties.' },
    ],
  },
  {
    id: 'finance',
    title: 'Finance & Administration',
    text: 'Financial visibility and full administrative control from a single interface.',
    features: [
      { Icon: Database, title: 'Invoice Generation & Financial Management', text: 'Supports invoice generation, payment monitoring, and total profit calculations based on recorded financial data.' },
      { Icon: GridIcon, title: 'Administrative Dashboard', text: 'Provides a centralized interface to manage system functions, monitor operations, access records, and oversee important administrative and financial activities.' },
    ],
  },
]

export const audience = {
  title: 'Built for everyone in the market.',
  text: 'One platform serving the people who buy, sell, rent and manage.',
  items: ['Farmers', 'Traders', 'Tenants', 'General Public', 'Administrators'],
}

export const impact = {
  eyebrow: 'Project Impact',
  title: 'From paperwork to a digitally connected environment.',
  text: 'By replacing manual processes with integrated digital workflows, the Economic Center Management System helps minimize paperwork, organize operational records, simplify financial administration, and improve access to essential information. It brings public services and internal management activities together, creating a more efficient, transparent, and digitally connected environment.',
  points: ['Minimized paperwork', 'Organized operational records', 'Simplified financial administration', 'Improved access to information'],
  credit: 'Developed by Pentarix Labs',
  tagline: 'Turning complex operations into simpler digital experiences.',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Distribution Agency Management System', tag: 'Distribution & Logistics', to: '/our-work/distribution-system' },
    { title: 'Advanced Point of Sale (POS) System', tag: 'Retail', to: '/our-work/pos-system' },
    { title: 'Human Resource Information System', tag: 'Enterprise', to: '/our-work/hris' },
  ],
}

export const cta = {
  title: 'Have a project in mind?',
  text: 'Let’s transform your complex business requirements into high-performance digital products. Our engineers are ready to build.',
  actions: [
    { label: 'Start Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}