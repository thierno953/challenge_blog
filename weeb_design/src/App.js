import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import BuySell from "./components/BuySell";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import Home from "./components/Home/Home";

function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        #home,
        #buySell1,
        #buySell2,
        #buySell3,
        #blogs,
        footer
    `,
        {
          opacity: 0,
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform = "none";
  }, 1500);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Route exact path="/" component={Home} />
      <BuySell />
      <Blogs />
      <Footer />
    </Router>
  );
}

export default App;
