// const port = process.env.PORT || 8080; 
// const userName = process.env.USERNAME || 'myUserAdmin';
// const password = process.env.PASSWORD || 'myUserAdmin';
// const host = process.env.HOST || 'localhost';
// const dbPort = process.env.DBPORT || '27017';
// process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// process.env.TOKEN_CADUCITY = '24h';
// process.env.TOKEN_SEED = process.env.TOKEN_SEED || 'development-seed';
// process.env.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '1026312298849-h4gr8qt00eco43rb3oh84l0tr9qmb43r.apps.googleusercontent.com'; 

// let connection;

// if (process.env.NODE_ENV === 'dev') {
//   connection =  `mongodb://${userName}:${password}@${host}:${dbPort}`
//   console.log(connection);
// } else {
//   connection = process.env.MONGO_URI;
// }

// process.env.CONNECTION = connection;


'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    USER,
    PASSWORD,
    DBPORT,
    DBNAME
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    user: USER,
    password: PASSWORD,
    dbPort: DBPORT,
    daName: DBNAME,
    connectionUrl: `mongodb://localhost:27017/nongtunnam`
}