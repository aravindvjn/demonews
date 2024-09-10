import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import FetchingError from "./FetchingError";
const Filtered = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY
  console.log("current page", props.currentPage);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let category = "business";
    switch (props.currentPage) {
      case "2":
        category = "health";
        break;
      case "3":
        category = "business";
        break;
      case "4":
        category = "entertainment";
        break;
      case "5":
        category = "sports";
        break;
      default:
        category = "business";
    }
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setContent(() => {
          if(data.articles){
            return data.articles.map((article) => {
              return (
                <div className="filtered-content">
                  <h3>
                    <strong>{article.title}</strong>
                  </h3>
                  <h5>{article.author}</h5>
                  <h6>{article.publishedAt}</h6>
                  <img src={article.urlToImage} alt="" />
                  <p>{article.article}</p>
                  <p>{article.description}</p>
                  <hr />
                </div>
              );
            });
          }else{
            return (<FetchingError/>)
          }
        });
        setLoading(true)
      } catch (err) {
        console.log("Fetch Error", err);
      }
    };
    fetchData();
  },[props.currentPage,apiKey]);

  return <div style={{marginTop:'100px'}}>
    {loading? content : <Loading />}
  </div>;
};

export default Filtered;
