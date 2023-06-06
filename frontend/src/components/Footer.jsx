import React from "react";
import { Link } from "react-router-dom";
import { RxTwitterLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>All Copy Rights Are Reserved {new Date().getFullYear()}</p>
      <ul>
        <Link>
          <RxTwitterLogo />

          <RxGithubLogo />

          <RxLinkedinLogo />
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
