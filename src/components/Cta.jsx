import Button from './Button'
import RichText from './RichText'

const layouts = {
  healthcare: {
    section: 'bg-[#f7f7f7] px-6 py-20 text-center max-sm:px-4 max-sm:py-14',
    content: 'mx-auto max-w-[1280px]',
    title: 'mx-auto mb-7 max-w-[800px] text-[clamp(30px,4vw,48px)] font-semibold uppercase leading-[1.15] tracking-[-.025em] text-[#242529]',
    description: 'mx-auto mb-12 max-w-[720px] text-[15px] leading-[1.7] text-[#858993]',
    actions: 'flex flex-wrap items-center justify-center gap-6',
    buttonSize: 'lg',
  },
  home: {
    section: 'border-t border-[#eeeeee] px-5 py-[96px] pb-[112px] text-center max-md:py-20 max-sm:px-4 max-sm:py-16',
    content: 'mx-auto max-w-[1344px]',
    title: 'mb-4 whitespace-pre-line text-[clamp(36px,4.2vw,50px)] font-semibold uppercase leading-[1.02] tracking-[-0.035em] text-[#202020]',
    description: 'mx-auto mb-6 max-w-[500px] text-[12px] leading-[1.7] text-[#888888]',
    actions: 'justify-center',
    buttonSize: 'lg',
  },
  about: {
  section: 'py-24 max-sm:py-16',
  content: 'mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4',
  card: 'mx-auto w-full rounded-[28px] bg-[#191919] px-8 py-[72px] text-center text-white max-sm:px-5 max-sm:py-14',
  title: 'mb-4 whitespace-pre-line text-[clamp(32px,4.2vw,48px)] font-semibold leading-[1.1] tracking-[-.03em] text-white',
  description: 'mx-auto mb-6 max-w-[700px] text-[clamp(15px,1.5vw,19px)] leading-[1.65] text-[#a5a5a5]',
  actions: 'flex justify-center gap-4 max-sm:flex-wrap',
  buttonSize: 'lg',
},
  projects: {
    section: 'py-24 max-sm:py-16',
    content: 'mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4',
    card: 'rounded-[28px] bg-[linear-gradient(135deg,#141414_40%,#3a1d08)] px-6 py-[72px] text-center text-white',
    title: '',
    description: '',
    actions: 'ip-actions',
  },
  services: {
    section: 'py-24 max-sm:py-16',
    content: 'mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4',
    card: 'rounded-[28px] bg-[linear-gradient(135deg,#fff3ea,#fff_60%,#ffeee0)] px-6 py-[72px] text-center',
    title: '',
    description: '',
    actions: 'ip-actions',
  },
  insights: {
    section: 'py-24 text-center max-sm:py-16',
    content: 'mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4',
    title: 'ip-title',
    titleStyle: { fontSize: 'clamp(32px,4.2vw,48px)' },
    description: '',
    actions: 'ip-actions',
    actionsStyle: { justifyContent: 'center' },
  },
  research: {
    section: 'py-24 text-center max-sm:py-16',
    content: 'mx-auto max-w-[1440px] max-lg:px-6 max-sm:px-4',
    title: 'ip-title',
    titleStyle: { fontSize: 'clamp(30px,4vw,44px)' },
    description: '',
    actions: 'ip-actions',
    actionsStyle: { justifyContent: 'center' },
  },
}

export default function Cta({ data, variant = 'home' }) {
  const layout = layouts[variant === 'industry' ? 'healthcare' : variant]
  const actions = data.actions || [data.button]
  const cardClassName = layout.card
  const titleClassName = layout.title
  const descriptionClassName = layout.description
  const actionsClassName = layout.actions

  return (
    <section className={layout.section} id={variant === 'home' ? 'contact-cta' : undefined}>
      <div className={layout.content}>
        <div
          className={cardClassName}
          style={variant === 'about' ? { background: 'radial-gradient(ellipse at top right, rgba(70, 39, 20, .35), transparent 45%), #191919' } : undefined}
        >
          {data.eyebrow && <p className="mb-5 text-[11px] font-bold uppercase tracking-[.22em] text-[#ff6a00]">{data.eyebrow}</p>}
          <h2 className={titleClassName} style={layout.titleStyle}>
            <RichText text={data.title} />
          </h2>
          <p className={descriptionClassName}>{data.text}</p>
          <div className={actionsClassName} style={layout.actionsStyle}>
            {actions.map(({ label, ...button }) => (
              <Button key={label} size={layout.buttonSize} {...button}>{label}</Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
