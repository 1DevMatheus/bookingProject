const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const store = new Schema({
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
  phonenumber: String,
  addres: {
    city: String,
    estate: String,
    postalcode: String,
    number: String,
    contry: String,
  },
  geo: {
    type: String,
    coordinates: Array,
  },
  dataRegister: {
    type: Date,
    default: Date.now,
  },
});

store.index({ geo: "2dsphere" });

module.exports = mongoose.model("Store", store);
