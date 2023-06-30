import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

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
        </ul>
        <div className="infoText">
          Welcome to the MOVIX App. Here you can search for the your favourite
          movie and also can see the trailer of that movie. This App provide you
          many functionalities such as you can see the ratings of the movie.
          This app is not limited for only movies, this app also provide you the
          list of TV Shows.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://www.instagram.com/shashi__shekhar_singh/"
              target="_blank"
            >
              {" "}
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/shashi-shekhar-singh"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </span>
          <span className="icon">
            <a href="https://github.com/ShashiS07" target="_blank">
              <FaGithub />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
