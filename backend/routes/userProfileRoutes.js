const express = require("express");
const router = express.Router();
const { saveProfile, getProfile } = require("../controllers/userProfileController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, saveProfile);
router.get("/", authMiddleware, getProfile);


// router.get("/", authMiddleware, getProfile);

module.exports = router;
