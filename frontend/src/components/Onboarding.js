// 6. src/components/Onboarding.js
import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [mood, setMood] = useState("");
  const [traits, setTraits] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/", { mood, traits });
      navigate("/dashboard");
    } catch (err) {
      console.error("Onboarding failed", err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Tell us about yourself</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Mood:</label>
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label>Personality Traits:</label>
          <input
            type="text"
            value={traits}
            onChange={(e) => setTraits(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2">
          Complete Onboarding
        </button>
      </form>
    </div>
  );
};

export default Onboarding;
