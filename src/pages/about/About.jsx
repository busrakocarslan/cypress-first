import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/bird-2724144_640.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <AboutContainer>
      
      <StyledImage src={codingSvg} />
  
      <InfoContainer>
        <h2>Hi, I'am Busra Koçarslan</h2>
        <Link
                to="https://www.linkedin.com/in/busrakocarslan/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link to="https://github.com/busrakocarslan" target="_blank">
                <FaGithub />
              </Link>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
