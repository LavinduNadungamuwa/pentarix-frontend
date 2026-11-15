import { Heart, Users, FileText, FileCheck, Check, Database, Shield, Monitor, Layers, RefreshCw } from '../../../components/Icons'
import medicalImage from '../../../assets/images/projects/doctor.jpg'
import distributionImage from '../../../assets/images/projects/dashboard.png'
import hrmsImage from '../../../assets/images/projects/hrms.png'
import economicImage from '../../../assets/images/projects/economic.jpg'

export const hero = {
  eyebrow: 'Healthcare Technology · Digital Transformation',
  title: 'University Medical Center Management System',
  subtitle: 'Smart Healthcare Administration & Digital Medical Records Solution',
  description: 'A centralized digital platform for campus patient records, appointments, consultations, and medical center operations.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'All Projects', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const image = medicalImage

export const overview = {
  title: 'A more organized approach to campus healthcare.',
  paragraphs: [
    'Pentarix developed a University Medical Center Management System designed to digitalize and streamline healthcare administration within a university environment. The platform aims to simplify patient registration, medical record management, appointment scheduling, consultations, and daily medical center operations through a centralized digital solution.',
    'Designed to support university students, academic staff, non-academic employees, and healthcare professionals, the system provides a structured approach to managing medical center activities. Replacing traditional paper-based processes with organized digital workflows is intended to enhance administrative efficiency, improve information accessibility, and support campus healthcare services.',
  ],
}

export const meta = [
  { label: 'Category', value: 'Healthcare Technology' },
  { label: 'Focus', value: 'University Medical Center' },
  { label: 'Capabilities', value: 'Digital Records & Administration' },
  { label: 'Developed by', value: 'Pentarix (PVT) Ltd' },
]

export const featuresIntro = {
  eyebrow: 'Key Features',
  title: 'Connected healthcare administration for campus communities.',
  text: 'Organize patient information, care workflows, and medical center operations through one digital system.',
}

export const groups = [
  {
    id: 'patient-records',
    title: 'Patients & Medical Records',
    text: 'Keep patient information and care histories organized for authorized healthcare personnel.',
    features: [
      { Icon: Users, title: 'Patient Management', text: 'Maintain centralized profiles for students, university staff, and other eligible patients, including personal and medical information.' },
      { Icon: FileText, title: 'Electronic Medical Records', text: 'Manage patient histories, consultation records, diagnoses, and treatment information digitally.' },
      { Icon: RefreshCw, title: 'Medical History Tracking', text: 'Provide authorized healthcare personnel with structured access to previous consultations, treatments, and records.' },
      { Icon: FileCheck, title: 'Medical Reports & Documentation', text: 'Organize medical reports, treatment documentation, and relevant healthcare records.' },
    ],
  },
  {
    id: 'care-delivery',
    title: 'Appointments & Care Delivery',
    text: 'Coordinate visits and support consistent documentation throughout patient consultations.',
    features: [
      { Icon: Check, title: 'Appointment Management', text: 'Organize medical appointment scheduling, booking, and consultation tracking.' },
      { Icon: Users, title: 'Doctor & Medical Staff Management', text: 'Manage healthcare professionals, staff details, consultation assignments, and availability.' },
      { Icon: Heart, title: 'Consultation Management', text: 'Record patient visits, medical observations, diagnoses, and treatment recommendations digitally.' },
      { Icon: FileText, title: 'Prescription Management', text: 'Maintain electronic prescription records and medication information linked to consultations.' },
    ],
  },
  {
    id: 'operations',
    title: 'Medical Center Operations',
    text: 'Support day-to-day administration, stock oversight, and secure operational reporting.',
    features: [
      { Icon: Database, title: 'Medicine & Inventory Management', text: 'Track medical supplies, available medicines, stock levels, and inventory records.' },
      { Icon: Shield, title: 'Role-Based Access Control', text: 'Control access for medical officers, healthcare staff, administrators, and other authorized users.' },
      { Icon: Monitor, title: 'Administrative Dashboard', text: 'Monitor patient visits, appointments, medical center activities, and administrative information centrally.' },
      { Icon: Layers, title: 'Reporting & Analytics', text: 'Provide healthcare administration reports to support medical center planning and operational decisions.' },
    ],
  },
]

export const impact = {
  eyebrow: 'Project Impact',
  title: 'Supporting more connected campus healthcare services.',
  text: 'The system brings patient records, medical consultations, appointment management, and operational information together in a unified digital environment.',
  followup: 'Structured medical records and digital workflows are intended to reduce administrative workloads, improve record accessibility, minimize information duplication, and support continuity of patient care. The platform provides a foundation for future enhancements and integration with additional university healthcare services.',
  points: ['More accessible patient records', 'Less routine administration', 'Reduced information duplication', 'A foundation for expanded services'],
  credit: 'Developed by Pentarix (PVT) Ltd',
  tagline: 'Making campus healthcare information easier to manage.',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Economic Center Management System', tag: 'Public Sector', to: '/our-work/economic-center-system', image: economicImage },
    { title: 'Human Resource Information System', tag: 'Enterprise', to: '/our-work/hris', image: hrmsImage },
    { title: 'Distribution Agency Management System', tag: 'Enterprise', to: '/our-work/distribution-system', image: distributionImage, imagePosition: 'top' },
  ],
}

export const cta = {
  title: 'Ready to modernize your medical center?',
  text: 'Let’s organize patient information and healthcare administration in one digital solution.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}
