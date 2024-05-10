import React from "react";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.lds}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
