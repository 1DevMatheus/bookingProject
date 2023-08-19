const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const service = new Schema({
  storeID: {
    type: mongoose.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  commission: {
    type: Number,
  },
  duration: {
    type: Number,
    required: true,
  },
  recurrence: {
    type: Number, // usado no caso de serviço que nececite de retorno do cliente para mais etapas do procedimento
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["A", "I", "E"],
    default: "A",
  },
  dataRegister: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", service);
