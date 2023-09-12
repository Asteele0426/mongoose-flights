const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    addTicket
}

async function newTicket(req, res) {
    res.render('ticket/new', {title: 'Add Ticket'})
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id
        await Ticket.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect to the movies index after we implement it
        res.redirect('/flights');  // Update this line
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
      }
}

async function addTicket(req, res) {
    const flight = await Flight.find(req.params.id)
    flight.ticket.push(req.body.ticketId)
    await flight.save()
    res.redirect(`/flights/${flight._id}`)
}