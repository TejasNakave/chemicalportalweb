import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

export default function CapacityDemandGap() {
  const chemicals = [
    {
      name: "Ethylene",
      demand: "6.7M MT",
      capacity: "4.2M MT",
      gap: "-2.5M MT",
      gapPercent: "-37%",
      imports: "2.8M MT",
      status: "Deficit",
      priority: "Critical",
      action: "New crackers planned: Reliance (1.5M MT), IOCL (0.8M MT) by 2028",
    },
    {
      name: "Propylene",
      demand: "5.2M MT",
      capacity: "3.8M MT",
      gap: "-1.4M MT",
      gapPercent: "-27%",
      imports: "1.6M MT",
      status: "Deficit",
      priority: "High",
      action: "PDH units under construction: 0.8M MT addition by 2027",
    },
    {
      name: "PVC",
      demand: "4.8M MT",
      capacity: "3.2M MT",
      gap: "-1.6M MT",
      gapPercent: "-33%",
      imports: "1.8M MT",
      status: "Deficit",
      priority: "Critical",
      action: "Imports from Taiwan, S.Korea. Domestic expansion challenging due to chlorine balance",
    },
    {
      name: "Polyethylene (HDPE/LDPE)",
      demand: "8.5M MT",
      capacity: "6.8M MT",
      gap: "-1.7M MT",
      gapPercent: "-20%",
      imports: "2.2M MT",
      status: "Deficit",
      priority: "High",
      action: "Downstream to ethylene expansion. New PE plants: 1.2M MT by 2029",
    },
    {
      name: "Polypropylene",
      demand: "6.2M MT",
      capacity: "5.8M MT",
      gap: "-0.4M MT",
      gapPercent: "-6%",
      imports: "0.6M MT",
      status: "Near Balance",
      priority: "Medium",
      action: "Minor imports needed. Domestic capacity adequate with recent additions",
    },
    {
      name: "Methanol",
      demand: "3.2M MT",
      capacity: "1.8M MT",
      gap: "-1.4M MT",
      gapPercent: "-44%",
      imports: "1.6M MT",
      status: "Deficit",
      priority: "High",
      action: "Heavy import dependency. Coal-to-methanol projects under evaluation",
    },
    {
      name: "Caustic Soda",
      demand: "4.2M MT",
      capacity: "4.8M MT",
      gap: "+0.6M MT",
      gapPercent: "+14%",
      imports: "0",
      status: "Surplus",
      priority: "Low",
      action: "Export opportunities. Chlorine balance challenge limits production",
    },
    {
      name: "Ammonia",
      demand: "12.5M MT",
      capacity: "13.2M MT",
      gap: "+0.7M MT",
      gapPercent: "+6%",
      imports: "0.2M MT",
      status: "Surplus",
      priority: "Low",
      action: "Self-sufficient. Seasonal imports during peak fertilizer season",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Capacity vs Demand Gap Analysis</h2>
        <p className="text-gray-600">India's chemical supply-demand imbalance (2026)</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="text-left p-4 font-semibold text-gray-900">Chemical</th>
              <th className="text-right p-4 font-semibold text-gray-900">Demand</th>
              <th className="text-right p-4 font-semibold text-gray-900">Capacity</th>
              <th className="text-right p-4 font-semibold text-gray-900">Gap</th>
              <th className="text-right p-4 font-semibold text-gray-900">Gap %</th>
              <th className="text-right p-4 font-semibold text-gray-900">Imports</th>
              <th className="text-center p-4 font-semibold text-gray-900">Status</th>
              <th className="text-center p-4 font-semibold text-gray-900">Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {chemicals.map((chemical, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="p-4 font-semibold text-gray-900">{chemical.name}</td>
                <td className="p-4 text-right text-gray-700">{chemical.demand}</td>
                <td className="p-4 text-right text-gray-700">{chemical.capacity}</td>
                <td className="p-4 text-right">
                  <span
                    className={`font-semibold ${
                      chemical.gap.startsWith("-") ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {chemical.gap}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    {chemical.gap.startsWith("-") ? (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    ) : (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    )}
                    <span
                      className={`font-bold ${
                        chemical.gap.startsWith("-") ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {chemical.gapPercent}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-right font-medium text-orange-700">{chemical.imports}</td>
                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      chemical.status === "Deficit"
                        ? "bg-red-100 text-red-800"
                        : chemical.status === "Surplus"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {chemical.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      chemical.priority === "Critical"
                        ? "bg-red-100 text-red-800 border-2 border-red-300"
                        : chemical.priority === "High"
                        ? "bg-orange-100 text-orange-800"
                        : chemical.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {chemical.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-bold text-gray-800">Capacity Addition Plans & Actions</h3>
        {chemicals.filter(c => c.status === "Deficit").map((chemical, index) => (
          <div key={index} className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
              <div>
                <p className="font-semibold text-orange-900">{chemical.name}</p>
                <p className="text-sm text-gray-700 mt-1">{chemical.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-5">
          <p className="text-sm text-gray-600 mb-2">Chemicals in Deficit</p>
          <p className="text-3xl font-bold text-red-700">6</p>
          <p className="text-xs text-gray-600 mt-1">Import dependent</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-5">
          <p className="text-sm text-gray-600 mb-2">Surplus Capacity</p>
          <p className="text-3xl font-bold text-green-700">2</p>
          <p className="text-xs text-gray-600 mt-1">Export potential</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-5">
          <p className="text-sm text-gray-600 mb-2">Total Import Bill</p>
          <p className="text-3xl font-bold text-orange-700">$12.8B</p>
          <p className="text-xs text-gray-600 mt-1">Annual (2026)</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-5">
          <p className="text-sm text-gray-600 mb-2">Capex Required</p>
          <p className="text-3xl font-bold text-blue-700">$22B</p>
          <p className="text-xs text-gray-600 mt-1">For self-sufficiency</p>
        </div>
      </div>

      <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-bold text-blue-900 mb-2">Policy Implications</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
          <li>PLI schemes needed for ethylene, propylene, and PVC to boost domestic capacity</li>
          <li>Import substitution priority for chemicals with &gt;30% deficit</li>
          <li>FTA negotiations to secure long-term feedstock supply (ethane, naphtha)</li>
          <li>Export incentives for surplus chemicals (caustic soda, ammonia)</li>
          <li>Green financing for sustainable capacity additions</li>
        </ul>
      </div>
    </div>
  );
}
