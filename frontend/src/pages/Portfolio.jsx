import React, { useState } from "react";
import {
  Search,
  Filter,
  X,
  Leaf,
  Droplets,
  Sprout,
  Package,
  Target,
  ArrowLeft,
  ShoppingBag,
  CheckCircle2,
  Beaker,
  Shield
} from "lucide-react";
import field from "../assets/img/background-1920x1280.jpg";
import Navbar from "./Navbar";
import combifort from "../assets/products/combifort.jpg";
import Emafort from "../assets/products/Emafort.jpg";
import Giba from "../assets/products/Gibcarb.jpg";
import Grow from "../assets/products/Growfort.jpg";
import h400 from "../assets/products/h400.jpg";
import Heksafort from "../assets/products/Heksafort.jpg";
import herbo from "../assets/products/Herbo.jpg";
import Lamcy from "../assets/products/Lamcyfort.jpg";
import orifort from "../assets/products/orifort.jpg";
import orifort6 from "../assets/products/Orifort2.jpg";
import orifort7 from "../assets/products/orifort7.jpg";
import Qfort from "../assets/products/Qfort.jpg";
import Ricefort from "../assets/products/Ricefort.jpg";
import Senzo from "../assets/products/Senzo.jpg";
import Silfort from "../assets/products/SIlfort.jpg";
import sulfort from "../assets/products/Sulfort.jpg";
import synfort from "../assets/products/synfort.jpg";
import TBS from "../assets/products/TBS.jpg";
import Trifort from "../assets/products/Tritfort.jpg";
import Winfort from "../assets/products/Winfort.jpg";
import Hortis from "../assets/products/Hortis.jpg";
import Konver from "../assets/products/Konver.jpg";
import Konvertor from "../assets/products/Konvertor.jpg";
import Nutriflax from "../assets/products/Nutriflax.jpg";
import Nutriflax2 from "../assets/products/Nutriflax2.jpg";
import Vikelp from "../assets/products/Vikelp.jpg";
import VIKELP2 from "../assets/products/vikelp2.jpg";
import VIKELP3 from "../assets/products/vikelp3.jpg";
import VikelpDrip from "../assets/products/VikelpDrip.jpg";
import Seedfort from "../assets/products/seedfort.jpg";
import Footer from "components/Footer";


