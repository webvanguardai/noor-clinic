const trust = [
  { icon: '✦', label: 'DHA License No. 4721-001' },
  { icon: '★', label: '4.9★ · 340 Google Reviews' },
  { icon: '◈', label: '2,400+ Procedures Performed' },
  { icon: '✦', label: 'ABHRS Board-Certified Physicians' },
  { icon: '◈', label: 'Members: ISAPS · DASIL' },
]

export default function TrustBar() {
  return (
    <div className="bg-surface border-y border-border overflow-hidden">
      <div className="flex flex-wrap justify-center sm:justify-between items-center px-6 sm:px-10 lg:px-16">
        {trust.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 py-4 px-4 sm:px-6 border-r border-border last:border-r-0"
          >
            <span className="text-gold text-xs">{item.icon}</span>
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-text-secondary whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
