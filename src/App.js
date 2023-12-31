import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";

function App() {
  return (
   <div>
    <Navbar />
    <Home />
    <AboutMe />
    <Proyects />
    <Technologies />
    <Contact />

    <SocialLinks />
   </div>
  );
}

export default App;
