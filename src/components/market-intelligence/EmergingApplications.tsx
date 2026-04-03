import { Sparkles, Battery, Leaf, Cpu, Pill, Rocket } from "lucide-react";

export default function EmergingApplications() {
  const applications = [
    {
      area: "Electric Vehicle (EV) Chemicals",
      icon: Battery,
      market: "$2.8B by 2030",
      growth: "28% CAGR",
      chemicals: ["Lithium Compounds", "Electrolytes", "Separator Polymers", "Thermal Management Fluids"],
      adoption: "Early Stage",
      potential: "Very High",
      timeline: "2026-2030",
      keyPlayers: ["IOCL", "Reliance", "Tata Chemicals"],
      description: "Battery materials, cooling fluids, lightweight composites for EV manufacturing",
    },
    {
      area: "Bio-based & Green Chemicals",
      icon: Leaf,
      market: "$5.2B by 2030",
      growth: "22% CAGR",
      chemicals: ["Bio-ethanol", "Bio-plastics", "Green Solvents", "Renewable Feedstocks"],
      adoption: "Growing",
      potential: "High",
      timeline: "2026-2035",
      keyPlayers: ["Praj Industries", "Godavari Biorefineries", "Biocon"],
      description: "Sustainable alternatives to petroleum-based chemicals with lower carbon footprint",
    },
    {
      area: "Semiconductor & Electronics",
      icon: Cpu,
      market: "$3.5B by 2028",
      growth: "32% CAGR",
      chemicals: ["High Purity Chemicals", "Photoresists", "Etchants", "Specialty Gases"],
      adoption: "Emerging",
      potential: "Very High",
      timeline: "2026-2028",
      keyPlayers: ["Tanfac", "Clean Science", "SRF"],
      description: "Ultra-pure chemicals for semiconductor fabrication and electronics manufacturing",
    },
    {
      area: "Advanced Pharmaceuticals",
      icon: Pill,
      market: "$8.2B by 2030",
      growth: "18% CAGR",
      chemicals: ["API Intermediates", "Complex Molecules", "Biologics", "Specialty Excipients"],
      adoption: "Mature",
      potential: "High",
      timeline: "2026-2032",
      keyPlayers: ["Dr. Reddy's", "Cipla", "Divis Labs"],
      description: "High-value pharmaceutical intermediates and active ingredients for drug manufacturing",
    },
    {
      area: "Hydrogen Economy",
      icon: Rocket,
      market: "$6.5B by 2035",
      growth: "45% CAGR",
      chemicals: ["Green Hydrogen", "Ammonia (H2 Carrier)", "Fuel Cell Materials", "Catalysts"],
      adoption: "Nascent",
      potential: "Transformative",
      timeline: "2028-2035",
      keyPlayers: ["Reliance", "Adani", "NTPC", "Indian Oil"],
      description: "Clean energy chemicals for hydrogen production, storage, and fuel cell applications",
    },
    {
      area: "Smart Materials & Nanochemicals",
      icon: Sparkles,
      market: "$1.8B by 2030",
      growth: "35% CAGR",
      chemicals: ["Nanoparticles", "Quantum Dots", "Smart Polymers", "Conductive Inks"],
      adoption: "Early Stage",
      potential: "High",
      timeline: "2027-2035",
      keyPlayers: ["CSIR Labs", "IIT Startups", "Tata Steel"],
      description: "Advanced materials with unique properties for sensors, displays, and coatings",
    },
  ];

  const getIconColor = (potential: string) => {
    if (potential === "Very High" || potential === "Transformative") return "from-green-500 to-emerald-600";
    if (potential === "High") return "from-blue-500 to-cyan-600";
    return "from-purple-500 to-pink-600";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Emerging Application Areas</h2>
        <p className="text-gray-600">High-growth opportunities in next-generation chemical applications</p>
      </div>

      <div className="space-y-6">
        {applications.map((app, index) => {
          const Icon = app.icon;
          return (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className={`h-14 w-14 bg-gradient-to-br ${getIconColor(app.potential)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{app.area}</h3>
                    <p className="text-sm text-gray-600 mb-3">{app.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {app.chemicals.map((chemical, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded text-xs font-medium"
                        >
                          {chemical}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Market Size</p>
                  <p className="text-lg font-bold text-blue-700">{app.market}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Growth Rate</p>
                  <p className="text-lg font-bold text-green-700">{app.growth}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Adoption Stage</p>
                  <p className="text-sm font-bold text-purple-700">{app.adoption}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Potential</p>
                  <p className="text-sm font-bold text-orange-700">{app.potential}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Timeline</p>
                  <p className="text-sm font-semibold text-gray-800">{app.timeline}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600 mb-1">Key Players</p>
                  <p className="text-sm font-semibold text-gray-800">{app.keyPlayers.join(", ")}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Total Emerging Market</p>
          <p className="text-4xl font-bold text-green-700 mb-1">$28B</p>
          <p className="text-xs text-gray-600">Combined potential by 2030-2035</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Average Growth</p>
          <p className="text-4xl font-bold text-blue-700 mb-1">30%</p>
          <p className="text-xs text-gray-600">Mean CAGR across all areas</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Investment Needed</p>
          <p className="text-4xl font-bold text-orange-700 mb-1">$18B</p>
          <p className="text-xs text-gray-600">Capex for commercialization</p>
        </div>
      </div>
    </div>
  );
}
