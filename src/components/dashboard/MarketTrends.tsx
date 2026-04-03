import { TrendingUp } from "lucide-react";

export default function MarketTrends() {
  const trends = [
    { product: "Ethylene", price: "$1,234/MT", change: "+5.2%", trending: "up" },
    { product: "Propylene", price: "$987/MT", change: "+3.8%", trending: "up" },
    { product: "Benzene", price: "$1,456/MT", change: "-1.2%", trending: "down" },
    { product: "Methanol", price: "$456/MT", change: "+2.1%", trending: "up" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Market Trends</h2>
        <TrendingUp className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {trends.map((trend) => (
          <div key={trend.product} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
            <div>
              <p className="font-medium text-gray-800">{trend.product}</p>
              <p className="text-sm text-gray-600">{trend.price}</p>
            </div>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
              trend.trending === 'up' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {trend.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
