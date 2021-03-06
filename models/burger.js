
// Variable - Dependencies
let orm = require('../config/orm.js');

// Variable - burger object
let burger = {

    // queryString - call either burgers or ingredients table
    selectAll: function (callback) {
        orm.selectAll(burgers, function (result) {
            callback(result);
        });
    },

    // queryString - insert burger
    insertBurger: function (burger_name, desc, cost, callback) {
        orm.insertOne(burger_name, desc, cost, function (result) {
            callback(result);
        });
    },

    // queryString - insert ingredient
    insertIng: function (ing_name, callback) {
        orm.insertIng(ing_name, function (result) {
            callback(result);
        });
    },

    // queryString - Update burger
    updateOne: function (colName, cellName, colVal, cellVal, callback) {
        orm.updateOne(colName, cellName, colVal, cellVal, function (result) {
            callback(result);
        });
    }
};

// Export - burger
module.exports = burger;