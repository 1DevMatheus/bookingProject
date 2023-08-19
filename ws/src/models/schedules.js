const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schedules = new Schema({
  storeID: {
    type: mongoose.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  specialties: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Service",
      required: true,
    },
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Collaborator",
      required: true,
    },
  ],
  days: {
    type: [Number],
    required: true,
  },
  init: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  dataRegister: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Schedules", schedules);
