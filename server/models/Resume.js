const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  filename: String,
  path: String,

  // 🔐 Link to user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Resume", resumeSchema);