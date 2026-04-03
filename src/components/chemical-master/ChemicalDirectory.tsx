import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";

export default function ChemicalDirectory() {
  const chemicals = [
    { 
      id: "ethylene",
      name: "Ethylene", 
      cas: "74-85-1", 
      formula: "C₂H₄", 
      category: "Organic",
      application: "Polymer production",
      status: "Active",
      hsCode: "2901.21"
    },
    { 
      id: "sulfuric-acid",
      name: "Sulfuric Acid", 
      cas: "7664-93-9", 
      formula: "H₂SO₄", 
      category: "Inorganic",
      application: "Industrial processes",
      status: "Active",
      hsCode: "2807.00"
    },
    { 
      id: "polyethylene",
      name: "Polyethylene", 
      cas: "9002-88-4", 
      formula: "(C₂H₄)ₙ", 
      category: "Polymer",
      application: "Packaging, containers",
      status: "Active",
      hsCode: "3901.10"
    },
    { 
      id: "methanol",
      name: "Methanol", 
      cas: "67-56-1", 
      formula: "CH₃OH", 
      category: "Organic",
      application: "Solvent, fuel",
      status: "Active",
      hsCode: "2905.11"
    },
    { 
      id: "ammonia",
      name: "Ammonia", 
      cas: "7664-41-7", 
      formula: "NH₃", 
      category: "Inorganic",
      application: "Fertilizers",
      status: "Active",
      hsCode: "2814.20"
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Chemical Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">CAS Number</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">HS Code</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Formula</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Application</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {chemicals.map((chemical) => (
              <tr key={chemical.cas} className="hover:bg-blue-50 transition cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/chemical-master/${chemical.id}`} className="font-medium text-blue-600 hover:text-blue-800">
                    {chemical.name}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{chemical.cas}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{chemical.hsCode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{chemical.formula}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                    {chemical.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{chemical.application}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    {chemical.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/chemical-master/${chemical.id}`} className="text-blue-600 hover:text-blue-800 transition">
                    <Eye className="h-5 w-5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 5 of 12,458 chemicals</p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
