import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Mesazhi u dërgua me sukses!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Dërgimi dështoi. Provo përsëri.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Gabim gjatë lidhjes me serverin.");
    }
  };

  return (
    <section className="mt-20 px-6 pb-20">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl mb-6 text-center">Na kontakto</h3>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-500 rounded-md px-4 py-3"
              placeholder="Emri"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-500 rounded-md px-4 py-3"
              placeholder="Email"
              required
            />
          </div>

          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded-md px-4 py-3"
            placeholder="Mesazhi"
            required
          />

          {status && <p className="text-center text-sm text-green-600">{status}</p>}

          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-rose-600 text-white font-medium shadow hover:opacity-95"
            >
              Dërgo
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;