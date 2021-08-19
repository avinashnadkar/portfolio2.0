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
                        <h2>1) CRED</h2>
                        <p> CRED is an Indian fintech startup, 
                            based out of Bengaluru, Karnataka, which was 
                            founded in 2018 by Kunal Shah. CRED's main feature 
                            is allowing users to make credit card payments through 
                            its app for which they get rewarded
                        </p>
                    
                        <ul className={style.projectTechStack1}>
                        <h4 style={{borderRight: `1px solid ${theme.textcolor}`}}>Tech Stack</h4>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>HTML</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>CSS</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>JavaScript</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>REACT</li>
                        </ul>
                        <div className={style.projectBtnContainer}><a href="https://github.com/avinashnadkar/cred" target="_blank"><button className={style.seeCodeBtn} style={{color:theme.textcolor, border:`1px solid ${theme.textcolor}`}}>See code</button></a><a href="https://cred.club/" target="_blank"><button className={style.seeLiveBtn} style={{backgroundColor:theme.textcolor, color: theme.backgroundColor, border:"none"}}>See live</button></a></div>
                    </div>
                </div>
                <div className={style.projectOneImg}></div>
            </div>
            <div className={style.projectTwo}>
                <div className={style.projectTwoImg}> </div>
                <div className={style.projectTwoDesc}>
                    <div>
                        <h2>2) airtable.com</h2>
                        <p> Airtable is a cloud collaboration service 
                            headquartered in San Francisco. It was founded in 2012 by Howie Liu, 
                            Andrew Ofstad, and Emmett Nicholas. Airtable is a spreadsheet-database
                             hybrid, with the features of a database but applied to a
                        </p>
                        <ul className={style.projectTechStack2}>
                        <h4 style={{borderRight: `1px solid ${theme.textcolor}`}}>Tech Stack</h4>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>HTML</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>CSS</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>JavaScript</li>
                        </ul>
                        <div className={style.projectBtnContainer}><a href="https://github.com/makkardeepak25/project_airtable" target="_blank"><button className={style.seeCodeBtn} style={{color:theme.textcolor, border:`1px solid ${theme.textcolor}`}}>See code</button></a><a href="https://affectionate-ride-47454a.netlify.app/" target="_blank"><button className={style.seeLiveBtn} style={{backgroundColor:theme.textcolor, color: theme.backgroundColor, border:"none"}}>See live</button></a></div>
                    </div>
                </div>
            </div>
            <div className={style.projectThree}>
                <div className={style.projectThreeDesc}>
                    <div>
                        <h2>3) bus.irctc</h2>
                        <p> Indian Railway Catering and Tourism Corporation is a wholly
                            owned subsidiary of Indian Railways that provides ticketing,
                            catering, and tourism services to the Indian Railways.
                        </p>
                        <ul className={style.projectTechStack3}>
                        <h4 style={{borderRight: `1px solid ${theme.textcolor}`}}>Tech Stack</h4>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>HTML</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>CSS</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>JavaScript</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>REACT</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>Node.js</li>
                            <li style={{borderRight: `1px solid ${theme.textcolor}`}}>MongoDB</li>
                        </ul>
                        <div className={style.projectBtnContainer}><a href="https://github.com/SumanChakraborty1998/irctc_bus_frontend/" target="_blank"><button className={style.seeCodeBtn} style={{color:theme.textcolor, border:`1px solid ${theme.textcolor}`}}>See code</button></a><a href="https://www.bus.irctc.co.in/home" target="_blank"><button className={style.seeLiveBtn} style={{backgroundColor:theme.textcolor, color: theme.backgroundColor, border:"none"}}>See live</button></a></div>
                    </div>
                </div>
                <div className={style.projectThreeImg}> </div>
            </div>
        </div>
    )
}

export default Projects;