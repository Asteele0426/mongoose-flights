const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destination');

// POST /movies/:id/reviews (create review for a movie)
router.post('/flights/:id/destination', destinationsCtrl.create);

module.exports = router;