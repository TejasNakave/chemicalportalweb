import { BarChart3, TrendingUp, PieChart } from "lucide-react";

export default function AnalyticsDashboard() {
  const metrics = [
    { label: "Total Data Points", value: "2.4M", icon: BarChart3, color: "blue" },
    { label: "Active Analysis", value: "156", icon: TrendingUp, color: "green" },
    { label: "Report Categories", value: "24", icon: PieChart, color: "purple" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Analytics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const colorClasses = {
            blue: "bg-blue-100 text-blue-600",
            green: "bg-green-100 text-green-600",
            purple: "bg-purple-100 text-purple-600"
          };
          
          return (
            <div key={metric.label} className="text-center p-6 border border-gray-200 rounded-lg">
              <div className={`inline-flex p-3 rounded-full ${colorClasses[metric.color as keyof typeof colorClasses]} mb-3`}>
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          );
        })}
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
        <div className="text-center">
          <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
          <p className="text-gray-700 font-medium">Advanced analytics visualization</p>
          <p className="text-sm text-gray-600 mt-2">Interactive charts and data exploration</p>
        </div>
      </div>
    </div>
  );
}
