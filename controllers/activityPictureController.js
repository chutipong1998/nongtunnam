// const mongodb = require("../db");
const ActivityPicture = require("../models/activityPicture");

const insertActivityPicture = async (req, res, next) => {
  try {
    const data = req.body;
    const activityPicture = new ActivityPicture(data);
    await activityPicture.save();
    // console.log(ActivityPicture);
    res.send(activityPicture);
    // res.send("Record saved successfuly");
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getActivityPicture = async (req, res, next) => {
  try {
    const activityPicture = await ActivityPicture.find({}).sort('createdAt');
    // console.log(ActivityPicture);
    res.json(activityPicture);
    // console.log(res.json(ActivityPicture));
    res.status(200).end();
    // res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getActivityPictureById = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id)
    // const ActivityPicture = await ActivityPicture.find({ ActivityPictureId: id });
    const activityPicture = await ActivityPicture.findById(id);
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    // console.log(ActivityPicture)
    res.json(activityPicture);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getActivityPictureByActivityPictureId = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id)
    const activityPicture = await ActivityPicture.find({ _id: id });
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    // console.log(ActivityPicture)
    res.json(activityPicture);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateActivityPictureBytId = async (req, res, next) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    // console.log(id)
    // console.log(payload)
    await ActivityPicture.findByIdAndUpdate(id, { $set: payload })
    .then(async () => {
      const activityPicture = await ActivityPicture.find({ _id: id });
      // console.log(activityPicture)
      res.json(activityPicture);
    })
    .catch((err) => console.log(err));
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteActivityPictureBytId = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ActivityPicture.findByIdAndDelete(id)
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
  insertActivityPicture,
  getActivityPicture,
  getActivityPictureById,
  getActivityPictureByActivityPictureId,
  updateActivityPictureBytId,
  deleteActivityPictureBytId
};
