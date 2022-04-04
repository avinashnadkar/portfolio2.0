import React, { useRef } from "react";
import style from "./Styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

const AboutMe = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <div id="about" className={style.about} style={{ backgroundColor: theme.aboutBackground, color: theme.textcolor }}>
             <div className={style.aboutMe}>
             <h3>About Me</h3>
                <p>
                   A Passionate aspiring Full-Stack Web Developer, located in Mumbai. 
                   skilled in MERN stack, I have a serious passion for working on inovatiive projects.
                   Looking forward to join company where I shall be able to  contribute towards individual and 
                   company growth.
                </p>
                <p>
                    I was from commerce background, during my college days I used to invest money in share market, and then I got to introuduce to algorithmic trading.
                    And I started to search information about it on Internet. Then I got to know about programming and then my journey of programming started.
                    I have done certification course in software and web development and recently I have completed my "Full Stack Web Development" course 
                    from <a href="https://masaischool.com/" target="_blank" style={{color: "skyblue",textDecoration:"none"}}>Masai School </a> where I have learned Remote Collabration, Problem Solving, DSA, DBMS and many skills.
                    I have three months of experience as Full stack developer in <a href="https://www.salesken.ai" target="_blank" style={{color: "skyblue",textDecoration:"none"}}>Salesken.ai</a> where I got chance to code in java
                </p>
                <p>
                    Apart from Web I have interest in Robotics, AI , Virtual Reality, Aerodynamics and Aerospace engineering. Learning and Working on different technologies is my hobby. To know more about me please click here 
                </p>
             </div>
             <div className={style.skills}>
                    <h3>My Tech Stack</h3>
                    <ul className={style.skillsList}>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> HTML </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> CSS </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> JavaScript </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> ES6 </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> React.js </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> REDUX </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> Node.js </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> express.js </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> MongoDB </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> PHP </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> MySql </li>
                        <li style={{border: `1px solid ${theme.textcolor}`}}> REST </li>
                    </ul>
             </div>
        </div>
    )
}

export default AboutMe;