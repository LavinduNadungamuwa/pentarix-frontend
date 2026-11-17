import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import Button from '../../../components/Button'
import RichText from '../../../components/RichText'
import { pageContainer } from '../../../components/pageLayout'
import { hero, founders, people, knowledge, cta } from './mindsData'

const heading = 'whitespace-pre-line text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.25] tracking-[-.025em] text-[#242424]'
const body = 'text-[16px] leading-[1.8] text-[#858993]'

function FounderCard({ name, image, focus, text }) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-[#ededed] bg-white p-5 text-center max-sm:p-4">
      <img src={image} alt={name} loading="lazy" className="aspect-[1.2/1] w-full rounded-[20px] object-cover object-top" />
      <h3 className="mt-5 text-[17px] font-bold leading-[1.4] text-[#272727]">{name}</h3>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[.1em] text-[#ff6a00]">Co-Founder</p>
      <div className="mt-7 border-t border-[#f4f4f4] pt-5">
        <h4 className="text-[13px] font-semibold leading-[1.5] text-[#343434]">{focus}</h4>
        <p className="mt-2 text-[12px] leading-[1.7] text-[#9297a1]">{text}</p>
      </div>
    </article>
  )
}

export default function Minds() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} contentClassName="[&>div]:max-w-none">
        <img src={hero.image} alt="The Pentarix team sharing ideas around a meeting table" width="1448" height="1086" fetchPriority="high" className="mt-14 aspect-[2.4/1] w-full rounded-[28px] object-cover shadow-[0_14px_28px_rgba(0,0,0,.06)] max-sm:mt-9 max-sm:aspect-[1.4/1]" />
      </Hero>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={pageContainer}>
          <h2 className={`text-center ${heading}`}>{founders.title}</h2>
          <div aria-hidden="true" className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#ff6a00]" />
          <div className="mt-14 grid grid-cols-5 gap-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {founders.people.map((person) => <FounderCard key={person.name} {...person} />)}
          </div>
        </div>
      </section>

      <section className="py-24 max-sm:py-16">
        <div className={`${pageContainer} grid grid-cols-[.85fr_1.15fr] items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <div>
            <h2 className={heading}><RichText text={people.title} /></h2>
            <p className={`mt-7 max-w-[440px] ${body}`}>{people.text}</p>
            <ul className="mt-7 flex flex-wrap items-center gap-6">
              {people.values.map(({ icon, label }) => <li key={label} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.08em] text-[#424242]"><img src={icon} alt="" className="size-5 object-contain" />{label}</li>)}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 pb-8 max-sm:gap-3">
            {people.images.map(({ src, alt }, index) => <img key={src} src={src} alt={alt} width="1024" height="1024" loading="lazy" className={`aspect-[1.15/1] w-full rounded-[24px] object-cover ${index === 1 ? 'mt-8' : ''}`} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <img src={knowledge.image} alt="Pentarix engineer mentoring a colleague through a software project" width="1122" height="1402" loading="lazy" className="aspect-[.85/1] w-full rounded-[32px] object-cover shadow-[0_18px_28px_rgba(0,0,0,.15)]" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#ff6a00]">{knowledge.eyebrow}</p>
            <h2 className={`mt-6 ${heading}`}><RichText text={knowledge.title} /></h2>
            <p className={`mt-7 ${body}`}>{knowledge.text}</p>
            <Button to={knowledge.link.to} variant="link" arrow className="mt-9">{knowledge.link.label}</Button>
            <p className="mt-9 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.05em] text-[#a4a4a4]"><img src={knowledge.badge.icon} alt="" className="size-4 object-contain opacity-60" />{knowledge.badge.label}</p>
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
