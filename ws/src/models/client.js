const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const client = new Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  telephone:{
   type: String,
   required: false
 },
  photo: {
   type: String,
   required: false
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    requiredd: [true, "password is require"],
  },
  dateBirth: {
   type String,
   required: true
  },
  gender: {
   type: String,
   required: false
  },
  status: {
   type: String,
   required: true,
   enum: ["A", "I"],
   default: "A",
 }, 
 document:{
  docType:{
   type: String,
   enum: ['individual', 'corporation'],
  require: true
  },
  docNumber:{
   type: String,
  required: true
  }
 },
 addreas:{
  city: String,
    estate: String,
    postalcode: String,
    number: String,
    contry: String,
 }
    dataRegister: {
    type: Date,
    default: Date.now,
  },
 });

store.index({ geo: "2dsphere" });

module.exports = mongoose.model("Client", clientr);
