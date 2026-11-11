import Button from './Button'
import RichText from './RichText'

/**
 * Reusable hero section used on every page.
 * Copy comes from each page's data file (see RichText for the {highlight} / \n markup).
 *
 * Props
 *  - variant:     'page' (light, default) | 'home' (viewport-height, dark, background image)
 *  - eyebrow:     small orange label above the title
 *  - title:       string. Use "\n" for a line break and {braces} to highlight words in orange
 *                 e.g. "Build the {Future}\nWith Us."
 *  - description: paragraph text under the title
 *  - actions:     [{ label, to | href, variant, size }]  -> rendered with <Button />
 *  - image:       background image URL (home variant)
 *  - video:       background video URL (home variant)
 *  - scrollHint:  show the animated "SCROLL" indicator (home variant)
 *  - aside:       node rendered in a second column (image, card, extra text...)
 *  - children:    extra content under the actions
 *  - className / id: passed to the <section>
 */
export default function Hero({
  variant = 'page',
  eyebrow,
  title,
  description,
  actions = [],
  image,
  video,
  scrollHint = false,
  aside,
  children,
  className = '',
  id,
}) {
  const isHome = variant === 'home'

  return (
    <section
      id={id}
      className={`relative w-full ${isHome ? 'flex min-h-[560px] h-[calc(100svh-56px)] items-center bg-[#0b0b0b] bg-cover bg-right text-white max-md:max-h-none' : 'bg-white py-[clamp(44px,5vw,72px)]'} ${className}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {isHome && video && (
        <video
          className="absolute inset-0 size-full object-cover"
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      )}
      {isHome && <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.55)_55%,rgba(0,0,0,.25)),radial-gradient(ellipse_at_80%_30%,rgba(255,106,0,.18),transparent_55%)]" />}

      <div className={`relative mx-auto w-full max-w-[1920px] ${isHome ? 'px-[clamp(48px,11.67vw,224px)] pb-0 pt-8 max-md:px-[clamp(24px,11.67vw,48px)]' : 'px-[clamp(48px,11.67vw,224px)] max-md:px-6'} ${aside ? 'grid grid-cols-[1.3fr_1fr] items-center gap-16 max-lg:grid-cols-1' : ''}`}>
        <div className="max-w-[896px]">
          {eyebrow && <span className="font-medium uppercase tracking-[.3em] text-[#ff6a00]">{eyebrow}</span>}
          <h1 className={`max-w-[680px] font-bold leading-[1.1] text-[#000000] ${isHome ? 'mt-5 mb-6 max-w-[780px] text-[clamp(48px,6vw,96px)] leading-[1.05] text-white' : 'my-3 mb-4 text-[clamp(30px,4.67vw,72px)]'}`}>
            <RichText text={title} />
          </h1>
          {description && <p className={`max-w-[540px] leading-[1.75] ${isHome ? 'text-[clamp(15px,1.1vw,18px)] text-white/80' : 'text-[clamp(15px,1.1vw,18px)] text-[#9a9a9a]'}`}>{description}</p>}

          {actions.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {actions.map(({ label, ...btn }) => (
                <Button key={label} {...btn}>
                  {label}
                </Button>
              ))}
            </div>
          )}

          {children}
        </div>

        {aside}
      </div>

      {scrollHint && (
        <div className="hero-scroll-hint absolute bottom-8 left-[clamp(24px,11.67vw,224px)] flex flex-col gap-3 text-[10px] tracking-[.2em] text-white/60" aria-hidden="true">
          <span>SCROLL</span>
          <i className="hero-scroll-line h-10 w-px bg-white" />
          <style>{`
            @keyframes hero-scroll-breathe {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            .hero-scroll-hint { animation: hero-scroll-breathe 2.5s ease-in-out infinite; }
            .hero-scroll-line { animation: hero-scroll-line-breathe 2.5s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .hero-scroll-hint, .hero-scroll-line { animation: none; }
              .hero-scroll-line { background-color: #fff; opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </section>
  )
}
