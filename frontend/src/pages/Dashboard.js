// // 5. src/pages/Dashboard.js
// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import { AuthContext } from "../context/AuthContext";
// import QuestDisplay from "../components/QuestDisplay";
// import ReflectionForm from "../components/ReflectionForm";
// import RewardsDashboard from "../components/RewardsDashboard";

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [quests, setQuests] = useState([]);

//   useEffect(() => {
//     if (!user) navigate("/login");
//     const fetchQuests = async () => {
//       try {
//         const res = await api.get("/quests");
//         setQuests(res.data);
//       } catch (err) {
//         console.error("Failed to fetch quests", err);
//       }
//     };
//     fetchQuests();
//   }, [user, navigate]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
//       <button onClick={logout} className="bg-red-500 text-white px-3 py-1 mb-4">
//         Logout
//       </button>
//       <QuestDisplay quests={quests} />
//       <ReflectionForm quests={quests} />
//       <RewardsDashboard />
//     </div>
//   );
// };

// export default Dashboard;


// src/pages/Dashboard.js
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import QuestDisplay from "../components/QuestDisplay";
import ReflectionForm from "../components/ReflectionForm";
import RewardsDashboard from "../components/RewardsDashboard";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [quests, setQuests] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) return navigate("/login");

    const fetchQuests = async () => {
      try {
        const res = await api.get("/quests");
        setQuests(res.data);
      } catch (err) {
        console.error("Failed to fetch quests", err);
      }
    };

    const fetchProfile = async () => {
      try {
        const res = await api.get("/profile");
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchQuests();
    fetchProfile();
  }, [user, navigate]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
      <button onClick={logout} className="bg-red-500 text-white px-3 py-1 mb-4">
        Logout
      </button>

      {profile && (
        <div className="mb-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">Your Profile Summary</h2>
          <p><strong>Mood:</strong> {profile.mood}</p>
          <p><strong>Traits:</strong> {profile.traits?.join(", ")}</p>
          <p><strong>Emotional Needs:</strong> {profile.emotionalNeeds?.join(", ")}</p>
          <p><strong>Preferences:</strong> {profile.preferences}</p>
        </div>
      )}

      <QuestDisplay quests={quests} />
      <ReflectionForm quests={quests} />
      <RewardsDashboard />
    </div>
  );
};

export default Dashboard;
