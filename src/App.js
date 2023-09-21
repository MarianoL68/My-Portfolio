import About from "./components/About";
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
    <About />
    <Proyects />
    <Technologies />

    <SocialLinks />
   </div>
  );
}

export default App;
