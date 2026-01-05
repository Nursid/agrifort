import React , {useState} from 'react';
import { themecolor } from 'components/CommanStyle';


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
      image: "/Team/sharad.jpeg",
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
      image: "/Team/VK Singh.jpg",
      shortBio: "35+ years in pharmaceutical industry with strong revenue growth track record",
      fullBio: "Mr. V.K. Singh brings over 35 years of extensive experience in the pharmaceutical industry, with a strong track record of driving revenue growth, strengthening operations, and building high-performing sales networks. Known for his exceptional field presence and deep market insight, he has delivered significant growth for organisations such as Aristro Pharmaceuticals, Micro Labs, and Marc Laboratories. In addition to advising AgriFort on outsourcing initiatives, Mr. Singh serves as the Chief Revenue Officer at BlueFort Healthcare.",
      highlights: ["35+ Years Experience", "Revenue Growth Expert", "CRO BlueFort Healthcare", "Strong Network"],
      education: "Pharmaceutical Industry Expert"
    },
    {
      id: 8,
      name: "Naman Mittal",
      position: "Head Manufacturing",
      image: "/Team/Naman Mittal.jpg",
      shortBio: "Director of Geekay Agri Uno with expertise in agrochemical formulation",
      fullBio: "Mr. Naman Mittal is the Director of Geekay Agri Uno Pvt. Ltd., sister concern of Agrifort Sciences. He brings extensive experience in technical colorants, agrochemical inputs, and pesticide and insecticide formulation. His strength lies in a hands-on, formulation-focused approach to manufacturing, supported by strong process discipline, deep raw-material understanding, and a consistent commitment to product reliability.",
      highlights: ["Manufacturing Excellence", "Formulation Expert", "Process Discipline", "Quality Focus"],
      education: "Technical Expertise in Agrochemicals"
    },
    {
      id: 9,
      name: "M. Balamurugan",
      position: "Vice President, South India",
      image: "/Team/M. Balamurugan.jpg",
      shortBio: "Exceptional sales leader across all South Indian markets",
      fullBio: "Mr. M. Balamurugan is a highly respected sales leader with an exceptional track record across all South Indian markets. Known for his deep market relationships, fast-paced sales execution, and strong goodwill among distributors and retailers, he has consistently driven remarkable business growth in every region he oversees. His strengths include outstanding collection management, disciplined team leadership, and the ability to inspire high performance across large and diverse teams.",
      highlights: ["South India Expert", "Sales Excellence", "Strong Trade Relations", "Team Leadership"],
      education: "Sales & Distribution Expertise"
    },
    {
      id: 10,
      name: "Vijay Dongre",
      position: "VP, Corporate Events",
      image: "/Team/Vijay Dongre.jpg",
      shortBio: "31+ years in agro-input sector with nationwide market exposure",
      fullBio: "Mr. Vijay Dongre is a seasoned industry professional with over 31 years of experience in the agro-input sector. Having earlier served as a National Sales Head, he brings extensive nationwide market exposure and a strong understanding of trade dynamics and farmer needs across regions. Known for his deep connect with the Indian farming community and disciplined trade management, he has consistently contributed to sustainable business growth.",
      highlights: ["31+ Years Experience", "National Sales Head", "Farmer Connect", "West & Central India"],
      education: "Agro-Input Sector Expert"
    }
  ];


