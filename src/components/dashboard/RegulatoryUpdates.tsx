import { Shield, AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function RegulatoryUpdates() {
  const updates = [
    { 
      title: "EU REACH Amendment 2026/01 - Extended Substance List",
      date: "Jan 18, 2026",
      region: "European Union",
      category: "Chemical Registration",
      priority: "Critical",
      deadline: "Mar 31, 2026",
      impact: "245 chemicals require new documentation",
      status: "Action Required"
    },
    { 
      title: "US EPA TSCA Section 6 - PFAS Restrictions",
      date: "Jan 15, 2026",
      region: "United States",
      category: "Substance Restriction",
      priority: "High",
      deadline: "Jun 30, 2026",
      impact: "Manufacturing process changes needed",
      status: "Under Review"
    },
    { 
      title: "China MEE - Updated Hazardous Waste Catalog",
      date: "Jan 12, 2026",
      region: "China",
      category: "Waste Management",
      priority: "High",
      deadline: "May 1, 2026",
      impact: "Updated disposal procedures required",
      status: "Action Required"
    },
    { 
      title: "GHS Rev. 11 - Global Harmonization Update",
      date: "Jan 8, 2026",
      region: "Global",
      category: "Labeling & SDS",
      priority: "Medium",
      deadline: "Dec 31, 2026",
      impact: "Label and SDS updates for 1,200+ products",
      status: "Monitoring"
    },
    { 
      title: "ISO 14001:2026 - Environmental Management Systems",
      date: "Jan 5, 2026",
      region: "International",
      category: "Certification",
      priority: "Medium",
      deadline: "Sep 30, 2026",
      impact: "EMS certification renewal required",
      status: "Scheduled"
    },
  ];

  const priorityConfig = {
    Critical: { bg: "bg-red-100", text: "text-red-700", icon: AlertCircle, iconColor: "text-red-600" },
    High: { bg: "bg-orange-100", text: "text-orange-700", icon: AlertCircle, iconColor: "text-orange-600" },
    Medium: { bg: "bg-yellow-100", text: "text-yellow-700", icon: Clock, iconColor: "text-yellow-600" }
  };

  const statusConfig = {
    "Action Required": { bg: "bg-red-100", text: "text-red-700" },
    "Under Review": { bg: "bg-blue-100", text: "text-blue-700" },
    "Monitoring": { bg: "bg-gray-100", text: "text-gray-700" },
    "Scheduled": { bg: "bg-green-100", text: "text-green-700" }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Regulatory Updates & Compliance Alerts</h2>
          <p className="text-sm text-gray-600 mt-1">Critical regulatory changes affecting operations</p>
        </div>
        <Shield className="h-6 w-6 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {updates.map((update, index) => {
          const priorityStyle = priorityConfig[update.priority as keyof typeof priorityConfig];
          const statusStyle = statusConfig[update.status as keyof typeof statusConfig];
          const PriorityIcon = priorityStyle.icon;
          
          return (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1">
                  <PriorityIcon className={`h-5 w-5 mt-1 ${priorityStyle.iconColor}`} />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{update.title}</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Region: </span>
                        <span className="font-medium text-gray-900">{update.region}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Category: </span>
                        <span className="font-medium text-gray-900">{update.category}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Deadline: </span>
                        <span className="font-bold text-red-600">{update.deadline}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Published: </span>
                        <span className="font-medium text-gray-900">{update.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2 ml-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${priorityStyle.bg} ${priorityStyle.text}`}>
                    {update.priority.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyle.bg} ${statusStyle.text}`}>
                    {update.status.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <p className="text-sm text-gray-700"><span className="font-semibold">Impact:</span> {update.impact}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Total Active Regulations:</span> 5 requiring attention
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
            View All Regulations →
          </button>
        </div>
      </div>
    </div>
  );
}
