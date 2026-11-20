import Image from "next/image";
import aiBotImg from "../../assets/aibot.png";

export default function AIAssistantBanner() {
  return (
    <div className="w-full bg-[#6246B5] h-[120px] rounded-2xl px-5 pr-10  flex items-center justify-between shadow-sm overflow-hidden relative">
      <div className="flex items-center gap-4 relative z-10">
        <div className="relative  flex items-center justify-center">
          <Image
            src={aiBotImg}
            alt="AI Health Assistant"
            className="w-38 h-38 object-contain"
          />
        </div>
        <div>
          <h3 className="text-sm sm:text-base lg:text-2xl font-bold text-white tracking-tight leading-tight">
            AI Health Assistant
          </h3>
          <p className="text-xs lg:text-base text-[#DDD3F8] mt-1">
            Have a health concern? Get instant guidance.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="relative z-10 bg-white hover:bg-slate-100 text-[#542BB6] text-xs font-semibold py-2 px-4 rounded-full flex items-center gap-1.5 shadow-sm transition-all cursor-pointer shrink-0"
      >
        <span>Chat Now</span>
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
      </button>


      <div className="absolute -right-2 top-0 bottom-0 pointer-events-none h-full flex items-center">
        <svg
          width="342"
          height="120"
          viewBox="0 0 169 86"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[342px] h-[120px]"
        >
          <path d="M105.155 0.0439148C94.3992 1.24391 84.3479 14.5439 80.6667 21.0439L167.575 81.0439L164.214 0.0439148H105.155Z" fill="#6E51BE"/>
          <path d="M81.627 21.5439C51.6651 15.9439 36.172 49.5439 32.1706 67.0439L167.575 84.5439V1.04391C137.229 -2.55609 117.159 9.54391 110.917 16.0439C103.234 24.8439 88.1892 23.3772 81.627 21.5439Z" fill="#755AC3"/>
          <path d="M22.5675 74.0439C12.9643 83.1348 5.7619 83.0439 0 85.0439H168.056V0.0439168H137.806C125.129 -0.756083 114.278 9.54391 109.956 17.0439C104.675 30.0439 97.9524 32.5439 89.3095 34.0439C67.7024 34.0439 61.7804 45.7106 58.5794 54.0439C44.1746 55.0439 27.8492 69.0439 22.5675 74.0439Z" fill="#8863D5"/>
        </svg>
      </div>

    </div>
  );
}
