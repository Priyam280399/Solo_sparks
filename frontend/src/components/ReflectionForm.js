// 8. src/components/ReflectionForm.js
import React, { useState } from "react";
import api from "../api/axios";

const ReflectionForm = ({ quests }) => {
  const [selectedQuest, setSelectedQuest] = useState("");
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);

//   const handleSubmit = async (e) => {
//     console.log(selectedQuest,text);
//     e.preventDefault();
//     const formData = new FormData();
    
//     formData.append("questId", selectedQuest);
//     // formData.append("questId", selectedQuest.id);
//     formData.append("text", text);
//     if (media) formData.append("media", media);
//        console.log(formData,'---->>>');

//     try {
//       await api.post("/reflections", formData);
//       alert("Reflection submitted!");
//       setText("");
//       setMedia(null);
//       setSelectedQuest("");
//     } catch (err) {
//       console.error("Failed to submit reflection", err);
//     }
//   };

    const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    questId: selectedQuest,
    prompt: text,
    type: "text"
  };

  try {
    await api.post("/reflections", data); // Axios auto sets Content-Type: application/json
    alert("Reflection submitted!");
    setText("");
    setSelectedQuest("");
  } catch (err) {
    console.error("Failed to submit reflection", err);
  }
};


  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Submit Reflection</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={selectedQuest}
          onChange={(e) => setSelectedQuest(e.target.value)}
          className="w-full p-2 border"
        >
          <option value="">Select Quest</option>
          {quests.map((q) => (
            <option key={q._id} value={q._id}>
              {q.prompt}
            </option>
          ))}
        </select>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your thoughts..."
          className="w-full p-2 border"
        ></textarea>
        <input
          type="file"
          onChange={(e) => setMedia(e.target.files[0])}
          className="w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Submit Reflection
        </button>
      </form>
    </div>
  );
};

export default ReflectionForm;
