import { Clock, MapPin, Plane, Ship } from "lucide-react";

export default function TransitTimeComparison() {
  const routes = [
    {
      origin: "Saudi Arabia (Ras Tanura)",
      destination: "Hazira, India",
      distance: "2,850 km",
      seaTransit: "10-12 days",
      airTransit: "N/A",
      preferredMode: "LPG Carrier",
      cost: "$85-95/MT",
      reliability: "High",
      frequency: "Weekly",
    },
    {
      origin: "UAE (Jebel Ali)",
      destination: "JNPT, India",
      distance: "1,950 km",
      seaTransit: "8-10 days",
      airTransit: "N/A",
      preferredMode: "Container/Bulk",
      cost: "$75-85/MT",
      reliability: "Very High",
      frequency: "Daily",
    },
    {
      origin: "Singapore",
      destination: "Chennai, India",
      distance: "2,850 km",
      seaTransit: "8-10 days",
      airTransit: "6-8 hours",
      preferredMode: "Container",
      cost: "$90-110/MT",
      reliability: "High",
      frequency: "3x/week",
    },
    {
      origin: "South Korea (Ulsan)",
      destination: "Visakhapatnam, India",
      distance: "4,200 km",
      seaTransit: "12-14 days",
      airTransit: "8-10 hours",
      preferredMode: "Container",
      cost: "$120-140/MT",
      reliability: "High",
      frequency: "2x/week",
    },
    {
      origin: "USA (Gulf Coast)",
      destination: "Mundra, India",
      distance: "15,800 km",
      seaTransit: "28-32 days",
      airTransit: "18-20 hours",
      preferredMode: "LPG Carrier",
      cost: "$180-220/MT",
      reliability: "Medium",
      frequency: "Monthly",
    },
    {
      origin: "Qatar (Ras Laffan)",
      destination: "Paradip, India",
      distance: "3,100 km",
      seaTransit: "11-13 days",
      airTransit: "N/A",
      preferredMode: "LPG Carrier",
      cost: "$88-98/MT",
      reliability: "High",
      frequency: "Bi-weekly",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
          <Clock className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Transit Time Comparison</h2>
          <p className="text-sm text-gray-600">Key chemical trade routes to India with time and cost analysis</p>
        </div>
      </div>

      <div className="space-y-4">
        {routes.map((route, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{route.origin}</h3>
                  <p className="text-sm text-gray-600 flex items-center space-x-1">
                    <span>→</span>
                    <span>{route.destination}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{route.distance}</p>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    route.reliability === "Very High"
                      ? "bg-green-100 text-green-800"
                      : route.reliability === "High"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {route.reliability}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Ship className="h-4 w-4 text-blue-600" />
                  <p className="text-xs text-gray-600">Sea Transit</p>
                </div>
                <p className="text-lg font-bold text-blue-700">{route.seaTransit}</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Plane className="h-4 w-4 text-purple-600" />
                  <p className="text-xs text-gray-600">Air Transit</p>
                </div>
                <p className="text-sm font-bold text-purple-700">{route.airTransit}</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Freight Cost</p>
                <p className="text-sm font-bold text-green-700">{route.cost}</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Mode</p>
                <p className="text-sm font-bold text-orange-700">{route.preferredMode}</p>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Frequency</p>
                <p className="text-sm font-bold text-pink-700">{route.frequency}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-5">
          <Clock className="h-8 w-8 text-green-600 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Fastest Route</p>
          <p className="text-xl font-bold text-green-700">UAE → India</p>
          <p className="text-xs text-gray-600 mt-1">8-10 days sea transit</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-5">
          <Ship className="h-8 w-8 text-blue-600 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Most Economical</p>
          <p className="text-xl font-bold text-blue-700">$75-85/MT</p>
          <p className="text-xs text-gray-600 mt-1">UAE to JNPT route</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-5">
          <MapPin className="h-8 w-8 text-orange-600 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Longest Route</p>
          <p className="text-xl font-bold text-orange-700">USA → India</p>
          <p className="text-xs text-gray-600 mt-1">28-32 days transit</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5">
          <Clock className="h-8 w-8 text-purple-600 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Avg Transit Time</p>
          <p className="text-xl font-bold text-purple-700">13.8 days</p>
          <p className="text-xs text-gray-600 mt-1">Weighted average</p>
        </div>
      </div>

      <div className="mt-6 p-5 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-bold text-yellow-900 mb-3">Logistics Optimization Tips</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-yellow-800 mb-2">For Urgency:</p>
            <p>Middle East routes (UAE, Saudi, Qatar) offer best transit times (8-12 days). Consider air freight for critical specialty chemicals from Singapore/Korea.</p>
          </div>
          <div>
            <p className="font-semibold text-yellow-800 mb-2">For Cost Savings:</p>
            <p>Plan 45-60 days ahead for USA shipments. Consolidate with Middle East LPG carriers for bulk chemicals. Avoid peak season surcharges (Oct-Dec).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
