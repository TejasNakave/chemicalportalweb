import { Target, TrendingUp, AlertTriangle, DollarSign, Shield } from "lucide-react";

export default function AutomatedInsights() {
  const insights = {
    importSubstitution: [
      {
        chemical: "Methanol",
        importShare: "50%",
        potentialSavings: "$960M/year",
        feasibility: "Medium",
        timeline: "3-5 years",
        action: "Coal-to-methanol projects under evaluation. PLI scheme needed.",
        priority: "High",
      },
      {
        chemical: "Ethylene",
        importShare: "42%",
        potentialSavings: "$2.8B/year",
        feasibility: "High",
        timeline: "2-4 years",
        action: "Reliance (1.5M MT) and IOCL (0.8M MT) crackers planned.",
        priority: "Critical",
      },
      {
        chemical: "PVC",
        importShare: "38%",
        potentialSavings: "$1.4B/year",
        feasibility: "Low",
        timeline: "5-7 years",
        action: "Chlorine balance challenge. Integrated expansion needed.",
        priority: "Medium",
      },
    ],

    highMargin: [
      {
        chemical: "Pharma Intermediates",
        margin: "42%",
        marketSize: "$3.2B",
        growth: "35%",
        competitiveEdge: "Cost arbitrage, quality certifications (FDA/GMP)",
        recommendation: "Expand capacity in high-value APIs",
      },
      {
        chemical: "Specialty Polymers",
        margin: "38%",
        marketSize: "$890M",
        growth: "28%",
        competitiveEdge: "Technical expertise, custom formulations",
        recommendation: "Target electronics and automotive segments",
      },
      {
        chemical: "Electronic Chemicals",
        margin: "45%",
        marketSize: "$3.5B (by 2028)",
        growth: "32%",
        competitiveEdge: "Semiconductor fab investments (Gujarat, Karnataka)",
        recommendation: "Focus on ultra-high purity chemicals for fabs",
      },
    ],

    highGrowth: [
      {
        chemical: "Lithium Hydroxide",
        cagr: "42%",
        driver: "EV battery manufacturing boom",
        marketSize: "$2.8B by 2030",
        investmentNeed: "Very High",
      },
      {
        chemical: "Green Hydrogen",
        cagr: "38%",
        driver: "Energy transition and clean fuel push",
        marketSize: "$6.5B by 2035",
        investmentNeed: "Very High",
      },
      {
        chemical: "Bio-plastics",
        cagr: "26%",
        driver: "Sustainability regulations and circular economy",
        marketSize: "$5.2B by 2030",
        investmentNeed: "Medium",
      },
    ],

    supplyRisk: [
      {
        chemical: "Methanol",
        risk: "Critical",
        reason: "50% import dependency, concentration in Iran/Saudi",
        mitigation: "Diversify sources (Australia, USA). Build strategic reserves.",
      },
      {
        chemical: "Rare Earth Elements (for catalysts)",
        risk: "High",
        reason: "95% sourced from China, geopolitical tensions",
        mitigation: "Develop alternative suppliers. R&D for substitutes.",
      },
      {
        chemical: "Electronic Grade Chemicals",
        risk: "Medium",
        reason: "Limited domestic production, single-source dependencies",
        mitigation: "Encourage local manufacturing through PLI schemes.",
      },
    ],

    regulationRisk: [
      {
        chemical: "Single-use Plastics",
        risk: "High",
        issue: "EPR regulations, ban on certain applications",
        impact: "Demand reduction for LDPE, PP in packaging",
        action: "Pivot to recyclable alternatives, bio-plastics",
      },
      {
        chemical: "Imported Chemicals (CBAM)",
        risk: "Medium",
        issue: "EU Carbon Border Adjustment Mechanism from Jan 2026",
        impact: "Additional cost for carbon-intensive exports to EU",
        action: "Invest in green manufacturing, carbon credits",
      },
      {
        chemical: "Hazardous Chemicals",
        risk: "Medium",
        issue: "Stricter safety norms (MSIHC Rules 2024)",
        impact: "Higher compliance costs, storage restrictions",
        action: "Upgrade safety infrastructure, obtain NOCs",
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Import Substitution Candidates */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Import Substitution Candidates</h2>
            <p className="text-sm text-gray-600">High-priority chemicals for domestic capacity addition</p>
          </div>
        </div>

        <div className="space-y-4">
          {insights.importSubstitution.map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.chemical}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.action}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.priority === "Critical"
                      ? "bg-red-100 text-red-800 border-2 border-red-300"
                      : item.priority === "High"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.priority}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <p className="text-xs text-gray-600">Import Share</p>
                  <p className="text-lg font-bold text-red-700">{item.importShare}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-xs text-gray-600">Potential Savings</p>
                  <p className="text-sm font-bold text-green-700">{item.potentialSavings}</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-xs text-gray-600">Feasibility</p>
                  <p className="text-sm font-bold text-blue-700">{item.feasibility}</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded p-3">
                  <p className="text-xs text-gray-600">Timeline</p>
                  <p className="text-sm font-bold text-purple-700">{item.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High Margin Chemicals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">High Margin Chemicals</h2>
            <p className="text-sm text-gray-600">Value-maximizing opportunities for profitability</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.highMargin.map((item, index) => (
            <div
              key={index}
              className="border-2 border-green-200 rounded-xl p-5 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.chemical}</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-green-700 mb-1">{item.margin}</p>
                <p className="text-xs text-gray-600">Gross Margin</p>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-600">Market Size:</p>
                  <p className="font-semibold text-gray-800">{item.marketSize}</p>
                </div>
                <div>
                  <p className="text-gray-600">Growth Rate:</p>
                  <p className="font-semibold text-green-700">{item.growth} CAGR</p>
                </div>
                <div>
                  <p className="text-gray-600">Edge:</p>
                  <p className="font-medium text-gray-700">{item.competitiveEdge}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-blue-700 font-semibold">💡 {item.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High Growth Chemicals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">High Growth Chemicals</h2>
            <p className="text-sm text-gray-600">Future-facing opportunities with exponential growth</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.highGrowth.map((item, index) => (
            <div
              key={index}
              className="border-2 border-blue-200 rounded-xl p-5 bg-gradient-to-br from-blue-50 to-white"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.chemical}</h3>
              <p className="text-4xl font-bold text-blue-700 mb-2">{item.cagr}</p>
              <p className="text-xs text-gray-600 mb-4">5-year CAGR</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold">Driver:</span> {item.driver}</p>
                <p><span className="font-semibold">Market Size:</span> {item.marketSize}</p>
                <p>
                  <span className="font-semibold">Investment:</span>{" "}
                  <span className={item.investmentNeed === "Very High" ? "text-red-700" : "text-orange-700"}>
                    {item.investmentNeed}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supply Risk Chemicals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Supply Risk Chemicals</h2>
            <p className="text-sm text-gray-600">Vulnerable to supply chain disruptions</p>
          </div>
        </div>

        <div className="space-y-4">
          {insights.supplyRisk.map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">{item.chemical}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.risk === "Critical"
                      ? "bg-red-100 text-red-800"
                      : item.risk === "High"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.risk} Risk
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Reason:</strong> {item.reason}</p>
              <p className="text-sm text-blue-700 font-medium">🛡️ Mitigation: {item.mitigation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Regulation Risk Chemicals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Regulation Risk Chemicals</h2>
            <p className="text-sm text-gray-600">Facing policy and compliance challenges</p>
          </div>
        </div>

        <div className="space-y-4">
          {insights.regulationRisk.map((item, index) => (
            <div
              key={index}
              className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">{item.chemical}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.risk === "High"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.risk} Risk
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-1"><strong>Issue:</strong> {item.issue}</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Impact:</strong> {item.impact}</p>
              <p className="text-sm text-green-700 font-medium">✅ Action: {item.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
