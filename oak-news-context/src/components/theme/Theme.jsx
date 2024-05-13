import React, { useContext } from "react";
import styles from "./Theme.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";

function Theme() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div>
      <p
        className={styles.lable}
        style={{ color: darkMode ? "white" : "black" }}
      >
        Theme: {darkMode ? "Dark" : "Light"}{" "}
      </p>
      <div className={styles.toggle}>
        <img src={Sun} alt="sun" className={styles.icon} />
        <img src={Moon} alt="moon" className={styles.icon} />
        <div
          className={styles.button}
          onClick={handleClick}
          style={{ left: theme.state.darkMode ? 0 : 25 }}
        ></div>{" "}
      </div>
    </div>
  );
}

export default Theme;
