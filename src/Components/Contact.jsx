import React from "react";
import style from "./Styles.module.css";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

const Contact = () => {

    const { theme } = useContext(ThemeContext);
    const contactBackground = theme.contactBackground;
    console.log(contactBackground)

    return(
        <div id="contact" className={style.contactContainer} style={{ background:theme.contactBackground , color:theme.textcolor}}>
            <div className={style.contactDetails} style={{background: theme.contactDetailsBackground}}>
               <p>Location : Mumbai, Maharashtra, India</p> 
               <p>Phone : 816198327</p> 
               <p>Email : avinashnadkar3@gmail.com</p> 
               <div className={style.socialIconsList}>
                <p>Social :</p> 
                <ul>
                <li className={style.socialIcons}><a href="https://www.hackerrank.com/avinashnadkar24?hr_r=1" target="_blank"><img src="https://1.bp.blogspot.com/-ULT9oDhqr24/XJYCrttOEpI/AAAAAAAAJYE/inXHXlzblBI3SbcGpiUj4TMNj-E8uPlaQCK4BGAYYCw/s1600/logo%2Bhackerrank%2Bicon.png"/></a></li>
                <li className={style.socialIcons}><a href="https://codesandbox.io/u/avinashnadkar" target="_blank"><img src="https://seeklogo.com/images/C/code-sandbox-logo-0746E97CA1-seeklogo.com.png"/></a></li>
                <li className={style.socialIcons}><a href="https://github.com/avinashnadkar" target="_blank"><img src="https://pngimg.com/uploads/github/github_PNG40.png"/></a></li>
                <li className={style.socialIcons}><a href="https://in.linkedin.com/in/avinash-nadkar-5932681a3" target="_blank"><img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png"/></a></li>
                </ul>
               </div>
            </div>

            <div className={style.formContainer} style={{backgroundColor : theme.contactFormBackground }}>
                <h3 style={{ textAlign: "center"}}>Get in Touch</h3>
                <form>
                    <div className={style.nameAndEmailContainer}>
                        <div className={style.inputBox}>
                            <label style={{color:theme.textcolor}}>Name</label> <br/>
                            <input type="text" placeholder="Full name" style={{border:`1px solid ${theme.textcolor}`, color:theme.textcolor}}/>
                        </div>
                        <div className={style.inputBox}>
                            <label style={{color:theme.textcolor}}>Email</label><br/>
                            <input type="text" placeholder="Email address" style={{border:`1px solid ${theme.textcolor}`, color:theme.textcolor}}/>
                        </div>
                    </div>

                    <div className={style.messageBox}>
                        <label style={{color:theme.textcolor}}>Message</label><br/>
                        <textarea placeholder="Message" style={{border:`1px solid ${theme.textcolor}`,color:theme.textcolor}}/>
                    </div>
                    <button type="submit" className={style.submitBtn} style={{backgroundColor:theme.textcolor,color:theme.backgroundColor, border: `${(theme.backgroundColor == "#F5F6FA") ?  "1px solid black" : "none"}` }}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;