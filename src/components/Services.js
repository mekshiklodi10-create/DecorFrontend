import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";  // Importo useNavigate

function Services() {
  const navigate = useNavigate(); // Inicializo navigate

  const services = [
    { title: "Ditëlindje", image: "/birthday.jpeg", path: "/ditelindje" },
    { title: "Dasma", image: "/wedding.jpeg", path: "/dasma" },
    { title: "Fejesa", image: "/wedding.jpeg", path: "/fejesa" },
    { title: "Propozime", image: "/wedding.jpeg", path: "/propozime" },
    { title: "Gender Reveal", image: "/wedding.jpeg", path: "/gender-reveal" },
    { title: "Inagurime", image: "/other.jpeg", path: "/inagurime" },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl text-center mb-10">Shërbimet</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {services.map(({ image, title, path }) => (
          <div key={title} className="border rounded shadow p-4 flex flex-col">
            <Card image={image} title={title} />
            <button
              onClick={() => navigate(path)}  // Përdor navigate këtu
              className="mt-auto bg-rose-400 text-white py-2 rounded hover:bg-rose-700"
            >
              Shiko më shumë
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
