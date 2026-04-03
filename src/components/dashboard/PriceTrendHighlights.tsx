import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function PriceTrendHighlights() {
  const trends = [
    { 
      chemical: "Crude Oil (Brent)", 
      price: "$85.40/bbl", 
      change: "+12.3%",
      period: "30-day",
      trend: "up",
      impact: "High - affects all petrochemicals"
    },
    { 
      chemical: "Natural Gas (Henry Hub)", 
      price: "$3.85/MMBtu", 
      change: "+8.7%",
      period: "30-day",
      trend: "up",
      impact: "High - feedstock cost increase"
    },
    { 
      chemical: "Ethylene Spot Price", 
      price: "$1,234/MT", 
      change: "+5.2%",
      period: "7-day",
      trend: "up",
      impact: "Medium - polymer production"
    },
    { 
      chemical: "Benzene Contract", 
      price: "$1,456/MT", 
      change: "-3.8%",
      period: "7-day",
      trend: "down",
      impact: "Low - oversupply correction"
    },
    { 
      chemical: "Polypropylene (PP)", 
      price: "$1,680/MT", 
      change: "+6.5%",
      period: "30-day",
      trend: "up",
      impact: "High - packaging demand surge"
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Price Trend Highlights</h2>
          <p className="text-sm text-gray-600 mt-1">Recent price movements & impact</p>
        </div>
        <Activity className="h-6 w-6 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {trends.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="font-bold text-gray-900">{item.chemical}</p>
                  {item.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <p className="text-xs text-gray-600">{item.impact}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{item.price}</p>
                <div className="flex items-center justify-end space-x-1 mt-1">
                  <span className={`text-sm font-bold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change}
                  </span>
                  <span className="text-xs text-gray-500">({item.period})</span>
                </div>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    item.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.abs(parseFloat(item.change))}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
