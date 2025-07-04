const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ambil & update profil
router.get('/', profileController.getProfile);
router.put('/', authMiddleware, profileController.updateProfile);

module.exports = router;
