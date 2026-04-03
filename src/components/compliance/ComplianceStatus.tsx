import { Shield, CheckCircle, AlertTriangle } from "lucide-react";

export default function ComplianceStatus() {
  const compliance = [
    { standard: "EU REACH", status: "Compliant", checked: 245, total: 250, percentage: 98 },
    { standard: "FDA Regulations", status: "Compliant", checked: 189, total: 192, percentage: 98.4 },
    { standard: "ISO 9001", status: "Review Required", checked: 34, total: 40, percentage: 85 },
    { standard: "GHS Classification", status: "Compliant", checked: 312, total: 315, percentage: 99 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Compliance Status</h2>
        <Shield className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {compliance.map((item) => (
          <div key={item.standard} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-800">{item.standard}</h3>
              <div className="flex items-center space-x-2">
                {item.status === "Compliant" ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                )}
                <span className={`text-sm font-medium ${
                  item.status === "Compliant" ? "text-green-600" : "text-yellow-600"
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>{item.checked} of {item.total} items checked</span>
              <span className="font-medium">{item.percentage}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  item.percentage >= 95 ? "bg-green-600" : "bg-yellow-500"
                }`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
