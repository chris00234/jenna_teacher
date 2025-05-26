import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Philosophy from './pages/TeachingPhilosophy';
import Portfolio from './pages/Portfolio';
import StudentWork from './pages/StudentWork';
import DiverseClassrooms from "./pages/DiverseClassrooms";
import CertificationEducation from "./pages/CertificationEducation";
import TeachingExperience from "./pages/TeachingExperience";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teaching-philosophy" element={<Philosophy />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/student-work" element={<StudentWork />} />
        <Route path="/diverse-classrooms" element={<DiverseClassrooms />} />
        <Route path="/certification-education" element={<CertificationEducation />} />
        <Route path="/teaching-experience" element={<TeachingExperience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
