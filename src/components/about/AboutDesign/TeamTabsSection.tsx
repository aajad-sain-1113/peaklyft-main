"use client";

import { useState } from "react";
import MemberCarousel from "../MemberCarousel";
import type { Member } from "@/utils/team";

interface TeamTabsProps {
  teams: Member[];
  leadership: Member[];
  investors: Member[];
}

export default function TeamTabsSection({ teams, leadership, investors }: TeamTabsProps) {
  const tabs = ["Our Team", "Our Leadership", "Our Investors"];
  const [activeTab, setActiveTab] = useState("Our Team");

  const getMembers = () => {
    if (activeTab === "Our Team") return teams;
    if (activeTab === "Our Leadership") return leadership;
    return investors;
  };

  return (
    <section className="px-6 md:px-16 pb-20">
      <h1 className="text-center text-4xl font-bold my-10">Peaklyft</h1>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden mb-10">
        <button className="w-full bg-[#3158D3] text-white py-4 rounded-2xl font-semibold text-lg shadow-md">
          {activeTab}
        </button>

        <div className="flex justify-center gap-4 mt-4">
          {tabs
            .filter((t) => t !== activeTab)
            .map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="bg-white border px-4 py-2 rounded-xl shadow-sm"
              >
                {tab}
              </button>
            ))}
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT LIKE ANTWALK ================= */}
      <div className="hidden md:flex gap-10">
        {/* LEFT — VERTICAL TABS */}
        <div className="w-1/4 flex flex-col gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-5 rounded-2xl text-left font-medium text-lg transition-all shadow-sm ${
                activeTab === tab
                  ? "bg-[#3158D3] text-white shadow-lg"
                  : "bg-white hover:bg-gray-100 border text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT — SLIDER */}
        <div className="w-3/4">
          <MemberCarousel members={getMembers()} />
        </div>
      </div>

      {/* MOBILE SLIDER */}
      <div className="md:hidden">
        <MemberCarousel members={getMembers()} />
      </div>
    </section>
  );
}
