// const connectionUrl = "mongodb://myUserAdmin:myUserAdmin@localhost:27017";

// module.exports = connectionUrl;

// require("./config");

const { MongoClient, ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const config = require("./config");

// const connectionUrl = "mongodb://myUserAdmin:myUserAdmin@localhost:27017";
// const dbName = "mydb";

// mongoose.connect(process.env.CONNECTION, {
//   useNewUrlParser: true,
// });

// mongoose
//   .connect(process.env.CONNECTION, {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log("Mongodb is connected");
//   })
//   .catch((e) => {
//     console.log("Mongodb is not connected");
//   });

let db;
// let client;

const init = () =>
  // MongoClient.connect(config.connectionUrl, { useNewUrlParser: true })
  // .then(
  //   (client) => {
  //     db = client.db(config.daName);
  //   }
  // )
  // .then(() => {
  //   console.log("Mongodb is connected");
  // })
  // .catch((e) => {
  //   console.log("Mongodb is not connected");
  // });

  mongoose
  .connect(config.connectionUrl, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Mongodb is connected");
    console.log(config.connectionUrl);
  })
  .catch((e) => {
    console.log("Mongodb is not connected");
    console.log(config.connectionUrl);
  });

const insertItem = (collectName, item) => {
  return db.collection(collectName).insertOne({
    fname: item.fname,
    lname: item.lname,
    username: item.username,
    email: item.email,
    avatar: item.avatar
  });
};

const getItems = (collectName) => {
//   const collection = db.collection("items");
  return db.collection(collectName).find({}).toArray();
};

const updateQuantity = (id, quantity) => {
  const collection = db.collection("items");
  return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } });
};

module.exports = { init, insertItem, getItems, updateQuantity };
// module.exports = { init };
