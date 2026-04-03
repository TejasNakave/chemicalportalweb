import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ImportExportData() {
  const data = [
    { type: "Export", region: "Asia Pacific", value: "$2.4B", volume: "1.2M MT", trend: "up" },
    { type: "Import", region: "Europe", value: "$1.8B", volume: "890K MT", trend: "up" },
    { type: "Export", region: "North America", value: "$1.5B", volume: "750K MT", trend: "down" },
    { type: "Import", region: "Middle East", value: "$980M", volume: "450K MT", trend: "up" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Import/Export Data</h2>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${item.type === 'Export' ? 'bg-green-100' : 'bg-blue-100'}`}>
                {item.trend === 'up' ? (
                  <ArrowUpRight className={`h-5 w-5 ${item.type === 'Export' ? 'text-green-600' : 'text-blue-600'}`} />
                ) : (
                  <ArrowDownRight className={`h-5 w-5 ${item.type === 'Export' ? 'text-green-600' : 'text-blue-600'}`} />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-800">{item.region}</p>
                <p className="text-sm text-gray-600">{item.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900">{item.value}</p>
              <p className="text-sm text-gray-600">{item.volume}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
