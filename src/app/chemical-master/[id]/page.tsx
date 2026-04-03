"use client";

import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Beaker, 
  FileText, 
  AlertTriangle, 
  ThermometerSun, 
  Factory,
  DollarSign,
  Package
} from "lucide-react";

export default function ChemicalProfilePage() {
  const params = useParams();
  const router = useRouter();
  const chemicalId = params.id as string;

  // Comprehensive chemical data
  const chemicalData: Record<string, any> = {
    "ethylene": {
      name: "Ethylene",
      cas: "74-85-1",
      formula: "C₂H₄",
      molecularWeight: "28.05 g/mol",
      category: "Organic",
      hsCode: "2901.21",
      iupacName: "Ethene",
      appearance: "Colorless gas",
      odor: "Sweet and musky",
      density: "1.178 kg/m³ at 15°C",
      meltingPoint: "-169.2°C",
      boilingPoint: "-103.7°C",
      solubility: "Slightly soluble in water",
      flashPoint: "Flammable gas",
      autoignitionTemp: "490°C",
      applications: [
        "Polyethylene production (LDPE, HDPE, LLDPE)",
        "Ethylene oxide manufacturing",
        "Ethylbenzene production",
        "Vinyl acetate synthesis",
        "Fruit ripening agent"
      ],
      hazards: [
        "Extremely flammable gas",
        "Simple asphyxiant",
        "May cause frostbite",
        "Forms explosive mixtures with air"
      ],
      safetyMeasures: [
        "Store in well-ventilated area",
        "Keep away from ignition sources",
        "Use explosion-proof equipment",
        "Wear protective equipment"
      ],
      manufacturers: ["Reliance Industries", "IOCL", "SABIC", "ExxonMobil"],
      marketPrice: "$850-950/MT",
      annualProduction: "38.5 million MT (India)",
      tradingHubs: ["Mumbai", "Hazira", "Jamnagar"],
      regulations: ["PESO approved", "IS 646:2019", "UN 1962"]
    },
    "sulfuric-acid": {
      name: "Sulfuric Acid",
      cas: "7664-93-9",
      formula: "H₂SO₄",
      molecularWeight: "98.08 g/mol",
      category: "Inorganic",
      hsCode: "2807.00",
      iupacName: "Sulfuric Acid",
      appearance: "Clear, colorless liquid",
      odor: "Odorless",
      density: "1.84 g/cm³",
      meltingPoint: "10°C",
      boilingPoint: "337°C",
      solubility: "Miscible with water (highly exothermic)",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Fertilizer production (phosphoric acid)",
        "Chemical synthesis",
        "Petroleum refining",
        "Metal processing",
        "Battery acid"
      ],
      hazards: [
        "Highly corrosive to skin and eyes",
        "Causes severe burns",
        "Reacts violently with water",
        "May cause respiratory damage"
      ],
      safetyMeasures: [
        "Use acid-resistant PPE",
        "Add acid to water, never reverse",
        "Store in corrosion-resistant containers",
        "Emergency eyewash stations required"
      ],
      manufacturers: ["Deepak Fertilisers", "Chambal Fertilisers", "Coromandel International"],
      marketPrice: "$85-120/MT",
      annualProduction: "12.8 million MT (India)",
      tradingHubs: ["Chennai", "Mumbai", "Visakhapatnam"],
      regulations: ["Poison Act License required", "IS 266:2016", "UN 1830"]
    },
    "polyethylene": {
      name: "Polyethylene",
      cas: "9002-88-4",
      formula: "(C₂H₄)ₙ",
      molecularWeight: "Variable (polymer)",
      category: "Polymer",
      hsCode: "3901.10",
      iupacName: "Poly(ethylene)",
      appearance: "White translucent solid",
      odor: "Odorless",
      density: "0.91-0.97 g/cm³",
      meltingPoint: "105-135°C (varies by type)",
      boilingPoint: "Decomposes before boiling",
      solubility: "Insoluble in water",
      flashPoint: "341°C (LDPE)",
      autoignitionTemp: "349°C",
      applications: [
        "Packaging films and bags",
        "Containers and bottles",
        "Pipes and fittings",
        "Wire and cable insulation",
        "Toys and household items"
      ],
      hazards: [
        "Combustible material",
        "May release toxic fumes when burning",
        "Static electricity hazard",
        "Molten polymer causes severe burns"
      ],
      safetyMeasures: [
        "Avoid open flames during processing",
        "Ensure proper ventilation",
        "Ground equipment to prevent static",
        "Use heat-resistant gloves"
      ],
      manufacturers: ["Reliance Industries", "IOCL", "Haldia Petrochemicals", "GAIL"],
      marketPrice: "$1,050-1,250/MT",
      annualProduction: "9.2 million MT (India)",
      tradingHubs: ["Jamnagar", "Mumbai", "Haldia"],
      regulations: ["BIS certified", "Food grade: IS 10146", "UN 3082 (marine pollutant)"]
    },
    "methanol": {
      name: "Methanol",
      cas: "67-56-1",
      formula: "CH₃OH",
      molecularWeight: "32.04 g/mol",
      category: "Organic",
      hsCode: "2905.11",
      iupacName: "Methyl alcohol",
      appearance: "Clear, colorless liquid",
      odor: "Mild, alcoholic",
      density: "0.792 g/cm³",
      meltingPoint: "-97.6°C",
      boilingPoint: "64.7°C",
      solubility: "Fully miscible with water",
      flashPoint: "11°C (closed cup)",
      autoignitionTemp: "464°C",
      applications: [
        "Formaldehyde production",
        "Fuel and fuel additive",
        "Solvent in chemical processes",
        "Biodiesel production",
        "Antifreeze formulations"
      ],
      hazards: [
        "Highly flammable liquid",
        "Toxic if swallowed or inhaled",
        "May cause blindness",
        "Harmful by skin contact"
      ],
      safetyMeasures: [
        "Store in cool, ventilated area",
        "Keep away from heat and ignition sources",
        "Use in fume hood or well-ventilated area",
        "Emergency medical attention for exposure"
      ],
      manufacturers: ["MCPI", "Rashtriya Chemicals", "SABIC", "Zagros Petrochemical"],
      marketPrice: "$320-380/MT",
      annualProduction: "2.5 million MT (India)",
      tradingHubs: ["Mumbai", "Hazira", "Dahej"],
      regulations: ["Poison License required", "IS 517:2004", "UN 1230"]
    },
    "ammonia": {
      name: "Ammonia",
      cas: "7664-41-7",
      formula: "NH₃",
      molecularWeight: "17.03 g/mol",
      category: "Inorganic",
      hsCode: "2814.20",
      iupacName: "Azane",
      appearance: "Colorless gas",
      odor: "Pungent, suffocating",
      density: "0.73 kg/m³ (gas), 0.682 g/cm³ (liquid at -33°C)",
      meltingPoint: "-77.7°C",
      boilingPoint: "-33.3°C",
      solubility: "Very soluble in water",
      flashPoint: "Non-flammable (but forms flammable mixtures)",
      autoignitionTemp: "651°C",
      applications: [
        "Nitrogen fertilizer production (urea, ammonium nitrate)",
        "Refrigerant (R-717)",
        "Chemical intermediate",
        "Cleaning agents",
        "Explosives manufacturing"
      ],
      hazards: [
        "Toxic by inhalation",
        "Corrosive to skin, eyes, respiratory tract",
        "May cause severe burns",
        "Environmental hazard (aquatic toxicity)"
      ],
      safetyMeasures: [
        "Use in well-ventilated areas only",
        "Wear respiratory protection",
        "Emergency shower and eyewash required",
        "Store in pressure vessels away from heat"
      ],
      manufacturers: ["IFFCO", "NFL", "RCF", "FACT", "Chambal Fertilisers"],
      marketPrice: "$450-550/MT",
      annualProduction: "16.2 million MT (India)",
      tradingHubs: ["Kochi", "Mumbai", "Vishakhapatnam"],
      regulations: ["PESO approved", "Fertilizer Control Order", "UN 1005", "IS 645:1991"]
    },
    "propylene": {
      name: "Propylene",
      cas: "115-07-1",
      formula: "C₃H₆",
      molecularWeight: "42.08 g/mol",
      category: "Organic",
      hsCode: "2901.22",
      iupacName: "Propene",
      appearance: "Colorless gas",
      odor: "Slightly sweet",
      density: "1.81 kg/m³ at 15°C",
      meltingPoint: "-185.2°C",
      boilingPoint: "-47.6°C",
      solubility: "Slightly soluble in water",
      flashPoint: "Flammable gas",
      autoignitionTemp: "460°C",
      applications: [
        "Polypropylene production",
        "Acrylonitrile manufacturing",
        "Propylene oxide synthesis",
        "Cumene production",
        "Isopropyl alcohol manufacturing"
      ],
      hazards: [
        "Extremely flammable gas",
        "Simple asphyxiant",
        "May cause frostbite on contact",
        "Forms explosive mixtures with air"
      ],
      safetyMeasures: [
        "Store in well-ventilated area",
        "Keep away from heat and ignition sources",
        "Use explosion-proof equipment",
        "Emergency procedures for leaks"
      ],
      manufacturers: ["Reliance Industries", "IOCL", "SABIC", "LyondellBasell"],
      marketPrice: "$750-850/MT",
      annualProduction: "28.3 million MT (India)",
      tradingHubs: ["Mumbai", "Jamnagar", "Singapore"],
      regulations: ["PESO approved", "IS 14901:2000", "UN 1077"]
    },
    "benzene": {
      name: "Benzene",
      cas: "71-43-2",
      formula: "C₆H₆",
      molecularWeight: "78.11 g/mol",
      category: "Organic",
      hsCode: "2902.20",
      iupacName: "Benzene",
      appearance: "Clear, colorless liquid",
      odor: "Sweet, aromatic",
      density: "0.876 g/cm³",
      meltingPoint: "5.5°C",
      boilingPoint: "80.1°C",
      solubility: "Slightly soluble in water, miscible with organic solvents",
      flashPoint: "-11°C",
      autoignitionTemp: "498°C",
      applications: [
        "Styrene production",
        "Cumene manufacturing",
        "Cyclohexane synthesis",
        "Alkylbenzene production",
        "Aniline manufacturing"
      ],
      hazards: [
        "Known human carcinogen",
        "Highly flammable liquid",
        "Toxic by inhalation and skin absorption",
        "May cause bone marrow damage"
      ],
      safetyMeasures: [
        "Use in closed systems with proper ventilation",
        "Avoid skin contact and inhalation",
        "Regular health monitoring required",
        "Use appropriate PPE and respirators"
      ],
      manufacturers: ["RIL", "IOCL", "BPCL", "HPCL"],
      marketPrice: "$950-1,150/MT",
      annualProduction: "8.2 million MT (India)",
      tradingHubs: ["Mumbai", "Chennai", "Singapore"],
      regulations: ["Carcinogen - Strict controls", "IS 517:2004", "UN 1114"]
    },
    "toluene": {
      name: "Toluene",
      cas: "108-88-3",
      formula: "C₇H₈",
      molecularWeight: "92.14 g/mol",
      category: "Organic",
      hsCode: "2902.30",
      iupacName: "Methylbenzene",
      appearance: "Clear, colorless liquid",
      odor: "Sweet, pungent benzene-like",
      density: "0.867 g/cm³",
      meltingPoint: "-95°C",
      boilingPoint: "110.6°C",
      solubility: "Slightly soluble in water",
      flashPoint: "4°C",
      autoignitionTemp: "480°C",
      applications: [
        "Solvent in paints and coatings",
        "Gasoline additive (octane booster)",
        "TNT (trinitrotoluene) production",
        "Benzene and xylene production",
        "Adhesives and rubber manufacturing"
      ],
      hazards: [
        "Flammable liquid",
        "May cause CNS depression",
        "Harmful by inhalation and skin contact",
        "Reproductive toxicity"
      ],
      safetyMeasures: [
        "Use in well-ventilated areas",
        "Avoid prolonged exposure",
        "Keep away from ignition sources",
        "Use appropriate respiratory protection"
      ],
      manufacturers: ["IOCL", "BPCL", "RIL", "HPCL"],
      marketPrice: "$750-900/MT",
      annualProduction: "4.8 million MT (India)",
      tradingHubs: ["Mumbai", "Kolkata", "Chennai"],
      regulations: ["Poison Act License", "IS 517:2004", "UN 1294"]
    },
    "xylene": {
      name: "Xylene",
      cas: "1330-20-7",
      formula: "C₈H₁₀",
      molecularWeight: "106.16 g/mol",
      category: "Organic",
      hsCode: "2902.41",
      iupacName: "Dimethylbenzene (isomers)",
      appearance: "Clear, colorless liquid",
      odor: "Sweet, aromatic",
      density: "0.86-0.88 g/cm³",
      meltingPoint: "-47.9°C (p-xylene)",
      boilingPoint: "138-144°C (mixed isomers)",
      solubility: "Insoluble in water",
      flashPoint: "27-32°C",
      autoignitionTemp: "464-528°C",
      applications: [
        "PET bottles and polyester fibers",
        "Phthalic anhydride production",
        "Solvent in paints and coatings",
        "Pesticide formulations",
        "Laboratory reagent"
      ],
      hazards: [
        "Flammable liquid",
        "Irritant to eyes, skin, respiratory system",
        "May cause CNS effects",
        "Harmful by inhalation"
      ],
      safetyMeasures: [
        "Ensure adequate ventilation",
        "Avoid skin and eye contact",
        "Keep away from heat sources",
        "Use explosion-proof equipment"
      ],
      manufacturers: ["IOCL", "RIL", "BPCL", "MRPL"],
      marketPrice: "$850-1,050/MT",
      annualProduction: "3.2 million MT (India)",
      tradingHubs: ["Mumbai", "Visakhapatnam", "Singapore"],
      regulations: ["IS 517:2004", "UN 1307"]
    },
    "butadiene": {
      name: "Butadiene",
      cas: "106-99-0",
      formula: "C₄H₆",
      molecularWeight: "54.09 g/mol",
      category: "Organic",
      hsCode: "2901.24",
      iupacName: "1,3-Butadiene",
      appearance: "Colorless gas",
      odor: "Mild, gasoline-like",
      density: "2.22 kg/m³ (gas at 15°C)",
      meltingPoint: "-108.9°C",
      boilingPoint: "-4.4°C",
      solubility: "Slightly soluble in water",
      flashPoint: "-76°C",
      autoignitionTemp: "414°C",
      applications: [
        "Synthetic rubber (SBR, polybutadiene)",
        "ABS plastics production",
        "Styrene-butadiene latex",
        "Nylon intermediates",
        "Adhesives and coatings"
      ],
      hazards: [
        "Extremely flammable gas",
        "Possible human carcinogen",
        "Simple asphyxiant",
        "May cause frostbite"
      ],
      safetyMeasures: [
        "Store in cool, ventilated area",
        "Use explosion-proof equipment",
        "Regular monitoring for leaks",
        "Emergency response procedures"
      ],
      manufacturers: ["Reliance Industries", "IOCL", "Shell", "BASF"],
      marketPrice: "$1,200-1,450/MT",
      annualProduction: "1.8 million MT (India)",
      tradingHubs: ["Mumbai", "Singapore", "Houston"],
      regulations: ["PESO approved", "Carcinogen Category 2", "UN 1010"]
    },
    "glyphosate": {
      name: "Glyphosate",
      cas: "1071-83-6",
      formula: "C₃H₈NO₅P",
      molecularWeight: "169.07 g/mol",
      category: "Agrochemical",
      hsCode: "2931.00",
      iupacName: "N-(phosphonomethyl)glycine",
      appearance: "White crystalline powder",
      odor: "Odorless",
      density: "1.70 g/cm³",
      meltingPoint: "184.5°C (decomposes)",
      boilingPoint: "Decomposes before boiling",
      solubility: "10.5 g/L in water at 20°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Herbicide for weed control",
        "Pre-planting crop management",
        "Post-harvest weed control",
        "Forestry management",
        "Aquatic weed control"
      ],
      hazards: [
        "May cause eye irritation",
        "Harmful if swallowed",
        "May cause skin sensitization",
        "Toxic to aquatic life"
      ],
      safetyMeasures: [
        "Wear protective gloves and clothing",
        "Avoid contact with eyes and skin",
        "Do not contaminate water sources",
        "Follow label instructions strictly"
      ],
      manufacturers: ["UPL Ltd", "Gharda Chemicals", "Excel Crop Care", "PI Industries"],
      marketPrice: "$4.5-6.2/kg",
      annualProduction: "0.28 million MT (India)",
      tradingHubs: ["Mumbai", "Ahmedabad", "Hyderabad"],
      regulations: ["CIB&RC registered", "Insecticides Act 1968", "WHO Class III"]
    },
    "urea": {
      name: "Urea",
      cas: "57-13-6",
      formula: "CH₄N₂O",
      molecularWeight: "60.06 g/mol",
      category: "Agrochemical",
      hsCode: "3102.10",
      iupacName: "Carbamide",
      appearance: "White crystalline solid",
      odor: "Odorless",
      density: "1.32 g/cm³",
      meltingPoint: "132-135°C",
      boilingPoint: "Decomposes at 135°C",
      solubility: "1080 g/L in water at 20°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Nitrogen fertilizer (46% N content)",
        "Animal feed supplement",
        "AdBlue/DEF for diesel engines",
        "Urea-formaldehyde resins",
        "Explosives manufacturing"
      ],
      hazards: [
        "May cause eye and skin irritation",
        "Harmful if swallowed in large quantities",
        "Releases ammonia when decomposing",
        "Low acute toxicity"
      ],
      safetyMeasures: [
        "Avoid dust generation",
        "Use in ventilated areas",
        "Wear dust mask if needed",
        "Store in dry conditions"
      ],
      manufacturers: ["IFFCO", "NFL", "RCF", "Chambal Fertilisers", "Coromandel"],
      marketPrice: "$350-450/MT",
      annualProduction: "24.5 million MT (India)",
      tradingHubs: ["Kandla", "Kakinada", "Paradeep"],
      regulations: ["Fertilizer Control Order 1985", "FCO specifications", "IS 6420:2016"]
    },
    "ammonium-nitrate": {
      name: "Ammonium Nitrate",
      cas: "6484-52-2",
      formula: "NH₄NO₃",
      molecularWeight: "80.04 g/mol",
      category: "Agrochemical",
      hsCode: "3102.30",
      iupacName: "Ammonium nitrate",
      appearance: "White to off-white crystals",
      odor: "Odorless",
      density: "1.72 g/cm³",
      meltingPoint: "169.6°C",
      boilingPoint: "210°C (decomposes)",
      solubility: "1920 g/L in water at 20°C",
      flashPoint: "Non-combustible but oxidizer",
      autoignitionTemp: "N/A (detonates at high temp)",
      applications: [
        "Nitrogen fertilizer (34% N)",
        "Explosive manufacturing (ANFO)",
        "Mining and quarrying",
        "Cold packs (instant ice packs)",
        "Rocket propellants"
      ],
      hazards: [
        "Strong oxidizer - fire and explosion risk",
        "May detonate if contaminated",
        "Toxic by inhalation of fumes",
        "May cause respiratory irritation"
      ],
      safetyMeasures: [
        "Store away from combustible materials",
        "Keep cool and dry",
        "Prevent contamination",
        "Explosive license required for handling"
      ],
      manufacturers: ["IFFCO", "RCF", "Zuari Agro", "Deepak Fertilisers"],
      marketPrice: "$290-380/MT",
      annualProduction: "3.2 million MT (India)",
      tradingHubs: ["Mumbai", "Mangalore", "Vizag"],
      regulations: ["Explosives Act 1884", "Ammonium Nitrate Rules 2012", "UN 1942"]
    },
    "chlorpyrifos": {
      name: "Chlorpyrifos",
      cas: "2921-88-2",
      formula: "C₉H₁₁Cl₃NO₃PS",
      molecularWeight: "350.59 g/mol",
      category: "Agrochemical",
      hsCode: "2933.99",
      iupacName: "O,O-diethyl O-(3,5,6-trichloro-2-pyridinyl) phosphorothioate",
      appearance: "White crystalline solid",
      odor: "Mild mercaptan-like",
      density: "1.51 g/cm³",
      meltingPoint: "42.5-43°C",
      boilingPoint: "160°C at 0.7 mmHg",
      solubility: "1.4 mg/L in water",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Broad-spectrum insecticide",
        "Termite control",
        "Cotton, rice, fruit crop protection",
        "Mosquito control",
        "Home and garden pest control"
      ],
      hazards: [
        "Highly toxic by ingestion and inhalation",
        "Cholinesterase inhibitor",
        "Harmful to aquatic organisms",
        "Potential neurotoxin"
      ],
      safetyMeasures: [
        "Use only with proper training",
        "Wear full PPE including respirator",
        "Avoid contamination of water bodies",
        "Follow re-entry intervals"
      ],
      manufacturers: ["Gharda Chemicals", "Excel Industries", "Bharat Rasayan"],
      marketPrice: "$8.5-11/kg",
      annualProduction: "0.15 million MT (India)",
      tradingHubs: ["Mumbai", "Delhi", "Ahmedabad"],
      regulations: ["CIB&RC registered", "WHO Class II (Moderately Hazardous)", "Restricted use"]
    },
    "mancozeb": {
      name: "Mancozeb",
      cas: "8018-01-7",
      formula: "C₄H₆MnN₂S₄Zn",
      molecularWeight: "~271 g/mol (polymer)",
      category: "Agrochemical",
      hsCode: "3808.92",
      iupacName: "Manganese ethylenebis(dithiocarbamate) (polymeric) complex with zinc salt",
      appearance: "Grayish-yellow powder",
      odor: "Slight sulfur odor",
      density: "1.92 g/cm³",
      meltingPoint: "Decomposes at 192-204°C",
      boilingPoint: "N/A (decomposes)",
      solubility: "Insoluble in water",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Broad-spectrum fungicide",
        "Potato late blight control",
        "Grape downy mildew prevention",
        "Tomato, wheat, rice disease control",
        "Fruit and vegetable crops"
      ],
      hazards: [
        "May cause skin and eye irritation",
        "Harmful if swallowed",
        "May cause sensitization",
        "Toxic to aquatic life"
      ],
      safetyMeasures: [
        "Wear protective clothing and gloves",
        "Avoid inhalation of dust",
        "Do not contaminate water sources",
        "Observe pre-harvest intervals"
      ],
      manufacturers: ["UPL Ltd", "Indofil Industries", "Dhanuka Agritech", "Coromandel"],
      marketPrice: "$5.2-7.5/kg",
      annualProduction: "0.45 million MT (India)",
      tradingHubs: ["Mumbai", "Hyderabad", "Bangalore"],
      regulations: ["CIB&RC registered", "WHO Class U (Unlikely to be hazardous)", "FAO approved"]
    },
    "potash": {
      name: "Potash (Potassium Chloride)",
      cas: "7447-40-7",
      formula: "KCl",
      molecularWeight: "74.55 g/mol",
      category: "Agrochemical",
      hsCode: "3104.20",
      iupacName: "Potassium chloride",
      appearance: "White crystalline solid",
      odor: "Odorless",
      density: "1.98 g/cm³",
      meltingPoint: "770°C",
      boilingPoint: "1420°C",
      solubility: "347 g/L in water at 20°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Potassium fertilizer (60% K₂O)",
        "NPK complex fertilizers",
        "Food processing (salt substitute)",
        "Oil drilling fluids",
        "Pharmaceutical applications"
      ],
      hazards: [
        "May cause eye and skin irritation",
        "Harmful if swallowed in large quantities",
        "May cause gastrointestinal irritation",
        "Low toxicity overall"
      ],
      safetyMeasures: [
        "Avoid dust inhalation",
        "Use dust mask in dry conditions",
        "Store in dry place",
        "Handle with gloves"
      ],
      manufacturers: ["IPL (imported)", "Coromandel", "IFFCO", "ICL (Israel)"],
      marketPrice: "$420-580/MT",
      annualProduction: "Negligible (mostly imported to India)",
      tradingHubs: ["Kandla", "Mumbai", "Chennai"],
      regulations: ["Fertilizer Control Order 1985", "IS 7393:1985"]
    },
    "paracetamol": {
      name: "Paracetamol (Acetaminophen)",
      cas: "103-90-2",
      formula: "C₈H₉NO₂",
      molecularWeight: "151.17 g/mol",
      category: "Pharmaceutical",
      hsCode: "2924.29",
      iupacName: "N-(4-hydroxyphenyl)acetamide",
      appearance: "White crystalline powder",
      odor: "Odorless",
      density: "1.29 g/cm³",
      meltingPoint: "169-170.5°C",
      boilingPoint: "420°C (decomposes)",
      solubility: "14 g/L in water at 20°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Analgesic (pain reliever)",
        "Antipyretic (fever reducer)",
        "Over-the-counter medication",
        "Cold and flu remedies",
        "Post-surgical pain management"
      ],
      hazards: [
        "Hepatotoxic in high doses",
        "May cause allergic reactions",
        "Overdose can be fatal",
        "Harmful if swallowed in excess"
      ],
      safetyMeasures: [
        "Store in cool, dry place",
        "Keep out of reach of children",
        "Follow dosage instructions",
        "Avoid alcohol consumption during use"
      ],
      manufacturers: ["Granules India", "Aurobindo Pharma", "Dr. Reddy's", "Cipla"],
      marketPrice: "$8.5-12/kg",
      annualProduction: "0.12 million MT (India)",
      tradingHubs: ["Hyderabad", "Ahmedabad", "Mumbai"],
      regulations: ["Schedule H drug", "GMP certified", "WHO Essential Medicine"]
    },
    "aspirin": {
      name: "Aspirin (Acetylsalicylic Acid)",
      cas: "50-78-2",
      formula: "C₉H₈O₄",
      molecularWeight: "180.16 g/mol",
      category: "Pharmaceutical",
      hsCode: "2918.22",
      iupacName: "2-acetoxybenzoic acid",
      appearance: "White crystalline powder",
      odor: "Weak, vinegar-like",
      density: "1.40 g/cm³",
      meltingPoint: "135-138°C",
      boilingPoint: "140°C (decomposes)",
      solubility: "3 g/L in water at 25°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Analgesic and anti-inflammatory",
        "Antiplatelet agent (blood thinner)",
        "Cardiovascular disease prevention",
        "Fever reduction",
        "Rheumatic condition treatment"
      ],
      hazards: [
        "May cause stomach bleeding",
        "Risk of Reye's syndrome in children",
        "May cause allergic reactions",
        "Harmful if swallowed in excess"
      ],
      safetyMeasures: [
        "Take with food or milk",
        "Avoid in children with viral infections",
        "Consult doctor if on blood thinners",
        "Store in cool, dry place"
      ],
      manufacturers: ["Bayer India", "Nicholas Piramal", "Torrent Pharma", "Cadila Healthcare"],
      marketPrice: "$6.5-9.5/kg",
      annualProduction: "0.08 million MT (India)",
      tradingHubs: ["Mumbai", "Hyderabad", "Ahmedabad"],
      regulations: ["Schedule H drug", "GMP certified", "WHO Essential Medicine"]
    },
    "ibuprofen": {
      name: "Ibuprofen",
      cas: "15687-27-1",
      formula: "C₁₃H₁₈O₂",
      molecularWeight: "206.28 g/mol",
      category: "Pharmaceutical",
      hsCode: "2916.31",
      iupacName: "2-[4-(2-methylpropyl)phenyl]propanoic acid",
      appearance: "White crystalline powder",
      odor: "Characteristic odor",
      density: "1.03 g/cm³",
      meltingPoint: "75-78°C",
      boilingPoint: "157°C at 2 mmHg",
      solubility: "0.021 g/L in water at 25°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Nonsteroidal anti-inflammatory drug (NSAID)",
        "Pain relief (headache, dental, menstrual)",
        "Fever reduction",
        "Arthritis treatment",
        "Post-operative pain management"
      ],
      hazards: [
        "May cause gastrointestinal issues",
        "Risk of cardiovascular events",
        "May cause allergic reactions",
        "Harmful to kidney function in excess"
      ],
      safetyMeasures: [
        "Take with food or milk",
        "Avoid in case of stomach ulcers",
        "Monitor kidney function with long-term use",
        "Store in cool, dry place"
      ],
      manufacturers: ["IOL Chemicals", "Granules India", "BASF India", "Abbott India"],
      marketPrice: "$12-18/kg",
      annualProduction: "0.06 million MT (India)",
      tradingHubs: ["Hyderabad", "Mumbai", "Bangalore"],
      regulations: ["Schedule H drug", "GMP certified", "WHO Essential Medicine"]
    },
    "amoxicillin": {
      name: "Amoxicillin",
      cas: "26787-78-0",
      formula: "C₁₆H₁₉N₃O₅S",
      molecularWeight: "365.40 g/mol",
      category: "Pharmaceutical",
      hsCode: "2941.10",
      iupacName: "(2S,5R,6R)-6-[[(2R)-2-amino-2-(4-hydroxyphenyl)acetyl]amino]-3,3-dimethyl-7-oxo-4-thia-1-azabicyclo[3.2.0]heptane-2-carboxylic acid",
      appearance: "White to off-white powder",
      odor: "Odorless or slight odor",
      density: "1.52 g/cm³",
      meltingPoint: "Decomposes at 194°C",
      boilingPoint: "N/A (decomposes)",
      solubility: "4 g/L in water at 25°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Broad-spectrum antibiotic",
        "Bacterial infection treatment",
        "Respiratory tract infections",
        "Urinary tract infections",
        "H. pylori eradication therapy"
      ],
      hazards: [
        "May cause allergic reactions",
        "Risk of anaphylaxis in penicillin-sensitive patients",
        "May cause diarrhea",
        "Potential for antibiotic resistance"
      ],
      safetyMeasures: [
        "Complete full course as prescribed",
        "Check for penicillin allergy before use",
        "Store in refrigerator after reconstitution",
        "Keep out of reach of children"
      ],
      manufacturers: ["Aurobindo Pharma", "Lupin", "Alembic Pharma", "Sandoz India"],
      marketPrice: "$22-35/kg",
      annualProduction: "0.04 million MT (India)",
      tradingHubs: ["Hyderabad", "Goa", "Ahmedabad"],
      regulations: ["Schedule H drug", "Prescription required", "WHO Essential Medicine"]
    },
    "metformin": {
      name: "Metformin",
      cas: "657-24-9",
      formula: "C₄H₁₁N₅",
      molecularWeight: "129.16 g/mol",
      category: "Pharmaceutical",
      hsCode: "2925.29",
      iupacName: "N,N-Dimethylimidodicarbonimidic diamide",
      appearance: "White crystalline powder",
      odor: "Characteristic amine odor",
      density: "1.35 g/cm³",
      meltingPoint: "223-226°C",
      boilingPoint: "N/A (decomposes)",
      solubility: "Freely soluble in water",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Type 2 diabetes treatment",
        "Blood glucose control",
        "Insulin sensitivity improvement",
        "Polycystic ovary syndrome (PCOS) treatment",
        "Weight management in diabetic patients"
      ],
      hazards: [
        "May cause lactic acidosis (rare)",
        "Gastrointestinal side effects",
        "May cause vitamin B12 deficiency",
        "Contraindicated in kidney disease"
      ],
      safetyMeasures: [
        "Monitor kidney function regularly",
        "Take with meals to reduce GI effects",
        "Avoid alcohol consumption",
        "Store in cool, dry place"
      ],
      manufacturers: ["USV Ltd", "Cipla", "Sun Pharma", "Lupin"],
      marketPrice: "$6-10/kg",
      annualProduction: "0.05 million MT (India)",
      tradingHubs: ["Mumbai", "Hyderabad", "Bangalore"],
      regulations: ["Schedule H drug", "Prescription required", "WHO Essential Medicine"]
    },
    "atorvastatin": {
      name: "Atorvastatin",
      cas: "134523-00-5",
      formula: "C₃₃H₃₅FN₂O₅",
      molecularWeight: "558.64 g/mol",
      category: "Pharmaceutical",
      hsCode: "2933.99",
      iupacName: "(3R,5R)-7-[2-(4-fluorophenyl)-3-phenyl-4-(phenylcarbamoyl)-5-propan-2-ylpyrrol-1-yl]-3,5-dihydroxyheptanoic acid",
      appearance: "White to off-white powder",
      odor: "Odorless",
      density: "1.14 g/cm³",
      meltingPoint: "159-160°C",
      boilingPoint: "N/A (decomposes)",
      solubility: "Slightly soluble in water",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Cholesterol-lowering medication (statin)",
        "Cardiovascular disease prevention",
        "Hyperlipidemia treatment",
        "Atherosclerosis prevention",
        "Stroke risk reduction"
      ],
      hazards: [
        "May cause muscle pain (myalgia)",
        "Risk of liver enzyme elevation",
        "May cause rhabdomyolysis (rare)",
        "Contraindicated in pregnancy"
      ],
      safetyMeasures: [
        "Monitor liver function periodically",
        "Report unexplained muscle pain",
        "Avoid grapefruit juice",
        "Store at room temperature"
      ],
      manufacturers: ["Dr. Reddy's", "Ranbaxy (Sun Pharma)", "Biocon", "Cadila Healthcare"],
      marketPrice: "$850-1,200/kg",
      annualProduction: "0.008 million MT (India)",
      tradingHubs: ["Hyderabad", "Bangalore", "Mumbai"],
      regulations: ["Schedule H drug", "Prescription required", "Patented (expired)"]
    },
    "titanium-dioxide": {
      name: "Titanium Dioxide",
      cas: "13463-67-7",
      formula: "TiO₂",
      molecularWeight: "79.87 g/mol",
      category: "Specialty Chemical",
      hsCode: "2823.00",
      iupacName: "Titanium(IV) oxide",
      appearance: "White powder",
      odor: "Odorless",
      density: "4.23 g/cm³ (rutile)",
      meltingPoint: "1843°C",
      boilingPoint: "2972°C",
      solubility: "Insoluble in water",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "White pigment in paints and coatings",
        "Plastics and polymer colorant",
        "Cosmetics and sunscreen (UV protection)",
        "Paper and printing inks",
        "Food additive (E171)"
      ],
      hazards: [
        "May cause respiratory irritation (dust)",
        "Possible carcinogen (IARC Group 2B - inhalation)",
        "Eye and skin irritation (dust)",
        "Low acute toxicity"
      ],
      safetyMeasures: [
        "Use dust mask when handling powder",
        "Ensure adequate ventilation",
        "Avoid dust generation",
        "Store in dry conditions"
      ],
      manufacturers: ["Kerala Minerals (KMML)", "Travancore Titanium", "Chemours", "Venator"],
      marketPrice: "$2,800-3,500/MT",
      annualProduction: "0.18 million MT (India)",
      tradingHubs: ["Chennai", "Mumbai", "Vishakhapatnam"],
      regulations: ["IS 1795:2011", "Food grade: E171", "Cosmetic grade: USP/BP"]
    },
    "silicones": {
      name: "Silicones",
      cas: "63148-62-9",
      formula: "[-Si(CH₃)₂O-]ₙ",
      molecularWeight: "Variable (polymer)",
      category: "Specialty Chemical",
      hsCode: "3910.00",
      iupacName: "Poly(dimethylsiloxane)",
      appearance: "Clear, colorless liquid to solid",
      odor: "Odorless",
      density: "0.96-0.98 g/cm³",
      meltingPoint: "-50 to -40°C (varies)",
      boilingPoint: ">200°C (varies by grade)",
      solubility: "Insoluble in water",
      flashPoint: ">300°C (varies)",
      autoignitionTemp: "450°C",
      applications: [
        "Sealants and adhesives",
        "Personal care products (shampoos, lotions)",
        "Medical implants and devices",
        "Lubricants and release agents",
        "Electrical insulation"
      ],
      hazards: [
        "Generally low toxicity",
        "May cause eye irritation",
        "Slip hazard if spilled",
        "Combustion products may be harmful"
      ],
      safetyMeasures: [
        "Avoid contact with eyes",
        "Clean spills immediately",
        "Ensure adequate ventilation during curing",
        "Store in cool, dry place"
      ],
      manufacturers: ["Wacker Metroark", "Dow Corning India", "Momentive", "Elkem Silicones"],
      marketPrice: "$3.5-8/kg",
      annualProduction: "0.12 million MT (India)",
      tradingHubs: ["Mumbai", "Bangalore", "Chennai"],
      regulations: ["FDA approved (medical/food grade)", "REACH compliant", "IS 15770"]
    },
    "surfactants": {
      name: "Surfactants",
      cas: "Various",
      formula: "Various",
      molecularWeight: "Variable",
      category: "Specialty Chemical",
      hsCode: "3402.11-3402.90",
      iupacName: "Surface-active agents",
      appearance: "Liquids, powders, or pastes",
      odor: "Varies by type",
      density: "0.9-1.1 g/cm³ (varies)",
      meltingPoint: "Varies by type",
      boilingPoint: "Varies by type",
      solubility: "Varies (many water-soluble)",
      flashPoint: "Varies by type",
      autoignitionTemp: "Varies by type",
      applications: [
        "Detergents and cleaning products",
        "Personal care products (shampoos, soaps)",
        "Industrial cleaning and degreasing",
        "Emulsifiers in food and cosmetics",
        "Agricultural formulations (wetting agents)"
      ],
      hazards: [
        "May cause skin and eye irritation",
        "Harmful if swallowed (varies)",
        "Slippery when spilled",
        "Aquatic toxicity (some types)"
      ],
      safetyMeasures: [
        "Wear gloves and eye protection",
        "Avoid skin and eye contact",
        "Clean spills immediately",
        "Store according to type specifications"
      ],
      manufacturers: ["Godrej Industries", "Galaxy Surfactants", "Clariant India", "BASF India"],
      marketPrice: "$1.2-5/kg (varies widely)",
      annualProduction: "1.2 million MT (India)",
      tradingHubs: ["Mumbai", "Ahmedabad", "Chennai"],
      regulations: ["BIS standards", "Detergent Control Order", "REACH compliant"]
    },
    "catalysts": {
      name: "Catalysts",
      cas: "Various",
      formula: "Various",
      molecularWeight: "Variable",
      category: "Specialty Chemical",
      hsCode: "3815.11-3815.90",
      iupacName: "Catalytic substances",
      appearance: "Solids, liquids, or supported materials",
      odor: "Varies by type",
      density: "Varies by type",
      meltingPoint: "Varies by type",
      boilingPoint: "Varies by type",
      solubility: "Varies by type",
      flashPoint: "Varies by type",
      autoignitionTemp: "Varies by type",
      applications: [
        "Petroleum refining (cracking, reforming)",
        "Chemical synthesis (polymerization)",
        "Automotive catalytic converters",
        "Pharmaceutical manufacturing",
        "Environmental emission control"
      ],
      hazards: [
        "Some are pyrophoric (ignite in air)",
        "Heavy metal content (environmental concern)",
        "May cause respiratory irritation",
        "Handling varies by catalyst type"
      ],
      safetyMeasures: [
        "Handle according to specific catalyst type",
        "Use inert atmosphere for air-sensitive types",
        "Proper disposal required",
        "Store in appropriate conditions"
      ],
      manufacturers: ["Johnson Matthey India", "BASF Catalysts", "Clariant Catalysts", "UOP India"],
      marketPrice: "$5-500/kg (varies widely)",
      annualProduction: "0.08 million MT (India)",
      tradingHubs: ["Mumbai", "Vadodara", "Chennai"],
      regulations: ["Hazardous waste rules", "Precious metal tracking", "Export controls"]
    },
    "flame-retardants": {
      name: "Flame Retardants",
      cas: "Various",
      formula: "Various",
      molecularWeight: "Variable",
      category: "Specialty Chemical",
      hsCode: "3812.30",
      iupacName: "Flame retardant chemicals",
      appearance: "Powders or liquids",
      odor: "Varies by type",
      density: "Varies by type",
      meltingPoint: "Varies by type",
      boilingPoint: "Varies by type",
      solubility: "Varies by type",
      flashPoint: "Varies by type",
      autoignitionTemp: "Varies by type",
      applications: [
        "Electronics and electrical equipment",
        "Building materials and insulation",
        "Textiles and upholstery",
        "Automotive interior components",
        "Wire and cable coatings"
      ],
      hazards: [
        "Some types are persistent pollutants",
        "May cause endocrine disruption",
        "Bioaccumulative potential",
        "Varies by chemical type"
      ],
      safetyMeasures: [
        "Use halogen-free alternatives when possible",
        "Proper disposal required",
        "Avoid inhalation and skin contact",
        "Follow regulatory guidelines"
      ],
      manufacturers: ["Clariant India", "ICL India", "Chemtura (LANXESS)", "Adeka India"],
      marketPrice: "$3-15/kg (varies)",
      annualProduction: "0.25 million MT (India)",
      tradingHubs: ["Mumbai", "Delhi", "Bangalore"],
      regulations: ["RoHS Directive", "REACH restrictions", "BIS standards"]
    },
    "electronic-chemicals": {
      name: "Electronic Chemicals",
      cas: "Various",
      formula: "Various",
      molecularWeight: "Variable",
      category: "Specialty Chemical",
      hsCode: "2811.19-3824.99",
      iupacName: "Semiconductor and electronics grade chemicals",
      appearance: "High-purity liquids, gases, or solids",
      odor: "Varies by type",
      density: "Varies by type",
      meltingPoint: "Varies by type",
      boilingPoint: "Varies by type",
      solubility: "Varies by type",
      flashPoint: "Varies by type",
      autoignitionTemp: "Varies by type",
      applications: [
        "Semiconductor wafer fabrication",
        "Photoresists and etchants",
        "PCB manufacturing",
        "Display panel production",
        "Solar cell manufacturing"
      ],
      hazards: [
        "High purity requires special handling",
        "Many are corrosive or toxic",
        "Flammable (some types)",
        "Requires cleanroom conditions"
      ],
      safetyMeasures: [
        "Cleanroom handling procedures",
        "Use ultra-pure water for dilution",
        "Proper contamination control",
        "Specialized storage and distribution"
      ],
      manufacturers: ["Merck India", "BASF Electronic Materials", "Honeywell India", "Air Liquide"],
      marketPrice: "$50-5,000/kg (varies widely)",
      annualProduction: "0.03 million MT (India)",
      tradingHubs: ["Bangalore", "Hyderabad", "Noida"],
      regulations: ["SEMI standards", "ISO cleanroom", "Export controls"]
    },
    "caustic-soda": {
      name: "Caustic Soda (NaOH)",
      cas: "1310-73-2",
      formula: "NaOH",
      molecularWeight: "40.00 g/mol",
      category: "Basic Chemical",
      hsCode: "2815.11-2815.12",
      iupacName: "Sodium hydroxide",
      appearance: "White solid or clear liquid (solution)",
      odor: "Odorless",
      density: "2.13 g/cm³ (solid), 1.53 g/cm³ (50% solution)",
      meltingPoint: "318°C",
      boilingPoint: "1388°C",
      solubility: "1110 g/L in water at 20°C (highly exothermic)",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Chemical manufacturing (organic synthesis)",
        "Pulp and paper industry",
        "Textile processing and mercerization",
        "Soap and detergent production",
        "Water treatment and pH adjustment"
      ],
      hazards: [
        "Highly corrosive to skin, eyes, and mucous membranes",
        "Causes severe burns",
        "Reacts violently with acids",
        "Generates heat when dissolved in water"
      ],
      safetyMeasures: [
        "Use full PPE including face shield",
        "Emergency eyewash and shower required",
        "Store in corrosion-resistant containers",
        "Add to water slowly, never reverse"
      ],
      manufacturers: ["Gujarat Alkalies", "DCW Ltd", "Grasim Industries", "Tata Chemicals"],
      marketPrice: "$380-520/MT",
      annualProduction: "4.2 million MT (India)",
      tradingHubs: ["Mumbai", "Ahmedabad", "Dahej"],
      regulations: ["IS 252:2013", "Hazardous chemical", "UN 1823/1824"]
    },
    "chlorine": {
      name: "Chlorine",
      cas: "7782-50-5",
      formula: "Cl₂",
      molecularWeight: "70.90 g/mol",
      category: "Basic Chemical",
      hsCode: "2801.10",
      iupacName: "Dichlorine",
      appearance: "Greenish-yellow gas",
      odor: "Pungent, irritating",
      density: "3.21 kg/m³ (gas at 0°C)",
      meltingPoint: "-101.5°C",
      boilingPoint: "-34.04°C",
      solubility: "7.3 g/L in water at 20°C",
      flashPoint: "Non-flammable but supports combustion",
      autoignitionTemp: "N/A",
      applications: [
        "Water treatment and disinfection",
        "PVC and plastic manufacturing",
        "Bleaching agent (paper, textiles)",
        "Chemical synthesis (chlorinated compounds)",
        "Swimming pool sanitization"
      ],
      hazards: [
        "Highly toxic by inhalation",
        "Corrosive to respiratory tract",
        "May be fatal if inhaled",
        "Strong oxidizing agent"
      ],
      safetyMeasures: [
        "Use in well-ventilated areas only",
        "Emergency respirator required",
        "Chlorine leak detection systems",
        "Never mix with ammonia or acids"
      ],
      manufacturers: ["Gujarat Alkalies", "DCW Ltd", "Tata Chemicals", "Grasim Industries"],
      marketPrice: "$320-450/MT",
      annualProduction: "3.8 million MT (India)",
      tradingHubs: ["Dahej", "Mumbai", "Vadodara"],
      regulations: ["PESO approved", "Hazardous chemical", "UN 1017"]
    },
    "nitric-acid": {
      name: "Nitric Acid",
      cas: "7697-37-2",
      formula: "HNO₃",
      molecularWeight: "63.01 g/mol",
      category: "Basic Chemical",
      hsCode: "2808.00",
      iupacName: "Nitric acid",
      appearance: "Colorless to pale yellow liquid",
      odor: "Acrid, suffocating",
      density: "1.51 g/cm³ (68% solution)",
      meltingPoint: "-42°C (pure)",
      boilingPoint: "83°C (68% solution)",
      solubility: "Miscible with water (exothermic)",
      flashPoint: "Non-flammable but strong oxidizer",
      autoignitionTemp: "N/A",
      applications: [
        "Fertilizer production (ammonium nitrate)",
        "Explosives manufacturing (TNT, nitroglycerin)",
        "Nitration of organic compounds",
        "Metal etching and cleaning",
        "Rocket propellant oxidizer"
      ],
      hazards: [
        "Highly corrosive to skin and eyes",
        "Strong oxidizing agent",
        "Reacts violently with organics",
        "Toxic by inhalation"
      ],
      safetyMeasures: [
        "Use acid-resistant PPE and face shield",
        "Store away from combustibles",
        "Emergency eyewash required",
        "Use in well-ventilated areas"
      ],
      manufacturers: ["Deepak Fertilisers", "RCF", "Chambal Fertilisers", "GNFC"],
      marketPrice: "$280-420/MT",
      annualProduction: "2.1 million MT (India)",
      tradingHubs: ["Mumbai", "Chennai", "Vadodara"],
      regulations: ["Explosives Act 1884", "Hazardous chemical", "UN 2031"]
    },
    "phosphoric-acid": {
      name: "Phosphoric Acid",
      cas: "7664-38-2",
      formula: "H₃PO₄",
      molecularWeight: "97.99 g/mol",
      category: "Basic Chemical",
      hsCode: "2809.20",
      iupacName: "Phosphoric acid",
      appearance: "Clear, colorless liquid",
      odor: "Odorless",
      density: "1.88 g/cm³ (85% solution)",
      meltingPoint: "42.35°C (pure)",
      boilingPoint: "158°C (85% solution)",
      solubility: "Miscible with water",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Fertilizer production (DAP, MAP, TSP)",
        "Food and beverage acidulant (E338)",
        "Rust removal and metal treatment",
        "Detergent and cleaning products",
        "Pharmaceutical applications"
      ],
      hazards: [
        "Corrosive to skin and eyes",
        "Causes severe burns",
        "May cause respiratory irritation",
        "Harmful if swallowed"
      ],
      safetyMeasures: [
        "Use acid-resistant PPE",
        "Emergency eyewash required",
        "Store in corrosion-resistant containers",
        "Avoid contact with skin and eyes"
      ],
      manufacturers: ["Coromandel International", "Chambal Fertilisers", "RCF", "IFFCO"],
      marketPrice: "$650-850/MT",
      annualProduction: "3.5 million MT (India)",
      tradingHubs: ["Vizag", "Mumbai", "Paradeep"],
      regulations: ["Food grade: FCC/USP", "Fertilizer grade: IS 6827", "UN 1805"]
    },
    "sodium-lauryl-sulfate": {
      name: "Sodium Lauryl Sulfate",
      cas: "151-21-3",
      formula: "C₁₂H₂₅NaO₄S",
      molecularWeight: "288.38 g/mol",
      category: "Consumer Chemical",
      hsCode: "3402.11",
      iupacName: "Sodium dodecyl sulfate",
      appearance: "White to cream powder or paste",
      odor: "Characteristic mild odor",
      density: "1.01 g/cm³",
      meltingPoint: "204-207°C",
      boilingPoint: "Decomposes before boiling",
      solubility: "100 g/L in water at 20°C",
      flashPoint: ">100°C",
      autoignitionTemp: "N/A",
      applications: [
        "Shampoos and personal care products",
        "Toothpaste (foaming agent)",
        "Household cleaning products",
        "Industrial detergents",
        "Laboratory research (protein denaturation)"
      ],
      hazards: [
        "May cause skin and eye irritation",
        "Harmful if swallowed in large amounts",
        "May cause respiratory irritation (dust)",
        "Slippery when wet"
      ],
      safetyMeasures: [
        "Avoid contact with eyes",
        "Use gloves when handling concentrated form",
        "Ensure adequate ventilation",
        "Clean spills immediately"
      ],
      manufacturers: ["Galaxy Surfactants", "Godrej Industries", "VVF Ltd", "Clariant India"],
      marketPrice: "$1.8-2.8/kg",
      annualProduction: "0.18 million MT (India)",
      tradingHubs: ["Mumbai", "Ahmedabad", "Chennai"],
      regulations: ["Cosmetic grade: USP/BP", "Food grade: FCC", "IS 4955"]
    },
    "glycerin": {
      name: "Glycerin",
      cas: "56-81-5",
      formula: "C₃H₈O₃",
      molecularWeight: "92.09 g/mol",
      category: "Consumer Chemical",
      hsCode: "2905.45",
      iupacName: "Propane-1,2,3-triol",
      appearance: "Clear, colorless, viscous liquid",
      odor: "Odorless",
      density: "1.26 g/cm³",
      meltingPoint: "17.8°C",
      boilingPoint: "290°C",
      solubility: "Miscible with water",
      flashPoint: "199°C",
      autoignitionTemp: "370°C",
      applications: [
        "Cosmetics and personal care (moisturizer)",
        "Food industry (sweetener, humectant E422)",
        "Pharmaceutical formulations",
        "Antifreeze and coolant",
        "Biodiesel byproduct"
      ],
      hazards: [
        "May cause eye irritation",
        "Slippery when spilled",
        "Combustible at high temperatures",
        "Generally low toxicity"
      ],
      safetyMeasures: [
        "Avoid eye contact",
        "Clean spills immediately",
        "Store in cool, dry place",
        "Keep away from strong oxidizers"
      ],
      manufacturers: ["Godrej Industries", "Croda India", "Emery Oleochemicals", "VVF Ltd"],
      marketPrice: "$1.2-1.9/kg",
      annualProduction: "0.32 million MT (India)",
      tradingHubs: ["Mumbai", "Kolkata", "Chennai"],
      regulations: ["Food grade: FCC/USP", "Pharmaceutical grade: BP/IP", "Kosher certified"]
    },
    "citric-acid": {
      name: "Citric Acid",
      cas: "77-92-9",
      formula: "C₆H₈O₇",
      molecularWeight: "192.12 g/mol",
      category: "Consumer Chemical",
      hsCode: "2918.14",
      iupacName: "2-hydroxypropane-1,2,3-tricarboxylic acid",
      appearance: "White crystalline powder",
      odor: "Odorless",
      density: "1.66 g/cm³",
      meltingPoint: "153-159°C",
      boilingPoint: "Decomposes at 175°C",
      solubility: "1330 g/L in water at 20°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: ">1000°C",
      applications: [
        "Food and beverage acidulant (E330)",
        "Cleaning and descaling products",
        "Cosmetics and personal care",
        "Pharmaceutical excipient",
        "Chelating agent"
      ],
      hazards: [
        "May cause eye and skin irritation",
        "May cause respiratory irritation (dust)",
        "Harmful to teeth enamel in concentrated form",
        "Generally low toxicity"
      ],
      safetyMeasures: [
        "Avoid inhalation of dust",
        "Use gloves when handling",
        "Ensure adequate ventilation",
        "Store in dry conditions"
      ],
      manufacturers: ["Cargill India", "Gadot Biochemical", "RZBC Group", "Huangshi Xinghua"],
      marketPrice: "$1.1-1.6/kg",
      annualProduction: "0.22 million MT (India)",
      tradingHubs: ["Mumbai", "Chennai", "Ahmedabad"],
      regulations: ["Food grade: FCC/E330", "Pharmaceutical grade: BP/USP", "IS 6618"]
    },
    "sodium-bicarbonate": {
      name: "Sodium Bicarbonate",
      cas: "144-55-8",
      formula: "NaHCO₃",
      molecularWeight: "84.01 g/mol",
      category: "Consumer Chemical",
      hsCode: "2836.30",
      iupacName: "Sodium hydrogen carbonate",
      appearance: "White crystalline powder",
      odor: "Odorless",
      density: "2.20 g/cm³",
      meltingPoint: "Decomposes at 50°C",
      boilingPoint: "Decomposes (does not boil)",
      solubility: "96 g/L in water at 20°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Baking powder and food additive (E500)",
        "Antacid medication",
        "Cleaning and deodorizing agent",
        "Fire extinguisher (Class B, C)",
        "pH buffer and water treatment"
      ],
      hazards: [
        "May cause eye irritation",
        "May cause respiratory irritation (dust)",
        "Generally recognized as safe (GRAS)",
        "Very low toxicity"
      ],
      safetyMeasures: [
        "Avoid inhalation of dust",
        "Store in dry conditions",
        "Keep container closed",
        "Use as directed for consumption"
      ],
      manufacturers: ["Tata Chemicals", "GHCL Ltd", "Nirma Ltd", "DCW Ltd"],
      marketPrice: "$0.4-0.8/kg",
      annualProduction: "0.48 million MT (India)",
      tradingHubs: ["Mumbai", "Ahmedabad", "Delhi"],
      regulations: ["Food grade: FCC/E500", "Pharmaceutical grade: BP/USP", "IS 3067"]
    },
    "hydrogen-peroxide": {
      name: "Hydrogen Peroxide",
      cas: "7722-84-1",
      formula: "H₂O₂",
      molecularWeight: "34.01 g/mol",
      category: "Consumer Chemical",
      hsCode: "2847.00",
      iupacName: "Hydrogen peroxide",
      appearance: "Clear, colorless liquid",
      odor: "Slightly sharp odor",
      density: "1.45 g/cm³ (pure), 1.11 g/cm³ (35% solution)",
      meltingPoint: "-0.43°C",
      boilingPoint: "150.2°C (pure)",
      solubility: "Miscible with water",
      flashPoint: "Non-flammable but strong oxidizer",
      autoignitionTemp: "N/A",
      applications: [
        "Bleaching agent (paper, textiles)",
        "Disinfectant and antiseptic",
        "Wastewater treatment",
        "Hair bleaching and cosmetics",
        "Chemical synthesis (oxidizing agent)"
      ],
      hazards: [
        "Corrosive to skin and eyes",
        "Strong oxidizing agent",
        "Can cause burns at high concentrations",
        "Decomposes releasing oxygen (fire hazard)"
      ],
      safetyMeasures: [
        "Use gloves and eye protection",
        "Store in cool, dark place in vented container",
        "Avoid contact with combustibles",
        "Dilute before consumer use"
      ],
      manufacturers: ["Solvay India", "Gujarat Alkalies", "Evonik India", "National Peroxide"],
      marketPrice: "$0.6-1.2/kg (varies by concentration)",
      annualProduction: "0.35 million MT (India)",
      tradingHubs: ["Mumbai", "Ahmedabad", "Chennai"],
      regulations: ["Food grade: FCC", "Pharmaceutical grade: BP/USP", "IS 2080"]
    },
    "isopropyl-alcohol": {
      name: "Isopropyl Alcohol",
      cas: "67-63-0",
      formula: "C₃H₈O",
      molecularWeight: "60.10 g/mol",
      category: "Consumer Chemical",
      hsCode: "2905.12",
      iupacName: "Propan-2-ol",
      appearance: "Clear, colorless liquid",
      odor: "Characteristic alcohol odor",
      density: "0.786 g/cm³",
      meltingPoint: "-89°C",
      boilingPoint: "82.6°C",
      solubility: "Miscible with water",
      flashPoint: "11.7°C (closed cup)",
      autoignitionTemp: "399°C",
      applications: [
        "Disinfectant and antiseptic (70% solution)",
        "Cleaning agent (electronics, surfaces)",
        "Solvent in cosmetics and pharmaceuticals",
        "Hand sanitizer base",
        "Industrial solvent"
      ],
      hazards: [
        "Highly flammable liquid and vapor",
        "May cause eye irritation",
        "May cause drowsiness and dizziness",
        "Harmful if swallowed in large amounts"
      ],
      safetyMeasures: [
        "Keep away from heat and ignition sources",
        "Use in well-ventilated areas",
        "Store in cool, dry place",
        "Avoid prolonged skin contact"
      ],
      manufacturers: ["Shell Chemicals", "Deepak Novochem", "INEOS India", "Dow India"],
      marketPrice: "$1.1-1.8/kg",
      annualProduction: "0.25 million MT (India)",
      tradingHubs: ["Mumbai", "Vadodara", "Chennai"],
      regulations: ["Pharmaceutical grade: BP/USP", "Denatured under Excise Act", "UN 1219"]
    },
    "lithium-hydroxide": {
      name: "Lithium Hydroxide",
      cas: "1310-65-2",
      formula: "LiOH",
      molecularWeight: "23.95 g/mol (anhydrous)",
      category: "Advanced Chemical",
      hsCode: "2825.20",
      iupacName: "Lithium hydroxide",
      appearance: "White hygroscopic crystals",
      odor: "Odorless",
      density: "1.46 g/cm³ (monohydrate)",
      meltingPoint: "462°C (anhydrous)",
      boilingPoint: "1626°C",
      solubility: "128 g/L in water at 20°C",
      flashPoint: "Non-flammable",
      autoignitionTemp: "N/A",
      applications: [
        "Lithium-ion battery cathode material",
        "EV battery production",
        "CO₂ scrubber in spacecraft/submarines",
        "Lubricating grease additive",
        "Ceramic and glass manufacturing"
      ],
      hazards: [
        "Corrosive to skin and eyes",
        "Harmful if swallowed",
        "May cause respiratory irritation",
        "Reacts with moisture"
      ],
      safetyMeasures: [
        "Use full PPE including face shield",
        "Store in dry, airtight containers",
        "Avoid contact with skin and eyes",
        "Emergency eyewash required"
      ],
      manufacturers: ["SQM (Chile)", "Albemarle", "Ganfeng Lithium", "Livent"],
      marketPrice: "$15-35/kg (volatile pricing)",
      annualProduction: "Minimal (India imports)",
      tradingHubs: ["Mumbai", "Chennai", "Bangalore"],
      regulations: ["UN 2680", "Corrosive substance", "Export controls"]
    },
    "graphene": {
      name: "Graphene",
      cas: "1034343-98-0",
      formula: "C (single layer)",
      molecularWeight: "12.01 g/mol (per carbon)",
      category: "Advanced Chemical",
      hsCode: "2803.00",
      iupacName: "Graphene",
      appearance: "Black to dark gray powder (multilayer)",
      odor: "Odorless",
      density: "2.23 g/cm³ (theoretical single layer)",
      meltingPoint: ">3000°C (sublimes)",
      boilingPoint: "N/A (sublimes)",
      solubility: "Insoluble in water",
      flashPoint: "Non-flammable in bulk form",
      autoignitionTemp: ">500°C",
      applications: [
        "Advanced composites and coatings",
        "Energy storage (batteries, supercapacitors)",
        "Electronics (conductive inks, sensors)",
        "Water filtration membranes",
        "Biomedical devices and drug delivery"
      ],
      hazards: [
        "Potential respiratory irritant (nanoparticles)",
        "Long-term health effects under study",
        "May cause skin irritation",
        "Environmental impact not fully known"
      ],
      safetyMeasures: [
        "Use dust mask or respirator",
        "Handle in well-ventilated areas",
        "Avoid dust generation",
        "Follow nanomaterial safety protocols"
      ],
      manufacturers: ["Graphene Laboratories", "XG Sciences", "Applied Graphene Materials", "Sixth Element"],
      marketPrice: "$50-500/kg (varies by quality)",
      annualProduction: "Research/small scale (India)",
      tradingHubs: ["Bangalore", "Hyderabad", "Pune"],
      regulations: ["Nanomaterial guidelines", "Research use protocols", "Export controls"]
    },
    "carbon-nanotubes": {
      name: "Carbon Nanotubes",
      cas: "308068-56-6",
      formula: "C (tubular structure)",
      molecularWeight: "Variable",
      category: "Advanced Chemical",
      hsCode: "2803.00",
      iupacName: "Carbon nanotubes (CNT)",
      appearance: "Black powder",
      odor: "Odorless",
      density: "0.8-1.8 g/cm³ (bulk)",
      meltingPoint: ">3000°C (sublimes)",
      boilingPoint: "N/A (sublimes)",
      solubility: "Insoluble in water",
      flashPoint: "Non-flammable in bulk",
      autoignitionTemp: ">600°C",
      applications: [
        "Advanced composites (aerospace, sports)",
        "Conductive additives (batteries, polymers)",
        "Electronics (transistors, displays)",
        "Catalysts and catalyst supports",
        "Biomedical applications (drug delivery)"
      ],
      hazards: [
        "Potential respiratory hazard (inhalation)",
        "Similar concerns to asbestos (fibrous structure)",
        "Skin irritation possible",
        "Long-term health effects under research"
      ],
      safetyMeasures: [
        "Use HEPA-filtered respirator",
        "Handle in fume hood or ventilated area",
        "Avoid dry powder handling",
        "Follow nanomaterial safety protocols"
      ],
      manufacturers: ["Nanocyl", "Arkema", "Showa Denko", "OCSiAl"],
      marketPrice: "$100-1,000/kg (varies widely)",
      annualProduction: "Research/small scale (India)",
      tradingHubs: ["Bangalore", "Mumbai", "Hyderabad"],
      regulations: ["Nanomaterial guidelines", "REACH nanomaterial annex", "Occupational exposure limits"]
    },
    "rare-earth-elements": {
      name: "Rare Earth Elements",
      cas: "Various",
      formula: "Various (La, Ce, Nd, Pr, Dy, etc.)",
      molecularWeight: "Variable",
      category: "Advanced Chemical",
      hsCode: "2805.30",
      iupacName: "Lanthanides and related elements",
      appearance: "Silvery to gray metals or colored oxides",
      odor: "Odorless",
      density: "6-9 g/cm³ (varies by element)",
      meltingPoint: "795-1680°C (varies)",
      boilingPoint: "1590-3500°C (varies)",
      solubility: "Varies by compound",
      flashPoint: "Flammable in powder form",
      autoignitionTemp: "150-400°C (varies)",
      applications: [
        "Permanent magnets (NdFeB for motors)",
        "Catalysts (fluid cracking, automotive)",
        "Phosphors (displays, lighting)",
        "Battery materials (NiMH batteries)",
        "Glass polishing and ceramics"
      ],
      hazards: [
        "Some are pyrophoric (powder form)",
        "May cause skin and eye irritation",
        "Inhalation hazard (dust)",
        "Environmental accumulation concern"
      ],
      safetyMeasures: [
        "Handle powders in inert atmosphere",
        "Use dust mask and gloves",
        "Store in dry conditions",
        "Follow specific element safety data"
      ],
      manufacturers: ["IREL (Indian Rare Earths)", "China Northern Rare Earth", "Lynas Corp", "MP Materials"],
      marketPrice: "$10-1,000/kg (varies widely by element)",
      annualProduction: "0.003 million MT (India)",
      tradingHubs: ["Mumbai", "Chennai", "Bangalore"],
      regulations: ["Strategic materials", "Export controls", "Mining regulations"]
    },
    "conductive-polymers": {
      name: "Conductive Polymers",
      cas: "Various",
      formula: "Various (PEDOT, PPy, PANI, etc.)",
      molecularWeight: "Variable (polymers)",
      category: "Advanced Chemical",
      hsCode: "3911.90",
      iupacName: "Electrically conductive polymers",
      appearance: "Dark powders or films",
      odor: "Varies by type",
      density: "1.0-1.5 g/cm³ (varies)",
      meltingPoint: "Varies (some decompose)",
      boilingPoint: "N/A (polymers decompose)",
      solubility: "Varies (many insoluble)",
      flashPoint: "Varies by type",
      autoignitionTemp: "Varies by type",
      applications: [
        "Antistatic coatings and films",
        "Organic electronics (OLEDs, OPVs)",
        "Sensors and biosensors",
        "Supercapacitors and batteries",
        "Electromagnetic shielding"
      ],
      hazards: [
        "May cause skin and eye irritation",
        "Inhalation hazard (powder form)",
        "Some monomers are toxic",
        "Generally low toxicity when polymerized"
      ],
      safetyMeasures: [
        "Use gloves and eye protection",
        "Handle powders in ventilated areas",
        "Avoid inhalation of dust",
        "Store in cool, dry place"
      ],
      manufacturers: ["Heraeus Epurio", "Agfa Specialty Products", "Polyone", "Celanese"],
      marketPrice: "$50-500/kg (varies)",
      annualProduction: "Small scale (India)",
      tradingHubs: ["Bangalore", "Mumbai", "Pune"],
      regulations: ["REACH compliant", "RoHS compliant", "Industry standards"]
    },
    "green-hydrogen": {
      name: "Green Hydrogen (H2)",
      cas: "1333-74-0",
      formula: "H₂",
      molecularWeight: "2.016 g/mol",
      category: "Advanced Chemical",
      hsCode: "2804.10",
      iupacName: "Dihydrogen",
      appearance: "Colorless gas",
      odor: "Odorless",
      density: "0.0899 kg/m³ at STP",
      meltingPoint: "-259.2°C",
      boilingPoint: "-252.9°C",
      solubility: "1.6 mg/L in water at 20°C",
      flashPoint: "Extremely flammable gas",
      autoignitionTemp: "500-571°C",
      applications: [
        "Fuel cells (clean energy generation)",
        "Green steel production (iron ore reduction)",
        "Ammonia synthesis (green fertilizers)",
        "Energy storage and grid balancing",
        "Transportation fuel (FCEVs)"
      ],
      hazards: [
        "Extremely flammable and explosive",
        "Simple asphyxiant",
        "Wide flammability range (4-75% in air)",
        "May cause embrittlement of metals"
      ],
      safetyMeasures: [
        "Use explosion-proof equipment",
        "Ensure adequate ventilation",
        "Hydrogen leak detection systems",
        "Store in high-pressure vessels with safety protocols"
      ],
      manufacturers: ["Reliance Industries", "NTPC", "Indian Oil", "Adani Green Energy"],
      marketPrice: "$4-8/kg (target <$2/kg by 2030)",
      annualProduction: "Emerging (pilot projects in India)",
      tradingHubs: ["Gujarat", "Rajasthan", "Tamil Nadu"],
      regulations: ["National Hydrogen Mission", "UN 1049", "Compressed gas regulations"]
    }
  };

  const chemical = chemicalData[chemicalId];

  if (!chemical) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Chemical Not Found</h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <button
        onClick={() => router.back()}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back</span>
      </button>

      {/* Chemical Identity */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Beaker className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{chemical.name}</h1>
              <p className="text-xl text-blue-100">{chemical.iupacName}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-100">CAS Number</p>
            <p className="text-2xl font-bold">{chemical.cas}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/20">
          <div>
            <p className="text-sm text-blue-100">Formula</p>
            <p className="text-xl font-semibold">{chemical.formula}</p>
          </div>
          <div>
            <p className="text-sm text-blue-100">Molecular Weight</p>
            <p className="text-xl font-semibold">{chemical.molecularWeight}</p>
          </div>
          <div>
            <p className="text-sm text-blue-100">HS Code</p>
            <p className="text-xl font-semibold">{chemical.hsCode}</p>
          </div>
          <div>
            <p className="text-sm text-blue-100">Category</p>
            <p className="text-xl font-semibold">{chemical.category}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Physical Properties */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <ThermometerSun className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Physical Properties</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Appearance</span>
              <span className="font-medium text-gray-900">{chemical.appearance}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Odor</span>
              <span className="font-medium text-gray-900">{chemical.odor}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Density</span>
              <span className="font-medium text-gray-900">{chemical.density}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Melting Point</span>
              <span className="font-medium text-gray-900">{chemical.meltingPoint}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Boiling Point</span>
              <span className="font-medium text-gray-900">{chemical.boilingPoint}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Solubility</span>
              <span className="font-medium text-gray-900">{chemical.solubility}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Flash Point</span>
              <span className="font-medium text-gray-900">{chemical.flashPoint}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Autoignition Temp</span>
              <span className="font-medium text-gray-900">{chemical.autoignitionTemp}</span>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Factory className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Applications & Uses</h2>
          </div>
          <ul className="space-y-2">
            {chemical.applications.map((app: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="h-6 w-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hazards */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Hazards & Warnings</h2>
          </div>
          <ul className="space-y-2">
            {chemical.hazards.map((hazard: string, index: number) => (
              <li key={index} className="flex items-start space-x-2 p-2 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{hazard}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety Measures */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Safety Measures</h2>
          </div>
          <ul className="space-y-2">
            {chemical.safetyMeasures.map((measure: string, index: number) => (
              <li key={index} className="flex items-start space-x-2 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                <span className="h-5 w-5 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-gray-700">{measure}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Market Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Market Information</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-gray-600">Market Price (Avg)</p>
              <p className="text-2xl font-bold text-purple-700">{chemical.marketPrice}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">Annual Production (India)</p>
              <p className="text-xl font-semibold text-blue-700">{chemical.annualProduction}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Major Trading Hubs</p>
              <div className="flex flex-wrap gap-2">
                {chemical.tradingHubs.map((hub: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {hub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturers & Regulations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Package className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Manufacturers & Compliance</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Key Manufacturers</p>
              <div className="space-y-1">
                {chemical.manufacturers.map((mfr: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">{mfr}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-2">Regulations & Standards</p>
              <div className="flex flex-wrap gap-2">
                {chemical.regulations.map((reg: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium">
                    {reg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
