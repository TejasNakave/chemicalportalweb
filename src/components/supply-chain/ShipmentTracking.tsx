import { MapPin, Clock } from "lucide-react";

export default function ShipmentTracking() {
  const shipments = [
    { 
      id: "SH-2026-0842", 
      origin: "Shanghai, China", 
      destination: "Rotterdam, Netherlands",
      status: "In Transit",
      eta: "2 days",
      progress: 65
    },
    { 
      id: "SH-2026-0843", 
      origin: "Houston, USA", 
      destination: "Mumbai, India",
      status: "Custom Clearance",
      eta: "5 days",
      progress: 40
    },
    { 
      id: "SH-2026-0844", 
      origin: "Singapore", 
      destination: "Los Angeles, USA",
      status: "Departed",
      eta: "8 days",
      progress: 20
    },
  ];

  const statusColors = {
    "In Transit": "bg-blue-100 text-blue-700",
    "Custom Clearance": "bg-yellow-100 text-yellow-700",
    "Departed": "bg-green-100 text-green-700"
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Shipment Tracking</h2>
      
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-medium text-gray-900">{shipment.id}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[shipment.status as keyof typeof statusColors]}`}>
                {shipment.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
                <span className="text-gray-600">{shipment.origin}</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-red-600 mt-0.5" />
                <span className="text-gray-600">{shipment.destination}</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <Clock className="h-4 w-4 text-blue-600 mt-0.5" />
                <span className="text-gray-600">ETA: {shipment.eta}</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${shipment.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
