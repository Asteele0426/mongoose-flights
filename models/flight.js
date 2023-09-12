const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
      type: Date,
      default: () => Date.now()+365*24*60*60000
    }
  })
//above is number 1
const flightSchema = new mongoose.Schema({
  airline: { type: String, enum: ['American', 'Southwest', 'United'] },
  flightNo: {
    type: Number,
    min: 10, 
    max: 9999
  },
  airport: {
    type: String,
    enum: ['Aus', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'
  },
  departs: {
    type: Date, 
    default: () => Date.now()+365*24*60*60000
  },
  destinations: [destinationSchema]	
  //above is number 2
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);




// const flightSchema = new mongoose.Schema({
//     airline: 
// })