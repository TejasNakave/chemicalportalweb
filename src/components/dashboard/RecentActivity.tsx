import { Clock } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    { 
      action: "New chemical added", 
      details: "Polyethylene Terephthalate (PET) - CAS: 25038-59-9", 
      time: "2 hours ago",
      type: "chemical"
    },
    { 
      action: "Market report generated", 
      details: "Q1 2026 Global Plastics Market Analysis", 
      time: "5 hours ago",
      type: "report"
    },
    { 
      action: "Compliance check completed", 
      details: "EU REACH Regulation - 45 chemicals verified", 
      time: "1 day ago",
      type: "compliance"
    },
    { 
      action: "Shipment updated", 
      details: "Shipment #SH-2026-0842 arrived at Port of Rotterdam", 
      time: "2 days ago",
      type: "logistics"
    },
  ];

  const typeColors = {
    chemical: "bg-blue-100 text-blue-700",
    report: "bg-purple-100 text-purple-700",
    compliance: "bg-green-100 text-green-700",
    logistics: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
            <div className={`px-2 py-1 rounded text-xs font-medium mt-1 ${typeColors[activity.type as keyof typeof typeColors]}`}>
              {activity.type}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{activity.action}</p>
              <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
