import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white w-full relative flex flex-col items-center">

      <StyledWrapper>
        <ul className="example-2 pt-5">
          <li className="icon-content">
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              data-social="linkedin"
            >
              <div className="filled" />
              
              <FaLinkedin></FaLinkedin>
            </a>
            <div className="tooltip">LinkedIn</div>
          </li>
          <li className="icon-content">
            <a
              href="https://www.github.com/"
              aria-label="GitHub"
              data-social="github"
            >
              <div className="filled" />
              
              <FaGithub></FaGithub>
            </a>
            <div className="tooltip font-rubrik">GitHub</div>
          </li>
          <li className="icon-content">
            <a
              href="https://www.instagram.com/"
              aria-label="meta"
              data-social="meta"
            >
              <div className="filled" />
              
              <FaMeta></FaMeta>
            </a>
            <div className="tooltip font-rubrik">Meta</div>
          </li>
          <li className="icon-content">
            <a
              href="https://youtube.com/"
              aria-label="telegram"
              data-social="telegram"
            >
              <div className="filled" />
              
              <FaTelegram></FaTelegram>
            </a>
            <div className="tooltip font-rubrik">Telegram</div>
          </li>
        </ul>
      </StyledWrapper>

      <div className="font-rubik text-lg pb-2.5 pt-1">Piyush Dhote &copy; 2025</div>

    </div>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }


  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -40px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="linkedin"] .filled,
  .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0274b3;
  }

  .example-2 .icon-content a[data-social="github"] .filled,
  .example-2 .icon-content a[data-social="github"] ~ .tooltip {
    background-color: #24262a;
  }
  .example-2 .icon-content a[data-social="meta"] .filled,
  .example-2 .icon-content a[data-social="meta"] ~ .tooltip {
    background-color: #1877f2 ;
  }
  .example-2 .icon-content a[data-social="telegram"] .filled,
  .example-2 .icon-content a[data-social="telegram"] ~ .tooltip {
    background-color: #5e8fe5;
  }
`;
