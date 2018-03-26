var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    create: function (burg, cb) {
        orm.insertOne(burg, function (res) {
            cb(res);
        });
    },
    update: function (name,condition,cb) {
        orm.updateOne(name, condition, function (res) {
            cb(res);
        });
    }
};
module.exports=burger;