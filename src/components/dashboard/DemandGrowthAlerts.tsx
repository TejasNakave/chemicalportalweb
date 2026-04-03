import { AlertTriangle, TrendingUp, Zap } from "lucide-react";

export default function DemandGrowthAlerts() {
  const alerts = [
    { 
      type: "High Growth",
      chemical: "Lithium Compounds", 
      growth: "+24.5%",
      region: "Global",
      driver: "EV battery demand surge",
      urgency: "high",
      forecast: "Sustained through 2027"
    },
    { 
      type: "Emerging Demand",
      chemical: "Green Hydrogen", 
      growth: "+89.2%",
      region: "Europe & Asia",
      driver: "Clean energy transition",
      urgency: "high",
      forecast: "Exponential growth expected"
    },
    { 
      type: "Supply Alert",
      chemical: "Rare Earth Elements", 
      growth: "+18.7%",
      region: "North America",
      driver: "Tech manufacturing boom",
      urgency: "medium",
      forecast: "Supply constraints likely"
    },
    { 
      type: "Market Shift",
      chemical: "Bio-based Polymers", 
      growth: "+32.4%",
      region: "Global",
      driver: "Sustainability regulations",
      urgency: "medium",
      forecast: "Steady growth trajectory"
    },
    { 
      type: "Capacity Gap",
      chemical: "Semiconductor Chemicals", 
      growth: "+15.8%",
      region: "Asia Pacific",
      driver: "Chip production expansion",
      urgency: "high",
      forecast: "Investment opportunities"
    },
  ];

  const urgencyConfig = {
    high: {
      border: "border-red-200",
      bg: "bg-red-50",
      badge: "bg-red-100 text-red-700",
      icon: "text-red-600"
    },
    medium: {
      border: "border-yellow-200",
      bg: "bg-yellow-50",
      badge: "bg-yellow-100 text-yellow-700",
      icon: "text-yellow-600"
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Demand Growth Alerts</h2>
          <p className="text-sm text-gray-600 mt-1">High-growth opportunities & risks</p>
        </div>
        <Zap className="h-6 w-6 text-yellow-500" />
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert, index) => {
          const config = urgencyConfig[alert.urgency as keyof typeof urgencyConfig];
          
          return (
            <div key={index} className={`border-2 rounded-lg p-4 ${config.border} ${config.bg} hover:shadow-md transition`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className={`h-5 w-5 mt-0.5 ${config.icon}`} />
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-bold text-gray-900">{alert.chemical}</p>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${config.badge}`}>
                        {alert.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{alert.driver}</p>
                    <p className="text-xs text-gray-600">{alert.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-lg font-bold text-green-600">{alert.growth}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Growth Rate</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-700">Forecast: {alert.forecast}</p>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${config.badge}`}>
                    {alert.urgency.toUpperCase()} PRIORITY
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
