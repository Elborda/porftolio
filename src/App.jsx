import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tech />
      <Projects />
      <Services />
    </>
  );
}

export default App;
