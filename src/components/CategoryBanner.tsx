import React from "react";
import { useTranslation } from "react-i18next";

const CategoryBanner: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    { name: t("categories.jade"), image: "/image/jade.png" },
    { name: t("categories.nephrite"), image: "/image/nephrite.png" },
    { name: t("categories.diamond"), image: "/image/diamond.png" },
  ];

  return (
    <section className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={`/category/${category.name.toLowerCase()}`}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryBanner;