export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailPage, setShowDetailPage] = useState(false);

  const filters = [
    "All",
    "Biostimulant",
    "Fungicide",
    "Herbicide",
    "PGR",
    "Insecticide",
  ];

    const products = [
    {
      id: 1,
      name: "Orifort 2x",
      brandName: "Orifort 2x",
      composition: "Fipronil 0.6% GR",
      role: "Systemic and contact insecticide",
      category: "Insecticide",
      image: orifort,
      description:
        "Orifort 2x powered by Fipronil 0.6% GR, is a highly effective phenyl pyrazole insecticide designed for managing stem borers and leaf folders in Paddy crops. Orifort 2x not only controls damaging pests but also supports root development, promotes more productive tillers, and increases water uptake, leading to stronger, higher-yielding plants.",
      packAvailable: "1 kg , 4 kg",
      targetCrops: [
        {
          crop: "Rice",
          disease: "Stem borer, Leaf folder",
          dosage: "10 kg / ha",
        },
        { crop: "Wheat", disease: "Termites", dosage: "10 kg / ha" },
        {
          crop: "Sugarcane",
          disease: "Early shoot borer, Termite",
          dosage: "12.5 kg / ha",
        },
      ],
    },
    {
      id: 2,
      name: "LamcyFort",
      brandName: "LamcyFort",
      composition: "Lambda Cyhalothrin 4.9 CS",
      role: "Systemic and contact insecticide",
      category: "Insecticide",
      image: Lamcy,
      description:
        "Lamcyfort is a new-generation synthetic pyrethroid insecticide offering rapid knockdown action and long-lasting control of major pests across cotton, paddy, vegetables, and fruits. It delivers broad-spectrum protection for both agriculture and public health.",
      packAvailable: "250ml , 500ml , 1ltr",
      targetCrops: [
        { crop: "Grapes", Pest: "Thrips & Leaf Flea beetle", dosage: "250" },
        { crop: "Cotton", Pest: "Bollworms", dosage: "500" },
        { crop: "Tomato", Pest: "Fruit borer", dosage: "300" },
        { crop: "Paddy", Pest: "Stem borer , Leaf Folder", dosage: "250" },
        { crop: "Brinjal", Pest: "Shoot & Fruit borer", dosage: "300" },
        { crop: "Okra", Pest: "Fruit borer", dosage: "300" },
        { crop: "Chilli", Pest: "Thrips & Pod Borer", dosage: "500" },
        { crop: "Soyabean", Pest: "Stem fly , semi looper", dosage: "300" },
      ],
    },
    {
      id: 3,
      name: "EmaFort ",
      brandName: "EmaFort",
      composition: "Emamectin Benzoate 5% SG",
      role: "Systemic and contact insecticide",
      category: "Insecticide",
      image:Emafort,
      description:
        "EmaFort provides powerful, targeted control of bollworms, fruit borers, and other lepidopteran pests through rapid translaminar activity. It ensures quick action, environmental safety, and broad crop suitability for modern farming.",
      packAvailable: "100 gm , 250 gm",
      targetCrops: [
        { crop: "Grapes", disease: "Thrips", dosage: "88" },
        { crop: "Cotton", Pest: "Bollworms", dosage: "88" },
        { crop: "Green Gram", Pest: "Pod borer", dosage: "76-88" },
        { crop: "Chickpea", Pest: "Pod borer", dosage: "88" },
        { crop: "Tea", Pest: "Tea looper", dosage: "80" },
        { crop: "Cabbage", Pest: "Diamondback moth", dosage: "60-80" },
        { crop: "Red gram", Pest: "Pod Borer", dosage: "88" },
   
      ],
    },
   {
  id: 4,
  name: "WinFort",
  brandName: "WinFort",
  composition: "Thiamethoxam 30% FS",
  role: "Systemic insecticide",
  category: "Insecticide",
  image: Winfort, 
  description:
    "WinFort is a systemic seed-dressing insecticide that disrupts feeding activity of early-season pests. It provides fast contact and stomach action, protecting major field crops from aphids, wireworms, leaf miners, and more.",
  packAvailable: "250 ml, 500 ml & 1 litre",
  targetCrops: [
    { crop: "Cotton", pest: "Aphids, Whiteflies, Jassids", dosage: "8-10 ml/kg seed" },
    { crop: "Sorghum", pest: "Shoot fly", dosage: "6-8 ml/kg seed" },
    { crop: "Wheat", pest: "Termites", dosage: "3-4 ml/kg seed" },
    { crop: "Soybean", pest: "Shoot fly", dosage: "10 ml/kg seed" },
    { crop: "Chilli", pest: "Thrips", dosage: "7 ml/kg seed" },
    { crop: "Okra (Bhindi)", pest: "Jassids", dosage: "5-6 ml/kg seed" },
    { crop: "Maize", pest: "Stem fly", dosage: "6-8 ml/kg seed" },
    { crop: "Sunflower", pest: "Jassids, Thrips", dosage: "4 ml/kg seed" }
  ]
},
{
  id: 5,
  name: "Q-FORT",
  brandName: "Q-FORT",
  composition: "Quinalphos 25% EC",
  role: "Systemic and contact insecticide",
  category: "Insecticide",
  image: Qfort,
  description:
    "Q-FORT is a broad-spectrum insecticide with dual systemic and contact action. It provides strong residual control against major chewing and sucking pests in crops like paddy, cotton, soybean, and vegetables.",
  packAvailable: "500 ml, 1 litre & 5 litre",
  targetCrops: [
    { crop: "Cotton", pest: "Bollworms", dosage: "600-800 ml/acre" },
    { crop: "Paddy", pest: "Planthoppers, Stem borer", dosage: "500 ml/acre" },
    { crop: "Soybean", pest: "Stem borer, Girdle beetle, Leaf miner", dosage: "250 ml/acre" },
    { crop: "Brinjal", pest: "Shoot & fruit borer", dosage: "500 ml/acre" },
    { crop: "Chilli", pest: "Mites, Aphids", dosage: "400-600 ml/acre" },
    { crop: "Bengal Gram", pest: "Pod Borer", dosage: "400 ml/acre" },
    { crop: "Cardamom", pest: "Thrips", dosage: "240-480 ml/acre" },
    { crop: "Cauliflower", pest: "Stem Borer", dosage: "800 ml/acre" },
    { crop: "Groundnut", pest: "Leaf Hopper, Thrips", dosage: "560 ml/acre" },
    { crop: "Groundnut", pest: "Leaf Miner", dosage: "400 ml/acre" },
    { crop: "Red Gram", pest: "Pod Borer, Pod fly", dosage: "560 ml/acre" },
    { crop: "Tea", pest: "Thrips", dosage: "300 ml/acre" },
    { crop: "Sorghum", pest: "Mites, Shoot fly", dosage: "480 ml/acre" },
    { crop: "Wheat", pest: "Aphids, Mites", dosage: "400-600 ml/acre" },
    { crop: "Tomato", pest: "Fruit Borer", dosage: "400 ml/acre" },
    { crop: "Apple", pest: "Wooly Aphids", dosage: "1200-1600 ml/acre" },
    { crop: "Pomegranate", pest: "Scales", dosage: "1900-2500 ml/acre" }
  ]
}
,
    {
  id: 6,
  name: "OriFort GR",
  brandName: "OriFort GR",
  composition: "Fipronil 0.3% GR",
  role: "Insecticide",
  category: "Insecticide",
  image: orifort6,
  description:
    "OriFort GR provides reliable control of lepidopteran, orthopteran, and soil pests including termites. Its dual action protects crops and enhances root growth and plant vigour, improving yield.",
  packAvailable: "5 kg",
  targetCrops: [
    { crop: "Rice", pest: "GLH, BPH, Stem borer, Leaf folder, Gall midge, WBPH, Whorl maggot", dosage: "6-10 kg/acre" },
    { crop: "Sugarcane", pest: "Root borer, Early shoot borer", dosage: "10-13 kg/acre" },
    { crop: "Wheat", pest: "Termites", dosage: "8 kg/acre" }
  ]
}
,
    {
  id: 7,
  name: "OriFort SC",
  brandName: "OriFort SC",
  composition: "Fipronil 5% SC",
  role: "Systemic and contact insecticide",
  category: "Insecticide",
  image: orifort7,
  description:
    "OriFort SC is a modern phenylpyrazole insecticide effective against major pests in rice, chilli, cabbage, cauliflower, and sugarcane. Works at low doses with strong efficacy.",
  packAvailable: "250 ml, 500 ml & 1 litre",
  targetCrops: [
    { crop: "Rice", pest: "Gall midge, Whorl maggot, BPH, WBPH, GLH, Stem borer, Leaf hopper", dosage: "400-600 ml/acre" },
    { crop: "Chilli", pest: "Thrips, Aphids, Fruit Borers", dosage: "400 ml/acre" },
    { crop: "Cabbage", pest: "Diamond-back moth", dosage: "320-400 ml/acre" },
    { crop: "Sugarcane", pest: "Early shoot borer, Root borer", dosage: "600-800 ml/acre" },
    { crop: "Cotton", pest: "Aphids, Jassids, Thrips, Whitefly, Bollworms", dosage: "600-800 ml/acre" }
  ]
}
,
   {
  id: 8,
  name: "SynFort",
  brandName: "SynFort",
  composition: "Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC",
  role: "Systemic and contact insecticide",
  category: "Insecticide",
  image: synfort,
  description:
    "SynFort offers broad-spectrum protection against both chewing and sucking pests across fruits, vegetables, cereals, and oilseeds. Combines two molecules for strong synergistic insect control.",
  packAvailable: "250 ml, 500 ml & 1 litre",
  targetCrops: [
    { crop: "Cotton", pest: "Aphids, Jassids, Thrips, Bollworms", dosage: "80 ml/acre" },
    { crop: "Tea", pest: "Thrips, Semi-looper, Tea mosquito bug", dosage: "60 ml/acre" },
    { crop: "Tomato", pest: "Thrips, Whiteflies, Fruit Borer", dosage: "50 ml/acre" },
    { crop: "Maize", pest: "Aphids, Shoot fly, Stem borer", dosage: "50 ml/acre" },
    { crop: "Chilli", pest: "Thrips, Fruit Borer", dosage: "60 ml/acre" },
    { crop: "Groundnut", pest: "Leafhopper, Leaf-eating caterpillars", dosage: "50 ml/acre" },
    { crop: "Soybean", pest: "Stem fly, Semi-looper, Girdle beetle", dosage: "50 ml/acre" }
  ]
}
,
    {
  id: 9,
  name: "H-400",
  brandName: "H-400",
  composition: "Topramezone 10 g/L + Atrazine 300 g/L",
  role: "Selective Herbicide",
  category: "Herbicide",
  image: h400,
  description:
    "H-400 is a complete solution for controlling grasses and broadleaf weeds in sugarcane and corn. It provides long-lasting, reliable weed control with crop safety and a ready-to-use formulation.",
  packAvailable: "500 ml & 1 litre",
  targetCrops: [
    {
      crop: "Corn",
      weed:
        "Parthenium hysterophorus, Panicum spp., Amaranthus viridis, Celosia argentea, Melilotus alba, Alternanthera sp., Digitaria sanguinalis",
      dosage: "1 L per acre",
    },
    {
      crop: "Sugarcane",
      weed:
        "Amaranthus viridis, Cynodon dactylon, Portulaca oleracea, Alternanthera sessilis",
      dosage: "1.2 L per acre",
    },
  ],
},

{
  id: 10,
  name: "TritFort",
  brandName: "TritFort",
  composition: "Clodinafop Propargyl 15% WP",
  role: "Selective Herbicide",
  category: "Herbicide",
  image: Trifort,
  description:
    "TritFort is a selective post-emergence grassy herbicide used widely in wheat crops for controlling Phalaris minor and Avena fatua. It is a non-residual systemic herbicide applied when weeds are actively growing.",
  packAvailable: "160 gm",
  targetCrops: [
    {
      crop: "Wheat",
      weed: "Phalaris minor (Canary grass)",
      dosage: "400 gm per ha",
    },
  ],
},

{
  id: 11,
  name: "RiceFort",
  brandName: "RiceFort",
  composition: "Pretilachlor 37% EW",
  role: "Selective Herbicide",
  category: "Herbicide",
  image: Ricefort,
  description:
    "RiceFort is a pre-emergence selective herbicide containing Pretilachlor 37% EW, designed to control grasses, sedges, and broadleaf weeds in transplanted rice with excellent selectivity and crop safety.",
  packAvailable: "600 ml & 3 litre",
  targetCrops: [
    {
      crop: "Transplanted Rice",
      weed:
        "Echinochloa crusgalli, E. colonum, Cyperus difformis, Cyperus iria, Digitaria sanguinalis, Fimbristylis miliaceae, Eclipta alba, Ludwigia parviflora, Monochoria vaginalis",
      dosage: "600–750 ml per acre",
    },
  ],
}
,
   {
  id: 12,
  name: "SENZO",
  brandName: "SENZO",
  composition: "Thiophanate Methyl 70% WP",
  role: "Systemic & Contact Fungicide",
  category: "Fungicide",
  image: Senzo,
  description:
    "SENZO is a broad-spectrum fungicide offering systemic and contact action by inhibiting fungal cell division. Its uniform formulation ensures better coverage, rainfastness, and long-lasting protection.",
  packAvailable: "Not Specified",
  targetCrops: [
    { crop: "Papaya", disease: "Powdery Mildew", dosage: "280–300 g per acre" },
    { crop: "Apple", disease: "Scab", dosage: "280–300 g per acre" },
    { crop: "Wheat", disease: "Brown Rust, Leaf Blight", dosage: "280–300 g per acre" },
    { crop: "Tomato", disease: "Ring Rot", dosage: "280–300 g per acre" },
    { crop: "Bottle Gourd", disease: "Anthracnose", dosage: "580–600 g per acre" },
    {
      crop: "Grapes",
      disease: "Powdery Mildew, Anthracnose, Rust",
      dosage: "300 g per acre",
    },
  ],
},

{
  id: 13,
  name: "Sulfort",
  brandName: "Sulfort",
  composition: "Sulfur 80% WDG",
  role: "Contact Fungicide",
  category: "Fungicide",
  image: sulfort,
  description:
    "Sulfort GR is a broad-spectrum fungicide and miticide that controls Powdery Mildew, Scab, Rust, Tikka Leaf Spot, and mites while supplying essential sulphur nutrition. Its dust-free, quick-dispersing formulation ensures long-lasting protection without leaf burn.",
  packAvailable: "3 kg & 1 kg",
  targetCrops: [
    { crop: "Grapes", disease: "Powdery Mildew", dosage: "750–1000 g per acre" },
    { crop: "Mango", disease: "Powdery Mildew", dosage: "750–1000 g per acre" },
    { crop: "Wheat", disease: "Powdery Mildew", dosage: "1000 g per acre" },
    { crop: "Cumin", disease: "Powdery Mildew", dosage: "750–1000 g per acre" },
    {
      crop: "Cowpea, Guar, Pea",
      disease: "Powdery Mildew",
      dosage: "750–1000 g per acre",
    },
    { crop: "Apple", disease: "Scab", dosage: "750–1000 g per acre" },
  ],
},

{
  id: 14,
  name: "HeksaFort",
  brandName: "HeksaFort",
  composition: "Hexaconazole 5% SC",
  role: "Fungicide",
  category: "Fungicide",
  image: Heksafort,
  description:
    "HeksaFort is a broad-spectrum systemic fungicide with protective, curative, and eradicant action. Its strong anti-sporulant and translaminar activity delivers long-lasting disease control with excellent coverage and added phytotonic benefits.",
  packAvailable: "250 ml, 500 ml, 1 litre & 5 litre",
  targetCrops: [
    { crop: "Rice", disease: "Blast, Sheath Blight", dosage: "400 ml per acre" },
    { crop: "Mango", disease: "Powdery Mildew", dosage: "600 ml per acre" },
    { crop: "Grapes", disease: "Powdery Mildew", dosage: "200–400 ml per acre" },
    { crop: "Groundnut", disease: "Tikka, Leaf Spot", dosage: "400 ml per acre" },
  ],
},
{
  id: 15,
  name: "CombiFort",
  brandName: "CombiFort",
  composition: "Carbendazim 12% + Mancozeb 63% WP",
  role: "Systemic & Contact Fungicide",
  category: "Fungicide",
  image: combifort,
  description:
    "CombiFort is a broad-spectrum systemic and contact fungicide with protective and curative action. It also supplies Zn and Mn, improving crop vigor and resistance.",
  packAvailable: "250 gm, 500 gm & 1 kg",
  targetCrops: [
    {
      crop: "Chili",
      disease: "Fruit Rot, Leaf Spot, Powdery Mildew",
      dosage: "300 g per acre",
    },
    {
      crop: "Grape",
      disease: "Anthracnose, Downy Mildew, Powdery Mildew",
      dosage: "1.5 g per litre water",
    },
    {
      crop: "Groundnut",
      disease: "Blast, Collar Rot, Dry Rot, Leaf Spot, Root Rot, Tikka Leaf",
      dosage:
        "200 g per acre (Blast & Leaf Spot), 2.5 g/kg seed (Collar Rot, Root Rot, Dry Rot, Tikka Leaf)",
    },
    {
      crop: "Mango",
      disease: "Anthracnose, Powdery Mildew",
      dosage: "1.5 g per litre water",
    },
    { crop: "Paddy", disease: "Blast", dosage: "700 g per acre" },
    { crop: "Potato", disease: "Blights & Scurf", dosage: "300 g per acre" },
    {
      crop: "Tea",
      disease:
        "Black Rot, Blister Blight, Dieback, Grey Blight, Red Rust",
      dosage: "500–600 g per acre",
    },
  ],
},

{
  id: 16,
  name: "TBS_FORT",
  brandName: "TBS_FORT",
  composition: "Tebuconazole 10% + Sulphur 65% WG",
  role: "Systemic & Contact Fungicide",
  category: "Fungicide",
  image: TBS,
  description:
    "TBS_FORT combines systemic Tebuconazole with contact and vapour-action Sulphur, delivering preventive, curative, and eradicant control of major crop diseases. Its dual-mode action ensures prolonged protection and strong resistance-management value.",
  packAvailable: "250 gm, 500 gm & 1 kg",
  targetCrops: [
    {
      crop: "Chilli",
      disease: "Powdery Mildew, Fruit Rot",
      dosage: "500 g per acre",
    },
    {
      crop: "Soybean",
      disease: "Leaf Spot, Pod Blight",
      dosage: "500 g per acre",
    },
    {
      crop: "Groundnut",
      disease: "Tikka Disease",
      dosage: "500 g per acre",
    },
  ],
}
,{
  id: 17,
  name: "GrowFort",
  brandName: "GrowFort",
  composition: "Paclobutrazol 23% SC",
  role: "Plant Growth Regulator (PGR)",
  category: "PGR",
  image: Grow,
  description:
    "GrowFort enhances plant growth regulation, strengthens immunity, and boosts flowering and fruit development. It improves fruit size, colour, and overall yield while increasing stress tolerance.",
  packAvailable: "500 ml & 1 litre",
  targetCrops: [
    { crop: "Mango (7-15 years)", applicationTime: "—", dosage: "15 ml/tree" },
    { crop: "Mango (16-25 years)", applicationTime: "—", dosage: "20 ml/tree" },
    { crop: "Mango (>25 years)", applicationTime: "—", dosage: "30 ml/tree" },
    { crop: "Apple", applicationTime: "—", dosage: "0.3 ml/tree" },
    { crop: "Cotton", applicationTime: "—", dosage: "10 ml/tree" },
    { crop: "Pomegranate", applicationTime: "—", dosage: "60 ml/tree" },
    { crop: "Groundnut", applicationTime: "—", dosage: "50 ml/tree" }
  ]
},{
  id: 18,
  name: "GibCarb",
  brandName: "GibCarb",
  composition: "Gibberellic Acid 0.001% L",
  role: "Plant Growth Regulator (PGR)",
  category: "PGR",
  image:Giba,
  description:
    "GibCarb accelerates plant growth by enhancing cell elongation, flowering, fruit set, and overall development. It boosts photosynthesis, root growth, and improves plant tolerance to stress for higher yields.",
  packAvailable: "100 ml, 250 ml, 500 ml & 1 litre",
  targetCrops: [
    { crop: "Grapes", applicationTime: "30-35 DAP & match head stage", dosage: "72 ml" },
    { crop: "Cotton", applicationTime: "40-45 DAP & boll formation", dosage: "72 ml" },
    { crop: "Banana", applicationTime: "3rd, 5th month & fruit formation", dosage: "108 ml" },
    { crop: "Sugarcane", applicationTime: "40-45 DAP & 75-80 DAP", dosage: "72 ml" },
    {
      crop: "Paddy",
      applicationTime: "20-25 DAT / 30-35 DAT / 40-45 DAT (based on duration)",
      dosage: "72 ml"
    },
    { crop: "Cabbage / Cauliflower", applicationTime: "45 DAS & 65 DAS", dosage: "72 ml" },
    { crop: "Onion", applicationTime: "25-30 DAP", dosage: "72 ml" },
    { crop: "Brinjal / Bhendi", applicationTime: "34 DAP, 70 DAP, 105 DAP", dosage: "180 ml" },
    { crop: "Groundnut", applicationTime: "30-35 DAS & flowering stage", dosage: "72 ml" },
    { crop: "Mulberry", applicationTime: "15-20 DAH & 25-30 days after first spray", dosage: "180 ml" }
  ]
},{
  id: 19,
  name: "Nutriflax GR",
  brandName: "Nutriflax Gr",
  composition: "Probiotic-based granular formulation",
  role: "Biostimulant",
  category: "Biostimulant",
  image: Nutriflax,
  description:
    "Nutriflax GR is a probiotic-based soil amendment that enhances nutrient uptake (Zn, Mg, Fe, Ca, B, and major nutrients), improves soil structure, moisture retention, and organic content. It strengthens plant health, supports stress recovery, and promotes higher flowering and yield through improved metabolism.",
  packAvailable: "1 kg, 5 kg, 10 kg, 20 kg, 50 kg",
  targetCrops: [
    { crop: "Paddy, Wheat, Commercial crops, Field crops, Plantations, Spices, Pulses, Oil seeds, Fruits & Vegetables", dosage: "5 kg per acre" }
  ]
},

{
  id: 20,
  name: "Vikelp Neo GR",
  brandName: "Vikelp Neo GR",
  composition: "Kelp-based granular formulation",
  role: "Biostimulant",
  category: "Biostimulant",
  image: Vikelp,
  description:
    "Vikelp Neo GR supplies essential micronutrients, vitamins, and natural hormones from kelp. It improves soil health, enhances nutrient uptake, supports stress tolerance, and strengthens crop vigour in an eco-friendly way.",
  packAvailable: "6 kg",
  targetCrops: [
    { crop: "Onion, Paddy, Potato, Commercial crops, Field crops, Plantations, Spices, Pulses, Oil seeds, Fruits & Vegetables", dosage: "10 kg/ha × 2 applications" }
  ]
},

{
  id: 21,
  name: "Vikelp Ultra GR",
  brandName: "Vikelp Ultra GR",
  composition: "Concentrated kelp-based granular formulation",
  role: "Biostimulant",
  category: "Biostimulant",
  image: VIKELP2,
  description:
    "Vikelp Ultra GR provides a concentrated kelp-derived nutrient and hormone balance. It boosts plant metabolism, increases stress resilience, enhances soil fertility, and helps crops achieve their genetic yield potential.",
  packAvailable: "1 kg, 6 kg, 10 kg",
  targetCrops: [
    { crop: "Groundnut, Commercial crops, Field crops, Plantations, Spices, Pulses, Oil seeds, Fruits & Vegetables", dosage: "7.5 kg/ha × 2 applications" }
  ]
},

{
  id: 22,
  name: "Nutriflax SL",
  brandName: "Nutriflax SL",
  composition: "Concentrated probiotic liquid biostimulant",
  role: "Biostimulant",
  category: "Biostimulant",
  image: Nutriflax2,
  description:
    "Nutriflax SL enhances nutrient absorption, protects plant cells from stress-induced damage, accelerates chlorophyll recovery, and stimulates DNA/protein synthesis for improved vigour, flowering, and yield.",
  packAvailable: "250 ml, 500 ml, 1 litre, 5 litre",
  targetCrops: [
    { crop: "Green Gram, Paddy, Commercial crops, Field crops, Plantations, Spices, Pulses, Oil seeds, Fruits & Vegetables", dosage: "1.5 L/ha × 2 foliar sprays" }
  ]
},

{
  id: 23,
  name: "Vikelp Drip SL",
  brandName: "Vikelp Drip SL",
  composition: "Kelp-based liquid biostimulant",
  role: "Biostimulant",
  category: "Biostimulant",
  image: VikelpDrip,
  description:
    "Vikelp Drip SL delivers precise kelp-based nutrients and hormone support. It maintains plant and soil health, enhances nutrient absorption, reduces stress, and improves flowering, growth, and productivity.",
  packAvailable: "1 litre, 5 litre",
  targetCrops: [
    { crop: "Paddy, Tomato, Commercial crops, Field crops, Plantations, Spices, Pulses, Oil seeds, Fruits & Vegetables", dosage: "1000 ml/ha × 2 foliar sprays" }
  ]
},

{
  id: 24,
  name: "Vikelp Ultra SL",
  brandName: "Vikelp Ultra SL",
  composition: "Concentrated kelp-based liquid",
  role: "Biostimulant",
  category: "Biostimulant",
  image: VIKELP3,
  description:
    "Vikelp Ultra SL strengthens plant metabolism, enhances soil fertility, improves resilience against stress, and helps crops reach their genetic yield potential naturally.",
  packAvailable: "1 kg, 6 kg, 10 kg",
  targetCrops: [
    { crop: "Groundnut, Commercial crops, Field crops, Plantations, Spices, Pulses, Oil seeds, Fruits & Vegetables", dosage: "7.5 kg/ha × 2 applications" }
  ]
},

{
  id: 25,
  name: "Konvertor SL",
  brandName: "Konvertor SL",
  composition: "Hormone-balancing liquid biostimulant",
  role: "Biostimulant",
  category: "Biostimulant",
  image: Konvertor,
  description:
    "Konvertor SL corrects hormonal imbalance, enhances flowering and fruiting, reduces drop, and improves size, shape, color, and taste of fruits and vegetables.",
  packAvailable: "100 ml, 250 ml, 500 ml, 1 litre",
  targetCrops: [
    { crop: "Cucumber", dosage: "1125 ml/ha × 3 foliar sprays" },
    { crop: "Maize", dosage: "5 litre/ha × 2 soil applications" },
    { crop: "Tomato", dosage: "1875 ml/ha × 4 foliar sprays" }
  ]
},

{
  id: 26,
  name: "Konvertor Prime SL",
  brandName: "Konvertor Prime SL",
  composition: "Advanced metabolite-based liquid biostimulant",
  role: "Biostimulant",
  category: "Biostimulant",
  image: Konver,
  description:
    "Konvertor Prime SL optimizes hormonal balance, supports vigorous flowering and fruiting, minimizes losses, and enhances quality and yield under climatic stress.",
  packAvailable: "100 ml, 250 ml, 500 ml, 1 litre",
  targetCrops: [
    { crop: "Cucumber", dosage: "1125 ml/ha × 3 foliar sprays" },
    { crop: "Maize", dosage: "5 litre/ha × 2 soil applications" },
    { crop: "Tomato", dosage: "1875 ml/ha × 4 foliar sprays" }
  ]
},

{
  id: 27,
  name: "SeedFort",
  brandName: "SeedFort",
  composition: "Seaweed biostimulant enriched with natural phytohormones & enzymes",
  role: "Biostimulant",
  category: "Biostimulant",
  image: Seedfort,
  description:
    "SeedFort promotes uniform germination and strong root development, improves nutrient uptake, reduces transplant shock, and is compatible with insecticides and fungicides.",
  packAvailable: "15 ml, 100 ml",
  targetCrops: [
    { crop: "Green Gram and various field crops, vegetables, leguminous & horticultural crops", dosage: "1.5 L/ha × 2 foliar sprays" }
  ]
},

{
  id: 28,
  name: "Hortis SP",
  brandName: "Hortis SP",
  composition: "Organic horticulture formulation",
  role: "Biostimulant",
  category: "Biostimulant",
  image: Hortis,
  description:
    "Hortis SP reduces flower drop, improves fruit set, enhances yield potential, and improves overall crop quality.",
  packAvailable: "150 gm, 500 gm",
  targetCrops: [
    { crop: "Okra, Cereals, Vegetables, Field crops, Horticultural crops", dosage: "250 g/ha × 2 soil applications" }
  ]
}



  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || product.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setShowDetailPage(true);
  };

  const closeProductDetail = () => {
    setShowDetailPage(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Product Detail Page Component
  if (showDetailPage && selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar/>
        {/* Header
        <div className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <button
              onClick={closeProductDetail}
              className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Products
            </button>
          </div>
        </div> */}

        {/* Product Detail Content */}
        <div className="max-w-7xl mx-auto ">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Product Header */}
            <div className="bg-gradient-to-r from-green-700 to-green-600  p-8">
              <div className="flex  flex-col md:flex-row gap-8 items-start ">
                <div className="flex-1">
                  <div className="inline-block bg-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {selectedProduct.category}
                  </div>
                  <h1 className="text-5xl font-extrabold mb-4">
                    {selectedProduct.brandName}
                  </h1>
                  <div className="flex  items-center gap-3 mb-4">
                    <Beaker className="w-6 h-6" />
                    <p className="text-xl text-green-100">
                      {selectedProduct.composition}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    <p className="text-lg text-green-50 italic">
                      {selectedProduct.role}
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[200px]">
                  <h3 className="border-1 text-center rounded-md bg-purple-500 text-lg font-semibold mb-3">Pack Available</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.packAvailable.split(",").map((pack, idx) => (
                      <span
                        key={idx}
                        className="bg-white  text-green-700 px-4 py-2 rounded-lg font-bold text-sm"
                      >
                        {pack.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-white">
              <div className="max-w-2xl mx-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-96 object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Description */}
            <div className="p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <Package className="w-8 h-8 text-green-600" />
                  Product Description
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                {/* Key Benefits */}
                {selectedProduct.keyBenefits && (
                  <div className="mb-8 bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      Key Benefits
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProduct.keyBenefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-white p-4 rounded-xl"
                        >
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-green-700 text-sm font-bold">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Target Crops Table */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-green-600" />
                    Target Crops, Pests/Diseases & Dosage
                  </h2>
                  <div className="overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-green-700 to-green-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold text-lg">Crop</th>
                          <th className="px-6 py-4 text-left font-bold text-lg">
                            Pest/Disease
                          </th>
                          <th className="px-6 py-4 text-left font-bold text-lg">Dosage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProduct.targetCrops.map((item, idx) => (
                          <tr
                            key={idx}
                            className={`border-b border-gray-200 ${
                              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-green-50 transition-colors`}
                          >
                            <td className="px-6 py-4 font-bold text-gray-800">
                              {item.crop}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {item.disease}
                            </td>
                            <td className="px-6 py-4 text-green-700 font-bold">
                              {item.dosage}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={closeProductDetail}
                    className="flex-1 min-w-[200px] bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    Back to Products
                  </button>
                  <button className="flex-1 min-w-[200px] bg-white border-2 border-green-600 text-green-700 py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Portfolio Page
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
    
{/* Hero Section */}
<div className="relative w-full h-[75vh] flex items-center justify-center">

  {/* Background Image */}
  <img
    src={field}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay (optional) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Hero Content */}
  <div className="relative z-10 text-center text-white max-w-5xl px-8 animate-fade-in">
    <h1 className="text-7xl font-bold mb-6 text-red-500 tracking-tight drop-shadow-lg">
      Our Portfolio
    </h1>

    <p className="text-xl mb-10 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-md">
      Discover our innovative range of bio-stimulants, crop protection solutions, and nutrient formulations designed to revolutionize farming practices and maximize your yields.
    </p>

    <div className="flex gap-4 mb-4 justify-center flex-wrap">
      <button className="bg-green-500 hover:bg-green-700 text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
        Explore Products
      </button>

      <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition-all duration-300">
        Watch Demo
      </button>
    </div>
  </div>

</div>


      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto ">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl border-1 bg-yellow-100  rounded-md font-bold text-gray-800 mb-3">
            Find Your Solution
          </h2>
          <p className="text-gray-600 mb-6">
            Search and filter through our comprehensive product range
          </p>

          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2  w-5 h-5" />
            <input
              type="text"
              placeholder="Search products by name, composition, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-center pl-20 pr-4 py-4 border-2 border-gray-200 rounded-xl hover:border-green-500 focus:outline-none transition"
            />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5   text-red-500" />
            <span className="text-sm font-semibold text-purple-500 uppercase">
              Filter by Category
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-green-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {product.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Beaker className="w-4 h-4 text-green-700 flex-shrink-0" />
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {product.composition}
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Pack Info */}
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-green-700 mb-2">
                    AVAILABLE PACKS
                  </p>
                  <p className="text-sm text-gray-700 font-medium">
                    {product.packAvailable}
                  </p>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => openProductDetail(product)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
    
  );
  
}