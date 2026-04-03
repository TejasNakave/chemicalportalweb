import { Factory, Package, Car, Building2, Zap, ShoppingBag } from "lucide-react";

export default function IndustryConsumption() {
  const industries = [
    {
      name: "Packaging & FMCG",
      icon: Package,
      consumption: "12.8M MT",
      share: "32%",
      growth: "+12.5%",
      keyChemicals: ["Polyethylene", "Polypropylene", "PET", "PVC"],
      trend: "Rising",
      color: "blue",
    },
    {
      name: "Construction & Infrastructure",
      icon: Building2,
      consumption: "9.2M MT",
      share: "23%",
      growth: "+14.2%",
      keyChemicals: ["PVC", "Polyethylene", "Epoxy Resins", "Adhesives"],
      trend: "Surging",
      color: "green",
    },
    {
      name: "Automotive & Transportation",
      icon: Car,
      consumption: "6.5M MT",
      share: "16%",
      growth: "+9.8%",
      keyChemicals: ["Polypropylene", "ABS", "Polyurethane", "Rubber"],
      trend: "Steady",
      color: "purple",
    },
    {
      name: "Textiles & Fibers",
      icon: ShoppingBag,
      consumption: "5.8M MT",
      share: "14%",
      growth: "+7.2%",
      keyChemicals: ["PTA", "MEG", "Acrylonitrile", "Caprolactam"],
      trend: "Moderate",
      color: "pink",
    },
    {
      name: "Electronics & Electricals",
      icon: Zap,
      consumption: "3.2M MT",
      share: "8%",
      growth: "+16.8%",
      keyChemicals: ["Engineering Plastics", "PVC", "Silicones", "Epoxy"],
      trend: "Booming",
      color: "orange",
    },
    {
      name: "Agriculture & Agrochemicals",
      icon: Factory,
      consumption: "2.8M MT",
      share: "7%",
      growth: "+8.5%",
      keyChemicals: ["Ammonia", "Urea", "Pesticides", "Surfactants"],
      trend: "Growing",
      color: "teal",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
      blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", gradient: "from-blue-500 to-blue-600" },
      green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", gradient: "from-green-500 to-green-600" },
      purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", gradient: "from-purple-500 to-purple-600" },
      pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700", gradient: "from-pink-500 to-pink-600" },
      orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", gradient: "from-orange-500 to-orange-600" },
      teal: { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-700", gradient: "from-teal-500 to-teal-600" },
    };
    return colors[color];
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Industry Consumption Mapping</h2>
        <p className="text-gray-600">Chemical demand breakdown by end-use industries (India, 2026)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {industries.map((industry, index) => {
          const colors = getColorClasses(industry.color);
          const Icon = industry.icon;
          
          return (
            <div
              key={index}
              className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-lg transition`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`h-12 w-12 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${colors.text}`}>{industry.name}</h3>
                    <p className="text-sm text-gray-600">{industry.consumption} annual</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{industry.share}</p>
                  <p className="text-xs text-gray-600">Market Share</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">YoY Growth</span>
                  <span className="text-lg font-bold text-green-600">{industry.growth}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${colors.gradient} h-2 rounded-full`}
                    style={{ width: industry.share }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Key Chemicals:</p>
                <div className="flex flex-wrap gap-2">
                  {industry.keyChemicals.map((chemical, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700"
                    >
                      {chemical}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-300">
                <span className="text-sm text-gray-600">Growth Trend</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    industry.trend === "Booming" || industry.trend === "Surging"
                      ? "bg-green-100 text-green-800"
                      : industry.trend === "Rising" || industry.trend === "Growing"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {industry.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-blue-200 rounded-xl">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Industry Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-gray-800 mb-2">🔥 Fastest Growing</p>
            <p className="text-gray-700">Electronics & Electricals at +16.8% driven by PLI schemes, 5G infrastructure, and EV adoption</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">💪 Largest Segment</p>
            <p className="text-gray-700">Packaging & FMCG remains dominant with 32% share, boosted by e-commerce and quick commerce expansion</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">🏗️ Infrastructure Push</p>
            <p className="text-gray-700">Construction sector accelerating with National Infrastructure Pipeline and housing mission targets</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">🚗 Auto Recovery</p>
            <p className="text-gray-700">Automotive chemicals rebounding with SUV demand, premiumization, and EV transition creating new opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}
