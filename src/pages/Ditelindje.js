import React from 'react';

const ditelindjeModels = [
  {
    title: "Model Klasik",
    image: "/header.jpeg", // ndodhet direkt në public/
    price: "€1200",
    description: "Dekor i thjeshtë dhe elegant me ngjyrat tradicionale të dasmës."
  },
  {
    title: "Model Modern",
    image: "/birthday.jpeg", // ndodhet direkt në public/
    price: "€1800",
    description: "Dekor modern me ndriçim LED, lule të freskëta dhe dizajn bashkëkohor."
  },
  {
    title: "Model në Natyrë",
    image: "/natyre.jpg", // ndodhet direkt në public/
    price: "€2000",
    description: "Dasmë e organizuar në natyrë, me ambient romantik dhe stil boho."
  }
];

function Ditelindje() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Modelet e Ditëlindjeve</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ditelindjeModels.map((model, index) => (
          <div key={index} className="border rounded shadow-lg p-4">
            <img
              src={model.image}
              alt={model.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{model.title}</h2>
            <p className="text-rose-600 font-bold mb-2">{model.price}</p>
            <p className="text-gray-700">{model.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ditelindje;