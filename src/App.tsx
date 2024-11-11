import React from 'react';
import Header from './components/Header';
import CategoryBanner from './components/CategoryBanner';
import FeaturedCategories from './components/FeaturedCategories';
import StorySection from './components/StorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <CategoryBanner />
        <FeaturedCategories />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;