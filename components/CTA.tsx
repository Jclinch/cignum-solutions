//components\CTA.tsx
"use client"
export default function CTA({title, action}: {title:string, action:() => void}) {
  return (
    <div className="bg-[var(--color-card-bg)] p-8 rounded-lg text-center shadow-lg border border-[var(--color-border)]">
      <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">{title}</h2>
      <button
        onClick={action}
        className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-lg font-bold hover:bg-[var(--color-accent)] transition"
      >
        Request a Demo
      </button>
    </div>
  )
}
