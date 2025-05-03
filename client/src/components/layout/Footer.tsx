import { Link as ScrollLink } from "react-scroll";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Gallery", to: "gallery" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" }
];

const serviceLinks = [
  { name: "Roof Coating Solutions", to: "services" },
  { name: "Waterproofing Services", to: "services" },
  { name: "Protective Coatings", to: "services" },
  { name: "Roof Inspections", to: "services" },
  { name: "Maintenance Programs", to: "services" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000116-935ea935ec/christian-cross-symbol-vector-32959512-5.webp" 
                alt="The Coating Pros Logo" 
                className="h-8 w-auto invert"
              />
              <h3 className="font-heading font-bold text-xl">The Coating Pros</h3>
            </div>
            <p className="text-slate-400 mb-4">
              Houston's Trusted Roof Coating Specialists providing top-quality commercial roof coating services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-accent transition-colors" 
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-accent transition-colors" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-accent transition-colors" 
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink 
                    to={link.to} 
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink 
                    to={link.to} 
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaEnvelope className="text-accent mt-1 mr-3" />
                <a 
                  href="mailto:info@thecoatingprostx.com" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  info@thecoatingprostx.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="text-accent mt-1 mr-3" />
                <a 
                  href="tel:2816752300" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  281-675-2300
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-accent mt-1 mr-3" />
                <span className="text-slate-400">Houston, TX</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center relative">
          <p className="text-slate-500 mb-4 md:mb-0">&copy; {new Date().getFullYear()} The Coating Pros. All Rights Reserved.</p>
          <p className="text-slate-500">Houston's Trusted Roof Coating Specialists</p>
          
          {/* Scroll to top button */}
          <div className="absolute right-0 -top-6 md:top-0">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={800}
              className="bg-primary hover:bg-primary-light text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </ScrollLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
