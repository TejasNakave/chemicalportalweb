import { Users } from "lucide-react";

export default function TradePartners() {
  const partners = [
    { country: "China", volume: "2.4M MT", value: "$3.2B", share: "32%" },
    { country: "USA", volume: "1.8M MT", value: "$2.4B", share: "24%" },
    { country: "Germany", volume: "1.2M MT", value: "$1.6B", share: "16%" },
    { country: "India", volume: "980K MT", value: "$1.3B", share: "13%" },
    { country: "Japan", volume: "750K MT", value: "$1.0B", share: "10%" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Top Trade Partners</h2>
        <Users className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {partners.map((partner, index) => (
          <div key={partner.country} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div>
                <p className="font-medium text-gray-800">{partner.country}</p>
                <p className="text-sm text-gray-600">{partner.volume}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900">{partner.value}</p>
              <p className="text-sm text-gray-600">{partner.share} market share</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
