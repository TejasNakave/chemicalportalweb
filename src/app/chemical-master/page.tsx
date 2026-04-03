import ChemicalDirectory from "@/components/chemical-master/ChemicalDirectory";
import ChemicalFilters from "@/components/chemical-master/ChemicalFilters";

export default function ChemicalMasterPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Chemical Master Directory</h1>
        <p className="text-gray-600 mt-2">Comprehensive database of chemical compounds and their properties</p>
      </div>
      
      <ChemicalFilters />
      <div className="mt-6">
        <ChemicalDirectory />
      </div>
    </div>
  );
}
