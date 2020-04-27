const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.User
            .find({})
            .then(dbModel => {
                res.json(dbModel);

            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    findUser: function(req, res) {
        db.User
            .findOne({email: req.body.email})
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },
    createUser: function(req, res) {
        console.log(req);
        db.User
            .create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    userName: req.body.userName,
                    email: req.body.email,
                    password: req.body.password
            })
            .then(dbModel => {
                res.json(dbModel);
                console.log(dbModel);
            })
            .catch(err => {
                res.status(400).json(err);
            })

    }
}

