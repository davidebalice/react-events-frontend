import React, { FC, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logoWhite.png";
import logoScroll from "../../assets/images/logo.png";

interface HeaderProps {
  home: boolean;
}

const Header: FC<HeaderProps> = ({ home }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (!home) {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (home) {
        setIsScrolled(scrollTop > 0);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [home]);

  const headerClasses = [
    classes.header,
    isScrolled ? classes.headerScrolled : "",
    "fixed-top",
    "d-flex",
    "align-items-center",
  ].join(" ");

  const navmenuClasses = [
    "navmenu",
    isScrolled ? classes.navmenuScrolled : "",
  ].join(" ");

  console.log(home);
  /*
  useEffect(() => {
    if (home === false) {
      setIsScrolled(false);
    }
  }, [home]);
*/
  return (
    <>
      <header id="header" className={headerClasses}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a
            href="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <img
              src={isScrolled ? logoScroll : logo}
              alt="db logo"
              className={classes.logo}
            />
          </a>

          <nav id="navmenu" className={navmenuClasses}>
            <ul>
              <li>
                <NavLink to="/" className="nav-link smooth-scroll">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" className="nav-link smooth-scroll">
                  Calendar
                </NavLink>
              </li>
              <li>
                <a href="index.html#services">Services</a>
              </li>
              <li>
                <a href="index.html#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="index.html#team">Team</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li className="dropdown has-dropdown">
                <a href="#">
                  <span>Dropdown</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dd-box-shadow">
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown has-dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul className="dd-box-shadow">
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#contact">Contact</a>
              </li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="btn-getstarted" href="index.html#about">
            Get Started
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
