import { BarChart3 } from "lucide-react";

export default function DashboardOverview() {
  const activities = [
    { category: "Chemical Compounds", count: 245, percentage: 75 },
    { category: "Market Reports", count: 89, percentage: 55 },
    { category: "Trade Analytics", count: 156, percentage: 85 },
    { category: "Compliance Checks", count: 312, percentage: 95 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Activity Overview</h2>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.category}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{activity.category}</span>
              <span className="text-sm text-gray-600">{activity.count}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${activity.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
