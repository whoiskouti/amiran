import React from 'react';
import { HeroSection } from './components/sections/hero-section.tsx';
import { Process } from './components/sections/whyus-section';
import CommentSection  from './components/sections/comment-section.tsx';
import ProductSection from './components/sections/product-section.tsx';
import { MapSection } from './components/sections/worldmap-section.tsx';
import { TabsSection } from './components/sections/tabs-section.tsx';
import { TestimonialsSection } from './components/sections/testimonial-section.tsx';
import BlogSection from './components/sections/blog-section.tsx';
import  Header  from './components/header.tsx';
import { Footer } from './components/footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="justify-center items-center p-10">
        <Header />
      </header>
      <HeroSection />
      <Process />
      {/* <CommentSection /> */}
      <TestimonialsSection />
      <ProductSection />
      <MapSection />
      {/* <TabsSection /> */}
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;