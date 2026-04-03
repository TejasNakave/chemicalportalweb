import { GitBranch, ArrowRight, Factory } from "lucide-react";

export default function ProcessSection() {
  return (
    <div className="space-y-6">
      {/* Upstream Value Chain */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <GitBranch className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Upstream Value Chain</h3>
        </div>
        
        {/* Visual Process Flow Diagram */}
        <div className="mb-6 bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-white text-3xl">🛢️</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">Crude Oil</p>
              <p className="text-xs text-gray-600">Petroleum</p>
            </div>
            <div className="flex-shrink-0 mx-2">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <line x1="5" y1="20" x2="35" y2="20" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow1)"/>
                <defs>
                  <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className="text-center flex-1">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-white text-3xl">⚗️</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">Naphtha</p>
              <p className="text-xs text-gray-600">Refining</p>
            </div>
            <div className="flex-shrink-0 mx-2">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <line x1="5" y1="20" x2="35" y2="20" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow2)"/>
                <defs>
                  <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className="text-center flex-1">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-white text-3xl">🔥</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">Steam Cracking</p>
              <p className="text-xs text-gray-600">800-900°C</p>
            </div>
            <div className="flex-shrink-0 mx-2">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <line x1="5" y1="20" x2="35" y2="20" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow3)"/>
                <defs>
                  <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className="text-center flex-1">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-white text-3xl">✨</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">Ethylene</p>
              <p className="text-xs text-gray-600">C₂H₄</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[150px] bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Raw Material</p>
            <p className="font-bold text-gray-900">Crude Oil</p>
          </div>
          <ArrowRight className="h-5 w-5 text-gray-400" />
          <div className="flex-1 min-w-[150px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-gray-600 mb-1">Intermediate</p>
            <p className="font-bold text-gray-900">Naphtha</p>
          </div>
          <ArrowRight className="h-5 w-5 text-gray-400" />
          <div className="flex-1 min-w-[150px] bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-sm text-gray-600 mb-1">Process</p>
            <p className="font-bold text-gray-900">Steam Cracking</p>
          </div>
          <ArrowRight className="h-5 w-5 text-gray-400" />
          <div className="flex-1 min-w-[150px] bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-sm text-gray-600 mb-1">Product</p>
            <p className="font-bold text-gray-900">Ethylene</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Alternative Route 1:</p>
            <p className="text-sm text-gray-600">Natural Gas → Ethane → Ethylene (via ethane cracking)</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Alternative Route 2:</p>
            <p className="text-sm text-gray-600">Coal → Methanol → MTO Process → Ethylene</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Alternative Route 3:</p>
            <p className="text-sm text-gray-600">Bio-ethanol → Catalytic Dehydration → Ethylene</p>
          </div>
        </div>
      </div>

      {/* Creation Process */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Factory className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-bold text-gray-800">Production Process</h3>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">Steam Cracking Process (Primary Method)</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-gray-800">Feedstock Preparation</p>
                  <p className="text-sm text-gray-600">Naphtha or ethane is vaporized and mixed with steam</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-gray-800">Cracking</p>
                  <p className="text-sm text-gray-600">Mixture heated to 800-900°C in pyrolysis furnace, breaking C-C bonds</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-gray-800">Quenching</p>
                  <p className="text-sm text-gray-600">Rapid cooling to stop reactions and prevent further decomposition</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold text-gray-800">Compression & Separation</p>
                  <p className="text-sm text-gray-600">Gas stream compressed and separated via distillation towers</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <p className="font-semibold text-gray-800">Purification</p>
                  <p className="text-sm text-gray-600">Removal of impurities to achieve polymer-grade purity (99.9%+)</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-gray-700"><span className="font-semibold">Typical Yield:</span> 25-35% ethylene from naphtha cracking</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">Energy Requirement:</span> Highly energy-intensive (3.5-4.5 GJ/ton ethylene)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Downstream Products */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Downstream Products & Applications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-purple-900">Polyethylene</h4>
              <span className="text-sm font-semibold text-purple-700">60%</span>
            </div>
            <p className="text-sm text-gray-600">HDPE, LDPE, LLDPE for packaging, films, containers</p>
          </div>
          
          <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-blue-900">Ethylene Oxide</h4>
              <span className="text-sm font-semibold text-blue-700">20%</span>
            </div>
            <p className="text-sm text-gray-600">Antifreeze, surfactants, ethylene glycol</p>
          </div>
          
          <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-green-900">Ethylene Dichloride</h4>
              <span className="text-sm font-semibold text-green-700">12%</span>
            </div>
            <p className="text-sm text-gray-600">PVC production, solvents</p>
          </div>
          
          <div className="border-2 border-yellow-200 rounded-lg p-4 bg-yellow-50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-yellow-900">Ethylbenzene</h4>
              <span className="text-sm font-semibold text-yellow-700">5%</span>
            </div>
            <p className="text-sm text-gray-600">Styrene production for polystyrene</p>
          </div>
          
          <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-red-900">Vinyl Acetate</h4>
              <span className="text-sm font-semibold text-red-700">2%</span>
            </div>
            <p className="text-sm text-gray-600">Adhesives, paints, coatings</p>
          </div>
          
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-900">Others</h4>
              <span className="text-sm font-semibold text-gray-700">1%</span>
            </div>
            <p className="text-sm text-gray-600">Alpha olefins, ethanol derivatives</p>
          </div>
        </div>
      </div>

      {/* Substitutes */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Substitutes & Alternatives</h3>
        
        <div className="space-y-3">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-800">Propylene</h4>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Partial Substitute</span>
            </div>
            <p className="text-sm text-gray-600">Can replace ethylene in certain polymer applications (polypropylene vs polyethylene)</p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-800">Bio-based Ethylene</h4>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Sustainable Alternative</span>
            </div>
            <p className="text-sm text-gray-600">Chemically identical but derived from renewable sources (bio-ethanol dehydration)</p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-800">Recycled Polymers</h4>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Indirect Substitute</span>
            </div>
            <p className="text-sm text-gray-600">Reduces need for virgin ethylene-based polymers through mechanical/chemical recycling</p>
          </div>
        </div>
      </div>
    </div>
  );
}
