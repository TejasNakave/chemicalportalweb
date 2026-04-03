import ImportDependency from "@/components/trade-intelligence/ImportDependency";
import ExportOpportunities from "@/components/trade-intelligence/ExportOpportunities";
import CountryTradeFlows from "@/components/trade-intelligence/CountryTradeFlows";
import PortwiseTrade from "@/components/trade-intelligence/PortwiseTrade";

export default function TradeIntelligencePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Trade Intelligence</h1>
        <p className="text-gray-600 mt-2">Import dependency, export opportunities, and comprehensive trade flow analysis</p>
      </div>
      
      <div className="space-y-8">
        <ImportDependency />
        <ExportOpportunities />
        <CountryTradeFlows />
        <PortwiseTrade />
      </div>
    </div>
  );
}
