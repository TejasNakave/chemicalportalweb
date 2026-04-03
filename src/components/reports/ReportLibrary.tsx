import { FileText, Download } from "lucide-react";

export default function ReportLibrary() {
  const reports = [
    { 
      name: "Q1 2026 Market Analysis",
      type: "Market Intelligence",
      date: "Jan 15, 2026",
      size: "2.4 MB",
      format: "PDF"
    },
    { 
      name: "REACH Compliance Report",
      type: "Compliance",
      date: "Jan 10, 2026",
      size: "1.8 MB",
      format: "PDF"
    },
    { 
      name: "Global Trade Flow Analysis",
      type: "Trade Intelligence",
      date: "Jan 5, 2026",
      size: "3.2 MB",
      format: "Excel"
    },
    { 
      name: "Supply Chain Metrics",
      type: "Logistics",
      date: "Dec 28, 2025",
      size: "1.2 MB",
      format: "PDF"
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Report Library</h2>
      
      <div className="space-y-3">
        {reports.map((report, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="flex items-center space-x-3 flex-1">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{report.name}</p>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-xs text-gray-600">{report.type}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-600">{report.date}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-600">{report.size}</span>
                </div>
              </div>
            </div>
            <button className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition">
              <Download className="h-5 w-5 text-blue-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
