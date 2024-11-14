import React, { useState } from "react";
import { Search, User, ShoppingCart, Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLanguageMenu(false);
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "ar", name: "العربية" },
  ];

  return (
    <header className="bg-green-200 text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/image/logo-yidai.png"
            alt="YiDai Logo"
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-green-700">YiDai</span>
        </a>

        <form
          onSubmit={handleSearch}
          className="flex-1 max-w-[600px] mx-4 relative"
        >
          <input
            type="text"
            placeholder={t("header.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            maxLength={40}
            className="w-full p-2 rounded-full bg-white bg-opacity-50 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <Search className="text-green-700" size={20} />
          </button>
        </form>

        <div className="flex items-center space-x-4">
          <a
            href="/account"
            className="hover:text-green-700"
            title={t("header.account")}
          >
            <User />
          </a>
          <a
            href="/cart"
            className="hover:text-green-700"
            title={t("header.cart")}
          >
            <ShoppingCart />
          </a>
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center hover:text-green-700 space-x-1"
            >
              <Globe className="mr-1" size={18} />
              <span>{i18n.language.toUpperCase()}</span>
              <ChevronDown size={16} />
            </button>
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-xl z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
