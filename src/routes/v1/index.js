const express = require('express');
const { helpDetails } = require('../../controllers/helpController');
const router = express.Router();

router.get('/help', helpDetails)

module.exports = router;