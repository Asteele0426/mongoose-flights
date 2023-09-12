const Flight = require('../models/flight')
const Ticket = require('../models/ticket')
module.exports = {
index,
new: newFlight,
create,
show,
addTicket
};

async function index(req, res) {
    const flights = await Flight.find({})
res.render('flights/index', {flights})
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg:''})
}

async function create(req, res) {
   
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }

  async function show(req, res) {
    const flight = await Flight.findById(req.params.id) 
  console.log(flight)
    const tickets = await Ticket.find({ _id: { $nin: flight._id } })
    console.log(tickets)
     res.render('flights/show', { title: 'Flight Detail', flight, tickets});
  }
     async function addTicket(req, res) {
        const flight = await Flight.findById(req.params.flightId)
        flight.tickets.push(req.body.ticketId)
        try {
            await flight.save()
            res.redirect(`/flights/${flight._id}`)
        } catch(err) {
    console.log(err)
        }
      }
    
 




  







// async function show(req, res) {
// //     const flight = await Flight.findById(req.params.id, );
// //     res.render('flights/show', { title: 'Flight Details', flight });
// //   }
//this was my old show function when the app was working