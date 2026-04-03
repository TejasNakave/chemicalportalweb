"use client";

import { FileText, Calendar, Download } from "lucide-react";
import { useState } from "react";

export default function ReportGenerator() {
  const [selectedType, setSelectedType] = useState("market");

  const reportTypes = [
    { id: "market", label: "Market Analysis", icon: FileText },
    { id: "compliance", label: "Compliance Report", icon: FileText },
    { id: "trade", label: "Trade Intelligence", icon: FileText },
    { id: "supply", label: "Supply Chain", icon: FileText },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Generate Custom Report</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
          <div className="grid grid-cols-2 gap-3">
            {reportTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center space-x-2 p-3 border-2 rounded-lg transition ${
                    selectedType === type.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${selectedType === type.id ? "text-blue-600" : "text-gray-600"}`} />
                  <span className={`text-sm font-medium ${selectedType === type.id ? "text-blue-900" : "text-gray-700"}`}>
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>PDF Document</option>
            <option>Excel Spreadsheet</option>
            <option>CSV Data</option>
            <option>PowerPoint Presentation</option>
          </select>
        </div>
        
        <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
          <Download className="h-5 w-5" />
          <span>Generate Report</span>
        </button>
      </div>
    </div>
  );
}
