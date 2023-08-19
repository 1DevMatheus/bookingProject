const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collaborator = new Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  photo: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: false,
  },
  cape: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  dateBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
    enum: ["A", "I"],
    default: "A",
  },
  bankAccount: {
    owner: {
      type: String,
      required: true,
    },
    cpfCnpj: {
      type: String,
      required: true,
    },
    bank: {
      type: String,
      required: true,
    },
    accounttype: {
      type: String,
      required: true,
    },
    agency: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    digit: {
      type: String,
      required: true,
    },
  },
  recipientId: {
    type: String,
    required: true,
  },
  dataRegister: {
    type: Date,
    default: Date.now,
  },
});

store.index({ geo: "2dsphere" });

module.exports = mongoose.model("Collaborator", collaborator);
