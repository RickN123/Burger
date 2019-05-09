var orm = require("../config/orm.js");

// $(function () {
//     $(".devoured").on("click", function (event) {
//         var id = $(this).data("id");
//         var newSleep = $(this).data("newdevoured");

//         var newSleepState = {
//             sleepy: newSleep
//         };

//         // Send the PUT request.
//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: newdevoured
//         }).then(
//             function () {
//                 console.log("changed devoured to", newdevoured);
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {

        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;