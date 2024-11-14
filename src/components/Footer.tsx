import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t("footer.customerService"),
      links: [
        t("footer.contactUs"),
        t("footer.makeAnAppointment"),
        t("footer.sizeGuide"),
        t("footer.shippingAndReturn"),
        t("footer.productCare"),
        t("footer.faq"),
      ],
    },
    {
      title: t("footer.whyYiDai"),
      links: [
        t("footer.aboutUs"),
        t("footer.story"),
        t("footer.qualityAndValue"),
      ],
    },
    {
      title: t("footer.legalTerms"),
      links: [
        t("footer.termsOfUse"),
        t("footer.privacy"),
        t("footer.cookie"),
        t("footer.accessibility"),
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaInstagram, link: "https://instagram.com" },
    { Icon: FaFacebook, link: "https://facebook.com" },
    { Icon: FaTwitter, link: "https://x.com" },
    { Icon: FaYoutube, link: "https://youtube.com" },
    { Icon: FaTiktok, link: "https://tiktok.com" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-2">
                  <a
                    href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-green-300"
                  >
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
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300"
              >
                <Icon size={24} />
              </a>
            ))}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            ></a>
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
