import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturedCategories: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    { name: t('categories.bracelet'), image: '/image/bracelet.png' },
    { name: t('categories.earrings'), image: '/image/earrings.png' },
    { name: t('categories.rings'), image: '/image/rings.png' },
    { name: t('categories.necklace'), image: '/image/necklace.png' },
    { name: t('categories.pendant'), image: '/image/pendant.png' },
    { name: t('categories.decoration'), image: '/image/decoration.png' },
  ];

  return (
    <section className="container mx-auto my-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-green-700">{t('categories.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={`/category/${category.name.toLowerCase()}`}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-40 object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;