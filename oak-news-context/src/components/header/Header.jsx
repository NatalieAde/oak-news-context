import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: search });
    setSearch("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>OAK NEWS</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search for news"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
