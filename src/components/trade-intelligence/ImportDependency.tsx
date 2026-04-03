import { AlertTriangle, TrendingUp, Globe2 } from "lucide-react";

export default function ImportDependency() {
  const dependencies = [
    {
      chemical: "Methanol",
      imports: "1.6M MT",
      domesticProd: "1.8M MT",
      totalDemand: "3.2M MT",
      importShare: "50%",
      value: "$960M",
      topSources: ["Saudi Arabia", "Iran", "Oman"],
      risk: "Critical",
      trend: "Rising",
    },
    {
      chemical: "Ethylene",
      imports: "2.8M MT",
      domesticProd: "4.2M MT",
      totalDemand: "6.7M MT",
      importShare: "42%",
      value: "$2.8B",
      topSources: ["Saudi Arabia", "UAE", "Qatar"],
      risk: "High",
      trend: "Rising",
    },
    {
      chemical: "PVC",
      imports: "1.8M MT",
      domesticProd: "3.2M MT",
      totalDemand: "4.8M MT",
      importShare: "38%",
      value: "$1.4B",
      topSources: ["Taiwan", "South Korea", "USA"],
      risk: "High",
      trend: "Stable",
    },
    {
      chemical: "Propylene",
      imports: "1.6M MT",
      domesticProd: "3.8M MT",
      totalDemand: "5.2M MT",
      importShare: "31%",
      value: "$1.2B",
      topSources: ["Singapore", "South Korea", "Japan"],
      risk: "Medium",
      trend: "Declining",
    },
    {
      chemical: "Polyethylene (HDPE/LDPE)",
      imports: "2.2M MT",
      domesticProd: "6.8M MT",
      totalDemand: "8.5M MT",
      importShare: "26%",
      value: "$2.0B",
      topSources: ["Saudi Arabia", "USA", "Singapore"],
      risk: "Medium",
      trend: "Stable",
    },
    {
      chemical: "MEG (Mono Ethylene Glycol)",
      imports: "0.9M MT",
      domesticProd: "1.5M MT",
      totalDemand: "2.4M MT",
      importShare: "38%",
      value: "$680M",
      topSources: ["Saudi Arabia", "Kuwait", "Singapore"],
      risk: "Medium",
      trend: "Rising",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Import Dependency Analysis</h2>
            <p className="text-sm text-gray-600">Critical chemicals requiring import substitution (2026)</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total Import Bill</p>
          <p className="text-3xl font-bold text-red-600">$9.0B</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-red-50 to-orange-50 border-b-2 border-red-200">
              <th className="text-left p-4 font-semibold text-gray-900">Chemical</th>
              <th className="text-right p-4 font-semibold text-gray-900">Imports</th>
              <th className="text-right p-4 font-semibold text-gray-900">Domestic Prod.</th>
              <th className="text-right p-4 font-semibold text-gray-900">Total Demand</th>
              <th className="text-right p-4 font-semibold text-gray-900">Import Share</th>
              <th className="text-right p-4 font-semibold text-gray-900">Value</th>
              <th className="text-left p-4 font-semibold text-gray-900">Top Sources</th>
              <th className="text-center p-4 font-semibold text-gray-900">Risk</th>
              <th className="text-center p-4 font-semibold text-gray-900">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dependencies.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-900">{item.chemical}</td>
                <td className="p-4 text-right text-red-700 font-medium">{item.imports}</td>
                <td className="p-4 text-right text-gray-700">{item.domesticProd}</td>
                <td className="p-4 text-right text-gray-700">{item.totalDemand}</td>
                <td className="p-4 text-right">
                  <span className="px-3 py-1 bg-red-100 text-red-800 font-bold rounded-full">
                    {item.importShare}
                  </span>
                </td>
                <td className="p-4 text-right font-semibold text-orange-700">{item.value}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {item.topSources.map((source, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                        {source}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.risk === "Critical"
                        ? "bg-red-100 text-red-800 border-2 border-red-300"
                        : item.risk === "High"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.risk}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    {item.trend === "Rising" ? (
                      <TrendingUp className="h-4 w-4 text-red-500" />
                    ) : (
                      <span className="text-green-600 text-xs">→</span>
                    )}
                    <span className="ml-1 text-xs text-gray-600">{item.trend}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6">
          <Globe2 className="h-10 w-10 text-red-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">Middle East Dependency</p>
          <p className="text-3xl font-bold text-red-700">68%</p>
          <p className="text-xs text-gray-600 mt-2">Of total chemical imports</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-xl p-6">
          <AlertTriangle className="h-10 w-10 text-orange-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">High Risk Chemicals</p>
          <p className="text-3xl font-bold text-orange-700">6</p>
          <p className="text-xs text-gray-600 mt-2">Import share &gt;25%</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-xl p-6">
          <TrendingUp className="h-10 w-10 text-blue-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">Import Substitution Target</p>
          <p className="text-3xl font-bold text-blue-700">$5.2B</p>
          <p className="text-xs text-gray-600 mt-2">By 2030 (PLI schemes)</p>
        </div>
      </div>

      <div className="mt-6 p-5 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
        <h4 className="font-bold text-yellow-900 mb-3">Strategic Recommendations</h4>
        <ul className="text-sm text-gray-700 space-y-2 list-disc ml-5">
          <li><strong>Methanol:</strong> Explore coal-to-methanol projects to reduce Iran/Saudi dependency</li>
          <li><strong>Ethylene/Propylene:</strong> Fast-track cracker capacity additions (Reliance, IOCL projects)</li>
          <li><strong>PVC:</strong> Chlorine balance challenge - consider integrated chlor-alkali expansion</li>
          <li><strong>Diversification:</strong> Reduce Middle East concentration through US, Australia sourcing</li>
          <li><strong>Strategic reserves:</strong> Build 30-day inventory for critical chemicals</li>
        </ul>
      </div>
    </div>
  );
}
