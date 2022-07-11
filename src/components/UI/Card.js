import React from "react";
import cardcss from "./css/Card.module.css";
// import "./css/Card.css";

const Card = (props) => {
  return (
    <div className={`${cardcss.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
