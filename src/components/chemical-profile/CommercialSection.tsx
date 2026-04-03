export default function CommercialSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Packaging Options</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">Bulk Liquid (Cryogenic)</h4>
              <p className="text-sm text-gray-700">Pressurized/refrigerated tanks at -104°C, 5,000-80,000 m³ capacity</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-900 mb-2">ISO Containers</h4>
              <p className="text-sm text-gray-700">20ft/40ft cryogenic containers, 20-40 MT capacity</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-900 mb-2">Pipeline</h4>
              <p className="text-sm text-gray-700">Direct transmission for integrated complexes</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Minimum Order Quantity (MOQ)</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Spot Market (Bulk)</p>
              <p className="text-3xl font-bold text-blue-900">5,000 MT</p>
              <p className="text-sm text-gray-600 mt-1">Typical LPG carrier minimum</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Contract Supply</p>
              <p className="text-3xl font-bold text-purple-900">1,000 MT/month</p>
              <p className="text-sm text-gray-600 mt-1">Long-term agreements</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">ISO Container</p>
              <p className="text-3xl font-bold text-green-900">20 MT</p>
              <p className="text-sm text-gray-600 mt-1">Small volume buyers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Payment & Credit Terms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
            <h4 className="font-bold text-blue-900 mb-3">Spot Transactions</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• LC at sight (most common)</li>
              <li>• T/T advance payment</li>
              <li>• 100% payment before shipment</li>
              <li>• No credit period</li>
            </ul>
          </div>
          <div className="border-2 border-purple-200 rounded-lg p-5 bg-purple-50">
            <h4 className="font-bold text-purple-900 mb-3">Contract Supply</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 30-60 days credit</li>
              <li>• LC with usance</li>
              <li>• Bank guarantee backed</li>
              <li>• Monthly invoicing</li>
            </ul>
          </div>
          <div className="border-2 border-green-200 rounded-lg p-5 bg-green-50">
            <h4 className="font-bold text-green-900 mb-3">Established Customers</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 60-90 days credit</li>
              <li>• Open account terms</li>
              <li>• Volume discounts</li>
              <li>• Flexible payment options</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Incoterms & Delivery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">FOB (Free on Board)</h4>
              <p className="text-sm text-gray-600 mb-2">Seller delivers to loading port, buyer handles shipping</p>
              <p className="text-xs text-gray-500">Most common for large volumes</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">CFR (Cost and Freight)</h4>
              <p className="text-sm text-gray-600 mb-2">Seller pays freight to destination port</p>
              <p className="text-xs text-gray-500">Insurance borne by buyer</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">CIF (Cost, Insurance, Freight)</h4>
              <p className="text-sm text-gray-600 mb-2">Seller pays freight and insurance to destination</p>
              <p className="text-xs text-gray-500">Preferred by many buyers</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">DAP (Delivered at Place)</h4>
              <p className="text-sm text-gray-600 mb-2">Seller delivers to named destination</p>
              <p className="text-xs text-gray-500">All risks until delivery point</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">EXW (Ex Works)</h4>
              <p className="text-sm text-gray-600 mb-2">Buyer collects from seller's premises</p>
              <p className="text-xs text-gray-500">Rarely used for ethylene</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">DDP (Delivered Duty Paid)</h4>
              <p className="text-sm text-gray-600 mb-2">Seller handles all costs including duties</p>
              <p className="text-xs text-gray-500">Premium pricing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Pricing Mechanisms</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-3">
            <span className="font-bold text-yellow-600">1.</span>
            <div>
              <p className="font-semibold text-gray-900">Spot Market Pricing</p>
              <p className="text-gray-700">Based on current supply-demand, typically premium over naphtha crack spread</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="font-bold text-yellow-600">2.</span>
            <div>
              <p className="font-semibold text-gray-900">Contract Pricing</p>
              <p className="text-gray-700">Monthly average of regional benchmarks (ICIS, PLATTS) +/- negotiated differential</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="font-bold text-yellow-600">3.</span>
            <div>
              <p className="font-semibold text-gray-900">Formula-based</p>
              <p className="text-gray-700">Linked to feedstock costs (naphtha, crude oil) with conversion margin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
