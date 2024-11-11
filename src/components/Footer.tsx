import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Customer Service',
      links: ['Contact Us', 'Make an Appointment', 'Size Guide', 'Shipping & Return', 'Product Care', 'FAQ'],
    },
    {
      title: 'Why YiDai',
      links: ['About Us', 'Story', 'Quality & Value'],
    },
    {
      title: 'Legal Terms',
      links: ['Terms of Use', 'Privacy', 'Cookie', 'Accessibility'],
    },
  ];

  const socialIcons = [
    { Icon: Instagram, link: 'https://instagram.com' },
    { Icon: Facebook, link: 'https://facebook.com' },
    { Icon: Twitter, link: 'https://twitter.com' },
    { Icon: Youtube, link: 'https://youtube.com' },
  ];

  // Custom TikTok icon
  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12A4 4 0 1 0 9 20 4 4 0 1 0 9 12z"></path>
      <path d="M15 8c-1.993 0-3.67-1.325-4-3v8.5"></path>
      <path d="M21 8V7c-2.5 0-4.5-1.5-5-4"></path>
    </svg>
  );

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-2">
                  <a href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-green-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                <Icon size={24} />
              </a>
            ))}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2024 YiDai Jewelry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;