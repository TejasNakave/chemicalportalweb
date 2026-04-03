import { ArrowDownToLine, ArrowUpFromLine, TrendingUp } from "lucide-react";

export default function CountryTradeFlows() {
  const topImportPartners = [
    { rank: 1, country: "Saudi Arabia", flag: "🇸🇦", imports: "$3.2B", share: "18%", chemicals: ["Ethylene", "Propylene", "MEG"], growth: "+12%" },
    { rank: 2, country: "UAE", flag: "🇦🇪", imports: "$2.8B", share: "16%", chemicals: ["Ethylene", "Polyethylene", "Methanol"], growth: "+15%" },
    { rank: 3, country: "China", flag: "🇨🇳", imports: "$2.1B", share: "12%", chemicals: ["Intermediates", "Specialty Chemicals"], growth: "+8%" },
    { rank: 4, country: "Singapore", flag: "🇸🇬", imports: "$1.8B", share: "10%", chemicals: ["Polymers", "Solvents", "Catalysts"], growth: "+10%" },
    { rank: 5, country: "South Korea", flag: "🇰🇷", imports: "$1.5B", share: "8%", chemicals: ["PVC", "Polypropylene", "Engineering Plastics"], growth: "+6%" },
    { rank: 6, country: "USA", flag: "🇺🇸", imports: "$1.3B", share: "7%", chemicals: ["Specialty Chemicals", "Catalysts"], growth: "+18%" },
    { rank: 7, country: "Taiwan", flag: "🇹🇼", imports: "$1.1B", share: "6%", chemicals: ["PVC", "Electronic Chemicals"], growth: "+5%" },
    { rank: 8, country: "Qatar", flag: "🇶🇦", imports: "$0.9B", share: "5%", chemicals: ["Ethylene", "HDPE"], growth: "+14%" },
  ];

  const topExportPartners = [
    { rank: 1, country: "UAE", flag: "🇦🇪", exports: "$2.4B", share: "22%", chemicals: ["Refined Products", "Polymers"], growth: "+16%" },
    { rank: 2, country: "USA", flag: "🇺🇸", exports: "$1.8B", share: "16%", chemicals: ["Pharma Intermediates", "Dyes"], growth: "+28%" },
    { rank: 3, country: "Bangladesh", flag: "🇧🇩", exports: "$1.2B", share: "11%", chemicals: ["Caustic Soda", "Soda Ash"], growth: "+12%" },
    { rank: 4, country: "Singapore", flag: "🇸🇬", exports: "$0.9B", share: "8%", chemicals: ["Refined Products", "Specialty Chemicals"], growth: "+10%" },
    { rank: 5, country: "Brazil", flag: "🇧🇷", exports: "$0.8B", share: "7%", chemicals: ["Agrochemicals", "Intermediates"], growth: "+24%" },
    { rank: 6, country: "Netherlands", flag: "🇳🇱", exports: "$0.7B", share: "6%", chemicals: ["Pharma APIs", "Fine Chemicals"], growth: "+32%" },
    { rank: 7, country: "Sri Lanka", flag: "🇱🇰", exports: "$0.6B", share: "5%", chemicals: ["Polymers", "Caustic Soda"], growth: "+8%" },
    { rank: 8, country: "Vietnam", flag: "🇻🇳", exports: "$0.5B", share: "5%", chemicals: ["Dyes", "Pigments"], growth: "+20%" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Country-wise Trade Flows</h2>
        <p className="text-gray-600">India's top chemical trading partners (2026)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Imports Section */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
              <ArrowDownToLine className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Top Import Partners</h3>
              <p className="text-sm text-gray-600">Total: $17.8B</p>
            </div>
          </div>

          <div className="space-y-3">
            {topImportPartners.map((partner) => (
              <div
                key={partner.rank}
                className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{partner.flag}</span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="h-6 w-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {partner.rank}
                        </span>
                        <h4 className="font-bold text-gray-900">{partner.country}</h4>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Market Share: {partner.share}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-red-700">{partner.imports}</p>
                    <p className="text-xs text-green-600 font-semibold">{partner.growth}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {partner.chemicals.map((chem, i) => (
                    <span key={i} className="px-2 py-1 bg-white border border-red-200 text-red-700 rounded text-xs">
                      {chem}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exports Section */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <ArrowUpFromLine className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Top Export Partners</h3>
              <p className="text-sm text-gray-600">Total: $10.9B</p>
            </div>
          </div>

          <div className="space-y-3">
            {topExportPartners.map((partner) => (
              <div
                key={partner.rank}
                className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{partner.flag}</span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {partner.rank}
                        </span>
                        <h4 className="font-bold text-gray-900">{partner.country}</h4>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Market Share: {partner.share}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-700">{partner.exports}</p>
                    <p className="text-xs text-green-600 font-semibold">{partner.growth}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {partner.chemicals.map((chem, i) => (
                    <span key={i} className="px-2 py-1 bg-white border border-green-200 text-green-700 rounded text-xs">
                      {chem}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-2">Trade Deficit</p>
          <p className="text-3xl font-bold text-red-700">-$6.9B</p>
          <p className="text-xs text-gray-600 mt-1">Imports - Exports</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-2">Middle East Share</p>
          <p className="text-3xl font-bold text-blue-700">52%</p>
          <p className="text-xs text-gray-600 mt-1">Of total imports</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-2">Export Growth</p>
          <p className="text-3xl font-bold text-green-700">+19%</p>
          <p className="text-xs text-gray-600 mt-1">YoY (2025-26)</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-2">Trading Partners</p>
          <p className="text-3xl font-bold text-purple-700">85+</p>
          <p className="text-xs text-gray-600 mt-1">Countries worldwide</p>
        </div>
      </div>

      <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-bold text-blue-900 mb-3">Trade Diversification Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-blue-800 mb-2">⚠️ Import Concentration Risk</p>
            <p>Top 3 countries account for 46% of chemical imports. Geopolitical disruptions could impact supply chains. Diversification to Americas, Australia recommended.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-800 mb-2">📈 Export Growth Opportunities</p>
            <p>High-value exports (pharma, specialty chemicals) to developed markets growing 28%+. Focus on quality certifications and market-specific compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
