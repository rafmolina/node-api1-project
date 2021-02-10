// BUILD YOUR SERVER HERE
const express = require("express");
const server = express();
const dbFunctions = require('./users/model')
server.use(express.json());

console.log("server is working")

server.get("/api/users", async (req, res) => {
    const {name , bio} = req.body
    dbFunctions.find(name, bio)
    res.status(200).json(name, bio)
})


module.exports = server; // EXPORT YOUR SERVER instead of {}
