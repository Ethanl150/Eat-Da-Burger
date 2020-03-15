const burger = require("../models/burgerModel.js");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    burger.display(function (data) {

        res.render("index", {
            burger: data
        })
    })
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.name, function (data) {
        res.json(data);
    })
});

router.put("/api/burgers/:id", function (req, res) {
    burger.devour(req.params.id, function (data) {
        res.json(data);
    })
});

router.get("*", function (req, res) {
    burger.display(function (data) {

        res.render("index", {
            burger: data
        })
    })
});

module.exports = router;