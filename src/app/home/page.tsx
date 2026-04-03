"use client";

import { useState } from "react";
import { Beaker, ArrowRight, Newspaper, TrendingUp, Globe, Users, TrendingUp as TrendingUpIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<any>(null);

  const researchBlogData = [
    {
      id: 1,
      type: "RESEARCH",
      title: "Sustainable Chemical Manufacturing: Green Technologies",
      author: "Dr. Anjali Mehta",
      date: "Jan 15, 2026",
      excerpt: "Implementing sustainable practices in chemical production...",
      fullContent: "This comprehensive research paper explores the implementation of sustainable practices in chemical manufacturing processes. The study focuses on green technologies that reduce environmental impact while maintaining production efficiency. Key findings include: \n\n• Novel catalytic processes that reduce energy consumption by 35%\n• Zero-waste manufacturing techniques for specialty chemicals\n• Integration of renewable energy sources in chemical plants\n• Advanced recycling methods for chemical byproducts\n\nThe research demonstrates that sustainable chemical manufacturing is not only environmentally responsible but also economically viable, with potential cost savings of up to 28% over traditional methods.",
      institution: "IIT Bombay - Department of Chemical Engineering",
      citations: 45,
      color: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      badgeColor: "bg-purple-600",
      textColor: "text-purple-600"
    },
    {
      id: 2,
      type: "BLOG",
      title: "Future of Agrochemicals in Indian Agriculture",
      author: "Industry Insights",
      date: "Jan 18, 2026",
      excerpt: "Modern agrochemicals transforming farming practices...",
      fullContent: "The Indian agrochemical industry is undergoing a revolutionary transformation, driven by technological innovation and sustainable farming practices. This blog explores the key trends shaping the future:\n\n**Precision Agriculture**: Smart agrochemicals that respond to soil conditions and crop needs, reducing waste by up to 40%.\n\n**Biological Alternatives**: Growing adoption of bio-pesticides and bio-fertilizers that are environmentally friendly and improve soil health.\n\n**Digital Integration**: IoT-enabled chemical application systems that optimize usage and reduce costs for farmers.\n\n**Regulatory Evolution**: New government policies promoting sustainable agrochemical practices and farmer education programs.\n\nThe future promises a balance between agricultural productivity and environmental sustainability, with Indian companies leading innovation in affordable, eco-friendly agrochemical solutions.",
      institution: "Chemical Industry Association of India",
      citations: null,
      color: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      badgeColor: "bg-blue-600",
      textColor: "text-blue-600"
    }
  ];

  const openModal = (content: any) => {
    setSelectedContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedContent(null);
  };

  const categories = [
    { name: "Petrochemicals", color: "from-red-500 to-orange-500", emoji: "⚗️", slug: "petrochemicals" },
    { name: "Agrochemicals", color: "from-green-500 to-emerald-500", emoji: "🌱", slug: "agrochemicals" },
    { name: "Pharmaceuticals", color: "from-blue-500 to-cyan-500", emoji: "💊", slug: "pharmaceuticals" },
    { name: "Speciality Chemicals", color: "from-purple-500 to-pink-500", emoji: "🔬", slug: "speciality-chemicals" },
    { name: "Basic Chemicals", color: "from-gray-500 to-slate-600", emoji: "🧪", slug: "basic-chemicals" },
    { name: "Consumer Chemicals", color: "from-yellow-500 to-amber-500", emoji: "🧴", slug: "consumer-chemicals" },
    { name: "Advance Chemicals", color: "from-indigo-500 to-violet-500", emoji: "⚡", slug: "advance-chemicals" }
  ];

  const breakingNews = [
    "India's Petrochemical Capacity to Double by 2030 - Major investments from Reliance and IOCL",
    "New Green Hydrogen Policy Announced - Government unveils $5B investment incentives",
    "Fertilizer Prices Drop 12% After New Subsidy Scheme - DAP and urea prices see significant reduction",
    "Export Ban Lifted on 26 Key Pharmaceutical APIs - Boost for Indian pharma exports",
    "BASF Opens New Specialty Chemicals Plant in Gujarat - ₹2,500 crore investment",
    "Crude Oil Prices Stable at $82/barrel - Impact on petrochemical margins expected"
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Breaking News Ticker */}
      <div className="mb-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg overflow-hidden shadow-lg">
        <div className="flex items-center">
          <div className="bg-red-700 px-4 py-3 flex items-center space-x-2 flex-shrink-0">
            <Newspaper className="h-5 w-5 text-white animate-pulse" />
            <span className="text-white font-bold text-sm uppercase tracking-wide">Breaking News</span>
          </div>
          <div className="flex-1 overflow-hidden py-3">
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              {[...breakingNews, ...breakingNews].map((news, index) => (
                <span key={index} className="text-white text-sm font-medium inline-flex items-center">
                  <span className="mx-3">•</span>
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Chemical Categories Section */}
      <div className="mb-8 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Chemical Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/categories/${category.slug}`}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group relative flex flex-col"
            >
              <div className="flex flex-col items-center text-center flex-1">
                <div className={`h-14 w-14 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition`}>
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <h3 className="text-sm font-bold text-blue-900 leading-tight">
                  {category.name}
                </h3>
              </div>
              <div className="flex justify-end mt-3">
                <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-2 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* International Chemical Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Left Side - International Information */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2" />
              Global Chemical Market
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-sm text-blue-100">Global Market Size</p>
                <p className="text-2xl font-bold">$5.7 Trillion</p>
                <p className="text-xs text-blue-200 mt-1">Growing at 4.8% CAGR</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-sm text-blue-100">India's Share</p>
                <p className="text-2xl font-bold">6.2%</p>
                <p className="text-xs text-blue-200 mt-1">$354 Billion market value</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">India-International Trade</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-3">
                <p className="text-sm font-semibold text-gray-800">Chemical Exports</p>
                <p className="text-lg font-bold text-green-600">$28.5 Billion</p>
                <p className="text-xs text-gray-500">↑ 12% YoY</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-3">
                <p className="text-sm font-semibold text-gray-800">Chemical Imports</p>
                <p className="text-lg font-bold text-orange-600">$42.3 Billion</p>
                <p className="text-xs text-gray-500">↑ 8% YoY</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <p className="text-sm font-semibold text-gray-800">Top Export Destinations</p>
                <p className="text-sm text-gray-700">USA, China, UAE, Brazil</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-3">
                <p className="text-sm font-semibold text-gray-800">Top Import Sources</p>
                <p className="text-sm text-gray-700">China, Saudi Arabia, USA</p>
              </div>
            </div>
          </div>

          {/* Market Trends Chart */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              India Chemical Sector Growth (2020-2026)
            </h3>
            <div className="relative h-64 bg-gradient-to-b from-blue-50 to-white rounded-lg p-4">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
                <span>$350B</span>
                <span>$280B</span>
                <span>$210B</span>
                <span>$140B</span>
                <span>$70B</span>
              </div>
              
              {/* Line Chart */}
              <div className="ml-12 h-full relative">
                <svg className="w-full h-full" viewBox="0 0 700 240" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="0" x2="700" y2="0" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="60" x2="700" y2="60" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="120" x2="700" y2="120" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="180" x2="700" y2="180" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="240" x2="700" y2="240" stroke="#e5e7eb" strokeWidth="1"/>
                  
                  {/* Area under line */}
                  <path
                    d="M 0 180 L 100 145 L 200 120 L 300 85 L 400 55 L 500 25 L 600 5 L 600 240 L 0 240 Z"
                    fill="url(#gradient)"
                    opacity="0.3"
                  />
                  
                  {/* Line */}
                  <path
                    d="M 0 180 L 100 145 L 200 120 L 300 85 L 400 55 L 500 25 L 600 5"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Data points */}
                  <circle cx="0" cy="180" r="5" fill="#2563eb" className="hover:r-7 cursor-pointer">
                    <title>2020: $165B (+3.2%)</title>
                  </circle>
                  <circle cx="100" cy="145" r="5" fill="#2563eb" className="hover:r-7 cursor-pointer">
                    <title>2021: $178B (+7.9%)</title>
                  </circle>
                  <circle cx="200" cy="120" r="5" fill="#2563eb" className="hover:r-7 cursor-pointer">
                    <title>2022: $195B (+9.6%)</title>
                  </circle>
                  <circle cx="300" cy="85" r="5" fill="#2563eb" className="hover:r-7 cursor-pointer">
                    <title>2023: $218B (+11.8%)</title>
                  </circle>
                  <circle cx="400" cy="55" r="5" fill="#2563eb" className="hover:r-7 cursor-pointer">
                    <title>2024: $245B (+12.4%)</title>
                  </circle>
                  <circle cx="500" cy="25" r="5" fill="#2563eb" className="hover:r-7 cursor-pointer">
                    <title>2025: $278B (+13.5%)</title>
                  </circle>
                  <circle cx="600" cy="5" r="5" fill="#10b981" className="hover:r-7 cursor-pointer">
                    <title>2026*: $310B (+11.5%)</title>
                  </circle>
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* X-axis labels */}
                <div className="flex justify-between mt-2 text-xs font-semibold text-gray-600">
                  <span>2020</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                  <span>2025</span>
                  <span className="text-green-600">2026*</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">*Projected values</p>
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-1"></div>
                  <span className="text-gray-600">Actual</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-gray-600">Projected</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - News & Industry Leaders */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {/* Left Column - News & Stocks */}
            <div className="space-y-4 flex flex-col h-full">
              {/* Industry News */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Newspaper className="h-6 w-6 mr-2 text-blue-600" />
                  Latest Industry News
                </h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-3 hover:bg-blue-50 p-2 rounded-r transition cursor-pointer">
                    <p className="font-semibold text-gray-800 text-sm">Tata Chemicals Announces ₹3,000 Cr Green Energy Investment</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago • Economic Times</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3 hover:bg-green-50 p-2 rounded-r transition cursor-pointer">
                    <p className="font-semibold text-gray-800 text-sm">India Becomes 3rd Largest Chemical Producer Globally</p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago • Business Standard</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3 hover:bg-purple-50 p-2 rounded-r transition cursor-pointer">
                    <p className="font-semibold text-gray-800 text-sm">CRISIL Upgrades Chemical Sector Outlook to 'Positive'</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago • Mint</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-3 hover:bg-orange-50 p-2 rounded-r transition cursor-pointer">
                    <p className="font-semibold text-gray-800 text-sm">UPL Ltd Signs $2B Deal with African Nations for Agrochemicals</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago • Reuters</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-3 hover:bg-red-50 p-2 rounded-r transition cursor-pointer">
                    <p className="font-semibold text-gray-800 text-sm">Reliance to Invest ₹75,000 Cr in New Chemical Manufacturing Units</p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago • Financial Express</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-3 hover:bg-indigo-50 p-2 rounded-r transition cursor-pointer">
                    <p className="font-semibold text-gray-800 text-sm">Indian Chemical Exports Reach Record $28.5 Billion in FY 2025-26</p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago • The Hindu</p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-3 hover:bg-pink-50 p-2 rounded-r transition cursor-pointer">
                    <p className="font-semibold text-gray-800 text-sm">BASF India Opens New R&D Center in Pune for Sustainable Solutions</p>
                    <p className="text-xs text-gray-500 mt-1">3 days ago • Livemint</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-3 hover:bg-teal-50 p-2 rounded-r transition cursor-pointer">
                    <p className="font-semibold text-gray-800 text-sm">Government Announces ₹10,000 Cr PLI Scheme for Specialty Chemicals</p>
                    <p className="text-xs text-gray-500 mt-1">3 days ago • Economic Times</p>
                  </div>
                </div>
              </div>

              {/* Chemical Industry Stocks */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <TrendingUpIcon className="h-6 w-6 mr-2 text-green-600" />
                  Chemical Industry Stocks
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800 text-sm">Reliance Ind.</p>
                        <p className="text-xs text-gray-500">NSE: RELIANCE</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-base text-gray-800">₹2,845</p>
                        <p className="text-xs text-green-600 font-semibold">▲ 2.4%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 border border-green-200 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800 text-sm">Tata Chemicals</p>
                        <p className="text-xs text-gray-500">NSE: TATACHEM</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-base text-gray-800">₹1,124</p>
                        <p className="text-xs text-green-600 font-semibold">▲ 1.8%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800 text-sm">UPL Limited</p>
                        <p className="text-xs text-gray-500">NSE: UPL</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-base text-gray-800">₹568</p>
                        <p className="text-xs text-green-600 font-semibold">▲ 3.2%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-3 border border-orange-200 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800 text-sm">PI Industries</p>
                        <p className="text-xs text-gray-500">NSE: PIIND</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-base text-gray-800">₹3,892</p>
                        <p className="text-xs text-red-600 font-semibold">▼ 0.5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Industry Leaders & Research */}
            <div className="space-y-4 flex flex-col h-full">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg border border-indigo-200 p-5 flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="h-6 w-6 mr-2 text-indigo-600" />
                Industry Leaders & Personalities
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-indigo-100 hover:shadow-md transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-200">
                      <Image
                        src="/mukesh-ambani.webp"
                        alt="Mukesh Ambani"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm">Mukesh Ambani</p>
                      <p className="text-xs text-gray-500">Chairman, Reliance Industries</p>
                      <p className="text-xs text-gray-700 mt-1">Announces new petrochemical complex in Jamnagar with 5 million MT capacity</p>
                      <p className="text-xs text-blue-600 mt-1">6 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-indigo-100 hover:shadow-md transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-green-200">
                      <Image
                        src="/jai-shroff.png"
                        alt="Jai Shroff"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm">Jai Shroff</p>
                      <p className="text-xs text-gray-500">CEO, UPL Limited</p>
                      <p className="text-xs text-gray-700 mt-1">Honored with 'Chemical Industry Leader of the Year' award for sustainable practices</p>
                      <p className="text-xs text-green-600 mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-indigo-100 hover:shadow-md transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-200">
                      <Image
                        src="/n-chandrasekaran.jpg"
                        alt="N. Chandrasekaran"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                      </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm">N. Chandrasekaran</p>
                      <p className="text-xs text-gray-500">Chairman, Tata Chemicals</p>
                      <p className="text-xs text-gray-700 mt-1">Launches initiative for carbon-neutral chemical manufacturing by 2030</p>
                      <p className="text-xs text-purple-600 mt-1">2 days ago</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-indigo-100 hover:shadow-md transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-yellow-200">
                      <Image
                        src="/kumar-mangalam.webp"
                        alt="Kumar Mangalam Birla"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm">Kumar Mangalam Birla</p>
                      <p className="text-xs text-gray-500">Chairman, Aditya Birla Group</p>
                      <p className="text-xs text-gray-700 mt-1">Expands chemical manufacturing footprint with ₹5,000 Cr investment in Gujarat</p>
                      <p className="text-xs text-yellow-600 mt-1">2 days ago</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-indigo-100 hover:shadow-md transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-200">
                      <Image
                        src="/pankaj-patel.jpg"
                        alt="Pankaj R. Patel"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm">Pankaj R. Patel</p>
                      <p className="text-xs text-gray-500">Chairman, Zydus Lifesciences</p>
                      <p className="text-xs text-gray-700 mt-1">Announces breakthrough in pharmaceutical chemical synthesis technology</p>
                      <p className="text-xs text-cyan-600 mt-1">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog & Research */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Beaker className="h-6 w-6 mr-2 text-purple-600" />
                Research & Blogs
              </h3>
              <div className="space-y-3">
                <div 
                  onClick={() => openModal(researchBlogData[0])}
                  className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-3 border border-purple-200 hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex items-start space-x-2 mb-2">
                    <div className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-bold">RESEARCH</div>
                    <span className="text-xs text-gray-500">Jan 15, 2026</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Sustainable Chemical Manufacturing: Green Technologies</h4>
                  <p className="text-xs text-gray-600 mb-2">Implementing sustainable practices in chemical production...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-600 font-semibold">Dr. Anjali Mehta</span>
                    <ArrowRight className="h-3 w-3 text-purple-600" />
                  </div>
                </div>

                <div 
                  onClick={() => openModal(researchBlogData[1])}
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-200 hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex items-start space-x-2 mb-2">
                    <div className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">BLOG</div>
                    <span className="text-xs text-gray-500">Jan 18, 2026</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Future of Agrochemicals in Indian Agriculture</h4>
                  <p className="text-xs text-gray-600 mb-2">Modern agrochemicals transforming farming practices...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 font-semibold">Industry Insights</span>
                    <ArrowRight className="h-3 w-3 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Research & Blog Details */}
      {modalOpen && selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedContent.color} p-6 border-b ${selectedContent.borderColor} sticky top-0 z-10`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`${selectedContent.badgeColor} text-white px-3 py-1 rounded text-sm font-bold`}>
                      {selectedContent.type}
                    </div>
                    <span className="text-sm text-gray-600">{selectedContent.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedContent.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className={`font-semibold ${selectedContent.textColor}`}>{selectedContent.author}</span>
                    {selectedContent.citations && (
                      <span>• {selectedContent.citations} citations</span>
                    )}
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="ml-4 p-2 hover:bg-white hover:bg-opacity-50 rounded-full transition"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Institution:</strong> {selectedContent.institution}
                </p>
              </div>
              
              <div className="prose prose-sm max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedContent.fullContent}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Beaker className={`h-5 w-5 ${selectedContent.textColor}`} />
                  <span className="text-sm text-gray-600">Chemical Industry Portal</span>
                </div>
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
