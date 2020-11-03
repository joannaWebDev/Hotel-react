import React from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  const orderType = "Pizzas";
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={orderType} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
