import { Bell } from "lucide-react";

export default function RegulatoryUpdates() {
  const updates = [
    { 
      title: "EU REACH Amendment 2026/01", 
      date: "Jan 15, 2026",
      category: "Regulation Update",
      priority: "High"
    },
    { 
      title: "New GHS Labeling Requirements", 
      date: "Jan 10, 2026",
      category: "Safety Standards",
      priority: "Medium"
    },
    { 
      title: "EPA Chemical Screening Updates", 
      date: "Jan 5, 2026",
      category: "Environmental",
      priority: "Medium"
    },
    { 
      title: "ISO 14001:2026 Certification Deadline", 
      date: "Dec 28, 2025",
      category: "Certification",
      priority: "High"
    },
  ];

  const priorityColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700"
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Regulatory Updates</h2>
        <Bell className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {updates.map((update, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-gray-800 flex-1">{update.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${priorityColors[update.priority as keyof typeof priorityColors]}`}>
                {update.priority}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{update.category}</span>
              <span className="text-gray-500">{update.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
