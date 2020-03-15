const orm = require("../config/orm.js");

const burger = {
    display: function(cb) {
        orm.display(function(data) {
            cb(data);
        })
    },
    create: function(name, cb) {
        orm.create(name, function(data) {
            cb(data);
        })
    },
    devour: function(id, cb) {
        orm.devour(id, function(data) {
            cb(data);
        })
    }
}

module.exports = burger;

