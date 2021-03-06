var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");
router.get("/", function (req, res) {
    burger.all(function (data) {
        var allStuff = {
            burgers: data
        };
        res.render("index", allStuff);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create({burger_name:req.body.burger_name,devoured:req.body.devoured}  
        , function (result) {
            res.json(result);
        });
}); 
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.update(condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;