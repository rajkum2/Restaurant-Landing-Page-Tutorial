import "./App.css";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Work from "./Components/Work";
import Categories from "./Components/Categories";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BannerBackground from "./Assets/home-banner-background.png";
import BannerImage from "./Assets/home-banner-image.png";
import Navbar from "./Components/Navbar";
import { FiArrowRight } from "react-icons/fi";
import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Catering from "./Components/Catering";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home-container">
        <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Work />} />
        </Routes>
        {/* <Home />
        <About />
        <Work /> */}
        {/* <Testimonial />
        <Contact />
        <Footer /> */}
      </div>
    </div>
    
  );
}

export default App;
