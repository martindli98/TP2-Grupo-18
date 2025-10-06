import React, { useState } from "react";

const MembershipCard = ({ title, description, imageUrl, price, day }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className={`relative w-full h-[320px] transition-all duration-500 [transform-style:preserve-3d] ${
          open ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-gray-900 text-white rounded-lg overflow-hidden [backface-visibility:hidden]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-white text-gray-800 rounded-lg p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="mb-2">
            <strong>Precio:</strong> ${price}
          </p>
          <p className="mb-2">
            <strong>Días:</strong> {day}
          </p>
          <p className="mb-2">
            <strong>Descripción:</strong> {description}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => setOpen(!open)}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
        >
          {open ? "Cerrar información" : "Ver más información"}
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;
