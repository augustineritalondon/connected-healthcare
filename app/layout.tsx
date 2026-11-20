import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "HealthHub - Connected Healthcare",
  description: "Find hospitals, doctors and manage your health records",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-screen flex bg-gradient-to-b from-[#F7F3FF] to-[#ECE5FF]  text-[#1E1648] font-sans">
        {/* Left Sidebar */}
        <div className="w-[180px] xl:w-[195px] shrink-0 sticky top-0 h-screen">
          <Suspense fallback={<div className="w-full h-full bg-[#1F1449]" />}>
            <Sidebar />
          </Suspense>
        </div>
        {/* Main Scrollable Canvas */}
        <div className="flex-1 min-w-0 min-h-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}


