import ReportGenerator from "@/components/reports/ReportGenerator";
import ReportLibrary from "@/components/reports/ReportLibrary";
import ScheduledReports from "@/components/reports/ScheduledReports";

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Reports & Downloads</h1>
        <p className="text-gray-600 mt-2">Generate, schedule, and download custom reports</p>
      </div>
      
      <ReportGenerator />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ReportLibrary />
        <ScheduledReports />
      </div>
    </div>
  );
}
