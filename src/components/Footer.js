import React from "react";
import {
  footer,
  footerIcons,
  footerMenu,
  copyright,
} from "../styles/footer.module.css";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className={footer}>
      <ul className={footerIcons}>
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

      <ul className={footerMenu}>
        <li>Company</li>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>

      <p className={copyright}>Copyright &copy; 2021 Taprotec</p>
    </footer>
  );
}

export default Footer;
