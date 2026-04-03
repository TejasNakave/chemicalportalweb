"use client";

import { Bell, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex-1"></div>
        
        <h1 className="text-2xl font-bold text-blue-600">Chemical Industry Portal</h1>
        
        <div className="flex-1 flex items-center justify-end space-x-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
