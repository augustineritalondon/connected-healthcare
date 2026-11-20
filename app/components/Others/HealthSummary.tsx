

import Link from "next/link";

export default function HealthSummary() {
  const items = [
    {
      title: "Medical Records",
      subtitle: "2 records",
      bgColor: "bg-[#F3EEFE]",
      iconColor: "text-[#693CC8]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      title: "Next Appointment",
      subtitle: "Apr 15, 2026 • 10:30 AM",
      bgColor: "bg-[#F3EEFE]",
      iconColor: "text-[#693CC8]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      title: "Health Status",
      subtitle: "Good",
      bgColor: "bg-[#EAFBF3]",
      iconColor: "text-[#12B76A]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-[#1E1648]">Your Health Summary</h2>
        <Link
          href="#"
          className="text-xs font-semibold text-[#5B38B8] hover:text-[#452796] flex items-center gap-1 transition-colors"
        >
          <span>View All</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0`}>
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#1E1648] leading-tight truncate">{item.title}</p>
              <p className="text-[11px] text-[#7E789B] mt-1 leading-tight truncate">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
