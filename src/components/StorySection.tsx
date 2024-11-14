import React from 'react';
import { useTranslation } from 'react-i18next';

const StorySection: React.FC = () => {
  const { t } = useTranslation();

  const stories = [
    {
      title: t('stories.jadeCarving.title'),
      image: '/image/story_jade_carving_1.png',
      description: t('stories.jadeCarving.description'),
    },
    {
      title: t('stories.jadeCulture.title'),
      image: '/image/story_jade_history_1.png',
      description: t('stories.jadeCulture.description'),
    },
  ];

  return (
    <section className="container mx-auto my-12">
      {/* Add spacing between categories and stories */}
      <div className="h-16"></div>
      
      {stories.map((story, index) => (
        <div key={index} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img src={story.image} alt={story.title} className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 md:px-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4">{story.title}</h3>
            <p className="text-gray-600 mb-4">{story.description}</p>
            <a href={`/story/${story.title.toLowerCase().replace(/ /g, '-')}`} className="text-green-700 font-semibold hover:underline">
              Read more
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StorySection;
