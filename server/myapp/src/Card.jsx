import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import ReactStars from "react-rating-stars-component";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import items from "./arr";
import { UserContext } from "./context/context";
{
  /*import ReactStars from 'react-star-ratings';*/
}

function Card() {
  const { commondata, setCommondata } = useContext(UserContext);

  const [data, setData] = useState([]);

  const handleClick = () => {
    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=homedecor&client_id=Q1x_ckN1dkq3SaKyk5iJsBh15ohwrtvMet7HRPQr9u0"
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
        // console.log(response.results);
        // console.log(data);
        setCommondata(response.results);
      })

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handleClick();
  }, []);

  useEffect(() => {
    console.log("commondata :", commondata);
  });

  return (
    <div className="row">
      {data?.map((item, index) => {
        return (
          <div key={index} className="card col-md-3" style={{ width: "18rem" }}>
            <img
              style={{ height: "150px" }}
              src={item.urls.full}
              className="card-img-top mt-2"
              alt="image unavailable"
            />
            <div className="card-body">
              <h5 className="card-title">{item.alt_description}</h5>
              <ReactStars size={15} isHalf={true} />
              <p className="card-text">{item.likes}</p>
              {/* <Link to={`/buy/${item.id}`} className="btn btn-primary">
                Buy now
              </Link> */}
              <Link to="/buy" className="btn btn-primary">
                Buy now
              </Link> 

              {/*<a href="/#" className='btn btn-primary'>Buy now</a>*/}
            </div>
          </div>
        )}
        )}
    </div>
  );
}

export default Card;
