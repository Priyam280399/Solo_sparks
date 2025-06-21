import React from "react";

const QuestDisplay = ({ quests }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Your Quests</h3>
      <ul className="space-y-2">
        {quests.map((quest) => (
          <li key={quest._id} className="border p-2 rounded">
            <strong>{quest.prompt}</strong>
            <p>{quest.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestDisplay;