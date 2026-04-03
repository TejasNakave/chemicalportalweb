import { Globe, TrendingUp } from "lucide-react";

export default function GlobalMarketSize() {
  const regions = [
    { name: "Asia Pacific", value: "$2.1T", share: 43.8, growth: "+6.2%" },
    { name: "North America", value: "$1.2T", share: 25.0, growth: "+4.8%" },
    { name: "Europe", value: "$980B", share: 20.4, growth: "+5.1%" },
    { name: "Middle East", value: "$310B", share: 6.5, growth: "+7.8%" },
    { name: "Latin America", value: "$145B", share: 3.0, growth: "+5.9%" },
    { name: "Africa", value: "$65B", share: 1.3, growth: "+8.2%" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <Globe className="h-8 w-8" />
            <h2 className="text-2xl font-bold">Global Chemical Market Size</h2>
          </div>
          <p className="text-blue-100">Total market valuation and regional distribution</p>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold">$4.8T</div>
          <div className="flex items-center justify-end space-x-2 mt-2">
            <TrendingUp className="h-5 w-5 text-green-300" />
            <span className="text-xl text-green-300 font-semibold">+5.8% YoY</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        {regions.map((region) => (
          <div key={region.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-blue-100 text-sm mb-1">{region.name}</p>
            <p className="text-2xl font-bold mb-1">{region.value}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-200">{region.share}%</span>
              <span className="text-sm text-green-300 font-medium">{region.growth}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
