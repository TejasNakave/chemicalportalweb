import { Globe } from "lucide-react";

export default function TradeFlowMap() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Global Trade Flow</h2>
        <Globe className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Interactive trade flow visualization</p>
          <p className="text-sm text-gray-500 mt-2">Showing global chemical trade routes and volumes</p>
        </div>
      </div>
    </div>
  );
}
