import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import Button from '../../../components/Button'
import RichText from '../../../components/RichText'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { pageContainer } from '../../../components/pageLayout'
import { hero, journey, values, innovation, cta } from './aboutData'

const heading = 'whitespace-pre-line text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.22] tracking-[-.025em] text-[#242424]'
const body = 'text-[16px] leading-[1.8] text-[#858993]'

export default function About() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero variant="centered" className="[&>div>div>span]:block [&>div>div>span]:text-center" eyebrow={hero.eyebrow} title={hero.title} description={hero.description}>
        <img src={hero.image} alt="Pentarix team collaborating on a digital project" width="1448" height="1086" fetchPriority="high" className="mx-auto mt-14 aspect-[4/3] w-full max-w-[800px] rounded-[28px] object-cover shadow-[0_14px_30px_rgba(0,0,0,.06)] max-sm:mt-9" />
      </Hero>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <img src={journey.image} alt="Bright Pentarix office with workstations and collaborative spaces" width="1086" height="1448" loading="lazy" className="aspect-[.9/1] w-full rounded-[28px] object-cover shadow-[0_14px_20px_rgba(0,0,0,.12)]" />
          <div>
            <h2 className={heading}><RichText text={journey.title} /></h2>
            <div className={`mt-7 space-y-5 ${body}`}>{journey.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              {journey.stats.map(({ value, label }) => <div key={label} className="flex flex-col"><dt className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#626975]">{label}</dt><dd className="-order-1 mb-2 text-[32px] font-bold leading-tight text-[#ff6a00]">{value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-24 max-sm:py-16">
        <div className={pageContainer}>
          <div className="text-center"><p className="text-[11px] font-semibold uppercase tracking-[.3em] text-[#ff6a00]">{values.eyebrow}</p><h2 className={`mt-4 ${heading}`}>{values.title}</h2></div>
          <div className="mt-14 grid grid-cols-3 gap-7 max-md:grid-cols-1">{values.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}</div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#ff6a00]">{innovation.eyebrow}</p>
            <h2 className={`mt-6 ${heading}`}><RichText text={innovation.title} /></h2>
            <p className={`mt-7 ${body}`}>{innovation.text}</p>
            <Button to={innovation.link.to} variant="link" arrow className="mt-10">{innovation.link.label}</Button>
          </div>
          <img src={innovation.image} alt="Pentarix engineers collaborating on research and development" width="1086" height="1448" loading="lazy" className="aspect-[.95/1] w-full rounded-[28px] object-cover shadow-[0_18px_28px_rgba(0,0,0,.14)]" />
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
