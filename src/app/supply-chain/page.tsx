import PortPerformance from "@/components/supply-chain/PortPerformance";
import TransitTimeComparison from "@/components/supply-chain/TransitTimeComparison";

export default function SupplyChainPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Supply Chain & Logistics</h1>
        <p className="text-gray-600 mt-2">Port performance, transit times, and logistics optimization for cost reduction</p>
      </div>
      
      <div className="space-y-8">
        <PortPerformance />
        <TransitTimeComparison />
      </div>
    </div>
  );
}
