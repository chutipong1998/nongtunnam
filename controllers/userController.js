// const mongodb = require("../db");
const User = require("../models/user");

const insertUser = async (req, res, next) => {
  try {
    const data = req.body;
    const user = new User(data);
    await user.save();
    console.log(user);
    res.send(user);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.json(user);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUserById = async (req, res, next) => {
  try {
    // const { id } = req.params;
    const id = req.params.id;
    console.log(id)
    const user = await User.findById(id);
    // const user = await User.findOne({ _id: '62cef4d4f046838aca1c8580' });
    console.log(user)
    res.json(user);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  insertUser,
  getUser,
  getUserById
};
