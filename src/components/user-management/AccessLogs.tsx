import { Activity, Eye } from "lucide-react";

export default function AccessLogs() {
  const logs = [
    { 
      user: "John Smith",
      action: "Generated Market Report",
      module: "Market Intelligence",
      time: "10 minutes ago",
      status: "Success"
    },
    { 
      user: "Sarah Johnson",
      action: "Accessed Chemical Database",
      module: "Chemical Master",
      time: "1 hour ago",
      status: "Success"
    },
    { 
      user: "Michael Chen",
      action: "Updated Compliance Record",
      module: "Compliance",
      time: "2 hours ago",
      status: "Success"
    },
    { 
      user: "Unknown User",
      action: "Failed Login Attempt",
      module: "Authentication",
      time: "3 hours ago",
      status: "Failed"
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Access Logs</h2>
        <Activity className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {logs.map((log, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
            <div className="p-2 bg-blue-100 rounded-lg mt-1">
              <Eye className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-gray-800 text-sm">{log.user}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  log.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {log.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{log.action}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-500">{log.module}</span>
                <span className="text-xs text-gray-500">{log.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
