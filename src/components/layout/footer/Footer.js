import React from 'react'
import "./Footer.css"
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import mail from "./images/mail.jpg";
import linkedin from "./images/linkedin.png";

const Footer = () => {
  return (
    <div className="brandsig">
      <div className="brandsig-content-center">
        <div className="sig">
          <p>Website created by</p>
        </div>
        <div className="logo">
          <p>{"</> "}</p>
        </div>
        <div className="brand">
          <p>MullaneyDev</p>
        </div>
      </div>
      <div className="brandsig-content-right">
        <a
          href="https://github.com/MullaneyDev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} className="icon-style" alt="GitHub Logo" />
        </a>
        <a
          href="https://twitter.com/MullaneyDev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} className="icon-style" alt="Twitter logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-mullaney-60485028a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="icon-style" alt="LinkedIn" />
        </a>
        <a href="mailto:matt.mullaney@live.co.uk">
          <img src={mail} className="icon-style" alt="Email icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer