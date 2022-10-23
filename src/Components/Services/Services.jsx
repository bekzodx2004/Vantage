import React from "react";
import { services } from "../Api";
import Card from "./Card/Card";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="katak"></div>

      <h5>services</h5>
      <h2>Architecture is not simply a service, it is also an inspiration</h2>

      <div className="services__block">
        {services.map((service) => {
          return (
            <Card
              key={service.id}
              img={service.img}
              h5={service.h5}
              h3={service.h3}
              p={service.p}
            />
          );
        })}
      </div>

      <button>see all services</button>
    </div>
  );
};

export default Services;
