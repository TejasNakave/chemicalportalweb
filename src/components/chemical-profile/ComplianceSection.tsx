export default function ComplianceSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Import Duties & Tariffs</h3>
          
          <div className="mb-6">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-blue-900">India - HS Code 2901.21</h4>
                <span className="text-3xl font-bold text-blue-600">2.5%</span>
              </div>
              <p className="text-sm text-gray-700">Basic Customs Duty (BCD) + Social Welfare Surcharge 10%</p>
            </div>
          </div>

          <h4 className="font-semibold text-gray-800 mb-3">Other Major Markets</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
              <span className="text-gray-900 font-medium">China</span>
              <span className="text-lg font-bold text-gray-700">3.0%</span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
              <span className="text-gray-900 font-medium">European Union</span>
              <span className="text-lg font-bold text-gray-700">0%</span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
              <span className="text-gray-900 font-medium">United States</span>
              <span className="text-lg font-bold text-gray-700">0%</span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
              <span className="text-gray-900 font-medium">ASEAN Countries</span>
              <span className="text-lg font-bold text-gray-700">0-5%</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Note:</span> Duties subject to change under trade agreements. 
              Always verify current rates with customs authorities.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Regulatory Frameworks</h3>
          
          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-900 mb-2">EU - REACH Regulation</h4>
              <p className="text-sm text-gray-700 mb-2">Registration, Evaluation, Authorisation and Restriction of Chemicals</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  REGISTERED
                </span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">USA - TSCA Compliance</h4>
              <p className="text-sm text-gray-700 mb-2">Toxic Substances Control Act</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  LISTED
                </span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-900 mb-2">India - Petroleum Act</h4>
              <p className="text-sm text-gray-700 mb-2">Petroleum and Natural Gas Regulatory Board (PNGRB)</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  COMPLIANT
                </span>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-bold text-orange-900 mb-2">K-REACH (South Korea)</h4>
              <p className="text-sm text-gray-700 mb-2">Korea REACH Registration</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  REGISTERED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Safety & Hazard Classification</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">GHS Classification</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="h-10 w-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  ⚠️
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Flammable Gas - Category 1</p>
                  <p className="text-sm text-gray-600">H220: Extremely flammable gas</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  🔥
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Gases Under Pressure</p>
                  <p className="text-sm text-gray-600">H280: Contains gas under pressure</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">UN Classification</h4>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-bold text-orange-900">UN Number</h5>
                <span className="text-3xl font-bold text-orange-600">1962</span>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold">Class:</span> 2.1 (Flammable Gas)</p>
                <p><span className="font-semibold">Packing Group:</span> Not applicable</p>
                <p><span className="font-semibold">Proper Shipping Name:</span> Ethylene, compressed or Ethylene, refrigerated liquid</p>
                <p><span className="font-semibold">ERG Guide:</span> 116P (Gases - Flammable)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Required Documentation for Trade</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-900 mb-3">Import Documents</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ Bill of Entry</li>
              <li>✓ Import License (if required)</li>
              <li>✓ MSDS (Material Safety Data Sheet)</li>
              <li>✓ Certificate of Analysis (CoA)</li>
              <li>✓ Certificate of Origin</li>
              <li>✓ Insurance Certificate</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-900 mb-3">Safety Compliance</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ Dangerous Goods Declaration</li>
              <li>✓ Emergency Response Plan</li>
              <li>✓ Spillage Control Measures</li>
              <li>✓ Fire Safety Certificate</li>
              <li>✓ Environmental Clearance</li>
              <li>✓ Storage License</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-900 mb-3">Quality & Testing</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ Purity Certificate (≥99.9%)</li>
              <li>✓ Third-party Test Report</li>
              <li>✓ SGS/Intertek Inspection</li>
              <li>✓ Weight/Quantity Certificate</li>
              <li>✓ Temperature Monitoring Log</li>
              <li>✓ Boil-off Gas Report</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Environmental Regulations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Emissions Control</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• VOC emissions monitoring required</li>
              <li>• Flare gas recovery systems mandatory</li>
              <li>• Fugitive emissions quarterly reporting</li>
              <li>• Stack emissions within CPCB norms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Waste Management</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Boil-off gas must be recovered or flared</li>
              <li>• No direct atmospheric venting permitted</li>
              <li>• Process water recycling mandatory</li>
              <li>• Waste gas treatment before discharge</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5">
        <h4 className="font-bold text-yellow-900 mb-3">⚠️ Upcoming Regulatory Changes</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>• <span className="font-semibold">India BIS Certification:</span> Proposed mandatory quality standards for bulk petrochemicals (Expected: Q4 2024)</p>
          <p>• <span className="font-semibold">EU Carbon Border Tax:</span> CBAM implementation for imported chemicals (Effective: January 2026)</p>
          <p>• <span className="font-semibold">IMO Regulations:</span> Stricter emissions norms for LPG carriers (Phase-in: 2025-2027)</p>
        </div>
      </div>
    </div>
  );
}
