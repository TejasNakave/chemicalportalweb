import { Truck, Package, MapPin } from "lucide-react";

export default function LogisticsOverview() {
  const stats = [
    { label: "Active Shipments", value: "156", icon: Truck, color: "blue" },
    { label: "Pending Deliveries", value: "42", icon: Package, color: "orange" },
    { label: "Delivery Locations", value: "87", icon: MapPin, color: "green" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Logistics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: "bg-blue-100 text-blue-600",
            orange: "bg-orange-100 text-orange-600",
            green: "bg-green-100 text-green-600"
          };
          
          return (
            <div key={stat.label} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className={`inline-flex p-4 rounded-full ${colorClasses[stat.color as keyof typeof colorClasses]} mb-3`}>
                <Icon className="h-8 w-8" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
