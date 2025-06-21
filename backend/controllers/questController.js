
// backend/controllers/questController.js
const Quest = require('../models/Quest');

exports.getQuests = async (req, res) => {
  const quests = await Quest.find({ userId: req.user.userId });
  res.json(quests);
};

exports.addQuest = async (req, res) => {
  const { prompt, type } = req.body;
  const quest = new Quest({ prompt, type, userId: req.user.userId });
  await quest.save();
  res.status(201).json(quest);
};

exports.markCompleted = async (req, res) => {
  await Quest.findByIdAndUpdate(req.params.id, { completed: true });
  res.json({ message: 'Quest marked as complete' });
};