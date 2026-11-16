// Navigation structure used by <Navbar />.
// mega: true  -> full-width panel with `columns`
// children    -> rich single-column dropdown
// (neither)   -> plain link

import {
  Monitor,
  Headset,
  GridIcon,
  Cloud,
  Plus,
  GraduationCap,
  ShoppingBag,
  Truck,
  Bed,
  Building,
  Users,
  Bot,
  ShoppingCart,
  Heart,
  Flask,
  Cpu,
  RefreshCw,
  Eye,
  FileText,
  BookOpen,
  Info,
  Target,
  Shield,
  Star,
  LinkIcon,
  Settings,
} from '../components/Icons'
import posImage from '../assets/images/projects/pos.png'

export const NAV_ITEMS = [
  {
    label: 'Services',
    to: '/services',
    mega: true,
    columns: [
      {
        heading: 'SOLUTIONS WE DELIVER',
        items: [
          { label: 'Digital Platforms and Applications',  desc: 'Modern web, mobile, and enterprise apps built for speed, scale, and user experience.', Icon: Monitor,  to: '/services#digital-platforms'       },
          { label: 'Emerging & Immersive Technologies',   desc: 'AR, VR, blockchain, and next-generation experiences that transform how teams work.',    Icon: Headset,  to: '/insights'  },
          { label: 'Industry-Specific Solutions',         desc: 'Tailored systems for healthcare, education, retail, logistics, and public sector.',      Icon: GridIcon, to: '/our-work'   },
          { label: 'Our Development Principles',          desc: 'Quality-first delivery, clean architecture, and long-term maintainability in every build.', Icon: Cloud, to: '/about'        },
        ],
      },
      {
        heading: 'INDUSTRIES',
        slim: true,
        items: [
          { label: 'Healthcare',               Icon: Plus,          to: '/our-work/medical-center-system' },
          { label: 'Education',                Icon: GraduationCap, to: '/our-work/school-management' },
          { label: 'Retail',                   Icon: ShoppingBag,   to: '/our-work/pos-system' },
          { label: 'Distribution & Logistics', Icon: Truck,         to: '/our-work/distribution-system' },
          { label: 'Hospitality',              Icon: Bed,           to: '/our-work/hotel-booking' },
          { label: 'Public Sector',            Icon: Building,      to: '/our-work/economic-center-system' },
        ],
      },
      {
        type: 'featured',
        image: posImage,
        imageAlt: 'Advanced POS system dashboard',
        title: 'Our Projects & Case Studies',
        desc: "Explore systems we've delivered across enterprise, retail, healthcare and education.",
        cta: 'Explore Projects',
        to: '/our-work',
      },
    ],
  },
  {
    label: 'Our Works',
    to: '/our-work',
    mega: true,
    columns: [
      {
        heading: 'ENTERPRISE & PUBLIC SECTOR',
        items: [
          { label: 'Economic Center Management', desc: 'Public sector', Icon: Building, to: '/our-work/economic-center-system' },
          { label: 'Human Resource Information System', desc: 'Enterprise',              Icon: Users,        to: '/our-work/hris'                },
          { label: 'Distribution Agency Management',    desc: 'Distribution',            Icon: Truck,        to: '/our-work/distribution-system' },
          { label: 'AI Customer Support Chatbot',       desc: 'Artificial intelligence', Icon: Bot,          to: '/our-work/ai-chatbot'          },
        ],
      },
      {
        heading: 'EDUCATION · RETAIL · MORE',
        items: [
          { label: 'School Management System',         desc: 'Education',   Icon: GraduationCap, to: '/our-work/school-management' },
          { label: 'Advanced Point of Sale',           desc: 'Retail',      Icon: ShoppingCart,  to: '/our-work/pos-system'},
          { label: 'Hotel & Cottage Booking Website',  desc: 'Hospitality', Icon: Bed,           to: '/our-work/hotel-booking' },
          { label: 'University Medical Center System', desc: 'Healthcare',  Icon: Heart,         to: '/our-work/medical-center-system' },
        ],
      },
    ],
  },
  {
    label: 'AI & Research',
    to: '/research',
    children: [
      { label: 'Research & Innovation',    desc: 'Focus areas and UBL partnership',       Icon: Flask,     to: '/research' },
      { label: 'AI & Automation',          desc: 'AI, intelligent automation, robotics',  Icon: Cpu,       to: '/research' },
      { label: 'AI-Driven Transformation', desc: 'From emerging tech to opportunity',     Icon: RefreshCw, to: '/research' },
      { label: 'Our Vision',               desc: 'The future is intelligent',             Icon: Eye,       to: '/research' },
    ],
  },
  {
    label: 'Insights',
    to: '/insights',
    children: [
      { label: 'Case Studies',    desc: 'Real challenges, innovative solutions', Icon: FileText, to: '/insights' },
      { label: 'Blog & Articles', desc: 'Ideas on AI, RAG and automation',       Icon: BookOpen, to: '/insights' },
    ],
  },
  {
    label: 'Company',
    to: '/about',
    children: [
      { label: 'About Pentarix',            desc: 'Our story, mission, and values',  Icon: Info,     to: '/about'      },
      { label: 'The Minds Behind Pentarix', desc: 'Founders and leadership',         Icon: Users,    to: '/about'      },
      { label: 'What Drives Us Forward',    desc: 'What we do, vision and mission',  Icon: Target,   to: '/about'      },
      { label: 'Quality. Security. Trust.', desc: 'HIPAA, WCAG, GDPR, PCI DSS',     Icon: Shield,   to: '/about'      },
      { label: 'Why Choose Pentarix?',      desc: 'Six reasons to partner with us',  Icon: Star,     to: '/about'      },
      { label: 'Partners',                  desc: 'Pentarix × SUSL, 20 years',       Icon: LinkIcon, to: '/about'      },
      { label: 'Technology',              desc: 'Our core technology stack',        Icon: Settings, to: '/insights' },
    ],
  },
  { label: 'Careers', to: '/careers' },
]
