"use client";

import { Search, Filter } from "lucide-react";

export default function ChemicalFilters() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or CAS..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Categories</option>
          <option>Organic</option>
          <option>Inorganic</option>
          <option>Polymers</option>
          <option>Specialty</option>
        </select>
        
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Applications</option>
          <option>Industrial</option>
          <option>Agricultural</option>
          <option>Pharmaceutical</option>
          <option>Consumer</option>
        </select>
        
        <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Filter className="h-5 w-5" />
          <span>More Filters</span>
        </button>
      </div>
    </div>
  );
}
