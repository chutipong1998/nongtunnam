// const mongodb = require("../db");
const Procurement = require("../models/procurement");

const insertProcurement = async (req, res, next) => {
  try {
    const data = req.body;
    const procurement = new Procurement(data);
    await procurement.save();
    // console.log(procurement);
    res.send(procurement);
    // res.send("Record saved successfuly");
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProcurement = async (req, res, next) => {
  try {
    const procurement = await Procurement.find({}).sort('effectiveDate');
    // console.log(procurement);
    res.json(procurement);
    // console.log(res.json(procurement));
    res.status(200).end();
    // res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProcurementById = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id)
    // const procurement = await Procurement.find({ procurementId: id });
    const procurement = await Procurement.findById(id);
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    // console.log(procurement)
    res.json(procurement);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProcurementByprocurementId = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id)
    const procurement = await Procurement.find({ procurementId: id });
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    // console.log(procurement)
    res.json(procurement);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProcurementBytId = async (req, res, next) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    // console.log(id)
    await Procurement.updateOne({procurementId: id}, { $set: payload })
    .then(async () => {
      const procurement = await Procurement.find({ procurementId: id });
      // console.log(procurement)
      res.json(procurement);
    })
    .catch((err) => console.log(err));
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProcurementBytId = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Procurement.findByIdAndDelete(id)
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
  insertProcurement,
  getProcurement,
  getProcurementById,
  getProcurementByprocurementId,
  updateProcurementBytId,
  deleteProcurementBytId
};
