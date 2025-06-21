const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getQuests, addQuest, markCompleted } = require('../controllers/questController');

router.get('/', auth, getQuests);
router.post('/', auth, addQuest);
router.patch('/:id/complete', auth, markCompleted);

module.exports = router;
