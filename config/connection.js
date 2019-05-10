var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "e7v1fy119a5ci8ue",
        password: "uekieji73y8zz7oi",
        database: "a1h5w64r5selidop"
    })
};



// var connection = mysql.createConnection({
//     host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     port: 3306,
//     user: "e7v1fy119a5ci8ue",
//     password: "uekieji73y8zz7oi",
//     database: "a1h5w64r5selidop"
// });

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
