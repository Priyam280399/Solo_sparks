// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const questRoutes = require('./routes/questRoutes');
const reflectionRoutes = require('./routes/reflectionRoutes');
const rewardRoutes = require('./routes/rewardRoutes');
const userProfileRoutes = require("./routes/userProfileRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/reflections', reflectionRoutes);
app.use('/api/rewards', rewardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", userProfileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
