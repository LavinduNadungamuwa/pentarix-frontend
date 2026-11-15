import { Link } from 'react-router-dom'
import Hero from '../../../components/Hero'
import Button from '../../../components/Button'
import RichText from '../../../components/RichText'
import { ArrowRight, Check } from '../../../components/Icons'
import economicImage from '../../../assets/images/projects/economic.jpg'
import { hero, overview, meta, featuresIntro, groups, audience, impact, more, cta } from './economicCenterData'

export default function EconomicCenter() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero {...hero} contentClassName="max-w-[1100px] grid-cols-[1.8fr_1fr]" titleClassName="max-w-[900px]" aside={<div className="overflow-hidden rounded-[28px] shadow-[0_18px_36px_rgba(0,0,0,.16)]"><img src={economicImage} alt="Economic Center Management System" className="aspect-[4/3] w-full object-cover" /></div>} />

      {/* Overview */}
      <section className="border-t border-[#f0f0ee] py-16 max-sm:py-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-lg:px-6 max-sm:gap-6 max-sm:px-4">
          <div>
            <span className="text-[8px] font-bold uppercase tracking-[.18em] text-[#ff6a00]">Project Overview</span>
            <h2 className="mt-3 max-w-[420px] text-[clamp(25px,2.5vw,36px)] font-semibold leading-[1.2] tracking-[-.025em] text-[#202124]"><RichText text={overview.title} /></h2>
          </div>
          <div className="grid gap-4 text-[14px] leading-[1.8] text-[#8b9099] max-sm:text-[13px]">
            {overview.paragraphs.map((p, i) => (
              <p key={i}>
                {p.before}
                {p.strong && <b className="font-semibold text-[#34363a]">{p.strong}</b>}
                {p.after}
              </p>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1440px] grid-cols-4 gap-4 max-lg:grid-cols-2 max-lg:px-6 max-sm:mt-8 max-sm:grid-cols-1 max-sm:px-4">
          {meta.map(({ label, value }) => (
            <div key={label} className="transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none rounded-2xl border border-[#efefea] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,.04)]">
              <small className="text-[8px] font-bold uppercase tracking-[.15em] text-[#ff6a00]">{label}</small>
              <b className="mt-1.5 block text-[14px] font-semibold text-[#202124]">{value}</b>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className="mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#ff6a00]">{featuresIntro.eyebrow}</span>
            <h2 className="mt-3 text-[clamp(22px,2.5vw,32px)] font-semibold tracking-[-.02em] text-[#222]"><RichText text={featuresIntro.title} /></h2>
            <p className="mx-auto mt-2 max-w-[560px] text-[12px] leading-[1.7] text-[#9a9a9a]">{featuresIntro.text}</p>
          </div>

          <div className="mt-14 grid gap-14 max-sm:mt-10 max-sm:gap-10">
            {groups.map((g, gi) => (
              <div key={g.id}>
                <div className="mb-6 flex items-start gap-3">
                    <b className="grid size-8 place-items-center rounded-full bg-[#202124] text-[10px] text-white">0{gi + 1}</b>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#202124]">{g.title}</h3>
                    <p className="mt-1 max-w-[560px] text-[13px] leading-[1.6] text-[#9a9a9a]">{g.text}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                  {g.features.map(({ Icon, title, text }) => (
                    <article
                      key={title}
                      className="rounded-[24px] border border-[#efefea] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-sm:p-5"
                    >
                      <span className="mb-4 inline-grid size-9 place-items-center rounded-xl bg-[#fff0e6] text-[#ff6a00]"><Icon size={17} /></span>
                      <h4 className="mb-2 text-[15px] font-semibold text-[#202124]">{title}</h4>
                      <p className="text-[11px] leading-[1.7] text-[#92969e]">{text}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 text-center max-sm:py-14">
        <div className="mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4">
          <h2 className="text-[clamp(22px,2vw,28px)] font-semibold tracking-[-.02em] text-[#27282b]">{audience.title}</h2>
          <p className="mt-2 text-[14px] text-[#858b95]">{audience.text}</p>
          <div className="mx-auto mt-10 flex max-w-[900px] flex-wrap justify-center gap-3">
            {audience.items.map((a) => (
              <span key={a} className="flex items-center gap-2 rounded-full border border-[#eaeaea] bg-white px-6 py-3 text-[14px] font-semibold text-[#27282b] shadow-[0_2px_5px_rgba(0,0,0,.035)]">
                <Check size={13} strokeWidth={3} className="text-[#ff6a00]" />{a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="pb-20 max-sm:pb-14">
        <div className="mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4">
          <div
            className="grid grid-cols-[1.1fr_.9fr] gap-12 rounded-[32px] bg-[#171717] p-14 text-white shadow-[0_24px_60px_rgba(0,0,0,.18)] max-lg:grid-cols-1 max-sm:rounded-[24px] max-sm:p-7"
            style={{ backgroundImage: 'radial-gradient(ellipse at 0% 0%, rgba(255,106,0,.22), transparent 38%)' }}
          >
            <div>
              <span className="text-[8px] font-bold uppercase tracking-[.18em] text-[#ff6a00]">{impact.eyebrow}</span>
              <h2 className="my-4 text-[clamp(24px,2.8vw,36px)] font-semibold leading-[1.2] tracking-[-.02em]">{impact.title}</h2>
              <p className="text-[13px] leading-[1.8] text-[#a9a9a9]">{impact.text}</p>
              <p className="mt-8 text-[12px] font-semibold text-white">{impact.credit}</p>
              <p className="text-[11px] text-[#ff6a00]">{impact.tagline}</p>
            </div>
            <ul className="grid content-center gap-3">
              {impact.points.map((p) => (
                <li key={p} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.05] px-5 py-4 text-[12px] font-medium text-white/85">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#ff6a00]"><Check size={12} strokeWidth={3} /></span>{p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="bg-[#f8f8f8] py-20 max-sm:py-14">
        <div className="mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4">
          <h2 className="mb-8 text-[clamp(22px,2vw,28px)] font-semibold tracking-[-.02em] text-[#27282b]">{more.title}</h2>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {more.items.map((m) => (
              <Link
                key={m.title}
                to={m.to}
                className="group relative top-0 flex min-h-[240px] flex-col items-start rounded-[24px] border border-[#efefea] bg-cover bg-center p-7 text-white shadow-[0_8px_30px_rgba(0,0,0,.12)] transition-[top,box-shadow,border-color] duration-200 hover:-top-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.2)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transition-none"
                style={{ backgroundImage: `linear-gradient(180deg, transparent 42%, rgba(0,0,0,.32) 66%, rgba(0,0,0,.94) 100%), url("${m.image}")`, backgroundPosition: m.imagePosition || 'center' }}
              >
                <span className="rounded-full bg-black/45 px-2.5 py-1 text-[8px] font-medium text-white backdrop-blur-sm">{m.tag}</span>
                <div className="mt-auto flex w-full items-end justify-between gap-3 pt-16">
                  <h3 className="text-[18px] font-semibold text-white">{m.title}</h3>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#ff6a00] text-white transition group-hover:translate-x-1"><ArrowRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 max-sm:py-10">
        <div className="mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4">
          <div
            className="rounded-[56px] bg-[#171717] px-8 py-20 text-center text-white shadow-[0_28px_55px_rgba(0,0,0,.22)] max-sm:rounded-[36px] max-sm:px-5 max-sm:py-14"
            style={{ backgroundImage: 'radial-gradient(ellipse at 0% 0%, rgba(255,106,0,.22), transparent 32%), radial-gradient(ellipse at 100% 100%, rgba(255,106,0,.12), transparent 30%)' }}
          >
            <h2 className="mx-auto max-w-[1100px] text-[clamp(32px,4.2vw,58px)] font-semibold leading-[1.15] tracking-[-.03em]">{cta.title}</h2>
            <p className="mx-auto mt-6 max-w-[700px] text-[clamp(15px,1.5vw,19px)] leading-[1.65] text-[#a5a8b0]">{cta.text}</p>
            <div className="mt-12 flex flex-wrap justify-center gap-6 max-sm:mt-8 max-sm:gap-4">
              {cta.actions.map(({ label, ...btn }) => <Button key={label} size="lg" {...btn}>{label}</Button>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
