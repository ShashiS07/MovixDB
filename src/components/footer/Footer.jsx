import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to the MOVIX WebApp. Here you can search about your favourite
          movie and TV Shows. We provide you many functionalies such as you can
          see the ratings of your favourite shows and movies,watch trailers and
          videos. We also provide you the crew members list so that you can know
          more about your favourite dramas.
          <p>Thank You For Visting</p>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://www.instagram.com/shashi__shekhar_singh/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
          <a href="https://www.linkedin.com/in/shashi-shekhar-singh" target="_blank" ><FaLinkedin /></a>
          </span>
          <span className="icon">
          <a href="https://github.com/ShashiS07" target="_blank" ><FaGithub /></a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
