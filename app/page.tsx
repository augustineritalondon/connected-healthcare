import Navbar from "./components/Navbar/Navbar";
import HomeBanner from "./components/Banner/HomeBanner";
import HealthSummary from "./components/Others/HealthSummary";
import CategoryCards from "./components/Cards/CategoryCards";
import AIAssistantBanner from "./components/Banner/AIAssistantBanner";
import AppointmentsSection from "./components/Others/AppointmentsSection";
import PopularHospitals from "./components/Others/PopularHospitals";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-10">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Dashboard Canvas */}
      <main className="px-8 flex flex-col gap-6">
        {/* Top Row: Hero Banner (approx 74%) + Health Summary (approx 26%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-9 flex flex-col">
            <HomeBanner />
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <HealthSummary />
          </div>
        </div>

        {/* Second Row: 4 Category Cards */}
        <div>
          <CategoryCards />
        </div>

        {/* Third Row: AI Health Assistant Banner */}
        <div>
          <AIAssistantBanner />
        </div>

        {/* Fourth Row: Upcoming Appointments & Promo (45%) + Popular Hospitals (55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <AppointmentsSection />
          </div>
          <div className="lg:col-span-7 flex flex-col">
            <PopularHospitals />
          </div>
        </div>
      </main>
    </div>
  );
}


