import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturedCategories: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    { name: t('categories.bracelet'), image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: t('categories.earrings'), image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: t('categories.rings'), image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: t('categories.necklace'), image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: t('categories.pendant'), image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: t('categories.decoration'), image: 'https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
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