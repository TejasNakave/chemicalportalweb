import { TrendingUp, TrendingDown } from "lucide-react";

export default function MarketOverview() {
  const markets = [
    { region: "North America", value: "$842M", change: "+12.3%", trending: "up" },
    { region: "Europe", value: "$726M", change: "+8.7%", trending: "up" },
    { region: "Asia Pacific", value: "$1.2B", change: "+15.2%", trending: "up" },
    { region: "Middle East", value: "$324M", change: "-2.4%", trending: "down" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Regional Market Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {markets.map((market) => (
          <div key={market.region} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-800">{market.region}</h3>
              {market.trending === "up" ? (
                <TrendingUp className="h-5 w-5 text-green-600" />
              ) : (
                <TrendingDown className="h-5 w-5 text-red-600" />
              )}
            </div>
            <p className="text-2xl font-bold text-gray-900">{market.value}</p>
            <p className={`text-sm font-medium mt-1 ${market.trending === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {market.change} vs last quarter
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
