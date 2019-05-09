var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log(data);
        var hbsObject = {
            burger_name: data.burger_name, devoured: data.devoured

        };
        res.render("index", {
            burgers: data
        });
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured],
        function (result) {
            res.redirect("/");
        });
});

router.put("/api/burgers", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows === 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;