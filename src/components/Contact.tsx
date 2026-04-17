import React, { useState } from "react";
import axios from "axios";

export default function Contact(): JSX.Element {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/book", form);
      alert("Appointment request sent!");
    } catch (error) {
      alert("Error sending request");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Book Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          placeholder="Message"
        />
        <button className="w-full bg-[#1695b1] text-white py-3 rounded-full hover:bg-green-800">
          Send Request
        </button>
      </form>
    </section>
  );
}
