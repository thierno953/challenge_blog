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
import Detail from "./components/Detail/Detail";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { loadUser } from "./redux/actions/userAction";
import store from "./store";
import Dashboard from "./components/Admin/Dashboard";
import BlogList from "./components/Admin/BlogList";
import ProtectedRoute from "./components/ProtectedRoute";
import NewBlog from "./components/Admin/NewBlog";
import UpdateBlog from "./components/Admin/UpdateBlog";
import { Element } from "react-scroll";

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
    store.dispatch(loadUser());
  }, []);
  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform = "none";
  }, 1500);

  return (
    <Router>
      <ScrollToTop />
      <Navbar /> 
      <Element className="Home">
        <Route exact path="/" component={Home} />
      </Element>
      <Element className="BuySell">
        <Route exact path="/" component={BuySell} />
      </Element>
      <Element className="Blogs">
        <Route exact path="/" component={Blogs} />
      </Element>
      <Element className="Service">
        <Route exact path="/" component={Service} />
      </Element>
      <Route exact path="/blog/:id" component={Detail} />

      <ProtectedRoute exact path="/admin/dashboard" isAdmin={true} component={Dashboard} />
      <ProtectedRoute exact path="/admin/blogs" isAdmin={true} component={BlogList} />
      <ProtectedRoute exact path="/admin/blog" isAdmin={true} component={NewBlog} />
      <ProtectedRoute exact path="/admin/blog/:id" isAdmin={true} component={UpdateBlog} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Footer />
    </Router>
  );
}

export default App;
