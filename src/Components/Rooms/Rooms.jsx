import React from "react";
import { rooms } from "../Api";
import Room from "./Room/Room";
import "./Rooms.scss";
const Rooms = () => {
  return (
    <div className="rooms">
      {rooms.map((room) => {
        return (
          <Room
            key={room.id}
            img={room.img}
            h5={room.h5}
            type={room.type}
            roomType={room.roomType}
          />
        );
      })}
    </div>
  );
};

export default Rooms;
