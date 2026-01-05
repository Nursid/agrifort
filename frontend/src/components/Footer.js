// import React from "react";
// import { Button } from "@material-tailwind/react";
// import {
//   MapPinIcon,
//   ChatBubbleLeftRightIcon,
//   BriefcaseIcon,
//   ChevronRightIcon,
// } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";
// import { themecolor } from "./CommanStyle";

// const Footer = () => {
//   const footerBg = { backgroundColor: themecolor };
//   const navigate = useNavigate(); // v6 (kept for future use)

//   const links = [
//     { name: "facebook-f", link: "https://www.facebook.com/agrifort.technology" },
//     { name: "linkedin", link: "https://www.linkedin.com/company/agrifort-technologies/" },
//     { name: "youtube", link: "http://www.youtube.com/@agriforttechnologies" },
//     { name: "instagram", link: "https://www.instagram.com/agrifort.technologies" },
//   ];

//   const FooterLink = ({ href, text }) => (
//     <li>
//       <a
//         href={href}
//         className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm py-1"
//       >
//         <ChevronRightIcon className="h-3 w-3 text-red-300 group-hover:translate-x-1 transition-transform shrink-0" />
//         {text}
//       </a>
//     </li>
//   );

//   return (
//     <footer className="w-full text-white pt-16 font-sans" style={footerBg}>
//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

//           {/* Column 1 */}
//           <div className="w-full">
//             <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
//               Address
//             </h6>
//             <div className="space-y-4">
//               <div className="flex gap-4">
//                 <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
//                 <p className="text-xs leading-relaxed text-white/90">
//                   <strong className="text-white block text-sm">Reg. Office (Lucknow)</strong>
//                   911, Sector-M Ashiyana Colony, Kanpur Road, UP - 226012
//                 </p>
//               </div>
//               <div className="flex gap-4">
//                 <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
//                 <p className="text-xs leading-relaxed text-white/90">
//                   <strong className="text-white block text-sm">Corporate (Mumbai)</strong>
//                   302, Wing-A, Cello triumph, I.B Patel road, Goregaon East - 400063
//                 </p>
//               </div>
//               <div className="flex gap-4">
//                 <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
//                 <p className="text-xs leading-relaxed text-white/90">
//                   <strong className="text-white block text-sm">Dubai Presence</strong>
//                   Blue Quadrant DSO-IFZA-6910, Dubai Digital Park, UAE
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div className="w-full">
//             <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
//               Media
//             </h6>
//             <ul className="list-none space-y-1">
//               <FooterLink href="/newsroom" text="Newsrooms" />
//               <FooterLink href="/electronic" text="Electronic" />
//               <FooterLink href="/online" text="Online" />
//               <FooterLink href="/event" text="Events" />
//               <FooterLink href="/farmerreach" text="Farmer's Reach" />
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div className="w-full space-y-6">
//             <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
//               Get in Touch
//             </h6>
//             <ul className="list-none space-y-1">
//               <FooterLink href="/contact-us" text="Contact Us" />
//               <FooterLink href="/career" text="Grow Career" />
//             </ul>
//             <div className="flex flex-wrap gap-3 mt-4">
//   {links.map(({ name, link }) => (
//     <Button
//       key={name}
//       variant="text"
//       color="white"
//       onClick={() => window.open(link, "_blank")}
//       className="
//         w-10 h-10
//         min-w-0
//         p-0
//         rounded-full
//         bg-white/10
//         hover:bg-white
//         hover:text-[#550000]
//         transition-all
//         flex items-center justify-center
//       "
//     >
//       <i className={`fa-brands fa-${name} text-base`} />
//     </Button>
//   ))}
// </div>

//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
//             <p className="text-white text-sm font-medium text-center md:text-left">
//               Copyright © 2025{" "}
//               <span className="font-bold underline decoration-white/30">
//                 AgriFort Technologies
//               </span>
//               . All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm flex-wrap justify-center">
//               <button className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity font-medium">
//                 Privacy Policy
//               </button>
//               <button className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity font-medium">
//                 Terms of Service
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { themecolor } from "./CommanStyle";

