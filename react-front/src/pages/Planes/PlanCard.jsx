import React from "react";

const PlanCard = ({ name, price, day, description }) => {
  return (
    <div className="">
      <h2 className="">Plan {name}</h2>
      <p className="">${price}</p>
      <p className="">{day} días por semana</p>
      {description && <p className="">{description}</p>}
    </div>
  );
};

export default PlanCard;
