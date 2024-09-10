import React, { useEffect, useState } from "react";
import FetchingError from "./FetchingError";

const Side = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [sideNews, setSideNews] = useState("");
  const URL =
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

  
  useEffect(() => {
    const fetchSideData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setSideNews(() => {
         if(data.articles){
          return data.articles.map((article) => {
            return (
              <div className="side-news-child">
                <h3>
                  <strong>{article.title}</strong>
                </h3>
                <img src={article.urlToImage} alt="" />
                <p>{article.description}</p>
                <hr/>
              </div>
            );
          });
         }else{
          return (<FetchingError />)
         }
        });
      } catch (err) {
        console.log("side fetch error", err);
      }
    };
  
    fetchSideData();
  }, [apiKey]);
  return <div className="side-news col-4">{sideNews}</div>;
};

export default Side;
