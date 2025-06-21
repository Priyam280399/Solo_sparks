// 9. src/components/RewardsDashboard.js
import React, { useEffect, useState } from "react";
import api from "../api/axios";

const RewardsDashboard = () => {
  const [rewards, setRewards] = useState([]);
  const [redeemed, setRedeemed] = useState(null);
  const [remainingredeemed, setremainingRedeemed] = useState(null);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const res = await api.get("/rewards");
        setRewards(res.data);
      } catch (err) {
        console.error("Failed to load rewards", err);
      }
    };
    fetchRewards();
  }, []);

  const redeem = async (rewardId) => {
    try {
      const res = await api.post(`/rewards/redeem`, {
  "rewardId": rewardId
});
      
      setremainingRedeemed(res.data.remainingPoints);
       setRedeemed(res.data.message);
    } catch (err) {
      console.error("Redeem failed", err);
      alert(err?.response?.data?.error || "Redeem error");
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Rewards Store</h3>
      {redeemed && <p className="text-green-600">{redeemed}</p>}
      <p>remainingPoints {remainingredeemed||""}</p>
      <ul className="space-y-2">
        {rewards.map((reward) => (
          <li key={reward._id} className="border p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <strong>{reward.name}</strong>
                <p>{reward.description}</p>
                <p className="text-sm text-gray-600">Cost: {reward.pointsRequired} Spark Points</p>
              </div>
              <button
                onClick={() => redeem(reward._id)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Redeem
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsDashboard;
