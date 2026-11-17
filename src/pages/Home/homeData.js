import { Code, Award, Cloud, Globe } from '../../components/Icons'
import digitalPlatformsIcon from '../../assets/icons/home/digitalplatfroms.png'
import enterpriseIcon from '../../assets/icons/home/enterprise.png'
import aiIcon from '../../assets/icons/home/ai.png'
import industryIcon from '../../assets/icons/home/industry.png'
import heroBg from '../../assets/images/home/hero-bg.png'
import heroVideo from '../../assets/images/home/herovideo.mp4'
import digitalPlatformsImage from '../../assets/images/home/digital-platforms.png'
import enterpriseSystemsImage from '../../assets/images/home/enterprise-systems.png'
import aiAutomationImage from '../../assets/images/home/ai-automation.png'
import cloudInfrastructureImage from '../../assets/images/home/cloud-infrastructure.png'
import excellenceImage from '../../assets/images/home/excellence.png'
import dmsImage from '../../assets/images/home/dms.png'
import posImage from '../../assets/images/home/pos.png'
import hrmsImage from '../../assets/images/home/hrms.png'
import hipaaIcon from '../../assets/icons/marquee/hipaa.png'
import wcagIcon from '../../assets/icons/marquee/wcag.png'
import section508Icon from '../../assets/icons/marquee/sec508.png'
import gdprIcon from '../../assets/icons/marquee/gdpr.png'
import slasscomIcon from '../../assets/icons/marquee/slasscom.png'
import ieeeIcon from '../../assets/icons/marquee/ieee.png'
import isoIcon from '../../assets/icons/marquee/iso.png'
import awsIcon from '../../assets/icons/marquee/awss.png'
import googleIcon from '../../assets/icons/marquee/google.png'

export const hero = {
  eyebrow: 'DIGITAL PRODUCTS. ENTERPRISE SOLUTIONS. INTELLIGENT TECHNOLOGY.',
  title: 'Engineering\nWhat’s Next.',
  image: heroBg,
  video: heroVideo,
  actions: [
    { label: 'Explore Our Services', to: '/services' },
    { label: 'View Our Projects', to: '/our-work', variant: 'outline' },
  ],
}

export const partners = [
  { label: 'HIPAA Compliant', image: hipaaIcon },
  { label: 'WCAG 2.2 Compliant', image: wcagIcon },
  { label: 'Section 508 Compliant', image: section508Icon },
  { label: 'GDPR Compliant', image: gdprIcon },
  { label: 'SLASSCOM', image: slasscomIcon },
  { label: 'IEEE Member', image: ieeeIcon },
  { label: 'ISO Certified', image: isoIcon },
  { label: 'AWS Partner', image: awsIcon },
  { label: 'Cloud Partner', image: googleIcon },
]

export const intro = {
  title: 'Technology that moves\n{business forward.}',
  paragraphs: [
    'At Pentarix, we bridge the gap between complex business challenges and elegant technological solutions. Our team of expert engineers and designers creates robust digital ecosystems that drive growth and operational excellence.',
    'We don’t just build software; we architect the future. From intelligent automation to high-performance enterprise systems, we provide the technical foundation for your digital transformation journey.',
  ],
}

export const digitalCard = {
  icon: digitalPlatformsIcon,
  title: 'Digital Platforms',
  text: 'Crafting immersive user experiences and scalable web architectures that engage and convert at scale.',
  checks: ['Custom SaaS Development', 'Mobile Ecosystems', 'Cloud-Native Apps'],
  image: digitalPlatformsImage,
}

export const smallCards = [
  { id: 'enterprise', icon: enterpriseIcon, title: 'Enterprise Systems', text: 'Robust, secure backbones for complex global organizations.', to: '/our-work', image: enterpriseSystemsImage },
  { id: 'ai', icon: aiIcon, title: 'AI & Automation', text: 'Intelligent algorithms that optimize processes and predict trends.', to: '/research', image: aiAutomationImage },
  { id: 'industry', icon: industryIcon, title: 'Industry Solutions', text: 'Vertical-specific tools for Retail, FinTech, and Logistics sectors.', to: '/services/industry-specific' },
]

export const cloudCard = {
  title: 'Cloud & Infrastructure',
  text: 'Seamless migration and high-availability architecture for the modern web.',
  tags: ['Kubernetes', 'Terraform', 'DevOps'],
  image: cloudInfrastructureImage,
}

export const excellence = {
  eyebrow: 'Core Competency',
  title: 'Software Engineering Excellence.',
  image: excellenceImage,
  text: 'Quality is not an afterthought; it’s engineered into the very foundation of our process. We follow rigorous CI/CD practices and clean code principles to ensure every line of code serves a purpose and scales gracefully.',
  points: [
    { number: '01', title: 'Architectural Integrity', text: 'Decoupled systems that allow for modular growth and easy maintenance.' },
    { number: '02', title: 'Performance First', text: 'Optimizing for latency and throughput from day one of development.' },
  ],
}

export const labs = {
  eyebrow: 'Pentarix Labs',
  title: 'The frontier of\nintelligence.',
  linkLabel: 'Read Paper',
  linkTo: '/research',
  items: [
    { tag: 'RESEARCH_001', title: 'Neural Networks for Logistics', text: 'Optimizing last-mile delivery routes using custom-trained ML models that adapt to real-world traffic patterns.' },
    { tag: 'RESEARCH_002', title: 'Blockchain Security Layers', text: 'Developing novel consensus protocols for private enterprise blockchains ensuring maximum data integrity.' },
    { tag: 'RESEARCH_003', title: 'Cognitive UI Frameworks', text: 'Interfaces that respond to user emotional states and intent using biometric feedback and vision AI.' },
  ],
}

export const work = {
  eyebrow: 'Our Work',
  title: 'Impactful solutions.',
  linkLabel: 'View All',
  linkTo: '/our-work',
  projects: [
    { id: 'dms', to: '/our-work/distribution-system', badge: 'ENTERPRISE', title: 'Distribution Management System', text: 'Streamline distribution and inventory management.', image: dmsImage, className: 'project--large project--dashboard' },
    { id: 'pos', to: '/our-work/pos-system', tag: 'RETAIL TECH', title: 'Nex-Gen POS', text: 'Cloud-based retail operating system with real-time sync.', image: posImage, className: 'project--pos' },
    { id: 'hrms', to: '/our-work/hris', tag: 'HR TECH', title: 'Lumina HRMS', text: 'Full-cycle human capital management with AI performance predictive tools.', image: hrmsImage, className: 'project--hrms' },
  ],
}

export const cta = {
  title: 'Let’s build\n{what’s next.}',
  text: 'Ready to transform your digital landscape? Our experts are ready to architect your next success story.',
  button: { label: 'Start a Conversation', to: '/contact' },
}
