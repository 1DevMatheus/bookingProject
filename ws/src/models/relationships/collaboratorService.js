const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collaboratorService = new Schema({
 collaboratorId{
  type: mongoose.Types.ObjectId,
  ref: "Collaborator",
  required: true,
 },
 serviceID: {
   type: mongoose.Types.ObjectId,
   ref: "Service",
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

module.exports = mongoose.model("CollaboratorService", collaboratorService);
