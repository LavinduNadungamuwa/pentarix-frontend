import { Cpu, Database, Bot, FileText, BookOpen, RefreshCw, Globe, Headset, Layers, Shield, Cloud, Check } from '../../../components/Icons'
import chatbotImage from '../../../assets/images/projects/dms.png'
import schoolImage from '../../../assets/images/projects/school.png'
import posImage from '../../../assets/images/projects/pos.png'
import hotelImage from '../../../assets/images/projects/hotel.jpg'

export const hero = {
  eyebrow: 'Conversational AI · Customer Support Automation',
  title: 'AI-Powered Customer Support Chatbot',
  subtitle: 'Intelligent Customer Support Automation Using RAG',
  description: 'Context-aware, knowledge-based assistance that helps businesses support customers across channels.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'All Projects', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const image = chatbotImage

export const overview = {
  title: 'Knowledgeable support, available across channels.',
  paragraphs: [
    'Pentarix designed an advanced AI-powered Customer Support Chatbot that leverages Retrieval-Augmented Generation (RAG) to deliver intelligent, context-aware, and knowledge-based customer assistance. The solution combines artificial intelligence with an organization’s knowledge base to answer customer inquiries, product and service questions, frequently asked questions, and basic troubleshooting requests.',
    'Designed to modernize customer support operations, the chatbot enables businesses to provide automated assistance through web-based chat interfaces and SMS communication. By retrieving relevant information from organizational knowledge sources and generating natural-language responses, the solution aims to improve response accuracy, reduce repetitive workloads, and provide a consistent customer support experience.',
  ],
}

export const meta = [
  { label: 'Category', value: 'Artificial Intelligence' },
  { label: 'Focus', value: 'Customer Support Automation' },
  { label: 'Technology', value: 'Retrieval-Augmented Generation' },
  { label: 'Developed by', value: 'Pentarix (PVT) Ltd' },
]

export const featuresIntro = {
  eyebrow: 'Key Features',
  title: 'Helpful conversations grounded in business knowledge.',
  text: 'Connect trusted information to customer conversations, automate common requests, and involve people when needed.',
}

export const groups = [
  {
    id: 'knowledge',
    title: 'Knowledge & Understanding',
    text: 'Find relevant information and understand what customers need before responding.',
    features: [
      { Icon: Database, title: 'Retrieval-Augmented Generation (RAG)', text: 'Retrieve relevant information from organizational knowledge sources to generate context-aware responses.' },
      { Icon: Cpu, title: 'Natural Language Understanding', text: 'Interpret customer questions and conversational intent to provide meaningful assistance.' },
      { Icon: Bot, title: 'Intelligent Response Generation', text: 'Deliver automated, knowledge-based responses to customer inquiries.' },
      { Icon: FileText, title: 'Knowledge Base Integration', text: 'Use centralized business information to support accurate and consistent customer communication.' },
    ],
  },
  {
    id: 'conversation',
    title: 'Customer Conversations',
    text: 'Create continuous, convenient support and connect customers with a person when needed.',
    features: [
      { Icon: BookOpen, title: 'Automated FAQ Handling', text: 'Answer frequently asked questions without requiring human intervention.' },
      { Icon: RefreshCw, title: 'Context-Aware Conversations', text: 'Maintain conversational context to support natural, continuous interactions.' },
      { Icon: Globe, title: 'Multi-Channel Support', text: 'Support customer interactions through website chat interfaces and SMS.' },
      { Icon: Headset, title: 'Human Agent Escalation', text: 'Direct complex or unresolved inquiries to human support representatives.' },
    ],
  },
  {
    id: 'operations',
    title: 'Support Operations & Trust',
    text: 'Give teams tools to manage exceptions, improve service, and grow support capacity.',
    features: [
      { Icon: RefreshCw, title: 'Fallback Response Management', text: 'Provide guided responses when relevant information is unavailable or a query cannot be resolved.' },
      { Icon: Layers, title: 'Conversation Logging & Analytics', text: 'Record customer interactions to support monitoring, analysis, and continuous improvement.' },
      { Icon: Shield, title: 'Security & Access Control', text: 'Include data protection, secure communication, and access management considerations.' },
      { Icon: Cloud, title: 'Scalable Support Architecture', text: 'Accommodate increasing customer interaction volumes as business requirements grow.' },
    ],
  },
]

export const impact = {
  eyebrow: 'Project Impact',
  title: 'Making customer support more responsive and consistent.',
  text: 'The chatbot helps organizations improve customer engagement by delivering timely, consistent, and relevant assistance. RAG-based knowledge retrieval and intelligent response generation make better use of existing information resources while reducing workloads from repetitive inquiries.',
  followup: 'The solution supports continuous customer assistance, improved operational efficiency, and more effective allocation of human support resources. Its adaptable architecture allows for future knowledge-base expansion, AI improvements, and additional business integrations.',
  points: ['Timely, consistent customer assistance', 'Less repetitive support work', 'Better use of business knowledge', 'Flexible path for future integrations'],
  credit: 'Developed by Pentarix (PVT) Ltd',
  tagline: 'Turning trusted knowledge into helpful conversations.',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'School Management System', tag: 'Education', to: '/our-work/school-management', image: schoolImage, imagePosition: 'top' },
    { title: 'Advanced Point of Sale (POS) System', tag: 'Retail', to: '/our-work/pos-system', image: posImage },
    { title: 'Hotel and Cottage Booking Website', tag: 'Hospitality', to: '/our-work/hotel-booking', image: hotelImage },
  ],
}

export const cta = {
  title: 'Ready to make customer support\nmore intelligent?',
  text: 'Let’s connect your business knowledge to helpful, always-available customer conversations.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}
