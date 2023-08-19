const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeClient = new Schema({
  storeID: {
    type: mongoose.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  clientId{
   type: mongoose.Types.ObjectId,
   ref: "Client",
   required: true,
  },
  status: {
   type: String,
   required: true,
   enum: ["A", "I"],
   default: "A",
 },
  dataRegister: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("StoreClient", storeClient);
