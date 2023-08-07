const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collaborator = new Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  photo: String,
  cape: String,
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  dateBirth: {
   type String,
   require: true
  },
  gender: {
   type: String,
   require: false
  },
  status: {
   type: String,
   require: true,
   enum: ['A', 'I'],
   default: 'A'
  },
  bankAccount:{
   owner: {
    type: String,
    require: true,
   },
   cpfCnpj{
    type: String,
    require: true
   },
   bank:{
     type: String,
    require: true
   },
   accounttype:{
    type: String,
    require; true
   },
   agency: {
    type; String,
    require: true
   },
   accountNumber: {
    type: String,
    require: true
   },
   digit: {
    type: String,
    require; true
   },
   recipientId: {
    type: String,
    require: true
   },
    dataRegister: {
    type: Date,
    default: Date.now,
  },


  }
 });

store.index({ geo: "2dsphere" });

module.exports = mongoose.model("Collaborator", collaborator);
