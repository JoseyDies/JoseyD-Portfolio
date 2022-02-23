import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
    <Navigation />
    
    {/* <Home /> */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
     <Footer />
    </>
  );
}

export default App;
