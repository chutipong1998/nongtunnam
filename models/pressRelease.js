const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pressReleaseSchema = new Schema(
  {
    title: String,
    subTitle: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    image: [String]
  },
  {
    versionKey: false, // set to false then it wont create in mongodb
  }
);

module.exports = mongoose.model("PressRelease", pressReleaseSchema);
