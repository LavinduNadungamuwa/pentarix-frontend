import { ShoppingCart, Building, Database, FileCheck, Layers, Users, Star, Settings, Globe, Truck, Check, Shield, FileText, Monitor, RefreshCw, ShoppingBag } from '../../../components/Icons'
import posImage from '../../../assets/images/projects/pos.png'
import hotelImage from '../../../assets/images/projects/hotel.jpg'
import medicalImage from '../../../assets/images/projects/doctor.jpg'
import economicImage from '../../../assets/images/projects/economic.jpg'

export const hero = {
  eyebrow: 'Retail Technology · Business Automation',
  title: 'Advanced Point of Sale (POS) System',
  subtitle: 'Smart Retail, Inventory & Business Management Solution',
  description: 'A centralized retail platform connecting checkout, inventory, purchasing, customers, and financial operations.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'All Projects', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const image = posImage

export const overview = {
  title: 'Retail operations with a clearer point of control.',
  paragraphs: [
    'Pentarix has designed an advanced Point of Sale (POS) and Retail Management System that brings together sales processing, inventory control, purchasing, customer management, supplier operations, and financial administration within a centralized digital platform.',
    'Developed for the complex operational requirements of supermarkets, retail chains, and growing businesses, the system goes beyond traditional billing with multi-branch management, batch-level inventory tracking, barcode-based sales, automated promotions, loyalty programs, online ordering, delivery management, and detailed financial monitoring.',
    'The solution is designed to streamline everyday retail operations, improve inventory accuracy, enhance customer experiences, and provide businesses with greater visibility and control.',
  ],
}

export const meta = [
  { label: 'Category', value: 'Retail Technology' },
  { label: 'Focus', value: 'POS & Inventory Management' },
  { label: 'Capabilities', value: 'Omnichannel Retail Operations' },
  { label: 'Developed by', value: 'Pentarix (PVT) Ltd' },
]

export const featuresIntro = {
  eyebrow: 'Key Features',
  title: 'More than checkout: a complete retail operating system.',
  text: 'Connect sales, stock, customers, suppliers, and financial workflows across every branch and channel.',
}

export const groups = [
  {
    id: 'checkout',
    title: 'Checkout & Product Sales',
    text: 'Make transactions fast and accurate across products, units, and payment types.',
    features: [
      { Icon: ShoppingCart, title: 'Advanced POS & Billing', text: 'Support efficient checkout, barcode-based product identification, price calculations, discounts, tax handling, and invoice generation.' },
      { Icon: FileCheck, title: 'Barcode & Weighing Scale Integration', text: 'Work with product and electronic weighing-scale barcodes, including weight-based and price-encoded identification.' },
      { Icon: Layers, title: 'Multi-Unit Product Management', text: 'Handle products sold by units, packs, cartons, kilograms, grams, liters, and other measurement units.' },
      { Icon: Check, title: 'Multiple Payment Methods', text: 'Support cash, card, bank transfer, cheque, customer wallet, and online payment gateway workflows.' },
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory & Branches',
    text: 'Maintain stock visibility and traceability across retail locations.',
    features: [
      { Icon: Building, title: 'Multi-Branch Management', text: 'Manage retail locations, sales counters, employees, and branch-specific inventory centrally.' },
      { Icon: Database, title: 'Smart Inventory Management', text: 'Track stock availability and batches, record damaged or expired products, and reconcile inventory.' },
      { Icon: RefreshCw, title: 'Stock Transfers & Reservations', text: 'Coordinate inter-branch transfers and reserve online inventory to help prevent overselling.' },
      { Icon: FileText, title: 'Price History & Transaction Tracking', text: 'Maintain historical product prices, stock movements, and transaction traceability.' },
    ],
  },
  {
    id: 'customers',
    title: 'Suppliers & Customer Relationships',
    text: 'Manage purchasing, customer accounts, and repeat business in one place.',
    features: [
      { Icon: Users, title: 'Supplier & Purchasing Management', text: 'Manage supplier records, purchase orders, goods received notes, payments, outstanding balances, and purchase returns.' },
      { Icon: ShoppingBag, title: 'Customer & Credit Management', text: 'Maintain customer profiles, credit limits, account balances, transaction histories, and payment tracking.' },
      { Icon: Star, title: 'Loyalty & Rewards Management', text: 'Support loyalty cards, point accumulation, redemption rules, and configurable reward programs.' },
      { Icon: RefreshCw, title: 'Sales & Purchase Returns', text: 'Coordinate return workflows, refunds, supplier returns, and related inventory adjustments.' },
    ],
  },
  {
    id: 'commerce',
    title: 'Promotions, Omnichannel & Finance',
    text: 'Coordinate digital orders, fulfillment, cash handling, and financial oversight.',
    features: [
      { Icon: Settings, title: 'Advanced Promotions & Discounts', text: 'Configure percentage discounts, fixed-price promotions, promo codes, bill-level offers, and Buy X Get Y campaigns.' },
      { Icon: Globe, title: 'Online Ordering & E-Commerce Support', text: 'Connect online shopping carts and digital orders with pickup options and customer delivery workflows.' },
      { Icon: Truck, title: 'Delivery & Order Fulfillment', text: 'Coordinate order picking, packing, delivery assignments, order status, and fulfillment.' },
      { Icon: Monitor, title: 'Cash Register Management', text: 'Manage cashier sessions, opening and closing balances, cash reconciliation, denominations, and transactions.' },
      { Icon: FileText, title: 'Expense & Financial Management', text: 'Track operational expenses, cash withdrawals, supplier payments, and financial transactions.' },
      { Icon: Shield, title: 'Role-Based Access Control', text: 'Set dedicated permissions for administrators, managers, cashiers, customers, suppliers, and delivery agents.' },
    ],
  },
]

export const impact = {
  eyebrow: 'Project Impact',
  title: 'Helping retailers run every channel with greater control.',
  text: 'The Advanced POS System helps retail businesses reduce manual administration, improve stock accuracy, streamline checkout, and strengthen financial accountability.',
  followup: 'By connecting sales, inventory, purchasing, customer relationships, loyalty programs, and online ordering, the solution supports efficient daily operations and better-informed decisions. Its flexible architecture can scale with additional outlets, products, customers, and sales channels.',
  points: ['More accurate stock control', 'Smoother checkout operations', 'Connected retail channels', 'Scalable multi-outlet management'],
  credit: 'Developed by Pentarix (PVT) Ltd',
  tagline: 'Connecting every part of modern retail.',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Hotel and Cottage Booking Website', tag: 'Hospitality', to: '/our-work/hotel-booking', image: hotelImage },
    { title: 'University Medical Center Management System', tag: 'Healthcare', to: '/our-work/medical-center-system', image: medicalImage },
    { title: 'Economic Center Management System', tag: 'Public Sector', to: '/our-work/economic-center-system', image: economicImage },
  ],
}

export const cta = {
  title: 'Ready to give your retail business\nmore control?',
  text: 'Let’s connect your checkout, inventory, customers, and sales channels in one system.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}
