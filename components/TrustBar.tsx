const trust = [
  { icon: '✦', label: 'DHA Licensed' },
  { icon: '★', label: '5★ Google Rating' },
  { icon: '◈', label: '2,400+ Treatments' },
  { icon: '✦', label: 'Board-Certified Doctors' },
  { icon: '◈', label: 'Same-Day Appointments' },
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-white overflow-hidden">
      <div className="flex flex-wrap justify-center sm:justify-between items-center px-6 sm:px-10 lg:px-16">
        {trust.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 py-4 px-4 sm:px-6 border-r border-white/10 last:border-r-0"
          >
            <span className="text-rose-gold text-xs">{item.icon}</span>
            <span className="text-[12px] font-medium tracking-widest uppercase text-white/80 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
