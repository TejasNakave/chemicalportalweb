import { Anchor, TrendingUp, Package } from "lucide-react";

export default function PortwiseTrade() {
  const ports = [
    {
      name: "JNPT (Nhava Sheva)",
      location: "Maharashtra",
      imports: "$4.8B",
      exports: "$3.2B",
      total: "$8.0B",
      share: "28%",
      chemicals: ["Polymers", "Specialty Chemicals", "Intermediates"],
      capacity: "High",
      congestion: "Medium",
      rating: 4.2,
    },
    {
      name: "Mundra Port",
      location: "Gujarat",
      imports: "$3.5B",
      exports: "$2.8B",
      total: "$6.3B",
      share: "22%",
      chemicals: ["Bulk Chemicals", "Petrochemicals", "Fertilizers"],
      capacity: "Very High",
      congestion: "Low",
      rating: 4.5,
    },
    {
      name: "Hazira Port",
      location: "Gujarat",
      imports: "$2.9B",
      exports: "$1.6B",
      total: "$4.5B",
      share: "16%",
      chemicals: ["LPG", "Ethylene", "Propylene", "Polymers"],
      capacity: "High",
      congestion: "Low",
      rating: 4.3,
    },
    {
      name: "Chennai Port",
      location: "Tamil Nadu",
      imports: "$2.1B",
      exports: "$1.9B",
      total: "$4.0B",
      share: "14%",
      chemicals: ["Polymers", "Intermediates", "Fertilizers"],
      capacity: "Medium",
      congestion: "High",
      rating: 3.8,
    },
    {
      name: "Visakhapatnam Port",
      location: "Andhra Pradesh",
      imports: "$1.6B",
      exports: "$1.2B",
      total: "$2.8B",
      share: "10%",
      chemicals: ["Bulk Chemicals", "Polymers", "Fertilizers"],
      capacity: "Medium",
      congestion: "Medium",
      rating: 4.0,
    },
    {
      name: "Paradip Port",
      location: "Odisha",
      imports: "$1.2B",
      exports: "$0.6B",
      total: "$1.8B",
      share: "6%",
      chemicals: ["Fertilizers", "Polymers", "Petrochemicals"],
      capacity: "Medium",
      congestion: "Low",
      rating: 4.1,
    },
    {
      name: "Kandla Port",
      location: "Gujarat",
      imports: "$0.8B",
      exports: "$0.5B",
      total: "$1.3B",
      share: "4%",
      chemicals: ["Bulk Chemicals", "Salt", "Soda Ash"],
      capacity: "Medium",
      congestion: "Medium",
      rating: 3.9,
    },
  ];

  const getCapacityColor = (capacity: string) => {
    if (capacity === "Very High") return "bg-green-100 text-green-800";
    if (capacity === "High") return "bg-blue-100 text-blue-800";
    return "bg-yellow-100 text-yellow-800";
  };

  const getCongestionColor = (congestion: string) => {
    if (congestion === "Low") return "bg-green-100 text-green-800";
    if (congestion === "Medium") return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
            <Anchor className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Port-wise Chemical Trade</h2>
            <p className="text-sm text-gray-600">India's major chemical handling ports (2026)</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total Trade Value</p>
          <p className="text-3xl font-bold text-blue-600">$28.7B</p>
        </div>
      </div>

      <div className="space-y-4">
        {ports.map((port, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Anchor className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{port.name}</h3>
                    <p className="text-sm text-gray-600">{port.location}</p>
                  </div>
                </div>
              </div>
              <div className="text-right ml-4">
                <p className="text-sm text-gray-600">Market Share</p>
                <p className="text-2xl font-bold text-blue-700">{port.share}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Imports</p>
                <p className="text-lg font-bold text-red-700">{port.imports}</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Exports</p>
                <p className="text-lg font-bold text-green-700">{port.exports}</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Total Trade</p>
                <p className="text-lg font-bold text-blue-700">{port.total}</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Rating</p>
                <p className="text-lg font-bold text-purple-700">⭐ {port.rating}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-2">Key Chemicals:</p>
                <div className="flex flex-wrap gap-2">
                  {port.chemicals.map((chem, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded text-xs">
                      {chem}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <div className="text-right">
                  <p className="text-xs text-gray-600 mb-1">Capacity</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCapacityColor(port.capacity)}`}>
                    {port.capacity}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600 mb-1">Congestion</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCongestionColor(port.congestion)}`}>
                    {port.congestion}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
          <Package className="h-10 w-10 text-blue-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">Gujarat Ports Dominance</p>
          <p className="text-3xl font-bold text-blue-700">42%</p>
          <p className="text-xs text-gray-600 mt-2">Mundra + Hazira + Kandla share</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 rounded-xl p-6">
          <TrendingUp className="h-10 w-10 text-green-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">Fastest Growing</p>
          <p className="text-3xl font-bold text-green-700">Hazira</p>
          <p className="text-xs text-gray-600 mt-2">+18% YoY chemical traffic</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6">
          <Anchor className="h-10 w-10 text-orange-600 mb-3" />
          <p className="text-sm text-gray-600 mb-2">Port Capacity Utilization</p>
          <p className="text-3xl font-bold text-orange-700">78%</p>
          <p className="text-xs text-gray-600 mt-2">Average across major ports</p>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg">
        <h4 className="font-bold text-blue-900 mb-3">Port Infrastructure Recommendations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-blue-800 mb-2">🚢 Capacity Expansion Needed</p>
            <ul className="space-y-1 list-disc ml-5">
              <li>Chennai Port: High congestion, expand chemical berths</li>
              <li>JNPT: Dedicated chemical terminal under development</li>
              <li>Paradip: Upgrade for larger LPG carriers</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-blue-800 mb-2">✅ Best Performing Ports</p>
            <ul className="space-y-1 list-disc ml-5">
              <li>Mundra: Excellent private infrastructure, low congestion</li>
              <li>Hazira: Dedicated petrochemical jetty, efficient</li>
              <li>Paradip: Modern facilities, automated handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
