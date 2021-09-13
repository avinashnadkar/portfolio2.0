import style from "../Components/Styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

const KnowMe = () => {

    const { theme } = useContext(ThemeContext);


    return(
        <div style={{ backgroundColor: theme.aboutBackground }}>
          <h2>Know me</h2>
        </div>
    )
}

export default KnowMe;