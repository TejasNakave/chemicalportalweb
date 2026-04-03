import { MapPin, TrendingUp, Factory, Users } from "lucide-react";

export default function IndiaMarketSection() {
  const industryConsumption = [
    { industry: "Packaging & Films", consumption: "2.8M MT", share: "42%", growth: "+8.5%" },
    { industry: "Pipes & Fittings", consumption: "1.2M MT", share: "18%", growth: "+12.3%" },
    { industry: "Automotive", consumption: "0.9M MT", share: "14%", growth: "+6.8%" },
    { industry: "Textiles", consumption: "0.7M MT", share: "10%", growth: "+5.2%" },
    { industry: "Consumer Goods", consumption: "0.6M MT", share: "9%", growth: "+7.1%" },
    { industry: "Others", consumption: "0.5M MT", share: "7%", growth: "+4.5%" },
  ];

  return (
    <div className="space-y-6">
      {/* India Market Overview */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="flex items-center space-x-3 mb-6">
          <MapPin className="h-6 w-6 text-orange-600" />
          <h3 className="text-xl font-bold text-gray-800">India Market Overview</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
            <p className="text-sm text-gray-600 mb-2">Total Demand</p>
            <p className="text-3xl font-bold text-orange-600">6.7M MT</p>
            <p className="text-sm text-green-600 font-medium mt-1">+7.8% YoY</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
            <p className="text-sm text-gray-600 mb-2">Domestic Production</p>
            <p className="text-3xl font-bold text-blue-600">4.2M MT</p>
            <p className="text-sm text-gray-600 font-medium mt-1">62.7% self-sufficiency</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
            <p className="text-sm text-gray-600 mb-2">Import Volume</p>
            <p className="text-3xl font-bold text-purple-600">2.8M MT</p>
            <p className="text-sm text-orange-600 font-medium mt-1">41.8% of demand</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 mb-2">Export Volume</p>
            <p className="text-3xl font-bold text-green-600">0.3M MT</p>
            <p className="text-sm text-gray-600 font-medium mt-1">7.1% of production</p>
          </div>
        </div>
      </div>

      {/* Domestic Production */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Factory className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Domestic Production Facilities</h3>
          </div>

          <div className="space-y-3">
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-blue-900">Reliance Industries Ltd.</h4>
                <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-bold">Market Leader</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Location:</p>
                  <p className="font-semibold text-gray-900">Jamnagar, Gujarat</p>
                </div>
                <div>
                  <p className="text-gray-600">Capacity:</p>
                  <p className="font-semibold text-gray-900">2.5M MT/year</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">IOCL - Panipat Naphtha Cracker</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Location:</p>
                  <p className="font-semibold text-gray-900">Panipat, Haryana</p>
                </div>
                <div>
                  <p className="text-gray-600">Capacity:</p>
                  <p className="font-semibold text-gray-900">0.8M MT/year</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">GAIL - Pata Complex</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Location:</p>
                  <p className="font-semibold text-gray-900">Pata, UP</p>
                </div>
                <div>
                  <p className="text-gray-600">Capacity:</p>
                  <p className="font-semibold text-gray-900">0.5M MT/year</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Haldia Petrochemicals</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Location:</p>
                  <p className="font-semibold text-gray-900">Haldia, West Bengal</p>
                </div>
                <div>
                  <p className="text-gray-600">Capacity:</p>
                  <p className="font-semibold text-gray-900">0.4M MT/year</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700"><span className="font-semibold">Total Installed Capacity:</span> 5.1M MT/year</p>
            <p className="text-sm text-gray-700"><span className="font-semibold">Average Utilization:</span> 82.4%</p>
          </div>
        </div>

        {/* Consumption by Industry */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">Consumption by Industry</h3>
          </div>

          <div className="space-y-4">
            {industryConsumption.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{item.industry}</h4>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-semibold text-blue-600">{item.share}</span>
                    <span className="text-sm font-medium text-green-600">{item.growth}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">{item.consumption}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                    style={{ width: item.share }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Import/Export Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Import Analysis</h3>
          
          <div className="mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Import Value</p>
                <p className="text-2xl font-bold text-purple-600">$3.2B</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Import Volume</p>
                <p className="text-2xl font-bold text-purple-600">2.8M MT</p>
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-gray-800 mb-3">Top Import Sources</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-900">Saudi Arabia</span>
              <span className="text-sm font-semibold text-gray-700">38%  • 1.06M MT</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-900">UAE</span>
              <span className="text-sm font-semibold text-gray-700">22%  • 0.62M MT</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-900">Singapore</span>
              <span className="text-sm font-semibold text-gray-700">18%  • 0.50M MT</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-900">Qatar</span>
              <span className="text-sm font-semibold text-gray-700">12%  • 0.34M MT</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-medium text-gray-900">Others</span>
              <span className="text-sm font-semibold text-gray-700">10%  • 0.28M MT</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Export Analysis</h3>
          
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Export Value</p>
                <p className="text-2xl font-bold text-green-600">$340M</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Export Volume</p>
                <p className="text-2xl font-bold text-green-600">0.3M MT</p>
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-gray-800 mb-3">Top Export Destinations</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-900">Bangladesh</span>
              <span className="text-sm font-semibold text-gray-700">35%  • 0.105M MT</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-900">Sri Lanka</span>
              <span className="text-sm font-semibold text-gray-700">25%  • 0.075M MT</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-900">Nepal</span>
              <span className="text-sm font-semibold text-gray-700">20%  • 0.060M MT</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-900">Vietnam</span>
              <span className="text-sm font-semibold text-gray-700">12%  • 0.036M MT</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-medium text-gray-900">Others</span>
              <span className="text-sm font-semibold text-gray-700">8%  • 0.024M MT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Outlook */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="h-6 w-6 text-orange-600" />
          <h3 className="text-xl font-bold text-gray-800">India Market Outlook & Trends</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">Growth Opportunities</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Government's "Make in India" initiative boosting domestic production</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Rapid urbanization driving packaging and construction demand</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>New cracker projects planned in Gujarat and Odisha</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Growing automotive and consumer goods manufacturing</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h4 className="font-bold text-orange-900 mb-3">Challenges</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>High dependence on imports (41.8% of demand)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Limited domestic naphtha and ethane feedstock availability</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Infrastructure constraints at ports and storage facilities</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Competition from low-cost Middle Eastern producers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">📊 India Market Forecast (2026-2030)</p>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Projected CAGR:</p>
              <p className="font-bold text-blue-900">8.5%</p>
            </div>
            <div>
              <p className="text-gray-600">2030 Demand:</p>
              <p className="font-bold text-blue-900">9.2M MT</p>
            </div>
            <div>
              <p className="text-gray-600">2030 Production:</p>
              <p className="font-bold text-blue-900">6.8M MT</p>
            </div>
            <div>
              <p className="text-gray-600">Self-sufficiency Target:</p>
              <p className="font-bold text-blue-900">74%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
