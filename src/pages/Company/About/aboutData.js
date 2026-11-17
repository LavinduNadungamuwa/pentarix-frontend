import heroImage from '../../../assets/images/company/about/img1.png'
import journeyImage from '../../../assets/images/company/about/img2.png'
import innovationImage from '../../../assets/images/company/about/img3.png'
import creativityIcon from '../../../assets/icons/company/mission.png'
import collaborationIcon from '../../../assets/icons/company/vision.png'
import valueIcon from '../../../assets/icons/company/ques.png'

export const hero = {
  eyebrow: 'About Pentarix',
  title: 'Turning Today’s Spark into\nTomorrow’s {Success.}',
  description: 'Pentarix brings together creative thinking, modern technology, and collaboration to turn business challenges into practical digital solutions.',
  image: heroImage,
}

export const journey = {
  title: 'A Journey Shaped by\n{Purpose.}',
  image: journeyImage,
  paragraphs: [
    'Our journey began with a shared vision to make technology more meaningful, accessible, and impactful. Through curiosity, collaboration, and a commitment to quality, we build reliable digital experiences that help businesses move forward.',
    'We don’t just build software; we architect solutions that scale with your ambitions, ensuring that every line of code adds tangible value to your organization’s mission.',
  ],
  stats: [
    { value: '150+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Retention' },
  ],
}

export const values = {
  eyebrow: 'Our Values',
  title: 'The Pillars of Our Success',
  items: [
    { icon: creativityIcon, title: 'Creativity', text: 'Exploring ideas and finding practical ways to solve complex challenges with fresh perspectives.' },
    { icon: collaborationIcon, title: 'Collaboration', text: 'Combining different perspectives and working closely with clients to achieve shared goals.' },
    { icon: valueIcon, title: 'Lasting Value', text: 'Building secure, scalable solutions that support long-term growth and sustainable performance.' },
  ],
}

export const innovation = {
  eyebrow: 'Innovation Hub',
  title: 'Bridging Academia &\nIndustry.',
  text: 'Our strategic partnership with Sabaragamuwa University of Sri Lanka serves as a powerhouse for innovation. Through shared labs and research grants, we’re developing next-generation AI and blockchain solutions that redefine possibilities.',
  image: innovationImage,
  link: { label: 'Learn about our R&D Initiatives', to: '/research' },
}

export const cta = {
  title: 'Let’s Build What’s Next.',
  text: 'Ready to transform your vision into a high-impact digital reality? Get in touch with our team of experts today.',
  actions: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'View Case Studies', to: '/our-work', variant: 'dark', className: '!bg-[#333333] hover:!bg-[#454545]' },
  ],
}
