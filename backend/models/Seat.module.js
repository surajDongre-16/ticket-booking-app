const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  seats: [
    {
      seatNumber: { type: String, required: true },
      isBooked: { type: Boolean, required: true },
    },
  ],
});

const SeatModel = mongoose.model("seats", seatSchema);

module.exports = SeatModel;
