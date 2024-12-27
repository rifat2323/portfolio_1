import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "",
      items: ["Seslendirme ve Alt Jazz", "Media Market", "Gillie", "Size Last", "Helmet KOD"]
    },
    {
      title: "",
      items: ["Self Betimes", "Yatırımcı İlişkileri", "Basal Himmler"]
    },
    {
      title: "",
      items: ["Yard Market", "Is Imkanları", "Car Tercihleri"]
    },
    {
      title: "",
      items: ["Hedge Karla", "Mullein Koşulları", "Autumnal Bulgier"]
    }
  ];

  return (
    <footer className="bg-black text-gray-400 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold">Trxvl.</h1>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a 
                      href="#" 
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
          <Facebook 
            size={24} 
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" 
          />
          <Instagram 
            size={24} 
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" 
          />
          <Twitter 
            size={24} 
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" 
          />
          <Youtube 
            size={24} 
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" 
          />
        </div>

        {/* Copyright */}
        <div className="text-xs mb-7 sm:mb-0">
          © 1997-2021 Netflix, Inc. {'{f-062d573a0ee099242}'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;