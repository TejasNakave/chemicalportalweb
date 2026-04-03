import { PieChart } from "lucide-react";

export default function SegmentContribution() {
  const segments = [
    { name: "Petrochemicals", value: "$1.85T", share: 38.5, growth: "+6.2%", color: "bg-blue-500" },
    { name: "Polymers & Plastics", value: "$1.44T", share: 30.0, growth: "+5.8%", color: "bg-purple-500" },
    { name: "Specialty Chemicals", value: "$720B", share: 15.0, growth: "+7.1%", color: "bg-green-500" },
    { name: "Agrochemicals", value: "$480B", share: 10.0, growth: "+4.5%", color: "bg-yellow-500" },
    { name: "Pharmaceuticals", value: "$240B", share: 5.0, growth: "+8.9%", color: "bg-pink-500" },
    { name: "Other Chemicals", value: "$76B", share: 1.5, growth: "+3.2%", color: "bg-gray-500" },
  ];

  const maxShare = Math.max(...segments.map(s => s.share));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Segment-wise Contribution</h2>
          <p className="text-sm text-gray-600 mt-1">Market share by chemical segment</p>
        </div>
        <PieChart className="h-6 w-6 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {segments.map((segment) => (
          <div key={segment.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${segment.color}`}></div>
                <span className="font-medium text-gray-800">{segment.name}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-gray-900">{segment.value}</span>
                <span className="text-sm text-green-600 font-medium ml-3">{segment.growth}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div 
                  className={`${segment.color} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${(segment.share / maxShare) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700 w-12 text-right">{segment.share}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
