import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import Home from "./components/Home/Home";
import BuySell from "./components/BuySell/BuySell";
import Blogs from "./components/Blog/Blogs";
import Service from "./components/Service/Service";

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
      <Route exact path="/" component={BuySell} />
      <Route exact path="/" component={Blogs} />
      <Route exact path="/" component={Service} />
      <Footer />
    </Router>
  );
}

export default App;
