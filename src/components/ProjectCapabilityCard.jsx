import { Check } from './Icons'

export default function ProjectCapabilityCard({ icon, title, text, points = [] }) {
  return (
    <article className="min-h-[300px] rounded-[28px] border border-[#efefef] bg-white p-8 max-sm:min-h-0 max-sm:p-7">
      <span className="mb-6 inline-grid size-12 place-items-center rounded-2xl bg-[#fff5eb]">
        <img src={icon} alt="" className="size-8 object-contain" />
      </span>
      <h3 className="whitespace-pre-line text-[20px] font-bold leading-[1.35] text-[#252525]">{title}</h3>
      <p className="mt-5 text-[14px] leading-[1.65] text-[#9297a1]">{text}</p>
      {points.length > 0 && (
        <ul className="mt-5 space-y-2 text-[13px] leading-[1.5] text-[#9297a1]">
          {points.map((point) => <li key={point} className="flex items-start gap-2"><Check size={14} className="mt-0.5 shrink-0 text-[#ff6a00]" />{point}</li>)}
        </ul>
      )}
    </article>
  )
}
