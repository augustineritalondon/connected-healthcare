
import ritaImg from "../../assets/rita2.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex w-full pt-6 pb-5 px-8 bg-transparent justify-end items-center gap-7">
      {/* Notification Bell */}
      <div className="relative cursor-pointer hover:opacity-85 transition-opacity">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2D215C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
        <span className="bg-[#D92D20] text-white rounded-full flex justify-center items-center text-[10px] font-semibold h-4 min-w-4 px-1 absolute -top-1 -right-2 ring-2 ring-white">
          2
        </span>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="rounded-full overflow-hidden h-10 w-10 ring-2 ring-purple-100 shadow-sm">
          <Image
            src={ritaImg}
            alt="Rita London"
            width={40}
            height={40}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-[#1F174B]">Rita London</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#655D85"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </header>
  );
}
