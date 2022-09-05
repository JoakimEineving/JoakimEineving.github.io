import React from "react";
import "./Header.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "J", "o", "a", "k", "i", "m", ","];
  const jobArray = ["I", "T", " ", "S", "t", "u", "d", "e", "n", "t", "."];
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <div className="container-header home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>IT-Student / Developer / Photographer</h2>
          {/* <Link to="" className='flat-button'>CONTACT ME</Link> */}
          <div id="icons">
          <a href="https://www.linkedin.com/in/joakim-eineving-4a11141b7/"> 
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="btn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="linkedIn"
                title={"LinkedIn"}
                
              />
            </motion.button>
            </a>
            <a href="https://github.com/JoakimEineving"> 
            <motion.button 
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="btn">
              <FontAwesomeIcon 
              icon={faGithub} 
              className="github"
              title={"Github"}
              />
            </motion.button>
            </a> 
          </div>
        </div>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </>
  );
};

export default Header;
