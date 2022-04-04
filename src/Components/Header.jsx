import style from "./Styles.module.css";
import { useContext } from "react";
import profilePic from '../Images/profile_pic_new.png'
import Particles from 'react-particles-js';
import { ThemeContext } from "../Context/ThemeContextProvider";
// import Demo from "../Images/demo";

const Header = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <header style={{ backgroundColor: theme.backgroundColor, color: theme.textcolor }}>
            <div className={style.mainBanner} style={{ backgroundColor: theme.backgroundColor, color: theme.textcolor }}>
                <h1 className={style.mainTitle}>Hello, I'm</h1>
                <h1  className={style.mainTitle}>Avinash Nadkar</h1>
                <p  className={style.mainSubTitle}>
                    Full stack web developer, passionate about technology Whose <br/> 
                    aim is to research and create new and secure technologies and contribute to tech world
                </p>
                <div className={style.headerBtns}>
                {/* style={{backgroundColor:theme.exploreMoreBtn}}  */}
                    <button id={style.learnMoreBtn} style={{color:theme.textcolor, background:theme.exploreMoreBtn}}  >Explore more</button>
                    <a href="https://drive.google.com/drive/folders/1PnId_0W6-aj2G1rDFURJxLI4_E96s4V9" target="_blank"><button id={style.downloadResumeBtn} style={{border:`1px solid ${theme.textcolor}`, color:theme.textcolor}}>Download Resume</button></a>
                </div>
            </div>

            <div className={style.profilePic}>
               <img src={profilePic} style={{ borderBottom: `5px solid ${theme.imgBoderBottom}`}} className={style.profileImg}/>
            </div>

            <div className={style.particleContainer}>
            <Particles 
                height = "100vh"
                params={{
                particles: {
                    number: {
                    value:50,
                    density: {
                        enable: true,
                        value_area: 2000,
                    }
                    },
                    shape: {
                        type: "image",
                        options: {
                            image: [{
                                src: theme.particleImgSnow,
                                width: 202,
                                height: 200
                            }, {
                                src: theme.particleImgBubble,
                                width: 1153,
                                height: 1080
                            }, {
                                src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54e847be-8444-4485-9d2f-0d51a9ab6b3f/dcruv7h-9c57c565-e380-4d20-9413-d743c35c83a4.png/v1/fill/w_894,h_894,strp/transparent_rainbow_bubble_prop_png_3_by_lxc808_dcruv7h-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzU0ZTg0N2JlLTg0NDQtNDQ4NS05ZDJmLTBkNTFhOWFiNmIzZlwvZGNydXY3aC05YzU3YzU2NS1lMzgwLTRkMjAtOTQxMy1kNzQzYzM1YzgzYTQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.laWMbla12KsLhf1aJHcWGzVyHxfciBK84P_uzOZSKTs",
                                width: 894,
                                height: 894
                            }]
                        }
                    },
                    line_linked: {
                        // color: theme.particleColor,
                        opacity: 0
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "bottom",
                        random: false,
                        straight: true,
                        // out_mode: "in",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      },
                      size: {
                        value: 20,
                        random: false,
                        // color: theme.particleColor,
                        anim: {
                          enable:true,
                          speed: 10,
                          size_min: 1,
                          sync:true
                        }
                      },
                  
                    // interactivity: {
                    //     detect_on: "canvas",
                    //     events: {
                    //       onhover: {
                    //         enable: true,
                    //         mode: "repulse"
                    //       },
                    //       onclick: {
                    //         enable: true,
                    //         mode: "push"
                    //       },
                    //       resize: true
                    //     }
                    // },
               
                }}
            }
            />
            </div>
        </header>
    )
}

export default Header;