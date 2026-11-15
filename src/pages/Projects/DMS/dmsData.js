import { Database, Building, ShoppingCart, Truck, Users, FileText, FileCheck, RefreshCw, Shield, Monitor, Layers, Settings, Check } from '../../../components/Icons'
import dmsImage from '../../../assets/images/projects/dashboard.png'
import posImage from '../../../assets/images/projects/pos.png'
import chatbotImage from '../../../assets/images/projects/dms.png'
import schoolImage from '../../../assets/images/projects/school.png'

export const hero = {
  eyebrow: 'Distribution Management · Business Automation',
  title: 'Distribution Agency Management System',
  subtitle: 'Integrated Distribution, Inventory & Sales Management Solution',
  description: 'A centralized platform connecting inventory, purchasing, sales, warehouse operations, deliveries, and payments.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'All Projects', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const image = dmsImage

export const overview = {
  title: 'Bringing distribution operations together.',
  paragraphs: [
    'Pentarix designed a comprehensive Distribution Agency Management System to streamline and digitalize the daily operations of distribution businesses. The solution brings inventory management, supplier purchasing, sales orders, warehouse operations, deliveries, customer payments, and sales representative commissions into one centralized platform.',
    'Designed to replace manual record keeping and disconnected spreadsheets, the system enables businesses to manage distribution processes with greater accuracy, transparency, and operational control. Mobile-accessible sales and delivery functions, automated inventory monitoring, credit management, and centralized reporting provide an integrated way to manage distribution networks.',
  ],
}

export const meta = [
  { label: 'Category', value: 'Enterprise Software' },
  { label: 'Focus', value: 'Distribution Management' },
  { label: 'Capabilities', value: 'Inventory, Sales & Delivery' },
  { label: 'Developed by', value: 'Pentarix (PVT) Ltd' },
]

export const featuresIntro = {
  eyebrow: 'Key Features',
  title: 'One connected system for the distribution lifecycle.',
  text: 'Coordinate products, people, orders, deliveries, and payments through a unified operational platform.',
}

export const groups = [
  {
    id: 'inventory',
    title: 'Inventory & Suppliers',
    text: 'Maintain accurate stock and supplier records across warehouses and purchasing activities.',
    features: [
      { Icon: Database, title: 'Inventory Management', text: 'Manage products, warehouse stock, carton and unit quantities, and inventory monitoring in one place.' },
      { Icon: Building, title: 'Supplier Management', text: 'Keep supplier information, purchasing records, outstanding balances, and payment tracking organized.' },
      { Icon: Layers, title: 'Warehouse Management', text: 'Monitor stock availability, prepare and pack orders, and keep inventory updated.' },
      { Icon: RefreshCw, title: 'Expiry & Stock Alerts', text: 'Receive automated notifications for low stock, product expiry dates, shortages, and overdue payments.' },
    ],
  },
  {
    id: 'sales-delivery',
    title: 'Sales & Delivery',
    text: 'Connect customer orders with fulfillment, delivery assignments, and accurate invoices.',
    features: [
      { Icon: ShoppingCart, title: 'Sales Order Management', text: 'Place, process, and track digital orders through mobile-accessible interfaces for sales representatives.' },
      { Icon: Truck, title: 'Delivery Management', text: 'Assign deliveries and track order fulfillment, partial deliveries, and failed delivery outcomes.' },
      { Icon: Users, title: 'Customer & Shop Management', text: 'Manage customer and shop details, routes, purchasing history, and credit information centrally.' },
      { Icon: FileCheck, title: 'Invoice Management', text: 'Generate invoices based on delivered quantities for accurate sales and payment records.' },
    ],
  },
  {
    id: 'finance-control',
    title: 'Payments & Business Control',
    text: 'Track financial activity, sales teams, permissions, and business performance.',
    features: [
      { Icon: FileText, title: 'Payment & Credit Management', text: 'Record cash, cheque, and bank-transfer payments, verify payments, and track outstanding balances.' },
      { Icon: Users, title: 'Sales Representative Management', text: 'Track sales and assigned customers, with commission calculations based on completed deliveries.' },
      { Icon: Shield, title: 'Role-Based Access', text: 'Provide dedicated system access for administrators, sales representatives, and delivery personnel.' },
      { Icon: Monitor, title: 'Reporting & Analytics', text: 'View centralized reports for sales performance, inventory, deliveries, customer balances, and commissions.' },
    ],
  },
]

export const impact = {
  eyebrow: 'Project Impact',
  title: 'From fragmented records to coordinated distribution.',
  text: 'The system improves operational efficiency by replacing fragmented manual processes and centralizing essential business activities. It gives teams greater visibility into stock availability, customer orders, delivery progress, outstanding payments, and overall sales performance.',
  followup: 'By improving coordination between warehouse staff, sales representatives, delivery teams, and management, the platform supports faster decisions, better inventory control, financial transparency, and organized distribution operations. Its scalable structure can grow with additional products, customers, routes, suppliers, users, and warehouse locations.',
  points: ['Greater inventory visibility', 'Coordinated sales and deliveries', 'Clearer payment tracking', 'Flexible business expansion'],
  credit: 'Developed by Pentarix (PVT) Ltd',
  tagline: 'Connecting every step of distribution operations.',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'AI-Powered Customer Support Chatbot', tag: 'Artificial Intelligence', to: '/our-work/ai-chatbot', image: chatbotImage },
    { title: 'School Management System', tag: 'Education', to: '/our-work/school-management', image: schoolImage, imagePosition: 'top' },
    { title: 'Advanced Point of Sale (POS) System', tag: 'Retail', to: '/our-work/pos-system', image: posImage },
  ],
}

export const cta = {
  title: 'Ready to streamline\nyour distribution operations?',
  text: 'Let’s connect your inventory, sales, warehouse, and delivery workflows in one system.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}
