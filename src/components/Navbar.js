import React from "react";
import { Link } from "gatsby";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import {
  navbar,
  navbarLogo,
  navbarMenu,
  navbarMenuItemActive,
  navbarIcons,
} from "../styles/navbar.module.css";
import taprotecLogo from "../images/taprotec-logo.png";

function Navbar() {
  return (
    <nav className={navbar}>
      {/* Logo */}
      <div className={navbarLogo}>
        <img src={taprotecLogo} alt="Taprotec Logo" width="30px" />
        <p>
          Tapro<span>Tec</span>
        </p>
      </div>

      {/* Menu */}
      <ul className={navbarMenu}>
        <li>
          <a className={navbarMenuItemActive} href="/">
            Home
          </a>
        </li>
        <li>
          <a href="#">Porfolio</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </ul>

      {/* Social Icons */}
      <ul className={navbarIcons}>
        {/* WhatsApp */}
        <li>
        <a
            href="https://www.instagram.com/dev.taprotec/"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp title="Instagram" size="20px" />
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a
            href="https://www.instagram.com/dev.taprotec/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram title="Instagram" size="20px" />
          </a>
        </li>

        {/* Github */}
        <li>
        <a
            href="https://github.com/taprotec"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub title="Instagram" size="20px" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
