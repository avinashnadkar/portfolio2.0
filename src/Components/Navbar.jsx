import React from "react";
import style from "./Styles.module.css";
import InvertColorsOutlinedIcon from '@material-ui/icons/InvertColorsOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

const Navbar = () => {
    
    const { theme , openNav, setOpenNav,  toggleNav, toggleTheme, currentColor, colors, openColors,setOpenColors } = useContext(ThemeContext);

    const handleDropDown = () => {
        (!openColors) ? setOpenColors(true) : setOpenColors(false);
    }


    return(
        <nav  style={{ backgroundColor: theme.backgroundColor}}>
          
          <div className={style.burgerBtn} onClick={toggleNav}>
              <div className={`${style.burgerLineOne} ${openNav ? style.toggleLineOne : null }`} style={{backgroundColor : theme.burgerBtnColor}}></div>
              <div className={`${style.burgerLineTwo} ${openNav ? style.toggleLineTwo : null }`} style={{backgroundColor : theme.burgerBtnColor}}></div>
          </div>

          <div className={style.logo} style={{color: theme.textcolor}}>A N</div>

          <ul className={`${style.navlinks} ${openNav ? style.openNav : null}`} style={{backgroundColor:theme.backgroundColor}}>
              <li><a href="#" style={{color: theme.textcolor}} onClick={()=>setOpenNav(false)}>HOME</a></li>
              <li><a href="#about" style={{color: theme.textcolor}} onClick={()=>setOpenNav(false)}>ABOUT</a></li>
              <li><a href="#projects" style={{color: theme.textcolor}} onClick={()=>setOpenNav(false)}>PROJECTS</a></li>
              <li><a href="#contact" style={{color: theme.textcolor}} onClick={()=>setOpenNav(false)}>CONTACT</a></li>
          </ul>

          <button 
             className={`${style.ThemeColor} ${(openColors == true) ? style.rotateAnimation : style.backToiInitialPos}`} 
             style={{color: theme.textcolor}} 
             onClick={handleDropDown}>
               < InvertColorsOutlinedIcon/>
          </button>

          <ul className={style.colors} style={{display : openColors ? "block" : "none"}}>
              {
                  colors.map((el)=>{
                        if(el!= currentColor){
                        return(
                            <li style={{ color:el }} onClick={()=>toggleTheme(el)}> 
                            <FiberManualRecordIcon/> 
                            </li>
                        )
                        }
                  })
              }
            
          </ul>
        </nav>
    )
}

export default Navbar;