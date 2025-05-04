import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react";

export default function PitchDeckSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance required (in px)
  const minSwipeDistance = 50;

  const slides = [
    {
      id: 1,
      title: "The Coating Pros: Digital Transformation",
      subtitle: "Automated Invoicing System + Website Maintenance Services",
      content: (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-8">
            <img
              src="https://silver-imaginative-beetle-350.mypinata.cloud/ipfs/bafkreibikyk73phdlhho755ltj35an5uvs2oj3lgn4gcy2n5sddodrasjy"
              alt="The Coating Pros Logo"
              className="h-28 md:h-36 w-auto"
            />
            <div className="ml-4 md:ml-6">
              <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white">
                The Coating Pros
              </h1>
              <p className="text-secondary-light dark:text-slate-400 text-base md:text-lg">
                Houston's Roof Coating Specialists
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <p className="text-lg font-medium">Presented by: Digital Transformation Services</p>
            <p className="text-slate-500">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 w-full max-w-md">
            <img 
              src="https://silver-imaginative-beetle-350.mypinata.cloud/ipfs/bafkreiglsfqo5bbhlh2lvb6rwlbxcdnfkr7glfyws6vbwfj5rvuteniq6e" 
              alt="Provider Logo" 
              className="h-14 w-auto mx-auto"
            />
            <div className="flex flex-col items-center mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-medium">+1 607-296-9583</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-medium">utsavmaan28@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Problem Statement",
      content: (
        <div className="p-6 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
          <ul className="list-none space-y-4 max-w-xl mx-auto">
            {[
              "Manual invoice creation is time-consuming and error-prone",
              "Missed invoices can lead to revenue loss",
              "No centralized system for tracking invoice history",
              "Website currently has no maintenance or performance monitoring"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Our Solution",
      content: (
        <div className="max-w-xl mx-auto">
          <p className="mb-6 text-lg font-medium px-5 py-4 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary-dark dark:text-slate-200 border-l-4 border-primary">
            We are building a lightweight web platform tailored for <strong>The Coating Pros</strong> to streamline operations.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Invoice Generation",
                desc: "Automate temporary/quotation & final invoices",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                )
              },
              {
                title: "Email Automation",
                desc: "PDF invoices to both customer and business",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                )
              },
              {
                title: "Website Maintenance",
                desc: "Monitor for uptime and issues",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center text-accent mb-3">
                  {item.icon}
                </div>
                <h4 className="font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Invoice Features",
      content: (
        <div className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Simple Form Input",
                desc: "Create new invoices with ease",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                )
              },
              {
                title: "Invoice Types",
                desc: "Temporary (Quotation) or Final",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13z" />
                    <path d="M10 3.75a.75.75 0 00-.75.75v3.5a.75.75 0 00.75.75h3.5a.75.75 0 00.75-.75v-.25a.75.75 0 00-.22-.53l-3.25-3.25A.75.75 0 0010 3.75z" />
                  </svg>
                )
              },
              {
                title: "Auto-Calculations",
                desc: "Totals with taxes & discounts",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 00-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 00-.552.698V5.56c0 .381.257.712.63.814 1.588.432 3.287.648 5.067.648h1.6V4.75a.75.75 0 011.5 0v2.272h1.6c1.78 0 3.48-.216 5.067-.648a.844.844 0 00.63-.814V3.824a.75.75 0 00-.552-.698 44.844 44.844 0 00-2.445-.564v-.387a.75.75 0 00-.629-.74A48.186 48.186 0 0010 1zM5.37 10.5c0-.756.146-1.496.428-2.19l-1.17.59a.75.75 0 01-.675-1.337l1.995-1.005a.75.75 0 01.834.122l2 2a.75.75 0 01-1.06 1.06l-.814-.814A4.501 4.501 0 0110 14.5a4.492 4.492 0 01-2.957-1.11l-.75.75a.75.75 0 01-1.06-1.06l.797-.798c-.177-.388-.272-.812-.272-1.25v-.033l-1.254.614a.75.75 0 11-.65-1.352l1.66-.813a.75.75 0 01.872.149l1.334 1.334a.75.75 0 01-1.06 1.06l-.353-.352zm7.336-4.342l1.334 1.334a.75.75 0 01-1.06 1.06l-.354-.353-.254 1.304a4.466 4.466 0 01-1.91-1.939l.604-.302a.75.75 0 01.674 1.334l-.263.134c.235.334.53.624.88.853l.303-1.558a.75.75 0 01.872-.149l1.66.814a.75.75 0 01-.65 1.351l-1.254-.614v.033c0 .31-.044.62-.13.913l.657.657a.75.75 0 01-1.06 1.06l-.815-.814A4.535 4.535 0 0114.457 12h-2.193a.75.75 0 010-1.5h2.32a3 3 0 00-.175-1.113l-1.124.56a.75.75 0 01-.67-1.342l1.99-1.005a.75.75 0 01.835.122z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Custom Discounts",
                desc: "Manual alterations per invoice",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.25 13c.35 0 .68-.1.97-.26l.001 1.238a2.247 2.247 0 01-2.15 2.247h-1.012a2.247 2.247 0 01-2.247-2.247v-1.238c.3.16.62.26.97.26.358 0 .704-.11 1-.32v-1.477c-.692.306-1.494.308-2.188.008a2.25 2.25 0 01-1.061-1.143 2.25 2.25 0 01.85-2.835l.001-.001 3.036-1.785A4.5 4.5 0 0116 10.5v2.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v1.318z" />
                    <path fillRule="evenodd" d="M10.5 1a4.5 4.5 0 00-4.5 4.5V9H1.75a.75.75 0 000 1.5h10a.75.75 0 000-1.5H7.5V5.5a3 3 0 116 0v2.75h-2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H13.5V5.5a4.5 4.5 0 00-4.5-4.5h1.5z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Professional PDFs",
                desc: "Branded and well-formatted",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Email Automation",
                desc: "To customer and business admin",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                )
              },
              {
                title: "Invoice Archive",
                desc: "Search, view, resend, download",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                    <path fillRule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Business Analytics",
                desc: "Track payments and performance",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="flex p-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-sm">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 dark:bg-accent/30 text-accent dark:text-accent-light flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-primary dark:text-white">{feature.title}</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Sample Invoice Preview",
      content: (
        <div className="max-w-xl mx-auto">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-lg font-medium text-primary dark:text-white">The Coating Pros</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Houston's Roof Coating Specialists</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary dark:text-white">INVOICE</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">#INV-20231007-001</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Date: 10/07/2023</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded border border-slate-200 dark:border-slate-600">
                <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bill To:</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">John Smith</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">john.smith@example.com</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">(713) 555-1234</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Smith's Hardware Store</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded border border-slate-200 dark:border-slate-600">
                <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Property:</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">12345 Main Street</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Houston, TX 77001</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Commercial Building</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded">
                <div className="grid grid-cols-12 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="col-span-6">Description</div>
                  <div className="col-span-2 text-right">Area (sq.ft)</div>
                  <div className="col-span-2 text-right">Rate</div>
                  <div className="col-span-2 text-right">Amount</div>
                </div>
              </div>
              
              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                <div className="grid grid-cols-12 py-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="col-span-6">Silicone Roof Coating Application</div>
                  <div className="col-span-2 text-right">5,200</div>
                  <div className="col-span-2 text-right">$1.85</div>
                  <div className="col-span-2 text-right">$9,620.00</div>
                </div>
                
                <div className="grid grid-cols-12 py-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="col-span-6">Roof Cleaning & Preparation</div>
                  <div className="col-span-2 text-right">5,200</div>
                  <div className="col-span-2 text-right">$0.45</div>
                  <div className="col-span-2 text-right">$2,340.00</div>
                </div>
                
                <div className="grid grid-cols-12 py-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="col-span-6">Seam Reinforcement</div>
                  <div className="col-span-2 text-right">420</div>
                  <div className="col-span-2 text-right">$2.25</div>
                  <div className="col-span-2 text-right">$945.00</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-1/2 space-y-2">
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>Subtotal:</span>
                  <span>$12,905.00</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>Tax (8.25%):</span>
                  <span>$1,064.66</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>Loyalty Discount:</span>
                  <span className="text-green-600 dark:text-green-400">-$500.00</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-slate-200 dark:border-slate-700 text-primary dark:text-white">
                  <span>Total:</span>
                  <span>$13,469.66</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-accent/10 dark:bg-accent/20 rounded border border-accent/30 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0116 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-accent mb-1">Flexible Discount Options</p>
                  <p>Option to apply manual discounts per invoice</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
              </svg>
              Create Invoice
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Website Maintenance Service",
      content: (
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg -z-10"></div>
            <div className="bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-600 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-lg font-medium mb-6 text-center text-primary dark:text-white">
                Our Comprehensive Web Services
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Setup & Deployment",
                    desc: "Domain, hosting & configuration",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Hosting & Security",
                    desc: "DNS, SSL certificates & protection",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Content Management",
                    desc: "Regular updates & content changes",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                      </svg>
                    )
                  },
                  {
                    title: "Monitoring & Alerts",
                    desc: "Uptime tracking, crash notification",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "SEO Optimization",
                    desc: "Enhanced search rankings",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Responsive Design",
                    desc: "Optimized for all devices",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5 1a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H5zM3.5 4A1.5 1.5 0 015 2.5h10A1.5 1.5 0 0116.5 4v12a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 16V4zm5.25 11.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
                      </svg>
                    )
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-start p-3 bg-white dark:bg-slate-700 rounded-md shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 dark:bg-primary/40 text-primary dark:text-white flex items-center justify-center mr-3 mt-0.5">
                      {service.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800 dark:text-white">{service.title}</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "Revenue Opportunities & Automation Benefits",
      content: (
        <div className="max-w-xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/30 p-6 rounded-lg border border-primary/20 dark:border-primary/40 mb-8">
            <h4 className="text-center text-lg font-medium mb-6 text-primary dark:text-white">
              Business Impact
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                </div>
                <h5 className="text-center font-medium mb-3 text-slate-800 dark:text-white">Faster Payments</h5>
                <p className="text-center text-slate-600 dark:text-slate-300 text-sm">
                  Quick invoice turnaround leads to improved cash flow and reduced waiting times
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
                <h5 className="text-center font-medium mb-3 text-slate-800 dark:text-white">Reduced Workload</h5>
                <p className="text-center text-slate-600 dark:text-slate-300 text-sm">
                  Automation frees up administrative time for core business activities
                </p>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center bg-white dark:bg-slate-700 p-3 rounded-md shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13z" />
                    <path d="M10 3.75a.75.75 0 00-.75.75v3.5a.75.75 0 00.75.75h3.5a.75.75 0 00.75-.75v-.25a.75.75 0 00-.22-.53l-3.25-3.25A.75.75 0 0010 3.75z" />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-300">Systematized records for accounting & audits</span>
              </div>
              
              <div className="flex items-center bg-white dark:bg-slate-700 p-3 rounded-md shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M10 2a.75.75 0 01.75.75v5.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.25a.75.75 0 01-1.1-1.02l1.95-2.1V2.75A.75.75 0 0110 2z" />
                    <path d="M5.273 4.5a1.25 1.25 0 00-1.205.918l-1.523 5.52c-.006.02-.01.041-.015.062H6a1 1 0 01.894.553l.448.894a1 1 0 00.894.553h3.438a1 1 0 00.86-.49l.606-1.02A1 1 0 0114 11h3.47a1.318 1.318 0 00-.015-.062l-1.523-5.52a1.25 1.25 0 00-1.205-.918h-.977a.75.75 0 010-1.5h.977z" />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-300">Real-time updates to the team</span>
              </div>
              
              <div className="flex items-center bg-white dark:bg-slate-700 p-3 rounded-md shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-300 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-300">Quotation invoice feature helps in price negotiations</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "Next Steps",
      content: (
        <div className="max-w-xl mx-auto">
          <div className="relative p-1 rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 rounded-xl"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-600">
              <ol className="relative border-l border-slate-300 dark:border-slate-600 ml-3">
                {[
                  {
                    title: "Finalize UI and Content",
                    desc: "Review design mockups and content requirements"
                  },
                  {
                    title: "Discuss Business Requirements",
                    desc: "In-depth analysis of workflow and specific needs"
                  },
                  {
                    title: "Refine Implementation Plan",
                    desc: "Based on discussions and feedback"
                  },
                  {
                    title: "Configure Email Services",
                    desc: "Set up automated invoice delivery system"
                  },
                  {
                    title: "Launch on Subdomain",
                    desc: "Deploy to billing.thecoatingpros.com"
                  }
                ].map((step, index) => (
                  <li key={index} className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-primary/20 dark:bg-primary/60 border border-white dark:border-slate-700 text-primary dark:text-white font-medium">
                      {index + 1}
                    </span>
                    <h3 className="font-medium text-lg text-primary dark:text-white">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{step.desc}</p>
                  </li>
                ))}
              </ol>
              
              <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Note</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      This plan is based on current knowledge and will be refined through our discussions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "Thank You",
      content: (
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-10 p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg border border-slate-200 dark:border-slate-600">
            <p className="text-xl font-heading font-medium mb-6">
              Let's simplify invoicing and maintain a rock-solid web presence for The Coating Pros.
            </p>
            
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-6">
                <img 
                  src="https://silver-imaginative-beetle-350.mypinata.cloud/ipfs/bafkreibikyk73phdlhho755ltj35an5uvs2oj3lgn4gcy2n5sddodrasjy"
                  alt="The Coating Pros Logo" 
                  className="h-16 w-auto"
                />
                <div className="font-heading">
                  <h3 className="text-xl font-bold text-primary dark:text-white">The Coating Pros</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Houston's Roof Coating Specialists</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent my-4"></div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="https://silver-imaginative-beetle-350.mypinata.cloud/ipfs/bafkreiglsfqo5bbhlh2lvb6rwlbxcdnfkr7glfyws6vbwfj5rvuteniq6e" 
                  alt="Provider Logo" 
                  className="h-20 w-auto mb-4"
                />
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex items-center space-x-1 text-slate-700 dark:text-slate-300">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="font-medium">+1 607-296-9583</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-700 dark:text-slate-300">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="font-medium">utsavmaan28@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Request Info
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">
              Pitch Deck
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Invoice Automation & Website Maintenance for The Coating Pros
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <div 
            className="p-6 md:p-10 min-h-[550px]"
            ref={slideRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <div className="flex space-x-2">
                <Button 
                  onClick={prevSlide} 
                  variant="outline" 
                  size="sm"
                  className="flex items-center space-x-1 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>
                <Button 
                  onClick={nextSlide} 
                  variant="default" 
                  size="sm"
                  className="flex items-center space-x-1 bg-primary hover:bg-primary-dark text-white"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="slide-content"
            >
              {currentSlide !== 0 && (
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary dark:text-white">
                  {slides[currentSlide].title}
                </h3>
              )}
              {currentSlide !== 0 && slides[currentSlide].subtitle && (
                <h4 className="text-xl mb-6 text-accent dark:text-accent-light">
                  {slides[currentSlide].subtitle}
                </h4>
              )}
              <div className={`${currentSlide === 0 ? '' : 'mt-6'} text-slate-700 dark:text-slate-300`}>
                {slides[currentSlide].content}
              </div>
            </motion.div>
          </div>
          
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700 flex justify-center border-t border-slate-200 dark:border-slate-600">
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-accent scale-110"
                      : "bg-slate-300 dark:bg-slate-500 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Swipe instructions for mobile */}
        <div className="text-center mt-4 text-sm text-slate-500 dark:text-slate-400 md:hidden">
          <p>Swipe left or right to navigate slides</p>
        </div>
      </div>
    </section>
  );
} 