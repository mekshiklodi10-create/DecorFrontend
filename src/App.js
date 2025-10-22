import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Ditelindje from "./pages/Ditelindje";
import Dasma from "./pages/Dasma";
import Fejesa from "./pages/Fejesa";
import Propozime from "./pages/Propozime";
import GenderReveal from "./pages/GenderReveal";
import Inagurime from "./pages/Inagurime";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-serif text-gray-900">
        <Routes>
          {/* Faqja kryesore ku i ke të gjitha komponentët */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />
          
          {/* Rutat për secilën faqe sherbimi */}
          <Route path="/ditelindje" element={<Ditelindje />} />
          <Route path="/dasma" element={<Dasma />} />
          <Route path="/fejesa" element={<Fejesa />} />
          <Route path="/propozime" element={<Propozime />} />
          <Route path="/gender-reveal" element={<GenderReveal />} />
          <Route path="/inagurime" element={<Inagurime />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;