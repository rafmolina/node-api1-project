// BUILD YOUR SERVER HERE
const express = require("express");
const server = express();
const dbFunctions = require('./users/model')
server.use(express.json());

console.log("server is working")



module.exports = server; // EXPORT YOUR SERVER instead of {}
