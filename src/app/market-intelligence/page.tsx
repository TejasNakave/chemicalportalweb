import IndustryConsumption from "@/components/market-intelligence/IndustryConsumption";
import EmergingApplications from "@/components/market-intelligence/EmergingApplications";
import CapacityDemandGap from "@/components/market-intelligence/CapacityDemandGap";
import GrowthChemicals from "@/components/market-intelligence/GrowthChemicals";

export default function MarketIntelligencePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Market Intelligence</h1>
        <p className="text-gray-600 mt-2">Strategic insights, demand forecasts, and growth opportunities for informed decision-making</p>
      </div>
      
      <div className="space-y-8">
        <IndustryConsumption />
        <CapacityDemandGap />
        <GrowthChemicals />
        <EmergingApplications />
      </div>
    </div>
  );
}
