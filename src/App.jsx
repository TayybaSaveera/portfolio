import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
