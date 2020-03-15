const connection = require("../config/connection.js");

const orm = {
    display: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    create: function(name, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [name], function (err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    devour: function (id, cb) {
        connection.query("UPDATE burgers SET devoured = true WHERE id = (?)", [id], function (err, data) {
            if (err) throw err;
            cb(data);
        })
    }
};

module.exports = orm;