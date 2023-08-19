const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookings = new Schema({
 clientId:{
  type: mongoose.Types.ObjectId,
  ref: "Client",
  required: true,
 },
  storeID: {
    type: mongoose.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  serviceId:{
   type: mongoose.Types.ObjectId,
   ref: "Service",
   required: true,
  },
  collaboratorId{
   type: mongoose.Types.ObjectId,
   ref: "Collaborator",
   required: true,
  },
  markerDate:{
   type: Date,
   required: true
  },
  commission:{
   type: Number,
   required: true
  }, 
  price:{
   type: Number,
   required: true
  },
  transactionId:{
   type: String,
   required: false,
  },
  dataRegister: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bookings", bookings);
