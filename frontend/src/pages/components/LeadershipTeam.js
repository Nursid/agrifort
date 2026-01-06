import React , {useState} from 'react';
import { themecolor } from 'components/CommanStyle';


  const leaders = [
    // {
    //   id: 1,
    //   name: "D.K. Chopra",
    //   position: "Honorary Chairman",
    //   image: "/Team/DK Chopra.jpg",
    //   fullBio: "Mr. D.K. Chopra is a seasoned C-suite leader with over 40 years of board-level international experience across the Agri Input industry, covering Crop Nutrition, Crop Protection, Seeds, and Aquaculture. He has led organisations in Asia, the Middle East, Africa, and Europe, consistently driving fiscal, strategic, and operational excellence. Known for his decisive and execution-focused leadership, he has a proven record of delivering sustainable revenue and EBITDA growth in dynamic global markets.Mr. Chopra brings deep industry knowledge and strong networks that support international companies in entering and scaling across India and Southeast Asia. He is also recognised for mentoring numerous professionals who now serve in leadership roles across the sector.His achievements include multiple Chairman Appreciation Awards, IARI felicitation, and the Lifetime Achievement Award from the Aquaculture CEOs Forum India. He is actively involved with industry bodies such as CCFI and PMFAI and has contributed to books, magazines, and industry forums.He holds a Master’s in Plant Pathology, a Diploma in Management, and has completed leadership programs at IIM Ahmedabad, AIM Manila, and Harvard Business School.",
    // },
    // {
    //   id: 2,
    //   name: "Sharad Awasthi",
    //   position: "Group CEO",
    //   image: "/Team/sharad.jpeg",
    //   fullBio: "Mr. Sharad Awasthi is an accomplished business leader with over three decades of cross-functional experience across some of the world’s most respected organisations, including American Cyanamid, BASF Germany, and Wockhardt–Biostadt. With a strong academic foundation—Gold Medalist in Master’s in Genetics & Plant Breeding from CSA University and an MBA in HR and Supply Chain—he has further enriched his expertise through professional programs at premier institutes such as MANAGE Hyderabad and IIM Ahmedabad.For the past decade, Mr. Awasthi has been at the helm of AgriFort Technologies, where his strategic vision and growth-oriented leadership have transformed the company into a diversified group with expanding national and international footprints. His ability to integrate science, market insights, and operational discipline has been central to AgriFort’s steady evolution.In addition to leading the group, he serves as a Director at Bluefort Healthcare, Agrifort Sciences, and the IT venture Sutantra, contributing to the organisation’s wider ecosystem of innovation and enterprise. He is regarded for his structured approach, clarity in decision-making, and commitment to building strong, future-ready teams.",
    //  },
    // {
    //   id: 3,
    //   name: "Alok Bhadauria",
    //   position: "Group CBO",
    //   image: "/Team/ALok_Bhadauria.jpg",
    //   fullBio: "Mr. Alok Bhadauria brings over two decades of proven expertise in market expansion, brand development, and strategic business growth. A postgraduate from Banaras Hindu University, he has built a strong track record of leading high-performing teams and executing innovative strategies that drive measurable and sustainable results. His ability to blend data-driven insights with on-ground market understanding has enabled organisations to strengthen customer engagement and accelerate commercial outcomes. Known for his exceptional people skills and relationship-building capabilities, Mr. Bhadauria plays a pivotal role in shaping group-wide business initiatives.In addition to his responsibilities at AgriFort, he also serves as CBO at Bluefort Healthcare, Agrifort Sciences and AgriFort Seedex contributing to the group’s broader vision and multi-sector development.",
    // },
    {
      id: 4,
      name: "Lucky Sharma",
      position: "Director, Blue Quadrant Dubai",
      image: "/Team/Lucky Sharma.jpg",
      fullBio: "Mr. Lucky Sharma brings over 25 years of diverse international experience and plays a key leadership role within the AgriFort Group’s extended global network. As Director at Blue Quadrant Dubai, he oversees strategic operations across the company’s offices in Nairobi, Mauritius, and Dubai, contributing to the group’s international reach and collaborative initiatives.With a versatile background spanning IT, civil aviation, artificial intelligence, cyber security, and other emerging technologies, he is known for delivering high-value, technology-driven solutions. His portfolio includes working with major private sector organisations, critical infrastructure entities, and select defence-related projects, all managed with utmost discretion.Mr. Sharma’s ability to integrate technology, global operations, and client-focused execution makes him a valuable part of AgriFort’s broader leadership framework.",
    },
    {
      id: 5,
      name: "CA. Sameer Nigam",
      position: "Chief Finance Advisor",
      image: "/Team/Sameer Nigam.jpg",
      fullBio: "CA. Sameer Nigam is a seasoned Chartered Accountant with over two decades of practice, known for his extensive work in government, semi-government, public, private, and banking audits. He has led several high-impact financial reform projects, including drafting the Uttar Pradesh Municipal Accounts Manual and implementing Double Entry Accounting Systems under UNDP initiatives.He has served as a consultant to key institutions such as IIM Lucknow and IIM Kashipur and has contributed widely through faculty and advisory roles across leading professional bodies and financial institutions.",
    },
    {
      id: 6,
      name: "Dr. Shashi Kant Shukla",
      position: "GM, Research & Development",
      image: "/Team/SK Shukla.jpg",
      fullBio: "Dr. Shashi Kant Shukla is a highly accomplished research professional with deep technical expertise in Agri-Biotechnology. Holding an M.Sc. and Ph.D. in the field, along with an MBA and LL.B, he brings a rare blend of scientific insight, managerial capability, and regulatory understanding to AgriFort’s innovation ecosystem.He leads the company’s R&D function with a focus on advanced formulations, product development, and technology-driven improvements that enhance performance and reliability. Dr. Shukla also oversees key B2B portfolios and provides technical guidance across Agrifort Sciences, ensuring that the organisation’s research, manufacturing, and commercial pipelines remain scientifically robust and future-ready.",
    },
    {
      id: 7,
      name: "V.K. Singh",
      position: "Advisor, Outsourcing",
      image: "/Team/VK Singh.jpg",
      fullBio: "Mr. V.K. Singh brings over 35 years of extensive experience in the pharmaceutical industry, with a strong track record of driving revenue growth, strengthening operations, and building high-performing sales networks. Known for his exceptional field presence and deep market insight, he has delivered significant growth for organisations such as Aristro Pharmaceuticals, Micro Labs, and Marc Laboratories.Highly regarded among medical professionals and supported by a wide industry network, he plays a vital role in strategic outreach and business development. In addition to advising AgriFort on outsourcing initiatives, Mr. Singh serves as the Chief Revenue Officer at BlueFort Healthcare - an Agrifort group company, where he contributes his commercial expertise and leadership."
    },
    {
      id: 8,
      name: "Naman Mittal",
      position: "Head Manufacturing",
      image: "/Team/Naman Mittal.jpg",
      fullBio: "Mr. Naman Mittal is the Director of Geekay Agri Uno Pvt. Ltd., sister concern of Agrifort Sciences. He brings extensive experience in technical colorants, agrochemical inputs, and pesticide and insecticide formulation. His strength lies in a hands-on, formulation-focused approach to manufacturing, supported by strong process discipline, deep raw-material understanding, and a consistent commitment to product reliability.He is instrumental in developing a modern, scalable, and process-driven manufacturing ecosystem that integrates scientific formulation with operational excellence, aligned to Agrifort’s long-term growth and quality vision",
    },
    {
      id: 9,
      name: "M. Balamurugan",
      position: "Vice President, South India",
      image: "/Team/M. Balamurugan.jpg",
      fullBio: "Mr. M. Balamurugan is a highly respected sales leader with an exceptional track record across all South Indian markets. Known for his deep market relationships, fast-paced sales execution, and strong goodwill among distributors and retailers, he has consistently driven remarkable business growth in every region he oversees.His strengths include outstanding collection management, disciplined team leadership, and the ability to inspire high performance across large and diverse teams. Recognised for his positive nature, reliability, and commitment, Mr. Balamurugan plays a vital role in strengthening AgriFort’s presence and accelerating expansion throughout South India.",
    },
    {
      id: 10,
      name: "Vijay Dongre",
      position: "VP, Corporate Events",
      image: "/Team/Vijay Dongre.jpg",
      fullBio: "Mr. Vijay Dongre is a seasoned industry professional with over 31 years of experience in the agro-input sector. Having earlier served as a National Sales Head, he brings extensive nationwide market exposure and a strong understanding of trade dynamics and farmer needs across regions.Known for his deep connect with the Indian farming community and disciplined trade management, he has consistently contributed to sustainable business growth. At AgriFort, Mr. Dongre oversees the West and Central India markets while also providing valuable inputs in corporate affairs. His maturity, market wisdom, and balanced leadership continue to support AgriFort’s strategic and regional growth initiatives.",
    }
  ];


