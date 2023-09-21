import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
   <div>
    <Navbar />
    <Home />
    <About />
    <Proyects />

    <SocialLinks />
   </div>
  );
}

export default App;
