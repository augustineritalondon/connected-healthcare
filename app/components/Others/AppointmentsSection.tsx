import Image from "next/image";
import Link from "next/link";
import saveALifeImg from "../../assets/save-a-life.png";
import doctorPhoneImg from "../../assets/doctor.png";

export default function AppointmentsSection() {
  return (
    <div className="flex flex-col gap-6 h-full justify-between">
      {/* Upcoming Appointments Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="text-[#6030C1]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-[#1E1648]">Upcoming Appointments</h3>
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

        <div className="flex items-center gap-3.5">
          <div className="w-16 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-100">
            <Image
              src={saveALifeImg}
              alt="Save a life hospital"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-[#1E1648] truncate">Save a life hospital</h4>
            <p className="text-[10px] text-[#7E789B] truncate mt-1 flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-[#7E789B] shrink-0">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>38, Uyo Street, off Stadium Road, Rumuomasi</span>
            </p>

            <div className="flex items-center justify-between mt-2.5">
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#5B38B8] bg-[#F4EEFD] px-2.5 py-1 rounded-full">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span>Today • 10:30 am</span>
              </span>

              <button
                type="button"
                className="text-[10px] font-semibold text-[#5B38B8] hover:bg-[#F4EEFD] border border-[#5B38B8]/30 px-3 py-1 rounded-full transition-colors cursor-pointer"
              >
                Reschedule
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Find Doctor Banner */}
      <div className="bg-gradient-to-r from-[#7A44DD] to-[#4C2DA8] rounded-3xl p-8 text-white relative  flex items-center justify-between flex-1 min-h-[120px] shadow-sm relative">
        <div className="absolute top-0 left-0 rounded-3xl">
          <svg width="362" height="153" className="rounded-3xl" viewBox="0 0 362 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_28_843"  maskUnits="userSpaceOnUse" x="0" y="0" width="362" height="153">
            <rect width="361.164" height="152.058" rx="12" fill="#6246B5"/>
            </mask>
            <g mask="url(#mask0_28_843)">
            <path d="M17.9008 78C28.6563 76.8 38.7076 63.5 42.3889 57L-44.5199 -3L-41.1588 78H17.9008Z" fill="#6E51BE"/>
            <path d="M41.4286 56.5C71.3905 62.1 86.8836 28.5 90.8849 11L-44.5198 -6.49997V77C-14.1738 80.6 5.89683 68.5 12.1389 62C19.8214 53.2 34.8664 54.6667 41.4286 56.5Z" fill="#755AC3"/>
            <path d="M100.488 4.00002C110.091 -5.09089 117.294 -4.99998 123.056 -6.99998H-45V78H-14.75C-2.07383 78.8 8.77776 68.5 13.0992 61C18.3809 48 25.1032 45.5 33.746 44C55.3532 44 61.2751 32.3334 64.4762 24C78.8809 23 95.2063 9.00002 100.488 4.00002Z" fill="#8863D5"/>
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-[62%]">
          <h4 className="text-sm sm:text-base lg:text-xl font-bold leading-tight">
            Find a doctor easily <br /> from your phone
          </h4>
          <button
            type="button"
            className="mt-3 bg-white hover:bg-slate-100 text-[#542BB6] text-xs font-semibold py-1.5 px-4 rounded-full inline-flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <span>Make an Appointment</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute right-0 bottom-0 -top-4 w-full flex items-end justify-end pointer-events-none">
          <Image
            src={doctorPhoneImg}
            alt="Doctor with phone"
            className="h-full w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