const LeadershipMessages = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* First Message - D.K. Chopra */}
        <div className="mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Chairman's Message
              </h1>
              <div className="w-16 h-1 bg-teal-500 mb-8"></div>
              
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
             
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
                  className="
                  w-full 
                  max-h-[300px] 
                  lg:max-h-[450px]
                  object-cover 
                  rounded-lg 
                  shadow-lg 
                  mb-4
                "
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
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                CEO's Message
              </h1>
              <div className="w-24 h-1 bg-teal-500 mb-8"></div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
             
             
              
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
              src="/Team/sharad-msg.jpeg"
              alt="Sharad Awasthi"
              className="
                w-full 
                max-h-[300px] 
                lg:max-h-[450px]
                object-cover 
                rounded-lg 
                shadow-lg 
                mb-4
              "
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


      <div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
             
             
              
              <div className="text-gray-700 text-base leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
                <p>
                Mr. D.K. Chopra is a seasoned C-suite leader with over 40 years of board-level international experience across the Agri Input industry, covering Crop Nutrition, Crop Protection, Seeds, and Aquaculture. He has led organisations in Asia, the Middle East, Africa, and Europe, consistently driving fiscal, strategic, and operational excellence. Known for his decisive and execution-focused leadership, he has a proven record of delivering sustainable revenue and EBITDA growth in dynamic global markets.Mr.
                </p>
                <p>
                 Chopra brings deep industry knowledge and strong networks that support international companies in entering and scaling across India and Southeast Asia. He is also recognised for mentoring numerous professionals who now serve in leadership roles across the sector.His achievements include multiple Chairman Appreciation Awards, IARI felicitation, and the Lifetime Achievement Award from the Aquaculture CEOs Forum India. He is actively involved with industry bodies such as CCFI and PMFAI and has contributed to books, magazines, and industry forums.He holds a Master’s in Plant Pathology, a Diploma in Management, and has completed leadership programs at IIM Ahmedabad, AIM Manila, and Harvard Business School.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="text-center">
              <img
              src="/Team/DK Chopra.jpg"
              alt="D.K. Chopra"
              className="
                w-full 
                max-h-[300px] 
                lg:max-h-[450px]
                object-cover 
                rounded-lg 
                shadow-lg 
                mb-4
              "
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



      <div className='py-6'>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="text-center">
              <img
              src="/Team/sharad.jpeg"
              alt="Sharad Awasthi"
              className="
                w-full 
                max-h-[300px] 
                lg:max-h-[450px]
                object-cover
                object-top
                rounded-lg 
                shadow-lg 
                mb-4
              "
            />


                <h3 className="text-xl font-bold text-gray-900">
                  Sharad Awasthi 
                </h3>
                <p className="text-teal-600 font-semibold text-lg">
                Group CEO - AgriFort Group of companies
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
             
             
         
              
              <div className="text-gray-700 text-base leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
                <p>
              Mr. Sharad Awasthi is an accomplished business leader with over three decades of cross-functional experience across some of the world’s most respected organisations, including American Cyanamid, BASF Germany, and Wockhardt–Biostadt. With a strong academic foundation—Gold Medalist in Master’s in Genetics & Plant Breeding from CSA University and an MBA in HR and Supply Chain—he has further enriched his expertise through professional programs at premier institutes such as MANAGE Hyderabad and IIM Ahmedabad.
                </p>
                <p>
                For the past decade, Mr. Awasthi has been at the helm of AgriFort Technologies, where his strategic vision and growth-oriented leadership have transformed the company into a diversified group with expanding national and international footprints. His ability to integrate science, market insights, and operational discipline has been central to AgriFort’s steady evolution.In addition to leading the group, he serves as a Director at Bluefort Healthcare, Agrifort Sciences, and the IT venture Sutantra, contributing to the organisation’s wider ecosystem of innovation and enterprise. He is regarded for his structured approach, clarity in decision-making, and commitment to building strong, future-ready teams.
                </p>
              </div>
            </div>

            {/* Image Section */}
          </div>
        </div>



        <div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
             
             
              
              <div className="text-gray-700 text-base leading-relaxed space-y-4" style={{ textAlign: 'justify' }}>
                <p>
                Mr. Alok Bhadauria brings over two decades of proven expertise in market expansion, brand development, and strategic business growth. A postgraduate from Banaras Hindu University, he has built a strong track record of leading high-performing teams and executing innovative strategies that drive measurable and sustainable results. His ability to blend data-driven insights with on-ground market understanding has enabled organisations to strengthen customer engagement and accelerate commercial outcomes. Known for his exceptional people skills and relationship-building capabilities, 
                </p>
                <p>
                Mr. Bhadauria plays a pivotal role in shaping group-wide business initiatives.In addition to his responsibilities at AgriFort, he also serves as CBO at Bluefort Healthcare, Agrifort Sciences and AgriFort Seedex contributing to the group’s broader vision and multi-sector development
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="text-center">
              <img
              src="/Team/ALok_Bhadauria.jpg"
              alt="Alok Bhadauria"
              className="
                w-full 
                max-h-[300px] 
                lg:max-h-[450px]
                object-cover 
                rounded-lg 
                shadow-lg 
                mb-4
              "
            />
                <h3 className="text-xl font-bold text-gray-900">
                Alok Bhadauria
                </h3>
                <p className="text-teal-600 font-semibold text-lg">
                Group CBO
                </p>
              </div>
            </div>
          </div>
        </div>




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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export default LeadershipMessages;