import hospitalBuidling from "../../assets/Hospital building.png";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="bg-gradient-to-r from-[#CAB2FC] to-[#E2D6FB] w-full h-full relative flex items-center rounded-3xl overflow-hidden min-h-[205px] shadow-sm">
      {/* Image pinned to the right edge with full original size so it is not squeezed */}
      <div className="absolute right-0 bottom-0 pointer-events-none flex justify-end">
        <Image
          src={hospitalBuidling}
          alt="Hospital Building"
          priority
        />
      </div>

      {/* Text content layered on top of the image */}
      <div className="p-7 md:p-8 relative z-10 w-full">
        <h1 className="text-3xl sm:text-[32px] font-bold text-[#17123F] tracking-tight leading-tight">
          Find healthcare <br className="hidden sm:inline" /> near you
        </h1>
        <p className="text-[#3A3168] mt-2 text-sm font-normal max-w-sm">
          Search hospitals, doctors and services across our connected network.
        </p>

        {/* Search bar */}
        <div className="mt-5 max-w-md">
          <div className="bg-white w-full py-1.5 pl-4 pr-1.5 rounded-full flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B5C9E"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Hospitals, doctors, specialties..."
                className="w-full bg-transparent text-sm text-[#17123F] placeholder-[#8A81AC] focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="bg-[#5B38B8] hover:bg-[#4E2EB2] transition-colors text-white py-2 px-5 rounded-full text-xs font-semibold shrink-0 cursor-pointer shadow-sm"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



