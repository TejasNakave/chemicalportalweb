import { LineChart, BarChart, PieChart as PieChartIcon } from "lucide-react";

export default function DataVisualization() {
  const charts = [
    { type: "Line Chart", description: "Market trends over time", icon: LineChart },
    { type: "Bar Chart", description: "Regional comparisons", icon: BarChart },
    { type: "Pie Chart", description: "Market share distribution", icon: PieChartIcon },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Data Visualization</h2>
      
      <div className="space-y-3">
        {charts.map((chart) => {
          const Icon = chart.icon;
          return (
            <div key={chart.type} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{chart.type}</p>
                  <p className="text-sm text-gray-600">{chart.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
