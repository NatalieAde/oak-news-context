import React from "react";
import styles from "./NewsCard.module.css";
import breakingNews from "../../assets/breakingNews.jpg";

function NewsCard({ title, url, urlToImage, content }) {
  return (
    <div className={styles.card}>
      <img src={urlToImage ? urlToImage : breakingNews} alt="news" />
      <div className={styles.cardDetail}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={styles.a}>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
