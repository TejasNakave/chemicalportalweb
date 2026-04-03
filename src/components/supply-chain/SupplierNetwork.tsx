import { Building2, Star } from "lucide-react";

export default function SupplierNetwork() {
  const suppliers = [
    { name: "ChemCorp International", location: "Germany", rating: 4.8, orders: 156 },
    { name: "Global Polymers Ltd", location: "USA", rating: 4.6, orders: 142 },
    { name: "Asia Chemical Solutions", location: "China", rating: 4.9, orders: 198 },
    { name: "EuroChem Industries", location: "Netherlands", rating: 4.7, orders: 134 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Supplier Network</h2>
      
      <div className="space-y-3">
        {suppliers.map((supplier) => (
          <div key={supplier.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Building2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{supplier.name}</p>
                <p className="text-sm text-gray-600">{supplier.location}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 mb-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-gray-900">{supplier.rating}</span>
              </div>
              <p className="text-xs text-gray-600">{supplier.orders} orders</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
