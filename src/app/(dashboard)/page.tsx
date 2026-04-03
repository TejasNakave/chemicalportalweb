"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuickStats from "@/components/dashboard/QuickStats";
import GlobalMarketSize from "@/components/dashboard/GlobalMarketSize";
import SegmentContribution from "@/components/dashboard/SegmentContribution";
import TopTradedChemicals from "@/components/dashboard/TopTradedChemicals";
import PriceTrendHighlights from "@/components/dashboard/PriceTrendHighlights";
import DemandGrowthAlerts from "@/components/dashboard/DemandGrowthAlerts";
import RegulatoryUpdates from "@/components/dashboard/RegulatoryUpdates";
import IndustryShowcase from "@/components/dashboard/IndustryShowcase";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem("cip_auth_token");
      const user = localStorage.getItem("cip_user");

      if (!authToken || !user) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Industry Dashboard</h1>
        <p className="text-gray-600 mt-2">30-second pulse of the global chemical industry</p>
      </div>
      
      <QuickStats />
      
      <div className="mt-6">
        <GlobalMarketSize />
      </div>

      <div className="mt-6">
        <IndustryShowcase />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SegmentContribution />
        <TopTradedChemicals />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <PriceTrendHighlights />
        <DemandGrowthAlerts />
      </div>
      
      <div className="mt-6">
        <RegulatoryUpdates />
      </div>
    </div>
  );
}
