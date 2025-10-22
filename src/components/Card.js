import React from "react";

function Card({ image, title }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div
        className="h-48 md:h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6 text-center">
        <h4 className="text-xl mb-2">{title}</h4>
      </div>
    </div>
  );
}

export default Card;