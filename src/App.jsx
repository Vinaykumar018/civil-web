import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/Mission'
import Philosophy from './pages/Philosophy'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import PageLoader from './loader'  // <-- your loader file

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 🔹 show loader
    setLoading(true);

    // 🔹 scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // or "auto" if you want instant jump
    });

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]); 

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      {/* Loader here */}
      {loading && <PageLoader />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
