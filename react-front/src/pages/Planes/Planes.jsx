import React, { useEffect, useState } from "react";
import { fetchPlans } from "../../api/auth";
import MembershipCard from "../../components/Membership/MembershipCArd";

const Planes = () => {
  const [plans, setPlans] = useState([]);
 
  useEffect(() => {
    const loadPlans = async () => {
      try {
        const data = await fetchPlans();
        // Agregamos imageUrl por default si no viene de la API
        const formattedPlans = data.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          day: item.day,
          description: item.description,
          imageUrl:
            item.imageUrl ||
            "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
        }));
        setPlans(formattedPlans);
      } catch (error) {
        console.error("Error loading plans:", error);
      }
    };
    loadPlans();
  }, []);

  return (
    <div>
      <div
        className=" bg-cover bg-center p-5 "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className=" bg-black/70 rounded-lg p-10">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Our Classes
            </h2>

        
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((membership) => (
                <MembershipCard
                  key={membership.id}
                  title={membership.name}
                  description={membership.description}
                  imageUrl={membership.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
