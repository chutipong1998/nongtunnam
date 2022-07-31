const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complaintSchema = new Schema(
  {
    title: String,
    recipientId: Number,
    recipientName: String,
    sender: String,
    senderEmail: String,
    senderContactNumber: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false, // set to false then it wont create in mongodb
  }
);

// recipient: Recipient(),
// function Recipient() {
//   return {
//     type: Array,
//     nested: {
//       id: { type: Number },
//       name: { type: String },
//     },
//     default: [
//       {
//         id: 1,
//         name: "นายก อบต.",
//       },
//       {
//         id: 2,
//         name: "ปลัด",
//       },
//       {
//         id: 3,
//         name: "ผู้ดูแลเว็บไซต์",
//       },
//     ],
//   };
// }

module.exports = mongoose.model("Complaint", complaintSchema);
