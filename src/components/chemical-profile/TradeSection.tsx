import { Ship, Anchor, Plane } from "lucide-react";

export default function TradeSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Major Import Countries & Ports</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-3">Saudi Arabia</h4>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Key Ports:</span> Ras Tanura, Jubail</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Volume:</span> 1.06M MT/year</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">Transit Time:</span> 12-15 days via Arabian Sea</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-900 mb-3">UAE</h4>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Key Ports:</span> Jebel Ali, Abu Dhabi</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Volume:</span> 0.62M MT/year</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">Transit Time:</span> 10-12 days via Arabian Sea</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-900 mb-3">Singapore</h4>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Key Ports:</span> Port of Singapore</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Volume:</span> 0.50M MT/year</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">Transit Time:</span> 8-10 days via Bay of Bengal</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Indian Receiving Ports</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Anchor className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-bold text-gray-900">Hazira Port (Gujarat)</p>
                  <p className="text-sm text-gray-600">Primary receiving port - 42% of imports</p>
                </div>
              </div>
              <span className="font-semibold text-blue-600">1.18M MT</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Anchor className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-bold text-gray-900">Dahej Port (Gujarat)</p>
                  <p className="text-sm text-gray-600">Petrochemical hub - 28% of imports</p>
                </div>
              </div>
              <span className="font-semibold text-purple-600">0.78M MT</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Anchor className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-bold text-gray-900">Mundra Port (Gujarat)</p>
                  <p className="text-sm text-gray-600">Container terminal - 18% of imports</p>
                </div>
              </div>
              <span className="font-semibold text-green-600">0.50M MT</span>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Anchor className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-bold text-gray-900">Paradip Port (Odisha)</p>
                  <p className="text-sm text-gray-600">East coast facility - 12% of imports</p>
                </div>
              </div>
              <span className="font-semibold text-orange-600">0.34M MT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Ship className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Shipment Methods & Logistics</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Ship className="h-8 w-8 text-blue-600" />
              <h4 className="font-bold text-blue-900">LPG Carriers</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700"><span className="font-semibold">Method:</span> Pressurized/Refrigerated Tankers</p>
              <p className="text-gray-700"><span className="font-semibold">Capacity:</span> 5,000 - 80,000 m³</p>
              <p className="text-gray-700"><span className="font-semibold">Usage:</span> 85% of ethylene trade</p>
              <p className="text-gray-700"><span className="font-semibold">Temperature:</span> -104°C (liquefied)</p>
              <p className="text-gray-700"><span className="font-semibold">Pressure:</span> Atmospheric (refrigerated)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Ship className="h-8 w-8 text-purple-600" />
              <h4 className="font-bold text-purple-900">Pipeline</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700"><span className="font-semibold">Method:</span> Direct pipeline transmission</p>
              <p className="text-gray-700"><span className="font-semibold">Range:</span> Regional (up to 500 km)</p>
              <p className="text-gray-700"><span className="font-semibold">Usage:</span> 10% (integrated complexes)</p>
              <p className="text-gray-700"><span className="font-semibold">Advantage:</span> Continuous supply</p>
              <p className="text-gray-700"><span className="font-semibold">Limitation:</span> Fixed route infrastructure</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Plane className="h-8 w-8 text-green-600" />
              <h4 className="font-bold text-green-900">ISO Containers</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700"><span className="font-semibold">Method:</span> Specialized cryogenic containers</p>
              <p className="text-gray-700"><span className="font-semibold">Capacity:</span> 20-40 ft containers</p>
              <p className="text-gray-700"><span className="font-semibold">Usage:</span> 5% (small volumes)</p>
              <p className="text-gray-700"><span className="font-semibold">Advantage:</span> Flexibility, intermodal</p>
              <p className="text-gray-700"><span className="font-semibold">Cost:</span> Higher per unit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 bg-yellow-50">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Trade Documentation & Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">Bill of Lading (Marine)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">Certificate of Origin</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">Certificate of Analysis (CoA)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">Material Safety Data Sheet (MSDS)</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">Commercial Invoice</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">Packing List</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">Insurance Certificate</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">Import License (if applicable)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
