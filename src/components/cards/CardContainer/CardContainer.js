import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css"

const CardContainer = () => {

    const fakeUsers = ["bill","jane", "fred", "sarah", "bob","alice"]

  return (
    <div className="cardContainer">
        {fakeUsers.map((user, index) => (
          <Card key={index} user={user} />  
        ))}
    </div>
  );
};

export default CardContainer;
