import { TrendingUp, DollarSign, Globe } from "lucide-react";

export default function ExportOpportunities() {
  const opportunities = [
    {
      chemical: "Caustic Soda",
      surplus: "600K MT",
      exportPotential: "$420M",
      currentExports: "180K MT",
      targetMarkets: ["Bangladesh", "Sri Lanka", "Nepal", "Vietnam"],
      competitiveAdvantage: "Low power cost, proximity to markets",
      growth: "+28%",
      priority: "High",
    },
    {
      chemical: "Refined Petroleum Products",
      surplus: "25M MT",
      exportPotential: "$18B",
      currentExports: "22M MT",
      targetMarkets: ["UAE", "Singapore", "Europe", "Africa"],
      competitiveAdvantage: "World-class refineries, quality",
      growth: "+12%",
      priority: "Strategic",
    },
    {
      chemical: "Pharma Intermediates",
      surplus: "150K MT",
      exportPotential: "$3.2B",
      currentExports: "120K MT",
      targetMarkets: ["USA", "Europe", "Japan", "Brazil"],
      competitiveAdvantage: "Cost arbitrage, quality certifications",
      growth: "+35%",
      priority: "Very High",
    },
    {
      chemical: "Dyes & Pigments",
      surplus: "80K MT",
      exportPotential: "$1.1B",
      currentExports: "65K MT",
      targetMarkets: ["China", "Turkey", "Bangladesh", "Indonesia"],
      competitiveAdvantage: "Technical expertise, custom solutions",
      growth: "+18%",
      priority: "High",
    },
    {
      chemical: "Agrochemicals",
      surplus: "120K MT",
      exportPotential: "$1.8B",
      currentExports: "95K MT",
      targetMarkets: ["Brazil", "USA", "Africa", "ASEAN"],
      competitiveAdvantage: "Generic formulations, competitive pricing",
      growth: "+22%",
      priority: "High",
    },
    {
      chemical: "Specialty Chemicals",
      surplus: "45K MT",
      exportPotential: "$890M",
      currentExports: "32K MT",
      targetMarkets: ["USA", "Europe", "Japan", "South Korea"],
      competitiveAdvantage: "Innovation, customization capability",
      growth: "+42%",
      priority: "Very High",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Export Opportunities</h2>
            <p className="text-sm text-gray-600">High-potential chemicals for international markets</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total Export Potential</p>
          <p className="text-3xl font-bold text-green-600">$25.4B</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {opportunities.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-xl p-5 hover:border-green-300 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.chemical}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.priority === "Very High" || item.priority === "Strategic"
                        ? "bg-red-100 text-red-800 border-2 border-red-300"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {item.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{item.competitiveAdvantage}</p>
              </div>
              <div className="text-right ml-4">
                <p className="text-sm text-gray-600">Growth Potential</p>
                <p className="text-2xl font-bold text-green-600">{item.growth}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Surplus Available</p>
                <p className="text-lg font-bold text-blue-700">{item.surplus}</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Export Potential</p>
                <p className="text-lg font-bold text-green-700">{item.exportPotential}</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Current Exports</p>
                <p className="text-lg font-bold text-purple-700">{item.currentExports}</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Untapped Value</p>
                <p className="text-sm font-bold text-orange-700">
                  {((parseFloat(item.exportPotential.replace(/[^0-9.]/g, '')) - 
                     parseFloat(item.exportPotential.replace(/[^0-9.]/g, '')) * 
                     parseFloat(item.currentExports.replace(/[^0-9.]/g, '')) / 
                     parseFloat(item.surplus.replace(/[^0-9.]/g, ''))) / 1000).toFixed(1)}B
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-3">
              <p className="text-xs text-gray-600 mb-2">Target Markets:</p>
              <div className="flex flex-wrap gap-2">
                {item.targetMarkets.map((market, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 text-green-800 rounded-full text-xs font-medium"
                  >
                    🌍 {market}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 rounded-xl p-6">
          <DollarSign className="h-10 w-10 text-green-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">Revenue Opportunity</p>
          <p className="text-3xl font-bold text-green-700">$8.2B</p>
          <p className="text-xs text-gray-600 mt-2">Untapped export potential</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
          <Globe className="h-10 w-10 text-blue-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">Target Markets</p>
          <p className="text-3xl font-bold text-blue-700">45+</p>
          <p className="text-xs text-gray-600 mt-2">Countries across 5 continents</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
          <TrendingUp className="h-10 w-10 text-purple-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">Avg Growth Rate</p>
          <p className="text-3xl font-bold text-purple-700">26%</p>
          <p className="text-xs text-gray-600 mt-2">CAGR 2026-2030</p>
        </div>
      </div>

      <div className="mt-6 p-5 bg-green-50 border-2 border-green-300 rounded-lg">
        <h4 className="font-bold text-green-900 mb-3">Export Promotion Strategy</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-green-800 mb-2">🎯 Priority Actions</p>
            <ul className="space-y-1 list-disc ml-5">
              <li>Expand MEIS/RoDTEP benefits for high-value chemicals</li>
              <li>Fast-track quality certifications (FDA, REACH, GMP)</li>
              <li>Establish chemical export zones with infrastructure support</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-green-800 mb-2">🌏 Market Development</p>
            <ul className="space-y-1 list-disc ml-5">
              <li>FTA negotiations with Africa, Latin America</li>
              <li>India Chemical Trade Missions to key markets</li>
              <li>Export credit insurance for new market penetration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
