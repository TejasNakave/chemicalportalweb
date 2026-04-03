import { TrendingUp, TrendingDown, Globe, DollarSign } from "lucide-react";

export default function QuickStats() {
  const stats = [
    { 
      title: "Global Market Size", 
      value: "$4.8T", 
      change: "+5.8% YoY", 
      trend: "up",
      icon: Globe,
      color: "blue"
    },
    { 
      title: "Total Trade Volume", 
      value: "3.2B MT", 
      change: "+7.2% YoY", 
      trend: "up",
      icon: TrendingUp,
      color: "green"
    },
    { 
      title: "Avg Price Index", 
      value: "124.5", 
      change: "-2.3% MoM", 
      trend: "down",
      icon: TrendingDown,
      color: "orange"
    },
    { 
      title: "Market Growth", 
      value: "6.5%", 
      change: "+0.4% vs Q3", 
      trend: "up",
      icon: TrendingUp,
      color: "purple"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const colorClasses = {
          blue: "bg-blue-100 text-blue-600",
          green: "bg-green-100 text-green-600",
          orange: "bg-orange-100 text-orange-600",
          purple: "bg-purple-100 text-purple-600"
        };

        return (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}
