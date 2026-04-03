import { Lightbulb, TrendingUp } from "lucide-react";

export default function BusinessInsights() {
  const insights = [
    { 
      title: "Market Growth Opportunity",
      description: "Asia-Pacific region shows 15.2% growth potential in specialty chemicals",
      impact: "High",
      date: "Jan 18, 2026"
    },
    { 
      title: "Supply Chain Optimization",
      description: "Alternative shipping route could reduce logistics costs by 12%",
      impact: "Medium",
      date: "Jan 16, 2026"
    },
    { 
      title: "Regulatory Compliance Alert",
      description: "3 chemicals require updated safety documentation by Q2 2026",
      impact: "High",
      date: "Jan 14, 2026"
    },
  ];

  const impactColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700"
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Business Insights</h2>
        <Lightbulb className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-gray-800 flex-1">{insight.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${impactColors[insight.impact as keyof typeof impactColors]}`}>
                {insight.impact}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{insight.date}</span>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
