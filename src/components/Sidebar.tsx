"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  Home, 
  Beaker, 
  TrendingUp, 
  Globe, 
  Truck, 
  Shield, 
  BarChart3, 
  FileText, 
  Users,
  ChevronLeft,
  ChevronRight,
  Layout
} from "lucide-react";

const menuItems = [
  { name: "Home", href: "/home", icon: Layout },
  // { name: "Dashboard", href: "/", icon: Home },
  // { name: "Chemical Master", href: "/chemical-master", icon: Beaker },
  // { name: "Market Intelligence", href: "/market-intelligence", icon: TrendingUp },
  // { name: "Trade Intelligence", href: "/trade-intelligence", icon: Globe },
  // { name: "Supply Chain", href: "/supply-chain", icon: Truck },
  // { name: "Compliance", href: "/compliance", icon: Shield },
  // { name: "Analytics", href: "/analytics", icon: BarChart3 },
  // { name: "Reports", href: "/reports", icon: FileText },
  // { name: "User Management", href: "/user-management", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('sidebar_collapsed');
    if (savedState !== null) {
      setIsCollapsed(savedState === 'true');
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebar_collapsed', String(newState));
  };

  return (
    <aside className={`bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-6 relative">
        <div className={`flex items-center mb-8 ${isCollapsed ? 'justify-center' : 'space-x-2'}`}>
          <Beaker className="h-8 w-8 text-blue-300" />
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold">ChemPortal</h1>
              <p className="text-xs text-blue-300">Industry Intelligence</p>
            </div>
          )}
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center ${isCollapsed ? 'justify-center px-2' : 'space-x-3 px-4'} py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-blue-100 hover:bg-blue-700 hover:text-white"
                }`}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className="h-5 w-5" />
                {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-6 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-1.5 shadow-lg transition-all duration-200 z-10"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
    </aside>
  );
}
