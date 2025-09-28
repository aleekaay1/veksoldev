import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ContactUs from './components/ContactUs';

const HomePage: React.FC = () => {
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

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
