const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const { addReflection } = require('../controllers/reflectionController');

router.post('/', auth, upload.single('file'), addReflection);

module.exports = router;