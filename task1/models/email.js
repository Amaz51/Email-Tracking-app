const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  to: String,
  subject: String,
  text: String,
  status: { type: String, default: "Sent" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Email", emailSchema);
