import { GraduationCap, Users, Check, FileText, Layers, Shield, Database, Building, Settings, RefreshCw, FileCheck, Monitor } from '../../../components/Icons'
import schoolImage from '../../../assets/images/projects/school.png'
import posImage from '../../../assets/images/projects/pos.png'
import hotelImage from '../../../assets/images/projects/hotel.jpg'
import medicalImage from '../../../assets/images/projects/doctor.jpg'

export const hero = {
  eyebrow: 'Education Technology · School Administration',
  title: 'School Management System',
  subtitle: 'Integrated School Administration & Academic Management Solution',
  description: 'A unified digital platform for academic records, daily operations, and institutional administration.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'All Projects', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const image = schoolImage

export const overview = {
  title: 'A clearer view of school life and administration.',
  paragraphs: [
    'Pentarix designed a comprehensive web-based School Management System to digitalize and streamline academic and administrative operations. The platform centralizes student information, staff records, attendance monitoring, examination management, academic reporting, and institutional documentation within a secure, unified digital environment.',
    'Designed to support large educational institutions, the system is structured to manage over 4,000 student records and more than 250 staff profiles. Automated academic workflows, role-based access control, centralized information management, and digital reporting capabilities help simplify school administration, improve data accuracy, and enhance operational efficiency.',
  ],
}

export const meta = [
  { label: 'Category', value: 'Education Technology' },
  { label: 'Focus', value: 'School Administration' },
  { label: 'Designed Scale', value: '4,000+ students · 250+ staff' },
  { label: 'Designed by', value: 'Pentarix (PVT) Ltd' },
]

export const featuresIntro = {
  eyebrow: 'Key Features',
  title: 'Academic and administrative work, all connected.',
  text: 'Manage student journeys, school operations, reporting, and institutional records from one secure platform.',
}

export const groups = [
  {
    id: 'academic',
    title: 'Student & Academic Management',
    text: 'Organize student records and simplify academic processes throughout the school year.',
    features: [
      { Icon: GraduationCap, title: 'Student Management', text: 'Centralize student profiles, personal information, academic records, achievements, and educational history.' },
      { Icon: FileText, title: 'Examination Management', text: 'Enter examination marks digitally or in bulk, with automated totals, averages, and class rankings.' },
      { Icon: FileCheck, title: 'Academic Report Generation', text: 'Prepare printable term test report books and examination performance records automatically.' },
      { Icon: Layers, title: 'Student Promotion Management', text: 'Support structured grade promotion processes for advancing students between academic years.' },
    ],
  },
  {
    id: 'school-operations',
    title: 'People & Daily School Operations',
    text: 'Coordinate staff, attendance, leave, and long-term student records.',
    features: [
      { Icon: Users, title: 'Staff Management', text: 'Manage teacher and non-academic staff profiles, responsibilities, and institutional records.' },
      { Icon: Check, title: 'Attendance Management', text: 'Track student and staff attendance, leave categories, substitute attendance entry, and attendance reports.' },
      { Icon: RefreshCw, title: 'Holiday & Leave Management', text: 'Manage public holidays, school vacation periods, and staff leave classifications.' },
      { Icon: Database, title: 'Alumni Management', text: 'Securely archive and maintain records for students who have completed their education.' },
    ],
  },
  {
    id: 'administration',
    title: 'Administration, Documents & Security',
    text: 'Keep official documents, access, and institutional information under control.',
    features: [
      { Icon: FileText, title: 'Document Generation', text: 'Generate official school documents, including Character Certificates and Leaving Certificates.' },
      { Icon: Shield, title: 'Role-Based User Management', text: 'Control access for principals, administrators, teachers, non-academic staff, and students.' },
      { Icon: Monitor, title: 'Reporting & Record Management', text: 'Centralize administrative reports, attendance summaries, examination records, and academic information.' },
      { Icon: Settings, title: 'Data Security & Backup', text: 'Support secure access controls, structured data management, and planned daily backup capabilities.' },
    ],
  },
]

export const impact = {
  eyebrow: 'Project Impact',
  title: 'Helping schools spend less time on manual administration.',
  text: 'The School Management System integrates essential academic and operational activities into one digital platform. It supports more efficient attendance management, streamlined examination processing, accurate student recordkeeping, and faster preparation of official documentation.',
  followup: 'By reducing repetitive administrative tasks and improving information access, the solution helps institutions maintain reliable records and make informed decisions. Its modular, scalable architecture supports long-term institutional growth, secure data management, and future digital enhancements.',
  points: ['More efficient attendance and exams', 'Reliable, centralized student records', 'Faster official document preparation', 'A foundation for future school growth'],
  credit: 'Designed by Pentarix (PVT) Ltd',
  tagline: 'Making school administration more connected and efficient.',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Advanced Point of Sale (POS) System', tag: 'Retail', to: '/our-work/pos-system', image: posImage },
    { title: 'Hotel and Cottage Booking Website', tag: 'Hospitality', to: '/our-work/hotel-booking', image: hotelImage },
    { title: 'University Medical Center Management System', tag: 'Healthcare', to: '/our-work/medical-center-system', image: medicalImage },
  ],
}

export const cta = {
  title: 'Ready to bring your school operations together?',
  text: 'Let’s build a secure, scalable platform for your academic and administrative workflows.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}
