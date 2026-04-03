"use client";

import { Factory, Zap, Droplet, Flame, Leaf, Sparkles } from "lucide-react";

export default function IndustryShowcase() {
  const industries = [
    {
      name: "Petrochemicals",
      icon: "🛢️",
      color: "from-orange-500 to-red-500",
      image: <Flame className="h-16 w-16 text-white opacity-50" />
    },
    {
      name: "Specialty Chemicals",
      icon: "⚗️",
      color: "from-purple-500 to-pink-500",
      image: <Sparkles className="h-16 w-16 text-white opacity-50" />
    },
    {
      name: "Agrochemicals",
      icon: "🌾",
      color: "from-green-500 to-emerald-500",
      image: <Leaf className="h-16 w-16 text-white opacity-50" />
    },
    {
      name: "Industrial Chemicals",
      icon: "🏭",
      color: "from-blue-500 to-cyan-500",
      image: <Factory className="h-16 w-16 text-white opacity-50" />
    },
    {
      name: "Polymers & Plastics",
      icon: "🔬",
      color: "from-indigo-500 to-purple-500",
      image: <Zap className="h-16 w-16 text-white opacity-50" />
    },
    {
      name: "Water Treatment",
      icon: "💧",
      color: "from-cyan-500 to-blue-500",
      image: <Droplet className="h-16 w-16 text-white opacity-50" />
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Industry Sectors</h2>
        <p className="text-sm text-gray-600">Comprehensive coverage across all chemical segments</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className={`relative bg-gradient-to-br ${industry.color} rounded-xl p-6 overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
          >
            {/* Background Icon */}
            <div className="absolute bottom-2 right-2 opacity-20">
              {industry.image}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-sm font-bold text-white leading-tight">
                {industry.name}
              </h3>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Industry Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
          <p className="text-2xl font-bold text-blue-900">6</p>
          <p className="text-xs text-blue-700">Major Sectors</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
          <p className="text-2xl font-bold text-purple-900">500+</p>
          <p className="text-xs text-purple-700">Chemical Products</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
          <p className="text-2xl font-bold text-green-900">$4.8T</p>
          <p className="text-xs text-green-700">Global Market</p>
        </div>
      </div>
    </div>
  );
}
