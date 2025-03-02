import "./App.css";
//import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Technologies from "./components/About";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import ContactForm from "./components/Contact";
import Reward from "./components/Reward";
import { useEasterEgg } from "./components/common/EasterEgg/EasterEggContext";

//import ContactForm from "./components/Contact";

function App() {
  const { count } = useEasterEgg();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <ContactForm />
      {/* 🎁 Reward Section (Only shows when all Easter eggs are found) */}
      {count>=3 && <Reward />}
    </>
  );
}

export default App;