const LeadershipMessages = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* First Message - D.K. Chopra */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Chairman's Message
              </h1>
              <div className="w-16 h-1 bg-teal-500 mb-8"></div>
              
              <div className="text-gray-700 text-base leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
                <p>
                It’s indeed my pleasure to welcome you to our digital platform — our website to give you a glimpse of our progressive vibrant company Agrifort Technologies.
                During the last about 10 years or so, besides the business achievements, Agrifort has emerged and consolidated its position as a dynamic Company offering innovative solutions and services to empower farmers to reap full potential in productivity and quality of produce of different crops they grow.
                </p>
                <p>
                India is at the cusp of technological revolution in the field of Agriculture. As a country we are well poised to be the 3rd largest economy in not a very distant future. With increasing incomes, growing population, we have to focus on introducing new technologies to boost farm productivity and ensure food security for all.
                We believe that collaboration, research and innovation are the keys to overcome diverse challenges faced by our farmers.
                As we look ahead, our focus shall be to provide our unwavering support to the farming community with effective and exceptional products, thus contributing in promoting responsible and eco friendly growth and a self reliant agricultural ecosystem.
                Team Agrifort is committed and deeply passionate as a modest stakeholder, to help build a future where Agriculture thrives and every farmer succeeds!
                I will encourage you to explore our website to learn more about the company, its products, services and the new initiatives. <br/>
                We shall certainly welcome and value any feedback or suggestions that you may have.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="text-center">
                <img
                  src="/Team/DK Chopra.jpg"
                  alt="D.K. Chopra"
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">
                   D.K. Chopra
                </h3>
                <p className="text-teal-600 font-semibold text-lg">
                  Honorary Chairman
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Message - Sharad Awasthi */}
        <div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                CEO's Message
              </h1>
              <div className="w-16 h-1 bg-teal-500 mb-8"></div>
              
              <div className="text-gray-700 text-base leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
                <p>
                Every milestone AgriFort achieves is rooted in the people who believe in us—our farmers, customers, partners, and team. Their trust and support inspire us to innovate consistently and deliver value where it matters most.
                Our commitment to empowering farmers guides everything we do. Through science-driven Biostimulants, Bio-fertilizers, Crop Protection solutions, and other advanced technologies, we strive to enhance productivity, quality, and sustainability across diverse crops. As agriculture evolves, we are also preparing to expand into NextGen Hybrid Seeds and Aquaculture technologies to further support farming communities.
                </p>
                <p>
                Innovation remains central to our purpose. By developing research-led products that meet global standards and staying closely connected to the needs of farmers and partners, we ensure our solutions address real challenges and encourage new ideas.
                We believe technology will continue to transform agriculture—strengthening food security, crop health, and long-term economic growth in rural India. Customer satisfaction stays at the heart of our approach, from product quality to dependable service, aligned with our Quality Policy and Environmental commitments.
                Above all, AgriFort’s greatest strength is its people. Their dedication and belief in our vision drive us to pursue excellence and build a future where agriculture thrives and every farmer progresses.
                Together—with our farmers, customers, partners, and team—we move forward with confidence toward shared growth and prosperity.
                </p>
                <p className="text-teal-600 text-semibold text-md">With commitment to progress</p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="text-center">
                <img
                 src="/Team/sharad.jpeg"
                alt="Sharad Awasthi"
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Sharad Awasthi 
                </h3>
                <p className="text-teal-600 font-semibold text-lg">
                Group CEO - AgriFort Group of companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-16'>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}> People at Agrifort</h1>
     <TeamCard data={leaders}/>
          
      </div>
    </div>
  );
};


function TeamCard({ data }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      {/* TEAM GRID (same as yours) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {data.map((item, index) => (
          <div key={index} className="p-3">
            <div
              className="group relative cursor-pointer"
              onClick={() => setSelectedMember(item)}
            >
              <div className="relative h-[450px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute left-6 right-6 text-center text-white p-4 shadow-lg rounded-md"
                  style={{
                    bottom: "-35px",
                    backgroundColor: themecolor,
                  }}
                >
                  <h5 className="text-base font-semibold">{item.name}</h5>
                  <p className="text-xs opacity-90">{item.position}</p>
                </div>
              </div>
            </div>
            <div className="h-14"></div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div
            className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${themecolor}, #0b4f46)`,
            }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
              <h2 className="text-2xl font-semibold text-white">
                {selectedMember.name}
              </h2>

              <button
                onClick={() => setSelectedMember(null)}
                className="text-white text-2xl hover:opacity-80"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {/* LEFT IMAGE CARD */}
              <div className="bg-white/90 rounded-lg p-4 flex flex-col items-center">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="rounded-lg object-cover w-full h-[280px]"
                />

                <div
                  className="mt-4 text-white text-center px-4 py-2 rounded-md text-sm font-medium"
                  style={{ backgroundColor: themecolor }}
                >
                  {selectedMember.position}
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="md:col-span-2 text-white">
                <p className="text-sm leading-relaxed mb-4">
                  {selectedMember.fullBio}
                </p>

                {/* HIGHLIGHTS */}
                {selectedMember.highlights && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Highlights</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 opacity-90">
                      {selectedMember.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* EDUCATION */}
                {selectedMember.education && (
                  <p className="text-sm opacity-90">
                    <strong>Expertise:</strong> {selectedMember.education}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export default LeadershipMessages;