import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t('footer.customerService'),
      links: [
        t('footer.contactUs'),
        t('footer.makeAnAppointment'),
        t('footer.sizeGuide'),
        t('footer.shippingAndReturn'),
        t('footer.productCare'),
        t('footer.faq'),
      ],
    },
    {
      title: t('footer.whyYiDai'),
      links: [
        t('footer.aboutUs'),
        t('footer.story'),
        t('footer.qualityAndValue'),
      ],
    },
    {
      title: t('footer.legalTerms'),
      links: [
        t('footer.termsOfUse'),
        t('footer.privacy'),
        t('footer.cookie'),
        t('footer.accessibility'),
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaInstagram, link: 'https://instagram.com' },
    { Icon: FaFacebook, link: 'https://facebook.com' },
    { Icon: FaTwitter, link: 'https://x.com' },
    { Icon: FaYoutube, link: 'https://youtube.com' },
    { Icon: FaTiktok, link: 'https://tiktok.com' }, 
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