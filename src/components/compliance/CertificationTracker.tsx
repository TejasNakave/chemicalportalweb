import { Award, Calendar } from "lucide-react";

export default function CertificationTracker() {
  const certifications = [
    { name: "ISO 9001:2015", status: "Active", expires: "Dec 2026", daysLeft: 345 },
    { name: "ISO 14001:2015", status: "Renewal Required", expires: "Mar 2026", daysLeft: 70 },
    { name: "OHSAS 18001", status: "Active", expires: "Aug 2026", daysLeft: 225 },
    { name: "GMP Certification", status: "Active", expires: "Nov 2026", daysLeft: 315 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Certification Tracker</h2>
        <Award className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div key={cert.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <Award className={`h-5 w-5 ${cert.status === "Active" ? "text-green-600" : "text-yellow-600"}`} />
                <div>
                  <p className="font-medium text-gray-800">{cert.name}</p>
                  <p className={`text-xs font-medium mt-1 ${
                    cert.status === "Active" ? "text-green-600" : "text-yellow-600"
                  }`}>
                    {cert.status}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.expires}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{cert.daysLeft} days left</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
