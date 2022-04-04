import style from "./Styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

const Projects = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <div id="projects" className={style.projects} style={{ backgroundColor: theme.backgroundColor, color: theme.textcolor }}>
             <h2 className={style.projectsHeading}>Projects</h2>
            <div className={style.projectOne}>
                <div className={style.projectOneDesc}>
                    <div>
                        <h2>1) E-commerce</h2>
                        <p> e-commerce website for a single shop 
                            created with mern stack with features of
                            add to cart, payment, sign in / sign up.
                            I am the solo contributer of this project.
                            All the css and react component created by me.
                            for design purpose I have copied design from jio mart website
                        </p>
                    
                        <ul className={style.projectTechStack1}>
                        <h4 style={{borderRight: `1px solid ${theme.textcolor}`}}>Tech Stack</h4>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>HTML</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>CSS</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>JavaScript</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>REACT - REDUX</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>Node.js</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>MongoDB</li>
                        </ul>
                        <div className={style.projectBtnContainer}><a href="https://github.com/avinashnadkar/e-commerce" target="_blank"><button className={style.seeCodeBtn} style={{color:theme.textcolor, border:`1px solid ${theme.textcolor}`}}>See code</button></a><a href="https://online-shop-mern.netlify.app/" target="_blank"><button className={style.seeLiveBtn} style={{backgroundColor:theme.textcolor, color: theme.backgroundColor, border:"none"}}>See live</button></a></div>
                    </div>
                </div>
                <div className={style.projectOneImg}></div>
            </div>
            <div className={style.projectTwo}>
                <div className={style.projectTwoImg}> </div>
                <div className={style.projectTwoDesc}>
                    <div>
                        <h2>2) Twitter clone</h2>
                        <p> Twitter is a famous social media website. it is used for microblogging and social networking. 
                            In this project I have tried to clone main features of Twitter. This project is created technologies using 
                            React.js, Node.js and MongoDB with features of sign in/ sign up, post tweet, follow / unfollow etc.
                        </p>
                        <ul className={style.projectTechStack2}>
                        <h4 style={{borderRight: `1px solid ${theme.textcolor}`}}>Tech Stack</h4>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>HTML</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>CSS</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>JavaScript</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>REACT</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>Node.js</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>MongoDB</li>
                        </ul>
                        <div className={style.projectBtnContainer}><a href="https://github.com/avinashnadkar/twitter_clone_client" target="_blank"><button className={style.seeCodeBtn} style={{color:theme.textcolor, border:`1px solid ${theme.textcolor}`}}>See code</button></a><a href="https://twitter-clone-mern.netlify.app" target="_blank"><button className={style.seeLiveBtn} style={{backgroundColor:theme.textcolor, color: theme.backgroundColor, border:"none"}}>See live</button></a></div>
                    </div>
                </div>
            </div>
            <div className={style.projectThree}>
                <div className={style.projectThreeDesc}>
                    <div>
                        <h2>3) Cow boy game</h2>
                        <p> cow-boy game is a single player game like offline Chrome Dino game. 
                            It is only a static game developed using HTML, CSS and JavaScript.
                            for graphics I have used canvas.
                        </p>
                        <ul className={style.projectTechStack3}>
                        <h4 style={{borderRight: `1px solid ${theme.textcolor}`}}>Tech Stack</h4>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>HTML</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>CSS</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>JavaScript</li>
                        </ul>
                        <div className={style.projectBtnContainer}><a href="https://github.com/avinashnadkar/cow-boy-game" target="_blank"><button className={style.seeCodeBtn} style={{color:theme.textcolor, border:`1px solid ${theme.textcolor}`}}>See code</button></a><a href="https://avinashnadkar.github.io/cow-boy-game/" target="_blank"><button className={style.seeLiveBtn} style={{backgroundColor:theme.textcolor, color: theme.backgroundColor, border:"none"}}>See live</button></a></div>
                    </div>
                </div>
                <div className={style.projectThreeImg}> </div>
            </div>
        </div>
    )
}

export default Projects;