import React, { useRef } from "react";
import { Container } from "reactstrap";
import {Link} from 'react-scroll';
import icon from '../../assests/images/online-course.png'
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/about",
  },

  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "Features",
    url: "/features",
  },
  {
    display: "Contact",
    url: "/contact-us",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
            <a href='/'>
                <img src={icon} alt="" width="60" height="70" />
                   Educare
                </a>
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-10">
            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav_item">
                    <Link to={item.url} spy={true} smooth={true} offset={-50} duration={500}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mobile_menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;