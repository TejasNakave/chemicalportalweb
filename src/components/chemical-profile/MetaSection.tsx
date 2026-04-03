export default function MetaSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Data Sources</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-blue-900">Market Intelligence</h4>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs font-semibold rounded-full">PRIMARY</span>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• ICIS Chemical Business</li>
                <li>• Platts Petrochemical Analytics</li>
                <li>• Argus Media</li>
                <li>• IHS Markit</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-purple-900">Trade Data</h4>
                <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs font-semibold rounded-full">OFFICIAL</span>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• DGCI&S (India Customs)</li>
                <li>• UN Comtrade</li>
                <li>• Trade Map (ITC)</li>
                <li>• Indian Ports Association</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-green-900">Production & Capacity</h4>
                <span className="px-3 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full">VERIFIED</span>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Company annual reports</li>
                <li>• OPEC reports</li>
                <li>• IEA statistics</li>
                <li>• National petrochemical associations</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-orange-900">Regulatory & Compliance</h4>
                <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs font-semibold rounded-full">OFFICIAL</span>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• DGFT (India)</li>
                <li>• ECHA (EU REACH)</li>
                <li>• EPA (USA)</li>
                <li>• WTO Trade Database</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Update Frequency</h3>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-green-900">Price Data</h4>
                <span className="text-2xl font-bold text-green-600">Daily</span>
              </div>
              <p className="text-sm text-gray-700">Updated every business day by 6 PM IST</p>
              <p className="text-xs text-gray-600 mt-2">Sources: ICIS, Platts, Argus</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-blue-900">Trade Statistics</h4>
                <span className="text-2xl font-bold text-blue-600">Monthly</span>
              </div>
              <p className="text-sm text-gray-700">Released by 15th of following month</p>
              <p className="text-xs text-gray-600 mt-2">Sources: DGCI&S, customs data</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-purple-900">Production Data</h4>
                <span className="text-2xl font-bold text-purple-600">Quarterly</span>
              </div>
              <p className="text-sm text-gray-700">Published within 45 days of quarter end</p>
              <p className="text-xs text-gray-600 mt-2">Sources: Company reports, industry data</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-orange-900">Regulatory Updates</h4>
                <span className="text-2xl font-bold text-orange-600">Real-time</span>
              </div>
              <p className="text-sm text-gray-700">Alerts sent within 24 hours of announcement</p>
              <p className="text-xs text-gray-600 mt-2">Sources: Official government portals</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Data Format & Accessibility</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
            <h4 className="font-bold text-blue-900 mb-4">Available Formats</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="h-6 w-6 bg-blue-600 text-white rounded flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-gray-700">Web Dashboard (Interactive)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-6 w-6 bg-blue-600 text-white rounded flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-gray-700">Excel/CSV Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-6 w-6 bg-blue-600 text-white rounded flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-gray-700">PDF Reports</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-6 w-6 bg-blue-600 text-white rounded flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-gray-700">API Access (JSON/XML)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-6 w-6 bg-blue-600 text-white rounded flex items-center justify-center text-xs">✓</span>
                <span className="text-sm text-gray-700">Email Alerts</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-purple-200 rounded-lg p-5 bg-purple-50">
            <h4 className="font-bold text-purple-900 mb-4">Historical Data</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-purple-800">Price History</p>
                <p>10 years of daily data</p>
              </div>
              <div>
                <p className="font-semibold text-purple-800">Trade Data</p>
                <p>15 years (monthly)</p>
              </div>
              <div>
                <p className="font-semibold text-purple-800">Production Stats</p>
                <p>20 years (quarterly/annual)</p>
              </div>
              <div>
                <p className="font-semibold text-purple-800">Regulatory Archive</p>
                <p>Complete since 2010</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-5 bg-green-50">
            <h4 className="font-bold text-green-900 mb-4">Access Levels</h4>
            <div className="space-y-3">
              <div className="bg-white border border-green-200 rounded p-3">
                <p className="font-semibold text-green-800 text-sm">Basic (Free)</p>
                <p className="text-xs text-gray-600">Limited historical data</p>
              </div>
              <div className="bg-white border border-green-200 rounded p-3">
                <p className="font-semibold text-green-800 text-sm">Professional</p>
                <p className="text-xs text-gray-600">Full access, downloads</p>
              </div>
              <div className="bg-white border border-green-200 rounded p-3">
                <p className="font-semibold text-green-800 text-sm">Enterprise</p>
                <p className="text-xs text-gray-600">API + custom reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Last Updated Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Identity & Properties</p>
            <p className="font-bold text-gray-900">Oct 15, 2024</p>
            <p className="text-xs text-green-600 mt-1">✓ Verified</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Market Data</p>
            <p className="font-bold text-gray-900">Dec 18, 2024</p>
            <p className="text-xs text-green-600 mt-1">✓ Current</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Trade Statistics</p>
            <p className="font-bold text-gray-900">Nov 30, 2024</p>
            <p className="text-xs text-blue-600 mt-1">📊 Q3 2024 data</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Regulatory Info</p>
            <p className="font-bold text-gray-900">Dec 10, 2024</p>
            <p className="text-xs text-green-600 mt-1">✓ Up-to-date</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Data Quality & Reliability</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Validation Process</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">✓</span>
                <p>Cross-verification with multiple sources</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">✓</span>
                <p>Automated anomaly detection algorithms</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">✓</span>
                <p>Expert review for significant deviations</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">✓</span>
                <p>Monthly data quality audits</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Reliability Indicators</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                <span className="text-sm text-gray-700">Data Accuracy</span>
                <span className="font-bold text-green-600">98.5%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                <span className="text-sm text-gray-700">Update Timeliness</span>
                <span className="font-bold text-green-600">99.2%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                <span className="text-sm text-gray-700">Source Verification</span>
                <span className="font-bold text-green-600">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5">
        <h4 className="font-bold text-yellow-900 mb-3">📌 Data Usage Guidelines</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>• Price data is indicative and should be validated before commercial decisions</p>
          <p>• Trade statistics have a 30-45 day lag from actual transaction dates</p>
          <p>• Production capacity data is based on nameplate capacity; actual utilization may vary</p>
          <p>• Regulatory information is updated upon official notification; check original sources for legal compliance</p>
          <p>• All data © Chemical Industry Portal 2024. Redistribution requires written permission</p>
        </div>
      </div>
    </div>
  );
}
