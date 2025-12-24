import React, { useState } from 'react';
import { Briefcase, Award, Users, Globe, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const LeadershipTeam = () => {
  const [expandedId, setExpandedId] = useState(null);

  const leaders = [
    {
      id: 1,
      name: "D.K. Chopra",
      position: "Honorary Chairman",
      image: "/Team/DK Chopra.jpg",
      shortBio: "40+ years of board-level international experience across Agri Input industry",
      fullBio: "Mr. D.K. Chopra is a seasoned C-suite leader with over 40 years of board-level international experience across the Agri Input industry, covering Crop Nutrition, Crop Protection, Seeds, and Aquaculture. He has led organisations in Asia, the Middle East, Africa, and Europe, consistently driving fiscal, strategic, and operational excellence. Known for his decisive and execution-focused leadership, he has a proven record of delivering sustainable revenue and EBITDA growth in dynamic global markets.",
      highlights: ["40+ Years Experience", "Multiple Chairman Awards", "IARI Felicitation", "Lifetime Achievement Award"],
      education: "Master's in Plant Pathology, IIM Ahmedabad, Harvard Business School"
    },
    {
      id: 2,
      name: "Sharad Awasthi",
      position: "Group CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      shortBio: "30+ years with American Cyanamid, BASF Germany, and Wockhardt–Biostadt",
      fullBio: "Mr. Sharad Awasthi is an accomplished business leader with over three decades of cross-functional experience across some of the world's most respected organisations, including American Cyanamid, BASF Germany, and Wockhardt–Biostadt. With a strong academic foundation—Gold Medalist in Master's in Genetics & Plant Breeding from CSA University and an MBA in HR and Supply Chain—he has further enriched his expertise through professional programs at premier institutes such as MANAGE Hyderabad and IIM Ahmedabad.",
      highlights: ["30+ Years Experience", "Gold Medalist", "Strategic Visionary", "Multi-Sector Leader"],
      education: "Gold Medalist - Master's in Genetics & Plant Breeding, MBA in HR & Supply Chain"
    },
    {
      id: 3,
      name: "Alok Bhadauria",
      position: "Group CBO",
      image: "/Team/ALok_Bhadauria.jpg",
      shortBio: "20+ years in market expansion, brand development, and strategic business growth",
      fullBio: "Mr. Alok Bhadauria brings over two decades of proven expertise in market expansion, brand development, and strategic business growth. A postgraduate from Banaras Hindu University, he has built a strong track record of leading high-performing teams and executing innovative strategies that drive measurable and sustainable results. His ability to blend data-driven insights with on-ground market understanding has enabled organisations to strengthen customer engagement and accelerate commercial outcomes.",
      highlights: ["20+ Years Experience", "BHU Postgraduate", "Brand Development Expert", "Multi-Sector CBO"],
      education: "Postgraduate from Banaras Hindu University"
    },
    {
      id: 4,
      name: "Lucky Sharma",
      position: "Director, Blue Quadrant Dubai",
      image: "/Team/Lucky Sharma.jpg",
      shortBio: "25+ years of international experience across IT, AI, and cyber security",
      fullBio: "Mr. Lucky Sharma brings over 25 years of diverse international experience and plays a key leadership role within the AgriFort Group's extended global network. As Director at Blue Quadrant Dubai, he oversees strategic operations across the company's offices in Nairobi, Mauritius, and Dubai, contributing to the group's international reach and collaborative initiatives. With a versatile background spanning IT, civil aviation, artificial intelligence, cyber security, and other emerging technologies, he is known for delivering high-value, technology-driven solutions.",
      highlights: ["25+ Years Experience", "Global Operations", "Technology Expert", "Multi-Location Oversight"],
      education: "Expertise in IT, AI, Cyber Security"
    },
    {
      id: 5,
      name: "CA. Sameer Nigam",
      position: "Chief Finance Advisor",
      image: "/Team/Sameer Nigam.jpg",
      shortBio: "20+ years as CA with extensive government and banking audit experience",
      fullBio: "CA. Sameer Nigam is a seasoned Chartered Accountant with over two decades of practice, known for his extensive work in government, semi-government, public, private, and banking audits. He has led several high-impact financial reform projects, including drafting the Uttar Pradesh Municipal Accounts Manual and implementing Double Entry Accounting Systems under UNDP initiatives. He has served as a consultant to key institutions such as IIM Lucknow and IIM Kashipur.",
      highlights: ["20+ Years CA Practice", "IIM Consultant", "Financial Reform Expert", "UNDP Projects"],
      education: "Chartered Accountant"
    },
    {
      id: 6,
      name: "Dr. Shashi Kant Shukla",
      position: "GM, Research & Development",
      image: "/Team/SK Shukla.jpg",
      shortBio: "Ph.D. in Agri-Biotechnology with MBA and LL.B",
      fullBio: "Dr. Shashi Kant Shukla is a highly accomplished research professional with deep technical expertise in Agri-Biotechnology. Holding an M.Sc. and Ph.D. in the field, along with an MBA and LL.B, he brings a rare blend of scientific insight, managerial capability, and regulatory understanding to AgriFort's innovation ecosystem. He leads the company's R&D function with a focus on advanced formulations, product development, and technology-driven improvements.",
      highlights: ["Ph.D. Agri-Biotech", "MBA & LL.B", "R&D Leadership", "Innovation Expert"],
      education: "Ph.D. in Agri-Biotechnology, MBA, LL.B"
    },
    {
      id: 7,
      name: "V.K. Singh",
      position: "Advisor, Outsourcing",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      shortBio: "35+ years in pharmaceutical industry with strong revenue growth track record",
      fullBio: "Mr. V.K. Singh brings over 35 years of extensive experience in the pharmaceutical industry, with a strong track record of driving revenue growth, strengthening operations, and building high-performing sales networks. Known for his exceptional field presence and deep market insight, he has delivered significant growth for organisations such as Aristro Pharmaceuticals, Micro Labs, and Marc Laboratories. In addition to advising AgriFort on outsourcing initiatives, Mr. Singh serves as the Chief Revenue Officer at BlueFort Healthcare.",
      highlights: ["35+ Years Experience", "Revenue Growth Expert", "CRO BlueFort Healthcare", "Strong Network"],
      education: "Pharmaceutical Industry Expert"
    },
    {
      id: 8,
      name: "Naman Mittal",
      position: "Head Manufacturing",
      image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?w=400&h=400&fit=crop",
      shortBio: "Director of Geekay Agri Uno with expertise in agrochemical formulation",
      fullBio: "Mr. Naman Mittal is the Director of Geekay Agri Uno Pvt. Ltd., sister concern of Agrifort Sciences. He brings extensive experience in technical colorants, agrochemical inputs, and pesticide and insecticide formulation. His strength lies in a hands-on, formulation-focused approach to manufacturing, supported by strong process discipline, deep raw-material understanding, and a consistent commitment to product reliability.",
      highlights: ["Manufacturing Excellence", "Formulation Expert", "Process Discipline", "Quality Focus"],
      education: "Technical Expertise in Agrochemicals"
    },
    {
      id: 9,
      name: "M. Balamurugan",
      position: "Vice President, South India",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
      shortBio: "Exceptional sales leader across all South Indian markets",
      fullBio: "Mr. M. Balamurugan is a highly respected sales leader with an exceptional track record across all South Indian markets. Known for his deep market relationships, fast-paced sales execution, and strong goodwill among distributors and retailers, he has consistently driven remarkable business growth in every region he oversees. His strengths include outstanding collection management, disciplined team leadership, and the ability to inspire high performance across large and diverse teams.",
      highlights: ["South India Expert", "Sales Excellence", "Strong Trade Relations", "Team Leadership"],
      education: "Sales & Distribution Expertise"
    },
    {
      id: 10,
      name: "Vijay Dongre",
      position: "VP, Corporate Events",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      shortBio: "31+ years in agro-input sector with nationwide market exposure",
      fullBio: "Mr. Vijay Dongre is a seasoned industry professional with over 31 years of experience in the agro-input sector. Having earlier served as a National Sales Head, he brings extensive nationwide market exposure and a strong understanding of trade dynamics and farmer needs across regions. Known for his deep connect with the Indian farming community and disciplined trade management, he has consistently contributed to sustainable business growth.",
      highlights: ["31+ Years Experience", "National Sales Head", "Farmer Connect", "West & Central India"],
      education: "Agro-Input Sector Expert"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries driving innovation and excellence at AgriFort Technologies
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-xl object-cover border-4 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-green-100 text-sm font-medium">
                      {leader.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {leader.shortBio}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {leader.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-700 bg-green-50 rounded-lg p-2"
                    >
                      <Award className="w-3 h-3 text-green-600 flex-shrink-0" />
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Education Badge */}
                <div className="flex items-start gap-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-3 mb-4">
                  <Briefcase className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700">{leader.education}</span>
                </div>

                {/* Expandable Section */}
                {expandedId === leader.id && (
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {leader.fullBio}
                    </p>
                  </div>
                )}

                {/* Expand Button */}
                <button
                  onClick={() => toggleExpand(leader.id)}
                  className="w-full flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm py-2 rounded-lg hover:bg-green-50 transition-colors duration-200"
                >
                  {expandedId === leader.id ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Join Our Growing Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Be part of a team that's transforming agriculture across India
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Explore Careers
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeadershipTeam;