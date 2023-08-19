const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeCollaborator = new Schema({
  storeID: {
    type: mongoose.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  collaboratorId{
   type: mongoose.Types.ObjectId,
   ref: "Collaborator",
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

module.exports = mongoose.model("StoreCollaborator", storeCollaborator);
