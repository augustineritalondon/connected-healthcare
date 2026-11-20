"use client";

import Image from "next/image";
import Link from "next/link";
import stMartinsImg from "@/app/assets/st-martins.png";
import hospitalFacilitiesImg from "@/app/assets/hospital facilities.png";
import Navbar from "@/app/components/Navbar/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HospitalDetailPage() {

  const tabs = [
    {
      name: "Overview",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7024DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: "Doctors",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7024DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 3v5a7.5 7.5 0 0 0 15 0V3" />
          <path d="M12 15.5v3a3.5 3.5 0 1 0 7 0v-2.5" />
          <circle cx="19" cy="16" r="2" />
        </svg>
      ),
    },
    {
      name: "Facilities",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7024DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
        </svg>
      ),
    },
    {
      name: "Reviews",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7024DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen pb-12 font-sans">

      <div className="absolute right-0 z-0">
      <svg width="388" height="338" viewBox="0 0 388 338" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.16" cx="245" cy="93" r="245" fill="#B990F5"/>
      <circle opacity="0.19" cx="308" cy="94" r="170" fill="#C3A3F7"/>
      </svg>
    </div>

    
      {/* Top Header / Navbar */}
      <div className="relative z-10">
      <Navbar />
      </div>

      {/* Main Body */}
      <main className="px-8 flex flex-col gap-5 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs">
          <Link href="/hospitals" className="text-[#6534C9] font-medium hover:underline">
            Hospitals
          </Link>
          <span className="text-[#9E95BE]">›</span>
          <span className="text-[#1E1648] font-medium">Meridian Hospital</span>
        </div>

        {/* Hero Section with custom backdrop SVG shape and Hospital Information Card */}
        <div className="relative w-full">
          {/* Top Right \"Get Directions\" button */}
          <div className="absolute right-0 top-0 z-20">
            <button
              type="button"
              className="bg-[#542BB6] hover:bg-[#46219E] text-white text-xs font-semibold py-2 px-6 rounded-full shadow-sm transition-colors cursor-pointer"
            >
              Get Directions
            </button>
          </div>

          {/* Background curved SVG container */}
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[270px]">

            <svg className="absolute inset-0 w-full" preserveAspectRatio="none"  width="1079" height="270" viewBox="0 0 1079 270" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 26.2097V255C0 263.284 6.71572 270 15 270H766.855C826.903 270 859.463 245.94 872.409 228.589C875.93 223.871 881.188 220.348 887.076 220.348H924.929L1062.49 234.23C1071.33 235.122 1079 228.186 1079 219.306V84.3874C1079 76.1032 1072.28 69.3874 1064 69.3874H911.037C909.963 69.3874 908.873 69.265 907.821 69.0477C879.94 63.2859 866.416 68.8754 861.078 74.7348C858.706 77.3384 856.864 80.5973 853.88 82.4694C829.791 97.5859 784.866 108.64 766.855 48.8246C747.908 -14.1013 648.558 -3.14971 599.289 10.6371C597.93 11.0173 596.561 11.2097 595.15 11.2097H15C6.71573 11.2097 0 17.9255 0 26.2097Z" fill="#fefefeff"/>
            </svg>

            <div className="grid grid-cols-12 relative">
              <div className="col-span-9 grid grid-cols-12 gap-6">
                <div className="col-span-5 relative rounded-xl overflow-hidden">
                  <Image
                  src={stMartinsImg}
                  alt="Meridian Hospital"
                  // fill
                  className="object-cover w-full h-[260px] mt-3 rounded-xl"
                  priority
                />
                </div>
                <div className="col-span-7 flex items-center">
                  {/* Hospital Details Text Info */}
                  <div className="flex-1 flex flex-col justify-center pr-2 ">
                    <h1 className="text-2xl font-bold text-[#1E1648] tracking-tight mb-2">
                      Meridian Hospital
                    </h1>

                    {/* Rating & Distance */}
                    <div className="flex items-center gap-5 text-xs mb-3">
                      <div className="flex items-center gap-1">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#FDB022" className="text-[#FDB022]">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span className="font-bold text-[#1E1648]">4.6</span>
                        <span className="text-[#7E789B]">(73 Reviews)</span>
                      </div>

                      <div className="flex items-center gap-1 text-[#7E789B]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>1.2km away</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-[#7E789B] leading-relaxed mb-4 max-w-lg">
                      Meridian Hospital is a private hospital located in the neighbourhood of D-line in Port Harcourt, Rivers State, Nigeria. It was founded in 1996 in a rented ...
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {["General Medicine", "Surgery", "Cardiology", "Pediatrics"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#EFE8FC] text-[#6030C1] text-[11px] font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="col-span-3 relative">        
                {/* Hospital Information Card */}
                <div className="lg:absolute  lg:top-10 z-20 w-[80%] right-0 bg-white rounded-2xl p-4 shadow-md border border-slate-100 flex flex-col gap-3 mt-3 lg:mt-0">
                  <h3 className="font-bold text-xs lg:text-base text-[#1E1648]">Hospital information</h3>

                  <div className="flex flex-col gap-2.5 text-[10.5px]">
                    {/* Operating Hours */}
                    <div className="flex items-start gap-2">
                      <div className="text-[#6030C1] mt-0.5 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-[#7E789B] block text-[9.5px]">Operating Hours</span>
                        <span className="text-[#1E1648] font-medium">Mon - Sun: 24 Hours</span>
                      </div>
                    </div>

                    {/* Contact Number */}
                    <div className="flex items-start gap-2">
                      <div className="text-[#6030C1] mt-0.5 shrink-0">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-[#7E789B] block text-[9.5px]">Contact Number</span>
                        <span className="text-[#1E1648] font-medium">(+234) 808 282 6030</span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-2">
                      <div className="text-[#6030C1] mt-0.5 shrink-0">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-[#7E789B] block text-[9.5px]">Email</span>
                        <span className="text-[#1E1648] font-medium truncate block max-w-[130px]">info@meridian.com</span>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-2">
                      <div className="text-[#6030C1] mt-0.5 shrink-0">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-[#7E789B] block text-[9.5px]">Address</span>
                        <span className="text-[#1E1648] font-medium">21 Igbokwe St.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* Tab Navigation using shadcn Tabs */}
        <div className="w-full">
          <Tabs defaultValue="overview" className="w-full flex flex-col gap-5">
            <TabsList className="bg-white w-full rounded-full p-1.5 shadow-sm border border-slate-100 h-auto gap-1 justify-start">
              {tabs.map((tab) => {
                const val = tab.name.toLowerCase();
                return (
                  <TabsTrigger
                    key={tab.name}
                    value={val}
                    className="flex-initial inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer text-[#6C588C] data-active:!bg-[#F2E8FF] data-active:!text-[#7024DA] data-active:border-b-2 data-active:border-[#7024DA] after:hidden"
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Overview Tab Content */}
            <TabsContent value="overview" className="flex flex-col gap-5 mt-0 outline-none">
              {/* Middle Section: About the Hospital (Left 7.5 cols) & Why Choose Meridian Hospital? (Right 4.5 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* About the Hospital Card */}
                <div className="lg:col-span-8 bg-white rounded-3xl p-5 shadow-sm border border-slate-100 grid grid-cols-12 gap-5">
                  <div className="col-span-6 flex flex-col justify-between">
                    {/* Header */}

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="text-[#542BB6]">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                            <path d="M10 6h4" />
                            <path d="M10 10h4" />
                            <path d="M10 14h4" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-sm lg:text-lg text-[#1E1648]">About the Hospital</h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs lg:text-base text-[#7E789B] leading-relaxed mb-4">
                        Meridian Hospital is a private hospital located in the neighbourhood of D-line in Port Harcourt, Rivers State, Nigeria. It was founded in 1996 in a rented ...
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-xs text-left font-semibold text-[#542BB6] hover:underline cursor-pointer"
                    >
                      Read more
                    </button>
                  </div>

                  {/* Gallery + Read more */}
                  <div className="col-span-6 w-full h-full">
                    {/* 3 Photos Grid */}
                    <div className="flex items-stretch gap-2.5 h-full">
                      {/* Large Photo */}
                      <div className="flex-1 h-full min-h-[160px] rounded-xl overflow-hidden relative shadow-inner bg-slate-100">
                        <Image
                          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
                          alt="Hospital Waiting Lobby"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Small Photos Column */}
                      <div className="w-24 flex flex-col gap-2 shrink-0 h-full">
                        {/* Small Photo 1 */}
                        <div className="w-full flex-1 min-h-[75px] rounded-lg overflow-hidden relative shadow-inner bg-slate-100">
                          <Image
                            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=200&q=80"
                            alt="MRI Scanner"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Small Photo 2 with overlay +3 */}
                        <div className="w-full flex-1 min-h-[75px] rounded-lg overflow-hidden relative shadow-inner bg-slate-100">
                          <Image
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=200&q=80"
                            alt="Operating Theatre"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-[#1E1648]/60 flex items-center justify-center text-white text-xs font-bold">
                            +3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Meridian Hospital? */}
                <div className="lg:col-span-4 bg-linear-to-t from-[#F5EEFF] to-[#E6D4FC] rounded-3xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <h3 className="font-bold text-sm lg:text-lg text-[#1E1648] mb-4">Why Choose Meridian Hospital?</h3>

                    <div className="flex flex-col gap-3">
                      {[
                        "24/7 Emergency Care",
                        "Expert Medical Professionals",
                        "Modern Facilities",
                        "Patient-Centered Care",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#6534C9] text-white flex items-center justify-center shrink-0">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-xs lg:text-base font-medium text-[#1E1648]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Right Heartbeat Logo / Watermark */}
                  <div className="self-end mt-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#724CD8] to-[#542BB6] flex items-center justify-center text-white shadow-sm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        <polyline points="4 12 7 12 9 8 13 16 15 12 20 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Departments & Services (Left 8 cols) & Register to this hospital (Right 4 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Departments & Services */}
                <div className="lg:col-span-8 bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden">
                  {/* Background Medical Scanner Image banner on the right */}
                  <div className="absolute right-0 top-0 bottom-0 w-[55%] rounded-r-3xl overflow-hidden pointer-events-none hidden md:block">
                    <Image
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
                      alt="Scanner background"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
                  </div>

                  <div className="relative z-10 max-w-sm sm:max-w-md">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="text-[#542BB6]">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4.5 3v5a7.5 7.5 0 0 0 15 0V3" />
                          <path d="M12 15.5v3a3.5 3.5 0 1 0 7 0v-2.5" />
                          <circle cx="19" cy="16" r="2" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm text-[#1E1648]">Departments & Services</h3>
                    </div>
                    <p className="text-xs text-[#7E789B] mb-4">
                      Explore the wide range of services offered at Meridian Hospital.
                    </p>

                    {/* Department Badges (Row 1 & 2) */}
                    <div className="flex flex-col gap-2 max-w-md">
                      <div className="flex flex-wrap gap-2">
                        {["Emergency Care", "Internal Medicine", "Maternity"].map((badge) => (
                          <span
                            key={badge}
                            className="bg-[#EFE8FC]/90 backdrop-blur-[2px] text-[#6030C1] text-xs font-medium px-3.5 py-1.5 rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Orthopedics", "Radiology", "Laboratory Services"].map((badge) => (
                          <span
                            key={badge}
                            className="bg-[#EFE8FC]/90 backdrop-blur-[2px] text-[#6030C1] text-xs font-medium px-3.5 py-1.5 rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View all Services button */}
                  {/* <div className="relative z-10 self-end mt-4">
                    <button
                      type="button"
                      className="bg-white/95 hover:bg-white text-[#542BB6] text-xs font-semibold py-1.5 px-4 rounded-full border border-purple-100 shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View all Services</span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div> */}
                </div>

                {/* Register to this hospital card */}
                <div className="lg:col-span-4 bg-gradient-to-br from-[#8936E8] to-[#4F0EA7] rounded-3xl p-6 text-white flex flex-col justify-between shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg  flex items-center justify-center shrink-0">
                      <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83333 5.83325H22.1667C23.4553 5.83325 24.5 6.87792 24.5 8.16659V22.1666C24.5 23.4552 23.4553 24.4999 22.1667 24.4999H5.83333C4.54467 24.4999 3.5 23.4552 3.5 22.1666V8.16659C3.5 6.87792 4.54467 5.83325 5.83333 5.83325Z" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" stroke="#D9C2FF"/>
                        <path d="M8.16667 2.33325V9.33325M19.8333 2.33325V9.33325M3.5 11.6666H24.5M8.16667 16.3333H9.33333M12.8333 16.3333H14M17.5 16.3333H18.6667M8.16667 19.8333H9.33333M12.8333 19.8333H14M17.5 19.8333H18.6667" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" stroke="#D9C2FF"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm lg:text-base tracking-tight text-white mb-1">
                        Register to this hospital
                      </h3>
                      <p className="text-xs lg:text-sm text-purple-200">
                        Schedule your visit with ease.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      className="w-full bg-white hover:bg-slate-50 text-[#7024DA] text-xs lg:text-sm font-bold py-2.5 px-4 rounded-full shadow-md transition-colors cursor-pointer text-center"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Doctors Tab Content */}
            <TabsContent value="doctors" className="mt-0 outline-none">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-sm text-[#1E1648] mb-2">Doctors at Meridian Hospital</h3>
                <p className="text-xs text-[#7E789B]">Doctor profiles and schedules go here.</p>
              </div>
            </TabsContent>

            {/* Facilities Tab Content */}
            <TabsContent value="facilities" className="mt-0 outline-none flex flex-col gap-6">
              {/* Top Row: 6 Modern Facility Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 24/7 Emergency Care */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 hover:border-[#7024DA]/30 hover:shadow-md transition-all group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6EFFF] flex items-center justify-center text-[#7024DA] shrink-0 group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1648] mb-1">24/7 Emergency Care</h4>
                    <p className="text-[11.5px] text-[#7E789B] leading-relaxed">Round-the-clock emergency response, trauma stabilization, and rapid intake.</p>
                  </div>
                </div>

                {/* Advanced Laboratory */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 hover:border-[#7024DA]/30 hover:shadow-md transition-all group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6EFFF] flex items-center justify-center text-[#7024DA] shrink-0 group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                      <path d="M8.5 2h7M7 16h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1648] mb-1">Advanced Laboratory</h4>
                    <p className="text-[11.5px] text-[#7E789B] leading-relaxed">Automated diagnostics, blood banking, genetics, and rapid result processing.</p>
                  </div>
                </div>

                {/* Radiology (CT, MRI, X-Ray) */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 hover:border-[#7024DA]/30 hover:shadow-md transition-all group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6EFFF] flex items-center justify-center text-[#7024DA] shrink-0 group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1648] mb-1">Radiology (CT, MRI, X-Ray)</h4>
                    <p className="text-[11.5px] text-[#7E789B] leading-relaxed">High-resolution multi-slice scanning, ultrasound, and digital imaging suites.</p>
                  </div>
                </div>

                {/* ICU */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 hover:border-[#7024DA]/30 hover:shadow-md transition-all group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6EFFF] flex items-center justify-center text-[#7024DA] shrink-0 group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
                      <circle cx="10" cy="12" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1648] mb-1">Intensive Care Unit (ICU)</h4>
                    <p className="text-[11.5px] text-[#7E789B] leading-relaxed">Specialized critical life support, bedside telemetry, and dedicated nurses.</p>
                  </div>
                </div>

                {/* Pharmacy */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 hover:border-[#7024DA]/30 hover:shadow-md transition-all group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6EFFF] flex items-center justify-center text-[#7024DA] shrink-0 group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                      <path d="m8.5 8.5 7 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1648] mb-1">In-House Pharmacy</h4>
                    <p className="text-[11.5px] text-[#7E789B] leading-relaxed">Certified medication dispensation, prescription fulfillment, and consultations.</p>
                  </div>
                </div>

                {/* Wellness Center */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 hover:border-[#7024DA]/30 hover:shadow-md transition-all group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6EFFF] flex items-center justify-center text-[#7024DA] shrink-0 group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c4.97 0 9-4.03 9-9 0-4-3-7-7-9-1 3-3 5-6 6-2 1-5 2-5 6 0 3.31 4.03 6 9 6Z" />
                      <path d="M12 22V10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E1648] mb-1">Wellness & Recovery</h4>
                    <p className="text-[11.5px] text-[#7E789B] leading-relaxed">Physiotherapy rehabilitation, preventive screenings, and patient wellness.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Card with user-provided hospital facilities.png */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6 justify-between overflow-hidden relative">
                <div className="flex-1 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2E8FF] text-[#7024DA] text-xs font-semibold mb-2">
                    <span>Modern Infrastructure</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E1648] mb-2 tracking-tight">World-Class Healthcare Amenities</h3>
                  <p className="text-xs text-[#7E789B] leading-relaxed max-w-lg mb-4">
                    Equipped with state-of-the-art diagnostic machinery, sterile surgical theaters, and patient-first recovery rooms designed for prompt and compassionate care.
                  </p>
                  <div className="flex items-center gap-6 text-xs text-[#1E1648] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> 100% Sanitized Rooms
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#7024DA]" /> Backup Power 24/7
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-[320px] lg:w-[360px] h-44 rounded-2xl overflow-hidden relative shadow-sm shrink-0 border border-slate-100">
                  <Image
                    src={hospitalFacilitiesImg}
                    alt="Hospital Facilities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Reviews Tab Content */}
            <TabsContent value="reviews" className="mt-0 outline-none flex flex-col gap-6">
              {/* Rating Overview Summary & Write Review CTA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Left: Overall Score Card */}
                <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                  <span className="text-5xl font-extrabold text-[#1E1648] tracking-tight">4.6</span>
                  <div className="flex items-center gap-1 my-2 text-[#FDB022]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < 4 ? "#FDB022" : "none"} stroke="#FDB022" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#7E789B]">Based on 73 Verified Patient Reviews</span>
                  <div className="w-full mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                    {[
                      { star: "5 Stars", pct: 75 },
                      { star: "4 Stars", pct: 18 },
                      { star: "3 Stars", pct: 5 },
                      { star: "2 Stars", pct: 2 },
                    ].map((row) => (
                      <div key={row.star} className="flex items-center gap-2 text-[11px] text-[#7E789B]">
                        <span className="w-12 text-left">{row.star}</span>
                        <div className="flex-1 h-2 bg-[#F2EDFB] rounded-full overflow-hidden">
                          <div className="h-full bg-[#7024DA] rounded-full" style={{ width: `${row.pct}%` }} />
                        </div>
                        <span className="w-8 text-right font-medium text-[#1E1648]">{row.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Featured Review Spotlight */}
                <div className="lg:col-span-8 bg-gradient-to-br from-[#7232D4] to-[#4F0EA7] rounded-3xl p-6 text-white flex flex-col justify-between shadow-sm relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#FDB022]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[11px] bg-white/20 px-3 py-1 rounded-full font-medium">Verified Visit</span>
                    </div>
                    <p className="text-sm lg:text-base leading-relaxed text-purple-100 mb-6 font-medium">
                      &ldquo;The triage team was swift and attentive. Dr. Amadi and the nursing staff at the pediatrics wing made my family feel safe and cared for. Clean facility, prompt laboratory turnarounds, and very polite reception staff.&rdquo;
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/15">
                    <div>
                      <h4 className="font-bold text-sm text-white">Chidi Okafor</h4>
                      <span className="text-xs text-purple-200">Patient · Visited 2 weeks ago</span>
                    </div>
                    <button
                      type="button"
                      className="bg-white hover:bg-slate-50 text-[#7024DA] text-xs font-bold py-2 px-4 rounded-full shadow-md transition-colors cursor-pointer"
                    >
                      Write a Review
                    </button>
                  </div>
                </div>
              </div>

              {/* Patient Review Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    author: "Adaeze Nwosu",
                    time: "1 month ago",
                    dept: "Cardiology",
                    rating: 5,
                    comment: "State-of-the-art ECG and scanning machines. Appointment started right on time without delays. Highly recommend Meridian Hospital.",
                  },
                  {
                    author: "Emeka Peters",
                    time: "3 weeks ago",
                    dept: "General Medicine",
                    rating: 5,
                    comment: "The pharmacy is well-stocked with genuine medications. Doctors take time to explain lab results and follow-up care thoroughly.",
                  },
                ].map((rev) => (
                  <div key={rev.author} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#F2E8FF] text-[#7024DA] flex items-center justify-center font-bold text-xs">
                            {rev.author.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-[#1E1648]">{rev.author}</h4>
                            <span className="text-[10px] text-[#7E789B]">{rev.time} · {rev.dept}</span>
                          </div>
                        </div>
                        <div className="flex text-[#FDB022]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#7E789B] leading-relaxed mt-2">{rev.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
