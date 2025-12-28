import React, { useState } from "react";
import {
  Factory,
  Microscope,
  Users,
  Cpu,
  Handshake,
  Target,
  Award,
  Sprout,
  Flag,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@material-tailwind/react";

export default function Advantage() {
  const [activeTab, setActiveTab] = useState("manufacturing");
  const [readMore, setReadMore] = useState(false);


  const tabs = [
    {
      id: "manufacturing",
      label: "Manufacturing",
      icon: Factory,
      image:
        "/images/backgrounds/manufecturing.jpg",
      description:
        "At AgriFort, manufacturing stands as one of our core strengths, driven by a relentless focus on precision, consistency and uncompromised quality. Our production ecosystem spans across Sonipat (Delhi NCR), Bhavnagar, Vidisha, Hyderabad and Unnao (UP SCR), strategically chosen for their advanced infrastructure and strong technical expertise. Every product is crafted through a meticulously controlled process supported by modern technology, advanced equipment and standardized processes that ensure consistent product quality. A rigorous multi-stage quality assurance system checks every stage from raw material selection to final packaging. Our manufacturing capabilities have been further strengthened through the integration of Geekay, a dedicated manufacturing entity within the AgriFort Group, enhancing capacity, operational control and production efficiency across our facilities. Our approach is reinforced by continuous improvement driven by science-based formulation and field-tested results, ensuring each product performs reliably under real farming conditions. We strictly adhere to all government regulations, legal guidelines and mandated safety protocols throughout the production cycle. This disciplined system enables us to deliver dependable, high-performance agri-inputs that farmers can trust season after season.",
    },
    {
      id: "rd",
      label: "R&D",
      icon: Microscope,
      image:
        "/images/backgrounds/rnd.png",
      description:
        `We have established our own in-house Research & Development Centre—Agrifort Sciences Private Limited—which serves as the innovation engine behind every solution we bring to farmers. Our state-of-the-art facility is equipped with advanced analytical instruments such as HPLC, GC, AAS, Spectrophotometer, along with a fully equipped Pilot Plant for controlled formulation development and scale-up. At our R&D Centre, innovation begins with science. Our multidisciplinary team blends biotechnology, fermentation science, plant metabolism, and agronomy to build next-generation biostimulants, advanced nutrient formulations, and precision adjuvants such as super spreaders and stickers. Every formulation we develop goes through a rigorous scientific pathway—from laboratory research to controlled-environment evaluations, followed by extensive multi-location field trials—ensuring consistency, reliability, and real-world performance. Our research programs revolve around pioneering agricultural technologies, including:
               <strong> Probiotics Technology – Nutriflex
                Kelp Technology – Vikelp 

                Metabolites Technology – Konverter
                </strong>
              APLG Technology (Agrifort Peptide Lacto Gluconate) – NPK, Potash, CaMB, Multimicro
              Protein Hydrolysates Technology – Hortis, Seedfort
              ULST Technology – Herbo 7x, Silfort
              Quality and regulatory integrity are at the core of our R&D philosophy. All our products strictly adhere to FCO (Fertilizer Control Order) specifications and comply with all relevant national regulatory bodies—ensuring transparency, safety, and trust for our growers and partners.
              We continue to strengthen our scientific base through collaborations with leading national and international institutions such as ICAR-IIPR, CSIR-NBRI, U.P. Council of Sugarcane Research, Asian PGPR Society (USA), and multiple Krishi Vigyan Kendras (KVKs). 

                   <br/>
                   Driven by scientific excellence and a commitment to sustainable, farmer-centric innovation, we are constantly developing technologies that enhance nutrient efficiency, boost crop resilience, improve soil health, and help farmers achieve higher productivity and profitability.
        `,
    },
    {
      id: "people",
      label: "People at AFT",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      description:
        "Comming Soon...",
    },
    {
      id: "tech",
      label: "Tech-based Products",
      icon: Cpu,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      description:
        "Explore our products in the sections below",
    },
    {
      id: "partnerships",
      label: "Trusted Partnerships",
      icon: Handshake,
      image:
        "/images/backgrounds/blue-quardrant.jpg",
      description: `AgriFort is built on the vision and guidance of Blue Quadrant Limited, a global name in the civil aviation domain, under which they deliver advanced Communication, Navigation and Surveillance solutions. Their expertise spans Emergency Response and Search & Rescue Management, Airside Vehicle Surveillance, Simulators, Mobile Air Traffic Control Towers, Flight Calibration and complete NAVAIDS system integration. In 2015, during strategic meetings in Dubai, Blue Quadrant’s leadership envisioned bringing their technology-first, precision-driven approach into Indian agriculture. Their interest in introducing cutting-edge probiotic and metabolite-based advancements to farming laid the foundation for AgriFort. Since then, their global experience, innovation mindset and strong support have guided our evolution at every step. With their backing, AgriFort continues to adopt scientific breakthroughs and deliver meaningful, future-ready solutions for the agricultural community.
                </p>
                <a 
                  href="https://www.blue-quadrant.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                  Visit Blue Quadrant <ExternalLink size={16} />
                </a>`
    },
  ];

  const activeData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={activeData.image}
              alt={activeData.label}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-900"
              style={{
                fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
              }}
            >
              The AgriFort Advantages
            </h1>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3">
              {tabs.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 hover:text-white ${
                      activeTab === item.id
                        ? "bg-green-600"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>

              {/* Content Card */}
              <div className="space-y-3">
  <p className="text-gray-600 text-lg inline">
    <span
      dangerouslySetInnerHTML={{
        __html: readMore
          ? activeData.description
          : activeData.description.slice(0, 220) + "..."
      }}
    />

    {activeData.description.length > 120 && (
      <button
        onClick={() => setReadMore(!readMore)}
        className="ml-1 text-green-600 font-medium hover:underline inline"
      >
        {readMore ? "Read Less" : "Read More..."}
      </button>
    )}
  </p>
</div>


          </div>
        </div>
      </div>
    </div>
  );
}
