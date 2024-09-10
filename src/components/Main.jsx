import React, { useEffect, useState } from "react";
import dot from "../assets/dot.png";
import Loading from "./Loading";
import FetchingError from "./FetchingError";
const Main = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [mainNews, setMainNews] = useState("");
  const [otherMainNews, setOtherMainNews] = useState("");
  const [otherMainNews2, setOtherMainNews2] = useState("");
  const [loading, setLoading] = useState(false);
  const URL =
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const URL2 =
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        const response2 = await fetch(URL2);
        const data2 = await response2.json();
        setOtherMainNews(() => {
         if(data.articles){
          return data.articles.map((otherMainNew, index) => {
              return (
                <div className="other-main-news-child">
                  <h6>
                    <img className="dot-image" src={dot} alt="" />
                    {otherMainNew.publishedAt}
                  </h6>
                  <h3>
                    <strong>{otherMainNew.title}</strong>
                  </h3>
                  <p>{otherMainNew.content || otherMainNew.description}</p>
                  <hr />
                </div>
              );
          });
         }else{
          return (<FetchingError/>)
         }
        });
        setOtherMainNews2(() => {
         if(data2.articles){
          return data2.articles.map((otherMainNew, index) => {
              return (
                <div className="other-main-news-child">
                  <h6>
                    <img className="dot-image" src={dot} alt="" />
                    {otherMainNew.publishedAt}
                  </h6>
                  <h3>
                    <strong>{otherMainNew.title}</strong>
                  </h3>
                  <p>{otherMainNew.content || otherMainNew.description}</p>
                  <hr />
                </div>
              );
        
          });
         }else{
          return ( <FetchingError />)
         }
        });
        setMainNews(data.articles[0]);
        setLoading(true);
      } catch (err) {
        console.log("fetching Error", err);
      }
    };
  
    fetchData();
  },[apiKey,URL,URL2]);
  
  if (!loading) {
    return <Loading />;
  }
  if (loading) {
    if(mainNews){
      return (
        <div className="main-news col-8">
          <div className="main-heading">
            <h2>
              <strong>{mainNews.title}</strong>
            </h2>
            <h5>{mainNews.author}</h5>
            <h6>{mainNews.publishedAt}</h6>
            <img src={mainNews.urlToImage} alt="" />
            <p>{mainNews.content}</p>
            <p>{mainNews.description}</p>
            <br />
          </div>
          <div>
            <div className="other-main-news">
              <h5 >Follow all the updates here:</h5>
              {otherMainNews}
              {otherMainNews2}
            </div>
          </div>
        </div>
      );
    }
  }else{
    return (<Loading />)
  }
};

export default Main;
