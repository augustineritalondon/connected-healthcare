"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import AIAssistantBanner from "../components/Banner/AIAssistantBanner";

import meridianImg from "../assets/meridian.png";
import stMartinsImg from "../assets/st-martins.png";

interface HospitalItem {
  id: number;
  name: string;
  rating: string;
  reviews: string;
  distance: string;
  address: string;
  phone: string;
  tags: string[];
  image: StaticImageData;
  isOpen: boolean;
}

export default function HospitalsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Recommended");
  const [sortOpen, setSortOpen] = useState(false);

  const hospitals: HospitalItem[] = [
    {
      id: 1,
      name: "Meridian Hospital",
      rating: "4.6",
      reviews: "73 Reviews",
      distance: "1.2km away",
      address: "21 Igbokwe St",
      phone: "0808 282 6030",
      tags: ["Pediatrics", "Surgery"],
      image: meridianImg,
      isOpen: true,
    },
    {
      id: 2,
      name: "New City Hospital",
      rating: "4.6",
      reviews: "73 Reviews",
      distance: "1.2km away",
      address: "21 Igbokwe St",
      phone: "0808 282 6030",
      tags: ["Pediatrics", "Surgery"],
      image: stMartinsImg,
      isOpen: true,
    },
    {
      id: 3,
      name: "St Martins Hospital",
      rating: "4.6",
      reviews: "73 Reviews",
      distance: "1.2km away",
      address: "21 Igbokwe St",
      phone: "0808 282 6030",
      tags: ["Pediatrics", "Surgery"],
      image: meridianImg,
      isOpen: false,
    },
    {
      id: 4,
      name: "First River Hospital",
      rating: "4.6",
      reviews: "73 Reviews",
      distance: "1.2km away",
      address: "21 Igbokwe St",
      phone: "0808 282 6030",
      tags: ["Pediatrics", "Surgery"],
      image: stMartinsImg,
      isOpen: true,
    },
    {
      id: 5,
      name: "Teaching Hospital",
      rating: "4.6",
      reviews: "73 Reviews",
      distance: "1.2km away",
      address: "21 Igbokwe St",
      phone: "0808 282 6030",
      tags: ["Pediatrics", "Surgery"],
      image: meridianImg,
      isOpen: true,
    },
    {
      id: 6,
      name: "Erlings Hospital",
      rating: "4.6",
      reviews: "73 Reviews",
      distance: "1.2km away",
      address: "21 Igbokwe St",
      phone: "0808 282 6030",
      tags: ["Pediatrics", "Surgery"],
      image: stMartinsImg,
      isOpen: true,
    },
  ];

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeFilter === "Open Now") {
      return matchesSearch && hospital.isOpen;
    }
    return matchesSearch;
  });

  const topRowHospitals = filteredHospitals.slice(0, 3);
  const bottomRowHospitals = filteredHospitals.slice(3, 6);

  const renderHospitalCard = (hospital: HospitalItem) => (
    <div
      key={hospital.id}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100/80 flex flex-col justify-between hover:shadow-md transition-shadow group"
    >
      <div>
        {/* Hospital Image */}
        <div className="w-full h-44  overflow-hidden mb-3 relative bg-slate-100">
          <Image
            src={hospital.image}
            alt={hospital.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          />
        </div>

        <div className="px-5 pb-5">
          {/* Hospital Title with Hospital Building Icon */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#542BB6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
            <h3 className="font-bold text-sm text-[#1E1648] tracking-tight">{hospital.name}</h3>
          </div>

          {/* Rating & Distance */}
          <div className="flex items-center justify-between text-xs mb-2">
            <div className="flex items-center gap-1">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#FDB022" className="text-[#FDB022]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="font-bold text-[#1E1648] text-xs">{hospital.rating}</span>
              <span className="text-[#7E789B] text-xs">({hospital.reviews})</span>
            </div>

            <div className="flex items-center gap-1 text-[#7E789B] text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{hospital.distance}</span>
            </div>
          </div>

          {/* Address & Phone */}
          <p className="text-xs text-[#7E789B] mb-3">
            {hospital.address} · {hospital.phone}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-4">
            {hospital.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#F1EDFC] text-[#6030C1] text-[11px] font-medium px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Details Button */}
          <Link
            href={`/hospitals/${encodeURIComponent(hospital.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""))}`}
            className="w-full bg-[#EEE9FC] hover:bg-[#E4DCFA] text-[#542BB6] font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>View Details</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>  

      

      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full min-h-screen pb-12">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="px-8 flex flex-col gap-5">
        {/* Header Title & Count */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#1E1648] tracking-tight">Hospitals</h1>
          <span className="text-xs text-[#7E789B] font-medium">6 hospitals</span>
        </div>

        {/* Search Bar */}
        <div className="w-full bg-white rounded-full pl-5 pr-2 py-2 flex items-center justify-between shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 flex-1">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9E98B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search hospitals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-[#1E1648] placeholder-[#9E98B3] focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="bg-[#542BB6] hover:bg-[#47229E] text-white text-xs font-semibold px-6 py-2 rounded-full transition-colors cursor-pointer shadow-sm"
          >
            Search
          </button>
        </div>

        {/* Filter Pills & Sort Dropdown */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* All Pill */}
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className={`px-5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === "All"
                  ? "bg-[#542BB6] text-white"
                  : "bg-[#ECE6FA] text-[#6030C1] hover:bg-[#E2D8F8]"
              }`}
            >
              All
            </button>

            {/* Open Now Pill */}
            <button
              type="button"
              onClick={() => setActiveFilter("Open Now")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeFilter === "Open Now"
                  ? "bg-[#542BB6] text-white"
                  : "bg-[#ECE6FA] text-[#6030C1] hover:bg-[#E2D8F8]"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeFilter === "Open Now" ? "bg-emerald-300" : "bg-[#7A56D8]"}`} />
              <span>Open Now</span>
            </button>

            {/* Nearby Pill */}
            <button
              type="button"
              onClick={() => setActiveFilter("Nearby")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === "Nearby"
                  ? "bg-[#542BB6] text-white"
                  : "bg-[#ECE6FA] text-[#6030C1] hover:bg-[#E2D8F8]"
              }`}
            >
              Nearby
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1 text-xs font-medium text-[#1E1648] hover:text-[#542BB6] transition-colors cursor-pointer"
            >
              <span className="text-[#655D85]">Sort by</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {sortOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-20">
                {["Recommended", "Rating", "Distance"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSortBy(opt);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs ${
                      sortBy === opt
                        ? "bg-[#ECE6FA] text-[#542BB6] font-semibold"
                        : "text-[#1E1648] hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Top 3 Hospital Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topRowHospitals.map(renderHospitalCard)}
        </div>

        {/* Middle AI Health Assistant Banner */}
        <div className="w-full">
          <AIAssistantBanner />
        </div>

        {/* Bottom 3 Hospital Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bottomRowHospitals.map(renderHospitalCard)}
        </div>
      </main>
    </div>
  );
}
