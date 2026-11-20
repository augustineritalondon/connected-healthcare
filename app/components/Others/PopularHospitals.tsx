import Image from "next/image";
import Link from "next/link";
import meridianImg from "../../assets/meridian.png";
import stMartinsImg from "../../assets/st-martins.png";
import cityCareImg from "../../assets/city-care.png";

export default function PopularHospitals() {
  const hospitals = [
    {
      name: "Meridian Hospital",
      rating: "4.7",
      reviews: "82 Reviews",
      address: "21 Igbokwe St - 0808 282 6030",
      status: "Open - 24 hours",
      isOpen: true,
      image: meridianImg,
    },
    {
      name: "St. Martins Hospital",
      rating: "4.7",
      reviews: "73 Reviews",
      address: "62 Stadium Rd - 0803 512 7890",
      status: "Closed",
      isOpen: false,
      image: stMartinsImg,
    },
    {
      name: "City Care Hospital",
      rating: "4.5",
      reviews: "65 Reviews",
      address: "12 Medical Rd - 0812 345 6789",
      status: "Open - 24 hours",
      isOpen: true,
      image: cityCareImg,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2">
          <div className="text-[#6030C1]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
            </svg>
          </div>
          <h3 className="text-sm font-bold text-[#1E1648]">Popular Hospitals</h3>
        </div>
        <Link
          href="#"
          className="text-xs font-semibold text-[#5B38B8] hover:text-[#452796] flex items-center gap-1 transition-colors"
        >
          <span>View all</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3.5">
        {hospitals.map((hosp) => (
          <div
            key={hosp.name}
            className="border border-slate-100 rounded-2xl  flex flex-col justify-between hover:shadow-md transition-shadow group bg-[#FCFBFF] overflow-hidden"
          >
            <div>
              <div className="w-full h-24 sm:h-28  overflow-hidden mb-2 relative">
                <Image
                  src={hosp.image}
                  alt={hosp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

            <div className="px-2.5 pt-2">
                <h4 className="text-xs font-bold text-[#1E1648] truncate">{hosp.name}</h4>

                {/* Stars & Reviews */}
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex items-center text-[#FDB022]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#1E1648] ml-0.5">{hosp.rating}</span>
                  <span className="text-[9.5px] text-[#7E789B]">({hosp.reviews})</span>
                </div>

                {/* Address */}
                <p className="text-[9.5px] text-[#7E789B] truncate mt-1 flex items-center gap-1">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#7E789B]">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="truncate">{hosp.address}</span>
                </p>
              </div>

              {/* Status tag */}
              <div className="mt-2.5 px-2.5 pb-2">
                <span
                  className={`inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                    hosp.isOpen
                      ? "bg-[#EAFBF3] text-[#079455]"
                      : "bg-[#FEECEB] text-[#D92D20]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      hosp.isOpen ? "bg-[#12B76A]" : "bg-[#F04438]"
                    }`}
                  />
                  <span>{hosp.status}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
