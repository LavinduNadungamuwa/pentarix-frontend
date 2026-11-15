import { Users, Building, FileText, Layers, Database, Check, Monitor, RefreshCw, Settings, Shield, Mail } from '../../../components/Icons'
import hrmsImage from '../../../assets/images/projects/hrms.png'
import chatbotImage from '../../../assets/images/projects/dms.png'
import schoolImage from '../../../assets/images/projects/school.png'
import distributionImage from '../../../assets/images/projects/dashboard.png'

export const hero = {
  eyebrow: 'HR Management · Business Automation',
  title: 'Human Resource Information System',
  subtitle: 'Enterprise HR & Workforce Management Solution',
  description: 'A centralized platform to simplify, automate, and modernize human resource operations.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'All Projects', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const image = hrmsImage

export const overview = {
  title: 'Simplifying the way organizations manage people.',
  paragraphs: [
    'Pentarix developed a comprehensive Human Resource Information System (HRIS) designed to simplify, automate, and modernize human resource operations. The platform provides a centralized digital environment for managing employee information, payroll, attendance, leave, performance, and workforce administration.',
    'Designed with scalability and flexibility in mind, the system streamlines complex HR processes, reduces manual administrative work, and improves organizational efficiency. With integrated biometric attendance, automated workflows, and employee self-service capabilities, the platform provides businesses with an efficient approach to managing their workforce.',
  ],
}

export const meta = [
  { label: 'Category', value: 'Enterprise Software' },
  { label: 'Focus', value: 'HR & Workforce Management' },
  { label: 'Capabilities', value: 'Automation & Employee Self-Service' },
  { label: 'Developed by', value: 'Pentarix (PVT) Ltd' },
]

export const featuresIntro = {
  eyebrow: 'Key Features',
  title: 'Every part of workforce management, connected.',
  text: 'A flexible HR platform that brings employee records, daily workflows, and workforce insights together.',
}

export const groups = [
  {
    id: 'people',
    title: 'People & Organization',
    text: 'Keep employee information, teams, and career journeys organized in one place.',
    features: [
      { Icon: Users, title: 'Employee Management', text: 'Centralized management of employee profiles, personal information, employment records, and documentation.' },
      { Icon: Building, title: 'Team Management', text: 'Manage teams, reporting structures, team leaders, and employee assignments.' },
      { Icon: FileText, title: 'Employee Onboarding', text: 'Guide new employees through structured onboarding processes and documentation management.' },
      { Icon: Layers, title: 'Performance Management', text: 'Support employee performance evaluations, goal tracking, and review management.' },
    ],
  },
  {
    id: 'workflows',
    title: 'Time, Pay & Employee Services',
    text: 'Streamline routine employee and HR workflows with accessible digital services.',
    features: [
      { Icon: Database, title: 'Payroll Management', text: 'Streamline salary processing, allowances, deductions, and payroll administration.' },
      { Icon: RefreshCw, title: 'Attendance & Time Tracking', text: 'Monitor attendance with fingerprint, facial recognition, card-based, and web-based attendance support.' },
      { Icon: Check, title: 'Leave Management', text: 'Manage digital leave requests, approval workflows, leave balances, and employee leave history.' },
      { Icon: Monitor, title: 'Employee Self-Service', text: 'Give employees convenient access to personal records, attendance information, payroll details, and leave requests.' },
    ],
  },
  {
    id: 'operations',
    title: 'Flexible Work & Administration',
    text: 'Coordinate approvals, support flexible work, and give administrators clear oversight.',
    features: [
      { Icon: Settings, title: 'Work-From-Home Management', text: 'Coordinate remote-work requests, scheduling, approvals, and tracking.' },
      { Icon: FileText, title: 'Expense Management', text: 'Manage employee expense submissions, reimbursement requests, and approvals.' },
      { Icon: Shield, title: 'Reporting & Administration', text: 'Provide centralized dashboards, workforce reports, and administrative controls.' },
      { Icon: Mail, title: 'Automated Notifications', text: 'Send timely alerts for important HR activities and approval processes.' },
    ],
  },
]

export const impact = {
  eyebrow: 'Project Impact',
  title: 'Creating a more connected and efficient workforce.',
  text: 'The HRIS helps organizations improve HR efficiency, minimize manual processes, and maintain consistent workforce records. Its centralized approach supports better coordination between employees, HR departments, and management while improving access to essential HR information.',
  followup: 'Its modular design supports future enhancements and customization, allowing businesses to adapt the solution as operational requirements evolve.',
  points: ['More efficient HR operations', 'Less manual administration', 'Consistent workforce records', 'Adaptable modular platform'],
  credit: 'Developed by Pentarix (PVT) Ltd',
  tagline: 'Making workforce management simpler and more connected.',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Distribution Agency Management System', tag: 'Distribution & Logistics', to: '/our-work/distribution-system', image: distributionImage, imagePosition: 'top' },
    { title: 'AI-Powered Customer Support Chatbot', tag: 'Artificial Intelligence', to: '/our-work/ai-chatbot', image: chatbotImage },
    { title: 'School Management System', tag: 'Education', to: '/our-work/school-management', image: schoolImage, imagePosition: 'top' },
  ],
}

export const cta = {
  title: 'Ready to modernize your HR operations?',
  text: 'Let’s build a workforce management solution that fits the way your organization works.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}
