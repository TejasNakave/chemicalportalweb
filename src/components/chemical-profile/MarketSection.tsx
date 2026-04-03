import { Globe, Factory, TrendingUp, BarChart } from "lucide-react";

export default function MarketSection() {
  const topProducers = [
    { company: "Sinopec", country: "China", capacity: "32.5M MT/year", share: "15.2%" },
    { company: "ExxonMobil", country: "USA", capacity: "28.8M MT/year", share: "13.5%" },
    { company: "Saudi Aramco", country: "Saudi Arabia", capacity: "24.2M MT/year", share: "11.3%" },
    { company: "Dow Chemical", country: "USA", capacity: "21.5M MT/year", share: "10.1%" },
    { company: "Shell", country: "Netherlands", capacity: "18.7M MT/year", share: "8.8%" },
    { company: "LyondellBasell", country: "USA", capacity: "16.3M MT/year", share: "7.6%" },
    { company: "SABIC", country: "Saudi Arabia", capacity: "15.1M MT/year", share: "7.1%" },
    { company: "TotalEnergies", country: "France", capacity: "12.8M MT/year", share: "6.0%" },
  ];

  const regionalProduction = [
    { region: "Asia Pacific", production: "98.5M MT", capacity: "112.3M MT", utilization: "87.7%", growth: "+6.8%" },
    { region: "North America", production: "42.3M MT", capacity: "48.9M MT", utilization: "86.5%", growth: "+3.2%" },
    { region: "Middle East", production: "38.7M MT", capacity: "42.1M MT", utilization: "91.9%", growth: "+9.1%" },
    { region: "Europe", production: "28.4M MT", capacity: "34.2M MT", utilization: "83.0%", growth: "+1.8%" },
    { region: "Latin America", production: "8.2M MT", capacity: "9.8M MT", utilization: "83.7%", growth: "+4.5%" },
    { region: "Africa", production: "2.3M MT", capacity: "3.1M MT", utilization: "74.2%", growth: "+5.3%" },
  ];

  return (
    <div className="space-y-6">
      {/* Global Production Overview */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="flex items-center space-x-3 mb-6">
          <Globe className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Global Production Overview</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Total Global Production</p>
            <p className="text-3xl font-bold text-blue-600">218.4M MT</p>
            <p className="text-sm text-green-600 font-medium mt-1">+5.8% YoY</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Global Capacity</p>
            <p className="text-3xl font-bold text-purple-600">250.4M MT</p>
            <p className="text-sm text-gray-600 font-medium mt-1">Installed</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Capacity Utilization</p>
            <p className="text-3xl font-bold text-green-600">87.2%</p>
            <p className="text-sm text-gray-600 font-medium mt-1">Global Average</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Market Value</p>
            <p className="text-3xl font-bold text-orange-600">$186B</p>
            <p className="text-sm text-green-600 font-medium mt-1">+8.2% YoY</p>
          </div>
        </div>
      </div>

      {/* Top Producers */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Factory className="h-6 w-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-800">Top Global Producers</h3>
        </div>

        <div className="space-y-3">
          {topProducers.map((producer, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{producer.company}</p>
                    <p className="text-sm text-gray-600">{producer.country}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{producer.capacity}</p>
                  <p className="text-sm text-blue-600 font-medium">{producer.share} market share</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Production & Capacity */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-bold text-gray-800">Regional Production & Capacity Utilization</h3>
        </div>

        <div className="space-y-4">
          {regionalProduction.map((region, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900">{region.region}</h4>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    parseFloat(region.utilization) > 85 
                      ? 'bg-green-100 text-green-700' 
                      : parseFloat(region.utilization) > 75
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {region.utilization} Utilization
                  </span>
                  <span className="text-sm font-medium text-green-600">{region.growth}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-600">Production</p>
                  <p className="text-lg font-bold text-gray-900">{region.production}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Capacity</p>
                  <p className="text-lg font-bold text-gray-900">{region.capacity}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Spare Capacity</p>
                  <p className="text-lg font-bold text-blue-600">
                    {(parseFloat(region.capacity.replace('M MT', '')) - parseFloat(region.production.replace('M MT', ''))).toFixed(1)}M MT
                  </p>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: region.utilization }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Trends */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="h-6 w-6 text-orange-600" />
          <h3 className="text-xl font-bold text-gray-800">Market Trends & Outlook</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">Growth Drivers</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Rising demand for polyethylene packaging in e-commerce</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Infrastructure development in emerging markets</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Automotive lightweight materials adoption</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Growing medical device manufacturing</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-bold text-red-900 mb-3">Challenges</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Volatile crude oil and naphtha feedstock prices</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Stringent environmental regulations on plastics</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Overcapacity in certain regions (China, Middle East)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Energy-intensive production process costs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">📊 5-Year Market Forecast (2026-2030)</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Projected CAGR:</p>
              <p className="font-bold text-blue-900">5.2%</p>
            </div>
            <div>
              <p className="text-gray-600">2030 Production:</p>
              <p className="font-bold text-blue-900">275M MT</p>
            </div>
            <div>
              <p className="text-gray-600">2030 Market Value:</p>
              <p className="font-bold text-blue-900">$235B</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
