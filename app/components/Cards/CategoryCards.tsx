import Link from "next/link";

export default function CategoryCards() {
  const categories = [
    {
      title: "Hospitals",
      subtitle: "Find nearby hospitals",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6030C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
        </svg>
      ),
    },
    {
      title: "Doctors",
      subtitle: "Browse doctors",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6030C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 3v5a7.5 7.5 0 0 0 15 0V3" />
          <path d="M12 15.5v3a3.5 3.5 0 1 0 7 0v-2.5" />
          <circle cx="19" cy="16" r="2" />
        </svg>
      ),
    },
    {
      title: "Medical Records",
      subtitle: "View your records",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6030C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        </svg>
      ),
    },
    {
      title: "Specialities",
      subtitle: "Explore specialities",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6030C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.title}
          href={cat.href}
          className="bg-white hover:bg-slate-50 transition-all rounded-2xl py-3 px-4 shadow-sm border border-slate-100 flex items-center justify-between group"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#F5EFFE] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              {cat.icon}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#1E1648] group-hover:text-[#5B38B8] transition-colors truncate">
                {cat.title}
              </p>
              <p className="text-[11px] text-[#7E789B] mt-0.5 truncate">{cat.subtitle}</p>
            </div>
          </div>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9E95BE"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-0.5 transition-transform shrink-0 ml-1.5"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
