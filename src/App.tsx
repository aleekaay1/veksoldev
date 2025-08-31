import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TechShowcase from './components/TechShowcase';
import WebDevSection from './components/WebDevSection';
import AIAgentsSection from './components/AIAgentsSection';
import AIChatbotSection from './components/AIChatbotSection';
import LocalLLMSection from './components/LocalLLMSection';
import GraphicDesignSection from './components/GraphicDesignSection';
import ContentWritingSection from './components/ContentWritingSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WebDevSection />
        <AIAgentsSection />
        <AIChatbotSection />
        <LocalLLMSection />
        <GraphicDesignSection />
        <ContentWritingSection />
        <TechShowcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
