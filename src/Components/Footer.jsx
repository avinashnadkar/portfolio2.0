import style from "./Styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <footer style={{backgroundColor: theme.footerColor }}>
            <h5><a href="#"  style={{color: theme.textcolor, textDecoration:"none" }}>Go top</a></h5>
        </footer>
    )
}

export default Footer;