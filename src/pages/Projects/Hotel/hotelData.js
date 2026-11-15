import { Monitor, Check, Building, Layers, Star, BookOpen, MapPin, Users } from '../../../components/Icons'
import hotelImage from '../../../assets/images/projects/hotel.jpg'
import hrmsImage from '../../../assets/images/projects/hrms.png'
import medicalImage from '../../../assets/images/projects/doctor.jpg'
import economicImage from '../../../assets/images/projects/economic.jpg'

export const hero = {
  eyebrow: 'Hospitality Technology · Online Booking',
  title: 'Hotel and Cottage Booking Website',
  subtitle: 'Modern Hospitality Website & Online Reservation Solution',
  description: 'A welcoming digital experience that showcases properties and makes reservations simple for guests.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'All Projects', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const image = hotelImage

export const overview = {
  title: 'A more inviting way to discover and book a stay.',
  paragraphs: [
    'Pentarix developed a modern, visually appealing, and user-friendly hotel and cottage booking website designed to enhance the digital presence of hospitality businesses and simplify the accommodation reservation process.',
    'The platform combines attractive property presentations, online booking capabilities, and customer reviews to create a seamless digital experience for guests. With responsive design and intuitive navigation, visitors can explore accommodation options, discover available facilities, and conveniently make reservations online.',
  ],
}

export const meta = [
  { label: 'Category', value: 'Hospitality Technology' },
  { label: 'Focus', value: 'Online Booking' },
  { label: 'Platform', value: 'Responsive Website' },
  { label: 'Developed by', value: 'Pentarix (PVT) Ltd' },
]

export const featuresIntro = {
  eyebrow: 'Key Features',
  title: 'A smoother journey from browsing to booking.',
  text: 'Help guests explore the property, find the right accommodation, and connect with the business.',
}

export const groups = [
  {
    id: 'guest-experience',
    title: 'Guest Experience & Reservations',
    text: 'Make it easy for guests to explore the property and plan their stay on any device.',
    features: [
      { Icon: Monitor, title: 'Modern & Responsive Design', text: 'Provide an attractive, mobile-friendly website optimized for desktops, tablets, and smartphones.' },
      { Icon: Check, title: 'Online Booking System', text: 'Give guests convenient accommodation reservation functionality through the website.' },
      { Icon: Building, title: 'Accommodation Showcase', text: 'Present rooms, cottages, facilities, and available amenities in detail.' },
      { Icon: Layers, title: 'Interactive Photo Gallery', text: 'Showcase engaging visual displays of the property and accommodation experience.' },
    ],
  },
  {
    id: 'property-information',
    title: 'Property Information & Engagement',
    text: 'Build guest confidence with clear information, reviews, and easy ways to get in touch.',
    features: [
      { Icon: Star, title: 'Customer Reviews', text: 'Present guest feedback to strengthen credibility and customer engagement.' },
      { Icon: BookOpen, title: 'User-Friendly Navigation', text: 'Help visitors browse intuitively, discover accommodation, and make reservations.' },
      { Icon: MapPin, title: 'Property Information', text: 'Make accommodation services, facilities, and location information easy to access.' },
      { Icon: Users, title: 'Customer Engagement', text: 'Encourage customer inquiries and direct bookings through an interactive digital experience.' },
    ],
  },
]

export const impact = {
  eyebrow: 'Project Impact',
  title: 'Helping hospitality businesses welcome guests online.',
  text: 'The platform helps hospitality businesses establish a professional digital presence, improve customer accessibility, and encourage direct accommodation bookings.',
  followup: 'By bringing property information, online reservations, and customer reviews together on one website, the solution supports guest confidence, customer engagement, and more efficient booking experiences.',
  points: ['A stronger digital presence', 'Convenient online reservations', 'Clearer property discovery', 'More guest confidence and engagement'],
  credit: 'Developed by Pentarix (PVT) Ltd',
  tagline: 'Making every stay easier to discover and book.',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'University Medical Center Management System', tag: 'Healthcare', to: '/our-work/medical-center-system', image: medicalImage },
    { title: 'Economic Center Management System', tag: 'Public Sector', to: '/our-work/economic-center-system', image: economicImage },
    { title: 'Human Resource Information System (HRIS)', tag: 'Enterprise', to: '/our-work/hris', image: hrmsImage },
  ],
}

export const cta = {
  title: 'Ready to make your property\neasier to book?',
  text: 'Let’s create a welcoming website that turns property discovery into a smooth reservation experience.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}
