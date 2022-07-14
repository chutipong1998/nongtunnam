const express = require('express')
const cors = require('cors')
const app = express()
const { init, insertItem, getItems } = require('./db')
const config = require('./config');
// const mongoose = require("mongoose");
// const port = process.env.PORT || 8080

// const { MongoClient } = require("mongodb");
// const uri = "mongodb://myUserAdmin:myUserAdmin@localhost:27017";

app.use(cors())
app.use(express.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,Accept");

  if(req.method==='OPTIONS'){
      res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE');
      return res.status(200).json({});
  }
  next();
});

// init()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// MongoClient.connect(uri, { useNewUrlParser: true })
//   .then(
//     (client) => {
//       db = client.db(config.daName);
//     }
//   )
//   .then(() => {
//     console.log("Mongodb is connected");
//     console.log(config.connectionUrl);
//   })
//   .catch((e) => {
//     console.log("Mongodb is not connected");
//     console.log(config.connectionUrl);
//   });

// init().then(() => {
//   app.listen(() => {
//     console.log(`Starting server at http://localhost:${config.port}`)
//   })
// })

app.get('/users', async(req, res) => {
  const id = parseInt(req.params.id);
  // const client = new MongoClient(uri);
  // await client.connect();
  // await insertItem().then
  // const users = await client.db('nongtunnam').collection('users').find({}).toArray();
  await getItems('users')
    .then((resp) => {
      // console.log('resp');
      // console.log(resp);
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
  // await client.close();
  // res.status(200).send(users);
})

app.post('/users/create', async(req, res) => {
  const item = req.body;
  console.log(item);
  // const client = new MongoClient(uri);
  // await client.connect();
  // await client.db('nongtunnam').collection('users').insertOne({
  //   id: parseInt(item.id),
  //   fname: item.fname,
  //   lname: item.lname,
  //   username: item.username,
  //   email: item.email,
  //   avatar: item.avatar
  // });
  await insertItem('users', item)
    .then(() => {
      // console.log('resp');
      // console.log(resp);
      res.status(200).send({
        "status": "ok",
        "message": "User with ID = "+item.id+" is created",
        "user": item
      });
      res.status(200).end()
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
  // await client.close();
  // res.status(200).send({
  //   "status": "ok",
  //   "message": "User with ID = "+item.id+" is created",
  //   "user": item
  // });
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

init().then(() => {
  app.listen(config.port, () => {
    console.log(`Starting server at http://localhost:${config.port}`)
  })
})