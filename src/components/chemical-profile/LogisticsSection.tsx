export default function LogisticsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Storage Requirements</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h4 className="font-bold text-blue-900 mb-3">Cryogenic Storage Tanks</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold">Temperature:</span> -104°C (Liquefied state)</p>
                <p><span className="font-semibold">Pressure:</span> Atmospheric or low pressure (1-5 bar)</p>
                <p><span className="font-semibold">Material:</span> Stainless steel with insulation</p>
                <p><span className="font-semibold">Capacity:</span> 1,000 - 50,000 m³</p>
                <p><span className="font-semibold">Type:</span> Double-wall vacuum insulated</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
              <h4 className="font-bold text-purple-900 mb-3">Pressurized Storage</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold">Temperature:</span> Ambient</p>
                <p><span className="font-semibold">Pressure:</span> 50-70 bar (high pressure)</p>
                <p><span className="font-semibold">Material:</span> High-grade carbon steel</p>
                <p><span className="font-semibold">Capacity:</span> 100 - 5,000 m³</p>
                <p><span className="font-semibold">Type:</span> Spherical or cylindrical vessels</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-yellow-900 mb-2">⚠️ Safety Requirements</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                <li>Fire detection and suppression systems</li>
                <li>Gas leak detection sensors</li>
                <li>Emergency venting systems</li>
                <li>Grounding and lightning protection</li>
                <li>Minimum 50m safety distance from boundaries</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Transit Time (to India)</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-blue-50 to-white">
              <div>
                <p className="font-bold text-gray-900">Middle East → Indian Ports</p>
                <p className="text-sm text-gray-600">Saudi Arabia, UAE, Qatar</p>
              </div>
              <span className="text-2xl font-bold text-blue-600">10-15 days</span>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-purple-50 to-white">
              <div>
                <p className="font-bold text-gray-900">Southeast Asia → India</p>
                <p className="text-sm text-gray-600">Singapore, Malaysia</p>
              </div>
              <span className="text-2xl font-bold text-purple-600">8-10 days</span>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-green-50 to-white">
              <div>
                <p className="font-bold text-gray-900">East Asia → India</p>
                <p className="text-sm text-gray-600">China, South Korea</p>
              </div>
              <span className="text-2xl font-bold text-green-600">12-16 days</span>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-orange-50 to-white">
              <div>
                <p className="font-bold text-gray-900">USA → India</p>
                <p className="text-sm text-gray-600">Gulf Coast</p>
              </div>
              <span className="text-2xl font-bold text-orange-600">25-30 days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Infrastructure Requirements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Port Infrastructure</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-gray-900">Deep Water Berth</p>
                  <p className="text-sm text-gray-600">Minimum 12m draft for LPG carriers</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-gray-900">Marine Loading Arms</p>
                  <p className="text-sm text-gray-600">Cryogenic compatible unloading systems</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-medium text-gray-900">Jetty with Safety Zones</p>
                  <p className="text-sm text-gray-600">Minimum 500m safety buffer</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-medium text-gray-900">Emergency Response</p>
                  <p className="text-sm text-gray-600">Fire-fighting and spill containment</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Plant/Facility Requirements</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-gray-900">Cryogenic Pumps & Compressors</p>
                  <p className="text-sm text-gray-600">Low-temperature handling equipment</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-gray-900">Vaporization Units</p>
                  <p className="text-sm text-gray-600">For conversion to gaseous state</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-medium text-gray-900">Pipeline Network</p>
                  <p className="text-sm text-gray-600">Insulated transfer lines to processing units</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-medium text-gray-900">Control Systems</p>
                  <p className="text-sm text-gray-600">DCS for monitoring temperature, pressure, flow</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-900 mb-4">Logistics Challenges & Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-red-800 mb-3">Technical Challenges</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Maintaining cryogenic temperature during transit</li>
              <li>• Boil-off gas management (typically 0.05-0.15% per day)</li>
              <li>• Specialized handling equipment required</li>
              <li>• High capital investment for storage infrastructure</li>
              <li>• Limited number of certified carriers globally</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-800 mb-3">Commercial Challenges</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• High freight costs (20-30% of product value)</li>
              <li>• Demurrage charges for delays</li>
              <li>• Weather-dependent shipping schedules</li>
              <li>• Insurance premiums for hazardous cargo</li>
              <li>• Port congestion during peak demand seasons</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
