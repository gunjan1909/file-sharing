//schema

const mongoose = require("mongoose");
const File = new mongoose.Schema({
  path: {
    type: String,
    requied: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  password: String,
  downloadCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

mongoose.model("File", File);

module.exports = mongoose.model("File", File);
