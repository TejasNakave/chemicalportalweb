import AutomatedInsights from "@/components/analytics/AutomatedInsights";

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Analytics & Insights</h1>
        <p className="text-gray-600 mt-2">Decision intelligence engine with AI-powered automated insights</p>
      </div>
      
      <AutomatedInsights />
    </div>
  );
}
