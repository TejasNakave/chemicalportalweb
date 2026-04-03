import { Beaker, Tag, Hash, FileText } from "lucide-react";

export default function IdentitySection() {
  return (
    <div className="space-y-6">
      {/* Chemical Structure Visualization */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-2 border-blue-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Molecular Structure</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">C₂H₄</span>
        </div>
        <div className="flex justify-center items-center bg-white rounded-lg p-8 border border-gray-200">
          <div className="text-center">
            <div className="mb-4">
              <svg width="300" height="120" viewBox="0 0 300 120" className="mx-auto">
                {/* Carbon atoms */}
                <circle cx="100" cy="60" r="20" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2"/>
                <circle cx="200" cy="60" r="20" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2"/>
                {/* Double bond */}
                <line x1="120" y1="55" x2="180" y2="55" stroke="#374151" strokeWidth="3"/>
                <line x1="120" y1="65" x2="180" y2="65" stroke="#374151" strokeWidth="3"/>
                {/* Hydrogen atoms */}
                <circle cx="70" cy="40" r="12" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2"/>
                <circle cx="70" cy="80" r="12" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2"/>
                <circle cx="230" cy="40" r="12" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2"/>
                <circle cx="230" cy="80" r="12" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2"/>
                {/* Bonds to hydrogen */}
                <line x1="90" y1="48" x2="82" y2="45" stroke="#6b7280" strokeWidth="2"/>
                <line x1="90" y1="72" x2="82" y2="75" stroke="#6b7280" strokeWidth="2"/>
                <line x1="210" y1="48" x2="218" y2="45" stroke="#6b7280" strokeWidth="2"/>
                <line x1="210" y1="72" x2="218" y2="75" stroke="#6b7280" strokeWidth="2"/>
                {/* Labels */}
                <text x="100" y="65" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">C</text>
                <text x="200" y="65" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">C</text>
                <text x="70" y="45" textAnchor="middle" fill="#374151" fontSize="14" fontWeight="bold">H</text>
                <text x="70" y="85" textAnchor="middle" fill="#374151" fontSize="14" fontWeight="bold">H</text>
                <text x="230" y="45" textAnchor="middle" fill="#374151" fontSize="14" fontWeight="bold">H</text>
                <text x="230" y="85" textAnchor="middle" fill="#374151" fontSize="14" fontWeight="bold">H</text>
              </svg>
            </div>
            <p className="text-sm text-gray-600 font-medium">Ethylene - Simplest Alkene with C=C Double Bond</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-gray-200 rounded-lg p-5 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Beaker className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Chemical Name</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">Ethylene</p>
          <p className="text-sm text-gray-600 mt-1">Also known as: Ethene</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Hash className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800">CAS Number</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">74-85-1</p>
          <p className="text-sm text-gray-600 mt-1">Chemical Abstracts Service</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Tag className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">HS Code</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 font-mono">2901.21</p>
          <p className="text-sm text-gray-600 mt-1">Harmonized System Code</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Basic Properties</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Molecular Formula:</span>
              <span className="font-semibold text-gray-900">C₂H₄</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Molecular Weight:</span>
              <span className="font-semibold text-gray-900">28.05 g/mol</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Physical State:</span>
              <span className="font-semibold text-gray-900">Gas (colorless)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Boiling Point:</span>
              <span className="font-semibold text-gray-900">-103.7°C</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Melting Point:</span>
              <span className="font-semibold text-gray-900">-169.2°C</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Density:</span>
              <span className="font-semibold text-gray-900">1.178 kg/m³ (at 15°C)</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Feedstock & Classification</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-2">Primary Feedstock:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Crude Oil</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Natural Gas</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Naphtha</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Chemical Classification:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Hydrocarbon</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Alkene</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Olefin</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Industry Segment:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Petrochemicals</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Basic Chemicals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-5">
        <div className="flex items-center space-x-3 mb-4">
          <FileText className="h-5 w-5 text-gray-600" />
          <h3 className="font-semibold text-gray-800">Description</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Ethylene (C₂H₄) is the simplest alkene and one of the most important basic organic chemicals. It is a colorless, 
          flammable gas with a sweet odor. Ethylene is primarily produced through steam cracking of hydrocarbons and is the 
          most produced organic compound in the world. It serves as the foundation for the production of many important 
          polymers and chemicals, including polyethylene, ethylene oxide, ethylene dichloride, and ethylbenzene.
        </p>
      </div>
    </div>
  );
}
