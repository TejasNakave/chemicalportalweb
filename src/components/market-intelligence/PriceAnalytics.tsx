import { DollarSign } from "lucide-react";

export default function PriceAnalytics() {
  const prices = [
    { product: "Ethylene", current: "$1,234", avg: "$1,189", change: "+3.8%" },
    { product: "Propylene", current: "$987", avg: "$965", change: "+2.3%" },
    { product: "Benzene", current: "$1,456", avg: "$1,478", change: "-1.5%" },
    { product: "Methanol", current: "$456", avg: "$447", change: "+2.0%" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Price Analytics</h2>
        <DollarSign className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {prices.map((price) => (
          <div key={price.product} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-800">{price.product}</h3>
              <span className={`text-sm font-medium ${
                price.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {price.change}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600">Current</p>
                <p className="text-lg font-bold text-gray-900">{price.current}/MT</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600">30-day Avg</p>
                <p className="text-lg font-semibold text-gray-700">{price.avg}/MT</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
