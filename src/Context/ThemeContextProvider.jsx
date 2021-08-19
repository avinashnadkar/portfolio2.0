import React, { useState } from "react";

const ThemeContext = React.createContext();
console.log(ThemeContext); //provider ,consumer

const themeData = {
  white: {
    textcolor: "black",
    exploreMoreBtn : "linear-gradient(27deg, rgba(175,175,175,1) 0%, rgba(255,255,255,1) 50%, rgba(199,199,199,1) 100%)",
    backgroundColor: "#F5F6FA",
    imgBoderBottom : "black",
    aboutBackground : "rgb(240, 240, 240)",
    navBarBackground: "#FFFFFF",
    userListBackground: "#FFFFFF",
    burgerBtnColor : "black",
    labelColor : "grey",
    particleColor : 'rgb(0, 0, 255)', 
    particleImgSnow : "https://www.searchpng.com/wp-content/uploads/2019/02/Snow-Icon-PNG-1024x1024.png",
    particleImgBubble : "https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG58.png",
    contactFormBackground : "white",
    contactDetailsBackground : "linear-gradient(0deg,  rgb(245, 245, 245),rgb(200, 200, 200))",
    footerColor : "#F5F6FA"
  },
  black: {
    textcolor: "#FFFFFF",
    backgroundColor: "black",
    exploreMoreBtn : "linear-gradient(27deg, rgb(46, 45, 45) 0%, rgb(27, 26, 26) 50%, rgb(78, 78, 78) 100%)",
    imgBoderBottom : "rgb(221, 217, 217)",
    aboutBackground : "rgb(26, 25, 25)",
    navBarBackground: "#16191C",
    burgerBtnColor : "#FFFFFF",
    labelColor : "grey",
    particleColor : '#f44242',
    particleImgSnow :  "https://pngimg.com/uploads/snowflakes/snowflakes_PNG7545.png",
    particleImgBubble : "http://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG72.png",
    contactFormBackground : "rgb(46, 46, 46)",
    contactDetailsBackground : "linear-gradient(0deg, rgb(90, 90, 90), rgb(20, 20, 20))",
    footerColor : "grey"
  },
  purple: {
    textcolor: "#FFFFFF",
    exploreMoreBtn : "linear-gradient(27deg, rgb(140, 46, 156) 0%, rgb(245, 180, 220) 50%, rgb(142, 35, 146) 100%)",
    backgroundColor: "purple",
    imgBoderBottom : "rgb(221, 217, 217)",
    aboutBackground : "rgb(92, 6, 92)",
    navBarBackground: "purple",
    burgerBtnColor : "#FFFFFF",
    labelColor : "grey",
    particleColor : 'rgb(255, 255, 200)',
    particleImgSnow : "https://pngimg.com/uploads/snowflakes/snowflakes_PNG7576.png",
    particleImgBubble : "http://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG72.png",
    contactFormBackground : "rgb(77, 12, 73)",
    contactDetailsBackground : "linear-gradient(0deg, rgba(63, 3, 38, 0.787), rgba(119, 19, 77, 0.664))",
    footerColor : "purple"
  },
  pink: {
    textcolor: "black",
    exploreMoreBtn : " linear-gradient(27deg, rgba(245,188,188,1) 0%, rgba(240,176,176,1) 50%, rgba(254,190,153,1) 100%)",
    backgroundColor: "pink",
    imgBoderBottom : "black",
    aboutBackground : "rgba(255, 192, 203, 0.603)",
    navBarBackground: "pink",
    burgerBtnColor : "black",
    labelColor : "grey",
    particleColor : 'rgb(0, 0, 0)',
    particleImgSnow : "https://www.searchpng.com/wp-content/uploads/2019/02/Snow-Icon-PNG-1024x1024.png",
    particleImgBubble : "https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG58.png",
    contactFormBackground :  "rgb(243, 167, 180)",
    contactDetailsBackground : "linear-gradient(0deg, rgba(202, 63, 89, 0.87), #ebbcc4)",
    footerColor : "pink"
  }
};

ThemeContext.displayName = "Theme_Context";
const ThemeContextProvider = ({ children }) => {
    let colors = ["white", "purple", "pink","black"];
    const [openColors,setOpenColors] = useState(false);
    const [currentColor, setCurrentColor] = useState("black");
    const [openNav,setOpenNav] = useState(false);

    const toggleNav = () => {
        if(openNav){
            setOpenNav(false);
        }else{
            setOpenNav(true);
        }
    }

  // console.log(children);
  const toggleTheme = (e) => {
    setCurrentColor(e);
    setOpenColors(false);
  };
  const value = { colors ,currentColor,openColors,setOpenColors, setOpenNav, openNav,  toggleNav, toggleTheme, theme: themeData[currentColor]}; //theme : themData["darak"]
  return (
    <ThemeContext.Provider value={value}> {children}</ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeContextProvider };

// const contextcreate  = React.crateConetxt()
