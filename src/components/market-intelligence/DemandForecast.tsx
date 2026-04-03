import { Activity } from "lucide-react";

export default function DemandForecast() {
  const forecasts = [
    { quarter: "Q1 2026", demand: 8500, growth: "+12%" },
    { quarter: "Q2 2026", demand: 9200, growth: "+8%" },
    { quarter: "Q3 2026", demand: 9800, growth: "+6.5%" },
    { quarter: "Q4 2026", demand: 10500, growth: "+7.1%" },
  ];

  const maxDemand = Math.max(...forecasts.map(f => f.demand));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Demand Forecast</h2>
        <Activity className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {forecasts.map((forecast) => (
          <div key={forecast.quarter}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{forecast.quarter}</span>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-900">{forecast.demand.toLocaleString()} MT</span>
                <span className="ml-2 text-xs text-green-600 font-medium">{forecast.growth}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(forecast.demand / maxDemand) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
