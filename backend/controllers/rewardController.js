const Reward = require('../models/Reward');
const User = require('../models/User');

exports.getRewards = async (req, res) => {
  const rewards = await Reward.find();
  res.json(rewards);
};

// exports.redeemReward = async (req, res) => {
//   const reward = await Reward.findById(req.params.id);
//   const user = await User.findById(req.user.userId);
     
//   if (user.points < reward.cost) {
//     return res.status(400).json({ error: 'Insufficient points' });
//   }

//   user.points -= reward.cost;
//   await user.save();
//   res.json({ message: 'Reward redeemed', remainingPoints: user.points });
// };



exports.redeemReward = async (req, res) => {
    try {
         const userId = req.user._id;;
        const { rewardId } = req.body;

        console.log("rewardId:", rewardId);
        console.log("userId:", userId);

        const user = await User.findById(userId);
        const reward = await Reward.findById(rewardId);

        if (!user || !reward) {
            return res.status(404).json({ error: "User or reward not found" });
        }

        // 🛡️ Safely check both values are numbers
        if (typeof user.points !== 'number' || typeof reward.pointsRequired !== 'number') {
            return res.status(400).json({ error: "Invalid points or reward data" });
        }

        if (user.points < reward.pointsRequired) {
            return res.status(400).json({ error: "Not enough Spark Points" });
        }

        user.points -= reward.pointsRequired;
        await user.save();

        res.json({ message: "Reward redeemed!", remainingPoints: user.points });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};