import React from 'react';
import { FaPhone, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/components/Footer.css';

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© {getCurrentYear()} Jenna Cho. All rights reserved.</p>
        <div className="footer__contact">
          <a href="mailto:jennachoteacher@gmail.com" className="footer__link">
            jennachoteacher@gmail.com
          </a>
        </div>
        <ul className="footer__social">
          <li>
            <a
              href="tel:+12133320153"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Phone"
              className="footer__icon--flipped"
            >
              <FaPhone className="footer__icon footer__icon--flipped" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jenna-cho-728a972b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer__icon"
            >
              <FaLinkedin />
            </a>
          </li>
          {/* <li>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="footer__icon"
            >
              <FaTwitter />
            </a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}
