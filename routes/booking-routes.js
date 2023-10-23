const express = require('express');
const bookingRouter = express.Router();

const { newBooking, deleteBooking } = require('../controllers/booking-controller');

bookingRouter.post("/", newBooking);
bookingRouter.delete('/:id', deleteBooking);
 
module.exports = bookingRouter; 