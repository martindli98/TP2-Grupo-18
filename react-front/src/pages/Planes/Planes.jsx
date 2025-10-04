import React, { useEffect, useState } from "react";
import { fetchPlans } from "../../api/auth";
import PlanCard from "./PlanCard";

const Planes = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const data = await fetchPlans();
        setPlans(data.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          day: item.day,
          description: item.description,
        })));
      } catch (error) {
        console.error(error);
      }
    };
    loadPlans();
  }, []);

  return (
    <div className="">
      {plans.map(plan => (
        <PlanCard key={plan.id} {...plan} />
      ))}
    </div>
  );
};

export default Planes;
