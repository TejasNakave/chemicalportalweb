import { Award, Beaker, ClipboardCheck } from "lucide-react";

export default function QualitySection() {
  const grades = [
    { name: "Polymer Grade", purity: "≥99.9%", use: "Polyethylene production", price: "$$$" },
    { name: "Chemical Grade", purity: "≥99.5%", use: "Ethylene oxide, EDC production", price: "$$" },
    { name: "Commercial Grade", purity: "≥95.0%", use: "General chemical synthesis", price: "$" },
  ];

  const testMethods = [
    { parameter: "Purity", method: "GC (Gas Chromatography)", standard: "ASTM D2504", spec: "≥99.9%" },
    { parameter: "Acetylene Content", method: "GC-FID", standard: "ASTM D6159", spec: "≤5 ppm" },
    { parameter: "Propylene Content", method: "GC-FID", standard: "ASTM D2163", spec: "≤100 ppm" },
    { parameter: "Methane Content", method: "GC-TCD", standard: "ASTM D1945", spec: "≤200 ppm" },
    { parameter: "Water Content", method: "Karl Fischer", standard: "ASTM E203", spec: "≤10 ppm" },
    { parameter: "Sulfur Compounds", method: "GC-SCD", standard: "ASTM D5504", spec: "≤1 ppm" },
  ];

  return (
    <div className="space-y-6">
      {/* Grades */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="h-6 w-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-800">Commercial Grades</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {grades.map((grade, index) => (
            <div key={index} className="border-2 border-purple-200 rounded-lg p-5 bg-gradient-to-br from-purple-50 to-white hover:shadow-lg transition">
              <h4 className="font-bold text-purple-900 text-lg mb-2">{grade.name}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Purity:</span>
                  <span className="font-semibold text-gray-900">{grade.purity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Price Level:</span>
                  <span className="font-semibold text-green-600">{grade.price}</span>
                </div>
                <div className="pt-2 mt-2 border-t border-purple-100">
                  <p className="text-sm text-gray-700"><span className="font-semibold">Use:</span> {grade.use}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test Methods */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Beaker className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Test Methods & Standards</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Quality Parameter</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Test Method</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Standard</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Specification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {testMethods.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{test.parameter}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{test.method}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      {test.standard}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{test.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quality Parameters */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <ClipboardCheck className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-bold text-gray-800">Quality Parameters & Specifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Physical Properties</h4>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Appearance:</span>
                <span className="font-medium text-gray-900">Colorless gas</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Odor:</span>
                <span className="font-medium text-gray-900">Sweet, characteristic</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Vapor Pressure:</span>
                <span className="font-medium text-gray-900">5080 kPa @ 20°C</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Solubility in Water:</span>
                <span className="font-medium text-gray-900">131 mg/L @ 25°C</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Safety Specifications</h4>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Flammability:</span>
                <span className="font-medium text-red-600">Highly Flammable</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Autoignition Temp:</span>
                <span className="font-medium text-gray-900">450°C</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Explosive Limits:</span>
                <span className="font-medium text-gray-900">2.7% - 36% (vol in air)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Flash Point:</span>
                <span className="font-medium text-gray-900">-136°C</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-yellow-900 mb-2">⚠️ Quality Control Requirements</p>
          <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
            <li>Continuous online monitoring of purity using process GC</li>
            <li>Batch testing every 2 hours during production</li>
            <li>Certificate of Analysis (CoA) provided with every shipment</li>
            <li>Third-party testing available upon request</li>
            <li>ISO 9001:2015 quality management system compliance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
