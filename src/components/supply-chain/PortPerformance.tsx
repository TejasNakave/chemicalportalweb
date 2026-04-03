import { Warehouse, Clock, TrendingUp, AlertCircle } from "lucide-react";

export default function PortPerformance() {
  const performance = [
    {
      port: "Mundra",
      avgTurnaround: "2.8 days",
      efficiency: "92%",
      chemicalCapacity: "8.5M MT/yr",
      utilization: "74%",
      congestion: "Low",
      costIndex: 95,
      rating: "Excellent",
    },
    {
      port: "Hazira",
      avgTurnaround: "3.1 days",
      efficiency: "89%",
      chemicalCapacity: "6.2M MT/yr",
      utilization: "68%",
      congestion: "Low",
      costIndex: 98,
      rating: "Excellent",
    },
    {
      port: "JNPT",
      avgTurnaround: "4.2 days",
      efficiency: "82%",
      chemicalCapacity: "10.5M MT/yr",
      utilization: "86%",
      congestion: "Medium",
      costIndex: 112,
      rating: "Good",
    },
    {
      port: "Chennai",
      avgTurnaround: "5.8 days",
      efficiency: "76%",
      chemicalCapacity: "5.8M MT/yr",
      utilization: "91%",
      congestion: "High",
      costIndex: 125,
      rating: "Average",
    },
    {
      port: "Visakhapatnam",
      avgTurnaround: "4.5 days",
      efficiency: "80%",
      chemicalCapacity: "4.2M MT/yr",
      utilization: "72%",
      congestion: "Medium",
      costIndex: 108,
      rating: "Good",
    },
    {
      port: "Paradip",
      avgTurnaround: "3.9 days",
      efficiency: "84%",
      chemicalCapacity: "3.5M MT/yr",
      utilization: "65%",
      congestion: "Low",
      costIndex: 102,
      rating: "Good",
    },
  ];

  const getRatingColor = (rating: string) => {
    if (rating === "Excellent") return "bg-green-100 text-green-800 border-green-300";
    if (rating === "Good") return "bg-blue-100 text-blue-800 border-blue-300";
    return "bg-yellow-100 text-yellow-800 border-yellow-300";
  };

  const getCongestionColor = (congestion: string) => {
    if (congestion === "Low") return "text-green-600";
    if (congestion === "Medium") return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Warehouse className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Port Performance Dashboard</h2>
          <p className="text-sm text-gray-600">Operational efficiency metrics for chemical handling ports</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-blue-200">
              <th className="text-left p-4 font-semibold text-gray-900">Port</th>
              <th className="text-center p-4 font-semibold text-gray-900">Avg Turnaround</th>
              <th className="text-center p-4 font-semibold text-gray-900">Efficiency</th>
              <th className="text-right p-4 font-semibold text-gray-900">Chemical Capacity</th>
              <th className="text-center p-4 font-semibold text-gray-900">Utilization</th>
              <th className="text-center p-4 font-semibold text-gray-900">Congestion</th>
              <th className="text-center p-4 font-semibold text-gray-900">Cost Index</th>
              <th className="text-center p-4 font-semibold text-gray-900">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {performance.map((port, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-900">{port.port}</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="font-medium text-gray-700">{port.avgTurnaround}</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold rounded-full">
                    {port.efficiency}
                  </span>
                </td>
                <td className="p-4 text-right text-gray-700">{port.chemicalCapacity}</td>
                <td className="p-4 text-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 mx-auto" style={{ maxWidth: "100px" }}>
                    <div
                      className={`h-2 rounded-full ${
                        parseInt(port.utilization) > 85
                          ? "bg-red-500"
                          : parseInt(port.utilization) > 75
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{ width: port.utilization }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1 block">{port.utilization}</span>
                </td>
                <td className="p-4 text-center">
                  <span className={`font-semibold ${getCongestionColor(port.congestion)}`}>
                    {port.congestion}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`font-semibold ${
                      port.costIndex < 100
                        ? "text-green-600"
                        : port.costIndex < 110
                        ? "text-blue-600"
                        : "text-red-600"
                    }`}
                  >
                    {port.costIndex}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getRatingColor(port.rating)}`}>
                    {port.rating}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-5">
          <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Best Performer</p>
          <p className="text-2xl font-bold text-green-700">Mundra</p>
          <p className="text-xs text-gray-600 mt-1">92% efficiency, 2.8 days</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-5">
          <Clock className="h-8 w-8 text-blue-600 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Avg Turnaround</p>
          <p className="text-2xl font-bold text-blue-700">4.1 days</p>
          <p className="text-xs text-gray-600 mt-1">Across all ports</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-5">
          <AlertCircle className="h-8 w-8 text-orange-600 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Congested Port</p>
          <p className="text-2xl font-bold text-orange-700">Chennai</p>
          <p className="text-xs text-gray-600 mt-1">91% utilization, 5.8 days</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5">
          <Warehouse className="h-8 w-8 text-purple-600 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Total Capacity</p>
          <p className="text-2xl font-bold text-purple-700">38.7M MT</p>
          <p className="text-xs text-gray-600 mt-1">Annual chemical handling</p>
        </div>
      </div>

      <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-bold text-blue-900 mb-3 flex items-center space-x-2">
          <AlertCircle className="h-5 w-5" />
          <span>Port Selection Guidelines</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-blue-800 mb-2">For Time-Sensitive Shipments:</p>
            <p>Choose Mundra or Hazira - lowest turnaround times (2.8-3.1 days), minimal congestion, high efficiency</p>
          </div>
          <div>
            <p className="font-semibold text-blue-800 mb-2">For Cost Optimization:</p>
            <p>Mundra has best cost index (95), followed by Hazira (98). Avoid Chennai during peak season (125 index)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
