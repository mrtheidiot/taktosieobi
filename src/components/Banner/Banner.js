import React from "react";
import "./Banner.css";

import dog1 from "./../../assets/dogo1.jpg";
import dog2 from "./../../assets/dogo2.jpg";
import dog3 from "./../../assets/dogo3.jpg";
import dog4 from "./../../assets/p4.jpg";

const Banner = (props) => {
  const banners = [
    { img: `${dog1}`, alt: "piesek", id: 1 },
    { img: `${dog2}`, alt: "piesek", id: 2 },
    { img: `${dog3}`, alt: "piesek", id: 3 },
    { img: `${dog4}`, alt: "piesek", id: 4 },
  ];
  const { img } = Object.values(banners).filter(
    (baner) => baner.id === props.id
  )[0];

  return (
    <div className="mainPicture-main">
      <img src={img} />
    </div>
  );
};

export default Banner;
