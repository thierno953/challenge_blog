import React, { useState } from "react";
import "./Navbar.css";
import styledComponents from "styled-components";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../redux/actions/userAction";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80,
    });
  };

  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <h1>THB</h1>
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
      </div>
      <div className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          <li onClick={() => scrollToElement("Home")}>
            <Link to="/" onClick={() => setNavState(false)}>
              Home
            </Link>
          </li>
          <li onClick={() => scrollToElement("BuySell")}>
            <Link to="#map" onClick={() => setNavState(false)}>
              About
            </Link>
          </li>
          <li onClick={() => scrollToElement("Blogs")}>
            <Link to="#about" onClick={() => setNavState(false)}>
              Blogs
            </Link>
          </li>
          <li onClick={() => scrollToElement("Service")}>
            <Link to="#news" onClick={() => setNavState(false)}>
              Service
            </Link>
          </li>
        </ul>
        <div className="login-btn">
          <button>
            <Link to="/login">
              {user ? (
                <div className="dropdown">
                  <figure className="profile">
                    {user && user.name}
                    <AiFillCaretDown className="AiFillCaretDown" />
                  </figure>
                  <div className="dropdown-content">
                    {user && user.role !== "admin" ? (
                      <div></div>
                    ) : (
                      <Link to="/admin/dashboard" className="link" onClick={() => setNavState(false)}>
                        Admin
                      </Link>
                    )}

                    <button onClick={() => setNavState(false)}>
                      <Link to="/" className="logout" onClick={logoutHandler}>
                        Logout
                      </Link>
                    </button>
                  </div>
                </div>
              ) : (
                !loading && (
                  <div className="btn-group">
                    <Link to="/login">
                      <FiLock />
                    </Link>
                  </div>
                )
              )}
            </Link>
          </button>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styledComponents.nav`
  display: flex;
  justify-content: space-between;
  margin: 2rem 5rem;
  .brand {
    display: flex;
    align-items: center;
    .logo {
      img {
        height: 5vh;
      }
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
       
        &:hover {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          transition: 0.3s ease-in-out;
        }
      }
    }
    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .flag {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }
      button {
   
        background-color: transparent;
        color: white;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;
        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    margin: 0;
    .brand {
      padding: 2rem 1rem;
      justify-content: space-between;
      width: 100%;
      z-index: 1000;
      background-color: var(--background-color);
      .toggle {
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    .links {
      position: absolute;
      background-color: black;
      flex-direction: column;
      margin-top: 5rem;
      width: 100vw;
      padding: 5rem 0;
      transition: 0.4s ease-in-out;
      gap: 2rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
      .login-btn {
        flex-direction: column;
      }
    }
    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
`;
