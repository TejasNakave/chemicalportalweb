import ComplianceStatus from "@/components/compliance/ComplianceStatus";
import RegulatoryUpdates from "@/components/compliance/RegulatoryUpdates";
import CertificationTracker from "@/components/compliance/CertificationTracker";

export default function CompliancePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Compliance & Regulations</h1>
        <p className="text-gray-600 mt-2">Regulatory compliance, certifications, and safety standards</p>
      </div>
      
      <ComplianceStatus />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RegulatoryUpdates />
        <CertificationTracker />
      </div>
    </div>
  );
}
