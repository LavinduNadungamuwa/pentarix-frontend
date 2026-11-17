import teamImage from '../../../assets/images/company/minds/img1.png'
import engineeringImage from '../../../assets/images/company/minds/img2.jpg'
import designImage from '../../../assets/images/company/minds/img3.jpg'
import mentoringImage from '../../../assets/images/company/minds/img4.png'
import person1 from '../../../assets/images/company/minds/person1.jpg'
import person2 from '../../../assets/images/company/minds/person2.jpg'
import person3 from '../../../assets/images/company/minds/person3.jpg'
import person4 from '../../../assets/images/company/minds/person4.jpg'
import person5 from '../../../assets/images/company/minds/person5.jpg'
import innovationIcon from '../../../assets/icons/company/mission.png'
import teamworkIcon from '../../../assets/icons/company/vision.png'
import qualityIcon from '../../../assets/icons/company/ques.png'

export const hero = {
  eyebrow: 'Our Team',
  title: 'The Minds Behind\n{Pentarix.}',
  description: 'A shared commitment to creating value, exploring new possibilities, and building technology that matters.',
  image: teamImage,
}

export const founders = {
  title: 'Different Strengths. One Shared Vision.',
  people: [
    { name: 'Asanka Perera', image: person1, focus: 'Vision & Leadership', text: 'Leading with purpose and creating lasting value.' },
    { name: 'Dilshan Silva', image: person2, focus: 'Innovation & Tech', text: 'Challenging limits and exploring meaningful solutions.' },
    { name: 'Nadeesha Jay', image: person3, focus: 'People & Teamwork', text: 'Supporting the people whose passion brings ideas to life.' },
    { name: 'Kasun Bandara', image: person4, focus: 'Trust & Excellence', text: 'Earning confidence through quality and reliable delivery.' },
    { name: 'Malith Fernando', image: person5, focus: 'Growth & Future', text: 'Learning continuously and shaping future possibilities.' },
  ],
}

export const people = {
  title: 'Our People, Our\nStrength.',
  text: 'Our engineers, designers, analysts, and creative problem-solvers combine their expertise through teamwork, knowledge sharing, and continuous learning.',
  images: [
    { src: engineeringImage, alt: 'Engineer developing software across multiple screens' },
    { src: designImage, alt: 'Designer exploring mobile interface ideas on a tablet' },
  ],
  values: [{ icon: innovationIcon, label: 'Innovation' }, { icon: teamworkIcon, label: 'Teamwork' }],
}

export const knowledge = {
  eyebrow: 'Knowledge Ecosystem',
  title: 'Empowering the Next\nGeneration.',
  text: 'We believe in sharing what we know. Beyond our internal projects, we actively mentor emerging talent and collaborate with academic partners to bridge the gap between learning and industry application.',
  image: mentoringImage,
  link: { label: 'Our Academic Partnerships', to: '/research' },
  badge: { icon: qualityIcon, label: 'Verified Excellence' },
}

export const cta = {
  title: 'Create Something\nMeaningful with Us.',
  text: 'Join our journey of innovation and build technology that truly matters for your business.',
  actions: [{ label: 'Contact Us', to: '/contact' }],
}
