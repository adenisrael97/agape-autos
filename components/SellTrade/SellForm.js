"use client";


import React, { useState } from "react";

// Heroicons outline upload icon
function UploadIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0l-4 4m4-4l4 4m-9 8v2a2 2 0 002 2h6a2 2 0 002-2v-2" />
    </svg>
  );
}

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  brand: "",
  model: "",
  year: "",
  mileage: "",
  transmission: "",
  fuel: "",
  condition: "",
  location: "",
  notes: "",
  images: []
};

export default function SellForm({ onSuccess }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "images") {
      setForm(f => ({ ...f, images: Array.from(files) }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function validate() {
    if (!form.fullName || !form.phone || !form.brand || !form.model || !form.year || !form.mileage || !form.transmission || !form.fuel || !form.condition || !form.location) {
      return "Please fill in all required fields.";
    }
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    setError("");
    setSuccess(true);
    onSuccess && onSuccess();
    // Simulate backend
    console.log("Sell Form Data:", form);
    setTimeout(() => setSuccess(false), 3000);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto w-full transition-all duration-500">
      <h3 className="text-xl font-bold mb-4 text-black">Sell Your Car</h3>
      {error && <div className="mb-3 text-red-600 text-sm">{error}</div>}
      {success && <div className="mb-3 text-green-600 text-sm font-semibold">Form submitted successfully!</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="brand" value={form.brand} onChange={handleChange} placeholder="Car Brand*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="model" value={form.model} onChange={handleChange} placeholder="Model*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="year" value={form.year} onChange={handleChange} placeholder="Year*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="mileage" value={form.mileage} onChange={handleChange} placeholder="Mileage*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="transmission" value={form.transmission} onChange={handleChange} placeholder="Transmission*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="fuel" value={form.fuel} onChange={handleChange} placeholder="Fuel Type*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="condition" value={form.condition} onChange={handleChange} placeholder="Condition*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location*" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition" />
      </div>
      <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 text-gray-900 placeholder-gray-400 transition mt-4" rows={2} />
      <div className="mt-4">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <UploadIcon className="w-5 h-5 text-yellow-500" />
          Upload Images
        </label>
        <input name="images" type="file" multiple onChange={handleChange} className="block w-full text-sm text-gray-600" />
      </div>
      <button type="submit" className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-full transition-colors duration-200">Submit</button>
    </form>
  );
}
