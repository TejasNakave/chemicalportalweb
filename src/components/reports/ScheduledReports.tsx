import { Clock, Calendar } from "lucide-react";

export default function ScheduledReports() {
  const scheduled = [
    { 
      name: "Weekly Market Summary",
      frequency: "Weekly - Monday",
      nextRun: "Jan 27, 2026",
      recipients: "5 users",
      status: "Active"
    },
    { 
      name: "Monthly Compliance Check",
      frequency: "Monthly - 1st",
      nextRun: "Feb 1, 2026",
      recipients: "3 users",
      status: "Active"
    },
    { 
      name: "Quarterly Trade Report",
      frequency: "Quarterly",
      nextRun: "Apr 1, 2026",
      recipients: "8 users",
      status: "Active"
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Scheduled Reports</h2>
      
      <div className="space-y-3">
        {scheduled.map((report, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-medium text-gray-800">{report.name}</p>
                <div className="flex items-center space-x-2 mt-1 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{report.frequency}</span>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                {report.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Next: {report.nextRun}</span>
              </div>
              <span className="text-gray-600">{report.recipients}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
