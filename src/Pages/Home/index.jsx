import React, { useState,useEffect } from "react";
import Format from "../../Components/Layout/FrontEnd/AppLayout";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('');
  const[region,setRegion]=useState('in')

  const handleClick = (c) => {
   
    axios
      .get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category || c}/in.json`
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
        setCategory('');
        setRegion('');
        

      });
  };

 /*  const handleSelect=(c,reg)=>{
   axios
   .get(
     `https://saurav.tech/NewsAPI/top-headlines/category/${category || c}/${reg}.json`
   )
   .then((response) => {
     console.log(response);
     setNews(response.data.articles);
     setCategory('');
     setRegion("");
     

   });
  } */

 useEffect(()=>{
   handleClick('general')
   
 },[])

  return (
    <>
      <Format>
      <div className="btn" >
      <button
           onClick={()=>handleClick('general')}
           style={{backgroundColor:'red',color:'white'}}
        >
          General
        </button>

        <button
           onClick={()=>handleClick('business')}
           style={{backgroundColor:'red',color:'white'}}
        >
          business
        </button>

        <button
           onClick={()=>handleClick('health')} 
           style={{backgroundColor:'red',color:'white'}}
        >
          Health
        </button>

        <button
           onClick={()=>handleClick('entertainment')} 
           style={{backgroundColor:'red',color:'white'}}
        >
          Entertainment
        </button>

        <button
           onClick={()=>handleClick('sports')} 
           style={{backgroundColor:'red',color:'white'}}
        >
          Sports
        </button>

        <button
           onClick={()=>handleClick('science')} 
           style={{backgroundColor:'red',color:'white'}}
        >
          Science
        </button>

        <button
           onClick={()=>handleClick('technology')} 
           style={{backgroundColor:'red',color:'white'}}
        >
          Technology
        </button>
      </div>

      <div className="country">
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" onSelect={()=>handleClick("in")}>India</a></li>
    <li><a class="dropdown-item" href="#" onSelect={()=>handleClick("us")}>USA</a></li>
    <li><a class="dropdown-item" href="#" onSelect={()=>handleClick("ru")}>Russia</a></li>
  </ul>
</div>
      </div>

        <div className="search">
          <input
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            onKeyPress={handleClick}
            placeholder="Enter News category"
            type="text"
          />
        </div>

        {news.map((value) => {
          return (
            <div className="container">
              <div className="row" style={{ float: "left" }}>
                <div
                  className="column"
                  style={{ width: "18rem", height: "450px", margin: "20px" }}
                >
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      padding: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <img
                      src={value.urlToImage}
                      className="card-img-top"
                      alt="No Img"
                    />
                    <a href={value.url} className="btn btn-primary">
                      Full News
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Format>
    </>
  );
};

export default Home;
