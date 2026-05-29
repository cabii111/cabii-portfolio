import React, { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";

import Home from "./pages/Home";

import QuickByte from "./projectDetails/QuickByte";
import AazhiMeen from "./projectDetails/AazhiMeen";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <CursorGlow />

      <ScrollToSection />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/quickbyte" element={<QuickByte />} />

        <Route path="/aazhimeen" element={<AazhiMeen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;