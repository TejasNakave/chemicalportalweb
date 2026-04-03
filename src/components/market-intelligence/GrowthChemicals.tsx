import { Flame, TrendingUp, Star, Zap } from "lucide-react";

export default function GrowthChemicals() {
  const topGrowth = [
    {
      rank: 1,
      chemical: "Lithium Hydroxide",
      cagr: "42%",
      current: "8,500 MT",
      y5: "45,000 MT",
      driver: "EV Battery Boom",
      sector: "Energy Storage",
      investment: "High",
      color: "red",
    },
    {
      rank: 2,
      chemical: "Green Hydrogen",
      cagr: "38%",
      current: "12,000 MT",
      y5: "68,000 MT",
      driver: "Energy Transition",
      sector: "Clean Energy",
      investment: "Very High",
      color: "green",
    },
    {
      rank: 3,
      chemical: "Specialty Polymers",
      cagr: "28%",
      current: "185,000 MT",
      y5: "520,000 MT",
      driver: "Electronics & Auto",
      sector: "Advanced Materials",
      investment: "High",
      color: "purple",
    },
    {
      rank: 4,
      chemical: "Bio-plastics (PLA/PHA)",
      cagr: "26%",
      current: "95,000 MT",
      y5: "310,000 MT",
      driver: "Sustainability Push",
      sector: "Packaging",
      investment: "Medium",
      color: "teal",
    },
    {
      rank: 5,
      chemical: "Electronic Chemicals",
      cagr: "32%",
      current: "42,000 MT",
      y5: "155,000 MT",
      driver: "Semiconductor Mfg",
      sector: "Electronics",
      investment: "Very High",
      color: "blue",
    },
    {
      rank: 6,
      chemical: "Pharma Intermediates",
      cagr: "22%",
      current: "420,000 MT",
      y5: "1,150,000 MT",
      driver: "API Localization",
      sector: "Healthcare",
      investment: "High",
      color: "pink",
    },
    {
      rank: 7,
      chemical: "Polyurethane",
      cagr: "18%",
      current: "680,000 MT",
      y5: "1,540,000 MT",
      driver: "Construction & Furniture",
      sector: "Building Materials",
      investment: "Medium",
      color: "orange",
    },
    {
      rank: 8,
      chemical: "Engineering Plastics",
      cagr: "24%",
      current: "220,000 MT",
      y5: "650,000 MT",
      driver: "Auto Lightweighting",
      sector: "Automotive",
      investment: "High",
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; text: string; bg: string }> = {
      red: { gradient: "from-red-500 to-orange-600", text: "text-red-700", bg: "bg-red-50" },
      green: { gradient: "from-green-500 to-emerald-600", text: "text-green-700", bg: "bg-green-50" },
      purple: { gradient: "from-purple-500 to-pink-600", text: "text-purple-700", bg: "bg-purple-50" },
      teal: { gradient: "from-teal-500 to-cyan-600", text: "text-teal-700", bg: "bg-teal-50" },
      blue: { gradient: "from-blue-500 to-indigo-600", text: "text-blue-700", bg: "bg-blue-50" },
      pink: { gradient: "from-pink-500 to-rose-600", text: "text-pink-700", bg: "bg-pink-50" },
      orange: { gradient: "from-orange-500 to-amber-600", text: "text-orange-700", bg: "bg-orange-50" },
      indigo: { gradient: "from-indigo-500 to-purple-600", text: "text-indigo-700", bg: "bg-indigo-50" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <Flame className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">High-Growth Chemicals</h2>
            <p className="text-sm text-gray-600">Top 8 fastest-growing chemicals in India (2026-2031)</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Average CAGR</p>
          <p className="text-3xl font-bold text-orange-600">28.8%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {topGrowth.map((item) => {
          const colors = getColorClasses(item.color);
          
          return (
            <div
              key={item.rank}
              className={`${colors.bg} border-2 border-gray-300 rounded-xl p-5 hover:shadow-xl transition relative overflow-hidden`}
            >
              {item.rank <= 3 && (
                <div className="absolute top-3 right-3">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-400" />
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`h-14 w-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl font-bold text-white">#{item.rank}</span>
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${colors.text} mb-1`}>{item.chemical}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.sector}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs text-gray-600">CAGR 2026-31</p>
                      <p className={`text-2xl font-bold ${colors.text}`}>{item.cagr}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Current → 2031</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {item.current} → {item.y5}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-300">
                    <div>
                      <p className="text-xs text-gray-600">Growth Driver</p>
                      <p className="text-sm font-semibold text-gray-800">{item.driver}</p>
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.investment === "Very High"
                            ? "bg-red-100 text-red-800"
                            : item.investment === "High"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {item.investment} Investment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 border-gray-300 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Growth Heatmap by Sector</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-4 text-center">
            <Zap className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <p className="text-sm text-gray-700 mb-1">Energy Storage</p>
            <p className="text-2xl font-bold text-red-700">42%</p>
            <p className="text-xs text-gray-600">Highest Growth</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-4 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-700 mb-1">Electronics</p>
            <p className="text-2xl font-bold text-blue-700">32%</p>
            <p className="text-xs text-gray-600">Very High Growth</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4 text-center">
            <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-gray-700 mb-1">Advanced Materials</p>
            <p className="text-2xl font-bold text-purple-700">28%</p>
            <p className="text-xs text-gray-600">High Growth</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-lg p-4 text-center">
            <Flame className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-700 mb-1">Clean Energy</p>
            <p className="text-2xl font-bold text-green-700">38%</p>
            <p className="text-xs text-gray-600">Very High Growth</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 border-2 border-orange-300 rounded-xl">
        <h4 className="font-bold text-orange-900 mb-3 flex items-center space-x-2">
          <Flame className="h-5 w-5" />
          <span>Investment Hotspots</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-gray-800 mb-2">🔋 Battery Materials Ecosystem</p>
            <p className="text-gray-700">Lithium, cathode materials, electrolytes growing 40%+ driven by India's EV ambitions and PLI schemes</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">💻 Electronics Chemical Hub</p>
            <p className="text-gray-700">Semiconductor fabrication chemicals seeing massive demand with Gujarat, Karnataka fab announcements</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">🌱 Sustainable Alternatives</p>
            <p className="text-gray-700">Bio-plastics, green hydrogen gaining traction with carbon neutrality targets and circular economy push</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">💊 Pharma Self-Reliance</p>
            <p className="text-gray-700">API intermediates 22% CAGR as China+1 strategy and Atmanirbhar Bharat accelerate localization</p>
          </div>
        </div>
      </div>
    </div>
  );
}
