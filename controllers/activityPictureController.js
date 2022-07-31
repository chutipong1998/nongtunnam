// const mongodb = require("../db");
const Complaint = require("../models/complaint");

const insertComplaint = async (req, res, next) => {
  try {
    const data = req.body;
    const complaint = new Complaint(data);
    await complaint.save();
    // console.log(Complaint);
    res.send(complaint);
    // res.send("Record saved successfuly");
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getComplaint = async (req, res, next) => {
  try {
    const complaint = await Complaint.find({}).sort('createdAt');
    // console.log(Complaint);
    res.json(complaint);
    // console.log(res.json(Complaint));
    res.status(200).end();
    // res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getComplaintById = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id)
    // const Complaint = await Complaint.find({ ComplaintId: id });
    const complaint = await Complaint.findById(id);
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    // console.log(Complaint)
    res.json(complaint);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getComplaintByComplaintId = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id)
    const complaint = await Complaint.find({ ComplaintId: id });
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    // console.log(Complaint)
    res.json(complaint);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateComplaintBytId = async (req, res, next) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    // console.log(id)
    await Complaint.updateOne({ComplaintId: id}, { $set: payload })
    .then(async () => {
      const complaint = await Complaint.find({ ComplaintId: id });
      // console.log(Complaint)
      res.json(complaint);
    })
    .catch((err) => console.log(err));
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteComplaintBytId = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Complaint.findByIdAndDelete(id)
    .then(() => {
      res.send("Record deleted successfuly");
    })
    .catch((err) => console.log(err));
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  insertComplaint,
  getComplaint,
  getComplaintById,
  getComplaintByComplaintId,
  updateComplaintBytId,
  deleteComplaintBytId
};
