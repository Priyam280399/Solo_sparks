// const UserProfile = require("../models/UserProfile");

exports.saveProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { mood, traits, emotionalNeeds, preferences } = req.body;

    const profile = await UserProfile.findOneAndUpdate(
      { userId },
      { mood, traits, emotionalNeeds, preferences },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: "Profile saved", profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.user._id });
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};