const Footer = () => {
  const footerBg = { backgroundColor: themecolor };

  const links = [
    { name: "facebook-f", link: "https://www.facebook.com/agrifort.technology" },
    { name: "linkedin", link: "https://www.linkedin.com/company/agrifort-technologies/" },
    { name: "youtube", link: "http://www.youtube.com/@agriforttechnologies" },
    { name: "instagram", link: "https://www.instagram.com/agrifort.technologies" },
  ];

  const FooterLink = ({ href, text }) => (
    <li>
      <a
        href={href}
        className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm py-1"
      >
        <ChevronRightIcon className="h-3 w-3 text-red-300 group-hover:translate-x-1 transition-transform shrink-0" />
        {text}
      </a>
    </li>
  );

  return (
    <footer className="w-full text-white pt-16 font-sans" style={footerBg}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">

          {/* 1️⃣ Address */}
          <div>
            <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
              Address
            </h6>

            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
                <p className="text-xs leading-relaxed text-white/90">
                  <strong className="block text-sm text-white">
                    Reg. Office (Lucknow)
                  </strong>
                  911, Sector-M Ashiyana Colony, Kanpur Road, UP – 226012
                </p>
              </div>

              <div className="flex gap-4">
                <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
                <p className="text-xs leading-relaxed text-white/90">
                  <strong className="block text-sm text-white">
                    Corporate (Mumbai)
                  </strong>
                  302, Wing-A, Cello Triumph, I.B Patel Road, Goregaon East – 400063
                </p>
              </div>

              <div className="flex gap-4">
                <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
                <p className="text-xs leading-relaxed text-white/90">
                  <strong className="block text-sm text-white">
                    Dubai Presence
                  </strong>
                  Blue Quadrant DSO-IFZA-6910, Dubai Digital Park, UAE
                </p>
              </div>
            </div>
          </div>

          {/* 3️⃣ Get in Touch */}
          <div>
            <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
              Get in Touch
            </h6>
            <ul className="space-y-1">
              <FooterLink href="/contact-us" text="Contact Us" />
            </ul>
          </div>

          {/* 4️⃣ Grow Your Career */}
          <div>
            <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
              Grow Your Career
            </h6>
            <ul className="space-y-1">
              <FooterLink href="/career" text="Careers at AgriFort" />
            </ul>
          </div>

          {/* 5️⃣ Social */}
          <div>
            <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
              Social
            </h6>

            <div className="flex flex-wrap gap-3">
              {links.map(({ name, link }) => (
                <Button
                  key={name}
                  variant="text"
                  color="white"
                  onClick={() => window.open(link, "_blank")}
                  className="
                    w-10 h-10
                    min-w-0
                    p-0
                    rounded-full
                    bg-white/10
                    hover:bg-white
                    hover:text-[#550000]
                    transition-all
                    flex items-center justify-center
                  "
                >
                  <i className={`fa-brands fa-${name} text-base`} />
                </Button>
              ))}
            </div>
          </div>

          
          {/* 2️⃣ Media */}
          <div>
            <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
              Media
            </h6>
            <ul className="space-y-1">
              <FooterLink href="/newsroom" text="Newsroom" />
              <FooterLink href="/electronic" text="Electronic" />
              <FooterLink href="/online" text="Online" />
              <FooterLink href="/event" text="Events" />
              <FooterLink href="/farmerreach" text="Farmer’s Reach" />
            </ul>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
            <p className="text-white text-sm font-medium text-center md:text-left">
              © 2025{" "}
              <span className="font-bold underline decoration-white/30">
                AgriFort Technologies
              </span>
              . All rights reserved.
            </p>

            <div className="flex gap-6 text-sm flex-wrap justify-center">
              <button className="text-white/80 hover:text-white transition">
                Privacy Policy
              </button>
              <button className="text-white/80 hover:text-white transition">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
