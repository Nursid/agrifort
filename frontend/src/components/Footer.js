import React from "react";
import { Button } from "@material-tailwind/react";
import { MapPinIcon, ChatBubbleLeftRightIcon, BriefcaseIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useHistory } from "react-router-dom";
import { themecolor } from "./CommanStyle";

const Footer = () => {
  const footerBg = { backgroundColor: themecolor };
  const history = useHistory();
  const links = [
    { name: 'facebook-f', link: 'https://www.facebook.com/agrifort.technology'},
    { name: 'linkedin', link: 'https://www.linkedin.com/company/agrifort-technologies/'}, 
    { name: 'youtube', link: 'http://www.youtube.com/@agriforttechnologies'},
    { name: 'instagram', link: 'https://www.instagram.com/agrifort.technologies'}
  ]

  const FooterLink = ({ href, text }) => (
    <li>
      <a href={href} className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm py-1">
        <ChevronRightIcon className="h-3 w-3 text-red-300 group-hover:translate-x-1 transition-transform shrink-0" />
        {text}
      </a>
    </li>
  );

  return (
    <footer className="w-full text-white pt-16 font-sans" style={footerBg}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* FIXED RESPONSIVE GRID */}
        {/* grid-cols-1 for mobile, md:grid-cols-3 for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

          {/* Column 1: Address */}
          <div className="w-full">
            <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
              Address
            </h6>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
                <p className="text-xs leading-relaxed text-white/90">
                  <strong className="text-white block text-sm">Reg. Office (Lucknow)</strong>
                  911, Sector-M Ashiyana Colony, Kanpur Road, UP - 226012
                </p>
              </div>
              <div className="flex gap-4">
                <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
                <p className="text-xs leading-relaxed text-white/90">
                  <strong className="text-white block text-sm">Corporate (Mumbai)</strong>
                  302, Wing-A, Cello triumph, I.B Patel road, Goregaon East - 400063
                </p>
              </div>
              <div className="flex gap-4">
                <MapPinIcon className="h-6 w-6 text-red-300 shrink-0" />
                <p className="text-xs leading-relaxed text-white/90">
                  <strong className="text-white block text-sm">Dubai Presence</strong>
                  Blue Quadrant DSO-IFZA-6910, Dubai Digital Park, UAE
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Media */}
          <div className="w-full">
            <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">Media</h6>
            <ul className="list-none space-y-1">
              <FooterLink href="/newsroom" text="Newsrooms" />
              <FooterLink href="/electronic" text="Electronic" />
              <FooterLink href="/online" text="Online" />
              <FooterLink href="/event" text="Events" />
              <FooterLink href="/farmerreach" text="Farmer's Reach" />
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          {/* REMOVED col-span-2 to allow natural stacking on mobile */}
          <div className="w-full space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">Get in Touch</h6>
            <ul className="list-none space-y-1">
              <FooterLink href="/contact-us" text="Contact Us" />
              <FooterLink href="/career" text="Join Our Team" />
            </ul>
            <div className="flex flex-wrap gap-3 mt-4">
              {links.map(({ name, link }) => (
                <Button 
                  key={name} 
                  variant="text" 
                  color="white" 
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-[#550000] transition-all" 
                  onClick={() => window.open(link, '_blank')}
                >
                  <i className={`fa-brands fa-${name} text-base`} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Responsive fix */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
            <p className="text-white text-sm font-medium text-center md:text-left">
              Copyright © 2025 <span className="font-bold underline decoration-white/30">AgriFort Technologies</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm flex-wrap justify-center">
              <button className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity font-medium">
                Privacy Policy
              </button>
              <button className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity font-medium">
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








// import React from 'react';
// import { BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
// import { MapPinIcon } from "@heroicons/react/24/outline";
// import { useHistory } from 'react-router-dom';

// const Footer = () => {
//     const history = useHistory();

//     const handleNavigation = (href) => {
//         history.push(href);
//     };

//     return (
//         /* Changed gradient and kept your inline red background for consistency */
//         <footer className="pt-8 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white" style={{backgroundColor: '#550000'}}>
            
//             <div className="container px-4 w-full">
//                 {/* Main Footer Content */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8">
                    
//                     <div className="space-y-6">
//                         <div>
//                             <h5
//                             className="flex items-center gap-2 text-white font-bold text-lg tracking-wider mb-4"
//                             style={{  fontFamily: "'Times', 'Times New Roman', 'Georgia', serif", }}
//                             >
//                             <MapPinIcon className="w-4 h-4 text-red-200" />
//                             Our Presence
//                             </h5>

//                             <div>
//                             <strong>Reg. Office: </strong>
//                             <p className="text-white text-opacity-90 text-xs leading-relaxed font-medium"> 
//                             911, Sector-M Ashiyana,Colony , Kanpur Road, Lucknow, Uttar Pradesh, India-226012 
//                              </p>
//                              </div>
//                             <div>
//                             <strong>Corporate Address: </strong>
//                             <p className="text-white text-opacity-90 text-xs leading-relaxed font-medium"> 
//                             302, Wing-A, Cello triumph, I.B Patel road , Goregaon East, Mumbai -400063
//                              </p>
//                              </div>
//                             <div>
//                             <strong>Dubai Address: </strong>
//                             <p className="text-white text-opacity-90 text-xs leading-relaxed font-medium"> 
//                              Blue Quadrant DSO-IFZA-6910, Dubai Digital Park-Oﬃce A2, Dubai, Silicon Oasis- UAE
//                              </p>
//                              </div>
//                         </div>
            
//                     </div>    
//                     <div className="space-y-6">
//                         <div>
//                             <h5 className="text-white font-bold text-lg mb-4"  style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>Get in Touch</h5>
//                             <a 
//                                 href="mailto:contact@agrifort.com"
//                                 className="group flex items-start space-x-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30"
//                             >
//                                 <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-inner">
//                                     <ChatBubbleLeftRightIcon className="w-6 h-6 text-red-600" />
//                                 </div>
//                                 <div>
//                                     <p className="text-white text-sm font-bold mb-0.5">Contact Us</p>
//                                     <p className="text-white text-opacity-80 text-xs">Let's discuss how we can help</p>
//                                 </div>
//                             </a>
//                         </div>

                      
//                     </div>

//                     <div>
//                             <h5 className="text-white font-bold text-lg mb-4"  style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>Grow Your Career</h5>
//                             <a 
//                                 href="mailto:careers@agrifort.com"
//                                 className="group flex items-start space-x-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30"
//                             >
//                                 <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-inner">
//                                     <BriefcaseIcon className="w-6 h-6 text-red-600" />
//                                 </div>
//                                 <div>
//                                     <p className="text-white text-sm font-bold mb-0.5">Grow Your Career</p>
//                                     <p className="text-white text-opacity-80 text-xs">Explore opportunities</p>
//                                 </div>
//                             </a>
//                     </div>

//                     <div className="flex flex-col items-center">
//                         <div className="flex flex-col items-start">

                        
//                         <h5 className="text-white font-bold text-lg mb-4"  style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
//                             Social Media
//                         </h5>
//                         <div className="flex gap-3">
//                             <a
//                                 href="https://www.instagram.com/agrifort.technologies"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
//                                 aria-label="Instagram"
//                             >
//                                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//                                     <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
//                                 </svg>
//                             </a>
//                             <a href="https://www.facebook.com/agrifort.technology" target="_blank" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20">
//                                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
//                             </a>
//                             <a
// href="http://www.youtube.com/@agriforttechnologies"
// target="_blank"
// rel="noopener noreferrer"
// className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
// >
// <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
// <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
// </svg>
// </a>

// <a
// href="https://www.linkedin.com/company/agrifort-technologies/"
// target="_blank"
// rel="noopener noreferrer"
// className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
// >
// <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
// <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
// </svg>
// </a>

//                         </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="border-t border-white/10">
//                 <div className="container mx-auto px-4 max-w-7xl flex items-center">
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left w-full py-6">
//                         <p className="text-white text-sm font-medium">
//                             Copyright © 2025 <span className="font-bold underline decoration-white/30">AgriFort Technologies</span>. All rights reserved.
//                         </p>
//                         <div className="flex gap-6 text-sm">
//                             <button className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity font-medium">
//                                 Privacy Policy
//                             </button>
//                             <button className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity font-medium">
//                                 Terms of Service
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
