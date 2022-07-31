// const mongodb = require("../db");
const PressRelease = require("../models/pressRelease");

const insertPressRelease = async (req, res, next) => {
  try {
    const data = req.body;
    const pressRelease = new PressRelease(data);
    await pressRelease.save();
    // console.log(PressRelease);
    res.send(pressRelease);
    // res.send("Record saved successfuly");
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPressRelease = async (req, res, next) => {
  try {
    const pressRelease = await PressRelease.find({}).sort('createdAt');
    // console.log(PressRelease);
    res.json(pressRelease);
    // console.log(res.json(PressRelease));
    res.status(200).end();
    // res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPressReleaseById = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id)
    // const PressRelease = await PressRelease.find({ PressReleaseId: id });
    const pressRelease = await PressRelease.findById(id);
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    // console.log(PressRelease)
    res.json(pressRelease);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPressReleaseByPressReleaseId = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id)
    const pressRelease = await PressRelease.find({ _id: id });
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    // console.log(PressRelease)
    res.json(pressRelease);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatePressReleaseBytId = async (req, res, next) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    // console.log(id)
    await PressRelease.updateOne({Id: id}, { $set: payload })
    .then(async () => {
      const pressRelease = await PressRelease.find({ _id: id });
      // console.log(PressRelease)
      res.json(pressRelease);
    })
    .catch((err) => console.log(err));
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletePressReleaseBytId = async (req, res, next) => {
  try {
    const { id } = req.params;
    await PressRelease.findByIdAndDelete(id)
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
  insertPressRelease,
  getPressRelease,
  getPressReleaseById,
  getPressReleaseByPressReleaseId,
  updatePressReleaseBytId,
  deletePressReleaseBytId
};
