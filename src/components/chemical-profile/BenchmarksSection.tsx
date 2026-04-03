export default function BenchmarksSection() {
  return (
    <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Global Price Benchmarks</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border-2 border-blue-200 rounded-lg p-5 bg-gradient-to-br from-blue-50 to-white">
            <h4 className="font-bold text-blue-900 mb-4">ICIS Pricing</h4>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">NEA CFR (Northeast Asia)</p>
              <p className="text-3xl font-bold text-blue-600">$1,020/MT</p>
              <p className="text-xs text-green-600 mt-1">↑ +3.2% vs last week</p>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Frequency:</span> Weekly</p>
              <p><span className="font-semibold">Coverage:</span> Asia, Europe, Americas</p>
              <p><span className="font-semibold">Reliability:</span> ★★★★★</p>
            </div>
          </div>

          <div className="border-2 border-purple-200 rounded-lg p-5 bg-gradient-to-br from-purple-50 to-white">
            <h4 className="font-bold text-purple-900 mb-4">Platts Assessment</h4>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">US Gulf Coast FD</p>
              <p className="text-3xl font-bold text-purple-600">$940/MT</p>
              <p className="text-xs text-red-600 mt-1">↓ -1.8% vs last week</p>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Frequency:</span> Daily</p>
              <p><span className="font-semibold">Coverage:</span> Global markets</p>
              <p><span className="font-semibold">Reliability:</span> ★★★★★</p>
            </div>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-5 bg-gradient-to-br from-green-50 to-white">
            <h4 className="font-bold text-green-900 mb-4">Argus Media</h4>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Europe FD NWE</p>
              <p className="text-3xl font-bold text-green-600">€890/MT</p>
              <p className="text-xs text-green-600 mt-1">↑ +2.1% vs last week</p>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Frequency:</span> Daily</p>
              <p><span className="font-semibold">Coverage:</span> Europe, Middle East</p>
              <p><span className="font-semibold">Reliability:</span> ★★★★★</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Benchmark Usage:</span> Most contract pricing formulas reference ICIS NEA or Platts pricing 
            with a negotiated differential (+/- $20-50/MT). Spot market transactions typically use latest published price.
          </p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Regional Price Differentials</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold text-gray-900">Region</th>
                <th className="text-left p-3 font-semibold text-gray-900">Basis</th>
                <th className="text-right p-3 font-semibold text-gray-900">Price ($/MT)</th>
                <th className="text-right p-3 font-semibold text-gray-900">Premium/Discount</th>
                <th className="text-left p-3 font-semibold text-gray-900">Reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900">Northeast Asia</td>
                <td className="p-3 text-gray-700">CFR</td>
                <td className="p-3 text-right font-semibold text-gray-900">$1,020</td>
                <td className="p-3 text-right text-green-600 font-semibold">Base</td>
                <td className="p-3 text-gray-600">High demand, limited supply</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900">Southeast Asia</td>
                <td className="p-3 text-gray-700">CFR</td>
                <td className="p-3 text-right font-semibold text-gray-900">$980</td>
                <td className="p-3 text-right text-orange-600 font-semibold">-$40</td>
                <td className="p-3 text-gray-600">Proximity to ME producers</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900">Middle East</td>
                <td className="p-3 text-gray-700">FOB</td>
                <td className="p-3 text-right font-semibold text-gray-900">$850</td>
                <td className="p-3 text-right text-red-600 font-semibold">-$170</td>
                <td className="p-3 text-gray-600">Low feedstock costs</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900">Europe (NWE)</td>
                <td className="p-3 text-gray-700">FD</td>
                <td className="p-3 text-right font-semibold text-gray-900">$1,050</td>
                <td className="p-3 text-right text-green-600 font-semibold">+$30</td>
                <td className="p-3 text-gray-600">High logistics costs</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900">US Gulf Coast</td>
                <td className="p-3 text-gray-700">FD</td>
                <td className="p-3 text-right font-semibold text-gray-900">$940</td>
                <td className="p-3 text-right text-orange-600 font-semibold">-$80</td>
                <td className="p-3 text-gray-600">Shale gas advantage</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900">India</td>
                <td className="p-3 text-gray-700">CFR</td>
                <td className="p-3 text-right font-semibold text-gray-900">$1,000</td>
                <td className="p-3 text-right text-orange-600 font-semibold">-$20</td>
                <td className="p-3 text-gray-600">Growing market, competitive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Quality Benchmarks</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">International Standards</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-2">Polymer Grade (Premium)</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• Purity: ≥99.95%</p>
                  <p>• Methane: &lt;50 ppm</p>
                  <p>• Acetylene: &lt;5 ppm</p>
                  <p>• Price Premium: +$30-50/MT</p>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="font-semibold text-purple-900 mb-2">Chemical Grade (Standard)</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• Purity: 99.5-99.95%</p>
                  <p>• Methane: &lt;200 ppm</p>
                  <p>• Acetylene: &lt;20 ppm</p>
                  <p>• Price Premium: Base</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Cost Benchmarks</h4>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-4">
                <p className="font-semibold text-green-900 mb-2">Production Cost Benchmarks</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Ethane cracking (US):</span>
                    <span className="font-semibold">$400-500/MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Naphtha cracking (Asia):</span>
                    <span className="font-semibold">$600-700/MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Naphtha cracking (Europe):</span>
                    <span className="font-semibold">$650-750/MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MTO process (China):</span>
                    <span className="font-semibold">$700-800/MT</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
                <p className="font-semibold text-yellow-900 mb-2">Logistics Cost Add-ons</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>ME to India freight:</span>
                    <span className="font-semibold">$80-120/MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>US to Asia freight:</span>
                    <span className="font-semibold">$180-250/MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage/handling:</span>
                    <span className="font-semibold">$15-25/MT/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Historical Price Trends</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Q4 2023</p>
            <p className="text-2xl font-bold text-gray-900">$1,180</p>
            <p className="text-xs text-red-600">↓ vs Q3</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Q1 2024</p>
            <p className="text-2xl font-bold text-gray-900">$1,050</p>
            <p className="text-xs text-red-600">↓ -11%</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Q2 2024</p>
            <p className="text-2xl font-bold text-gray-900">$980</p>
            <p className="text-xs text-red-600">↓ -6.7%</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-blue-200 border-2">
            <p className="text-sm text-gray-600 mb-1">Q3 2024</p>
            <p className="text-2xl font-bold text-blue-600">$1,020</p>
            <p className="text-xs text-green-600">↑ +4.1%</p>
          </div>
        </div>

        <div className="text-sm text-gray-700">
          <p className="font-semibold mb-2">Key Price Drivers:</p>
          <ul className="space-y-1 ml-4 list-disc">
            <li>Crude oil and naphtha price movements (correlation: 0.75)</li>
            <li>Seasonal demand patterns (Q4 peak for polyethylene production)</li>
            <li>Planned and unplanned production outages</li>
            <li>New capacity additions in Middle East and China</li>
            <li>Trade policies and tariff changes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
