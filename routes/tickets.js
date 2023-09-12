var express = require('express');
var router = express.Router();
const ticketCtrl = require('../controllers/tickets')
router.get('/tickets/new/:id', ticketCtrl.new)
router.post('/tickets/:id', ticketCtrl.create)
router.post('/flights/:id/tickets', ticketCtrl.addTicket)
module.exports = router

