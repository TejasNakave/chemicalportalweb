import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function TopTradedChemicals() {
  const chemicals = [
    { 
      rank: 1,
      name: "Ethylene", 
      volume: "185M MT", 
      value: "$186B",
      change: "+8.2%",
      trend: "up",
      topRoute: "Middle East → Asia"
    },
    { 
      rank: 2,
      name: "Propylene", 
      volume: "124M MT", 
      value: "$122B",
      change: "+6.5%",
      trend: "up",
      topRoute: "USA → Europe"
    },
    { 
      rank: 3,
      name: "Benzene", 
      volume: "58M MT", 
      value: "$84B",
      change: "-1.8%",
      trend: "down",
      topRoute: "Asia → North America"
    },
    { 
      rank: 4,
      name: "Methanol", 
      volume: "98M MT", 
      value: "$45B",
      change: "+4.3%",
      trend: "up",
      topRoute: "China → Global"
    },
    { 
      rank: 5,
      name: "Polyethylene", 
      volume: "112M MT", 
      value: "$168B",
      change: "+7.1%",
      trend: "up",
      topRoute: "Global Distribution"
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Top Traded Chemicals</h2>
          <p className="text-sm text-gray-600 mt-1">By global trade volume & value</p>
        </div>
        <TrendingUp className="h-6 w-6 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {chemicals.map((chemical) => (
          <div key={chemical.rank} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {chemical.rank}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{chemical.name}</p>
                  <p className="text-sm text-gray-600">{chemical.topRoute}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {chemical.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-bold ${chemical.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {chemical.change}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Volume</p>
                <p className="text-sm font-semibold text-gray-900">{chemical.volume}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Trade Value</p>
                <p className="text-sm font-semibold text-gray-900">{chemical.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
