const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activityPictureSchema = new Schema(
  {
    projectName: String,
    img: [String],
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false, // set to false then it wont create in mongodb
  }
);

module.exports = mongoose.model("ActivityPictures", activityPictureSchema);
