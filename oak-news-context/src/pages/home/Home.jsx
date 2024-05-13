import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
import Theme from "../../components/theme/Theme";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  const getNews = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const sliderNews = news?.splice(0, 3);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: darkMode ? "black" : "aliceblue" }}
    >
      <Theme />
      <div className={styles.slider}>
        <Slider sliderNews={sliderNews} />
      </div>
      <div className={styles.news}>
        {loading && <Spinner />}
        {news?.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
