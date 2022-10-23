import React from "react";
import { Likes } from "../Api";
import Card from "./Card/Card";
import "./Clients.scss";

const Clients = () => {
  return (
    <div className="clients">
      {Likes.map((card) => {
        return (
          <>
            <Card key={card.id} k={card.k} tur={card.tur} />{" "}
            <div className="katak"></div>
          </>
        );
      })}
    </div>
  );
};

export default Clients;
