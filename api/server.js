// BUILD YOUR SERVER HERE

const express = require("express");
const db = require('./users/model')

const server = express();

server.use(express.json());



server.get("/api/users", (req, res) => {
    db.find(req.query)
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Could not retrieve the users"})
    });
});

server.get("/api/users/:id", (req, res) => {
    db.findById(req.params.id)
    .then(user => {
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json({message:"the user with the ID does not exist"})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"Could not retrieve the user"})
    })
})

server.post("/api/users", (req,res) => {
    db.insert(req.body)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Error adding user"})
    })
})

server.put("/api/users/:id", (req,res) => {
    db.update(req.user.id, req.body)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"error user not updated"})
    })
})

server.delete("/api/users/:id", (req,res)=> {
    db.remove(req.user.id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "user was not deleted"})
    })
})




module.exports = server; // EXPORT YOUR SERVER instead of {}
