"use client";

import { Ship, Plane, Package, MapPin } from "lucide-react";

export default function LogisticsVisual() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">Global Logistics Network</h3>
        <p className="text-sm text-gray-600">Chemical transportation routes and modes</p>
      </div>

      {/* Visual Shipping Routes */}
      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-xl p-6 border-2 border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sea Freight */}
          <div className="bg-white rounded-lg p-6 border-2 border-blue-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Ship className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Sea Freight</h4>
                <p className="text-xs text-gray-600">Primary Mode - 85% Volume</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-800">Middle East → India</span>
                </div>
                <span className="text-sm font-bold text-blue-700">8-12 days</span>
              </div>
              <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-800">Asia Pacific → India</span>
                </div>
                <span className="text-sm font-bold text-blue-700">10-14 days</span>
              </div>
              <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-800">USA/Europe → India</span>
                </div>
                <span className="text-sm font-bold text-blue-700">28-35 days</span>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Average Cost</span>
                  <span className="font-bold text-blue-700">$85-140/MT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Air Freight */}
          <div className="bg-white rounded-lg p-6 border-2 border-purple-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Air Freight</h4>
                <p className="text-xs text-gray-600">Specialty/Urgent - 5% Volume</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-purple-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-800">Middle East → India</span>
                </div>
                <span className="text-sm font-bold text-purple-700">4-6 hours</span>
              </div>
              <div className="flex items-center justify-between bg-purple-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-800">Asia Pacific → India</span>
                </div>
                <span className="text-sm font-bold text-purple-700">6-8 hours</span>
              </div>
              <div className="flex items-center justify-between bg-purple-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-800">USA/Europe → India</span>
                </div>
                <span className="text-sm font-bold text-purple-700">12-18 hours</span>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Average Cost</span>
                  <span className="font-bold text-purple-700">$2,500-4,500/MT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logistics Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 text-center border border-blue-200">
            <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">38.7M</p>
            <p className="text-xs text-gray-600">MT/Year Capacity</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-green-200">
            <Ship className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">7</p>
            <p className="text-xs text-gray-600">Major Ports</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-orange-200">
            <div className="text-3xl mx-auto mb-2">⚡</div>
            <p className="text-2xl font-bold text-gray-900">13.8</p>
            <p className="text-xs text-gray-600">Avg Transit Days</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-purple-200">
            <div className="text-3xl mx-auto mb-2">💰</div>
            <p className="text-2xl font-bold text-gray-900">$105</p>
            <p className="text-xs text-gray-600">Avg Freight/MT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
