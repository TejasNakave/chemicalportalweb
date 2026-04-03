"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Beaker, Info, TrendingUp, Globe2 } from "lucide-react";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const categoryData: Record<string, any> = {
    "petrochemicals": {
      name: "Petrochemicals",
      emoji: "⚗️",
      color: "from-red-500 to-orange-500",
      description: "Petrochemicals are chemical products derived from petroleum and natural gas. They serve as the foundation for a wide range of industrial and consumer products.",
      keyCharacteristics: [
        "Derived from crude oil and natural gas",
        "Building blocks for plastics and polymers",
        "Essential for manufacturing and industrial processes",
        "High volume production and consumption"
      ],
      applications: [
        "Plastic manufacturing",
        "Synthetic fibers and textiles",
        "Rubber production",
        "Solvents and adhesives",
        "Detergents and cleaning products"
      ],
      examples: [
        { name: "Ethylene", cas: "74-85-1", usage: "Polyethylene, ethylene oxide, ethylbenzene", id: "ethylene" },
        { name: "Propylene", cas: "115-07-1", usage: "Polypropylene, acrylonitrile, propylene oxide", id: "propylene" },
        { name: "Benzene", cas: "71-43-2", usage: "Styrene, cumene, cyclohexane production", id: "benzene" },
        { name: "Toluene", cas: "108-88-3", usage: "Solvent, gasoline additive, TNT production", id: "toluene" },
        { name: "Xylene", cas: "1330-20-7", usage: "Polyester fibers, PET bottles", id: "xylene" },
        { name: "Butadiene", cas: "106-99-0", usage: "Synthetic rubber, ABS plastics", id: "butadiene" }
      ],
      marketSize: "$590B",
      globalDemand: "320 million MT/year"
    },
    "agrochemicals": {
      name: "Agrochemicals",
      emoji: "🌱",
      color: "from-green-500 to-emerald-500",
      description: "Agrochemicals are chemical products used in agriculture to protect crops, enhance growth, and improve yield. They include fertilizers, pesticides, and plant growth regulators.",
      keyCharacteristics: [
        "Protect crops from pests and diseases",
        "Enhance agricultural productivity",
        "Include organic and synthetic compounds",
        "Subject to strict regulatory oversight"
      ],
      applications: [
        "Crop protection and pest control",
        "Soil fertility enhancement",
        "Weed management",
        "Plant growth regulation",
        "Post-harvest preservation"
      ],
      examples: [
        { name: "Glyphosate", cas: "1071-83-6", usage: "Herbicide, weed control", id: "glyphosate" },
        { name: "Urea", cas: "57-13-6", usage: "Nitrogen fertilizer", id: "urea" },
        { name: "Ammonium Nitrate", cas: "6484-52-2", usage: "Nitrogen fertilizer", id: "ammonium-nitrate" },
        { name: "Chlorpyrifos", cas: "2921-88-2", usage: "Insecticide, pest control", id: "chlorpyrifos" },
        { name: "Mancozeb", cas: "8018-01-7", usage: "Fungicide, disease control", id: "mancozeb" },
        { name: "Potash (KCl)", cas: "7447-40-7", usage: "Potassium fertilizer", id: "potash" }
      ],
      marketSize: "$285B",
      globalDemand: "280 million MT/year"
    },
    "pharmaceuticals": {
      name: "Pharmaceuticals",
      emoji: "💊",
      color: "from-blue-500 to-cyan-500",
      description: "Pharmaceutical chemicals are active ingredients and intermediates used in the production of medicines and drugs to treat, cure, or prevent diseases.",
      keyCharacteristics: [
        "Highly regulated industry with strict quality standards",
        "Requires extensive R&D and clinical trials",
        "High-value specialty chemicals",
        "Critical for healthcare and life sciences"
      ],
      applications: [
        "Drug manufacturing",
        "API (Active Pharmaceutical Ingredient) production",
        "Vaccine development",
        "Biotechnology and biologics",
        "Medical diagnostics"
      ],
      examples: [
        { name: "Paracetamol (Acetaminophen)", cas: "103-90-2", usage: "Pain reliever, fever reducer", id: "paracetamol" },
        { name: "Aspirin (Acetylsalicylic Acid)", cas: "50-78-2", usage: "Pain reliever, anti-inflammatory", id: "aspirin" },
        { name: "Ibuprofen", cas: "15687-27-1", usage: "NSAID, pain and inflammation", id: "ibuprofen" },
        { name: "Amoxicillin", cas: "26787-78-0", usage: "Antibiotic", id: "amoxicillin" },
        { name: "Metformin", cas: "657-24-9", usage: "Diabetes treatment", id: "metformin" },
        { name: "Atorvastatin", cas: "134523-00-5", usage: "Cholesterol management", id: "atorvastatin" }
      ],
      marketSize: "$1.48T",
      globalDemand: "High-value, lower volume"
    },
    "speciality-chemicals": {
      name: "Speciality Chemicals",
      emoji: "🔬",
      color: "from-purple-500 to-pink-500",
      description: "Specialty chemicals are high-value, low-volume chemicals designed for specific functions and applications. They are performance-based products used across various industries.",
      keyCharacteristics: [
        "Application-specific formulations",
        "High performance and quality standards",
        "Lower production volumes, higher margins",
        "Innovation and R&D intensive"
      ],
      applications: [
        "Coatings and adhesives",
        "Electronics and semiconductors",
        "Water treatment",
        "Food additives",
        "Personal care and cosmetics"
      ],
      examples: [
        { name: "Titanium Dioxide", cas: "13463-67-7", usage: "Pigment in paints and coatings", id: "titanium-dioxide" },
        { name: "Silicones", cas: "63148-62-9", usage: "Sealants, lubricants, medical devices", id: "silicones" },
        { name: "Surfactants", cas: "Various", usage: "Detergents, emulsifiers", id: "surfactants" },
        { name: "Catalysts", cas: "Various", usage: "Chemical reactions, petroleum refining", id: "catalysts" },
        { name: "Flame Retardants", cas: "Various", usage: "Fire safety in electronics, textiles", id: "flame-retardants" },
        { name: "Electronic Chemicals", cas: "Various", usage: "Semiconductor manufacturing", id: "electronic-chemicals" }
      ],
      marketSize: "$820B",
      globalDemand: "Application-driven growth"
    },
    "basic-chemicals": {
      name: "Basic Chemicals",
      emoji: "🧪",
      color: "from-gray-500 to-slate-600",
      description: "Basic chemicals are high-volume, commodity chemicals that serve as building blocks for other chemical products. They are produced in large quantities at competitive prices.",
      keyCharacteristics: [
        "High-volume, low-margin production",
        "Commodity pricing and market dynamics",
        "Essential industrial raw materials",
        "Capital-intensive manufacturing"
      ],
      applications: [
        "Chemical manufacturing feedstock",
        "Industrial processing",
        "Metallurgy and mining",
        "Pulp and paper",
        "Water treatment"
      ],
      examples: [
        { name: "Sulfuric Acid", cas: "7664-93-9", usage: "Fertilizers, chemical synthesis", id: "sulfuric-acid" },
        { name: "Ammonia", cas: "7664-41-7", usage: "Fertilizers, refrigerant", id: "ammonia" },
        { name: "Caustic Soda (NaOH)", cas: "1310-73-2", usage: "Pulp/paper, chemical processing", id: "caustic-soda" },
        { name: "Chlorine", cas: "7782-50-5", usage: "PVC, water treatment", id: "chlorine" },
        { name: "Nitric Acid", cas: "7697-37-2", usage: "Fertilizers, explosives", id: "nitric-acid" },
        { name: "Phosphoric Acid", cas: "7664-38-2", usage: "Fertilizers, food acidulant", id: "phosphoric-acid" }
      ],
      marketSize: "$420B",
      globalDemand: "850 million MT/year"
    },
    "consumer-chemicals": {
      name: "Consumer Chemicals",
      emoji: "🧴",
      color: "from-yellow-500 to-amber-500",
      description: "Consumer chemicals are chemical products used in everyday household and personal care items. They are formulated for safe consumer use and include cleaning agents, cosmetics, and toiletries.",
      keyCharacteristics: [
        "Direct consumer market focus",
        "Safety and regulatory compliance critical",
        "Brand and marketing driven",
        "Sustainable and eco-friendly trends"
      ],
      applications: [
        "Personal care and cosmetics",
        "Household cleaning products",
        "Laundry and dishwashing",
        "Air fresheners and fragrances",
        "Disinfectants and sanitizers"
      ],
      examples: [
        { name: "Sodium Lauryl Sulfate", cas: "151-21-3", usage: "Shampoos, detergents", id: "sodium-lauryl-sulfate" },
        { name: "Glycerin", cas: "56-81-5", usage: "Moisturizers, soaps", id: "glycerin" },
        { name: "Citric Acid", cas: "77-92-9", usage: "Cleaning agents, food preservative", id: "citric-acid" },
        { name: "Sodium Bicarbonate", cas: "144-55-8", usage: "Baking soda, cleaning", id: "sodium-bicarbonate" },
        { name: "Hydrogen Peroxide", cas: "7722-84-1", usage: "Bleaching, disinfectant", id: "hydrogen-peroxide" },
        { name: "Isopropyl Alcohol", cas: "67-63-0", usage: "Sanitizer, cleaning solvent", id: "isopropyl-alcohol" }
      ],
      marketSize: "$180B",
      globalDemand: "Consumer-driven growth"
    },
    "advance-chemicals": {
      name: "Advance Chemicals",
      emoji: "⚡",
      color: "from-indigo-500 to-violet-500",
      description: "Advanced chemicals are cutting-edge materials and compounds used in high-tech applications. They include nanomaterials, smart polymers, and chemicals for emerging technologies.",
      keyCharacteristics: [
        "High-tech and innovation-driven",
        "Emerging applications in new industries",
        "Advanced material properties",
        "Research and development intensive"
      ],
      applications: [
        "Electronics and semiconductors",
        "Renewable energy (solar, batteries)",
        "Advanced composites",
        "Biotechnology and medical devices",
        "Nanotechnology"
      ],
      examples: [
        { name: "Lithium Hydroxide", cas: "1310-65-2", usage: "EV batteries, energy storage", id: "lithium-hydroxide" },
        { name: "Graphene", cas: "1034343-98-0", usage: "Electronics, advanced materials", id: "graphene" },
        { name: "Carbon Nanotubes", cas: "308068-56-6", usage: "Composites, electronics", id: "carbon-nanotubes" },
        { name: "Rare Earth Elements", cas: "Various", usage: "Magnets, catalysts, electronics", id: "rare-earth-elements" },
        { name: "Conductive Polymers", cas: "Various", usage: "Flexible electronics, displays", id: "conductive-polymers" },
        { name: "Green Hydrogen", cas: "1333-74-0", usage: "Clean energy, fuel cells", id: "green-hydrogen" }
      ],
      marketSize: "$95B",
      globalDemand: "Rapid growth in emerging tech"
    }
  };

  const category = categoryData[slug];

  if (!category) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <button
            onClick={() => router.push("/home")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.push("/home")}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back to Categories</span>
      </button>

      {/* Header */}
      <div className={`bg-gradient-to-r ${category.color} rounded-xl shadow-lg p-8 text-white mb-6`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-4xl">{category.emoji}</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold">{category.name}</h1>
          </div>
        </div>
        <p className="text-lg text-white/90">{category.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
          <div>
            <p className="text-sm text-white/70">Market Size (Global)</p>
            <p className="text-2xl font-bold">{category.marketSize}</p>
          </div>
          <div>
            <p className="text-sm text-white/70">Global Demand</p>
            <p className="text-2xl font-bold">{category.globalDemand}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Key Characteristics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Info className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Key Characteristics</h2>
          </div>
          <ul className="space-y-2">
            {category.keyCharacteristics.map((char: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="h-6 w-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-gray-700">{char}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Applications</h2>
          </div>
          <ul className="space-y-2">
            {category.applications.map((app: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="h-6 w-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Examples */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className={`h-10 w-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
            <Beaker className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Example Chemicals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.examples.map((example: any, index: number) => (
            <Link 
              key={index}
              href={`/chemical-master/${example.id}`}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition cursor-pointer"
            >
              <h3 className="font-bold text-gray-900 mb-1 hover:text-blue-600">{example.name}</h3>
              <p className="text-xs text-gray-500 mb-2">CAS: {example.cas}</p>
              <p className="text-sm text-gray-700">{example.usage}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
