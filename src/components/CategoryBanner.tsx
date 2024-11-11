import React from 'react';

const CategoryBanner: React.FC = () => {
  const categories = [
    { name: 'Fedeite', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Nephrite', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Diamond', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <section className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <a key={index} href={`/category/${category.name.toLowerCase()}`} className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={category.image} alt={category.name} className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110" />
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