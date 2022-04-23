var mysql = require('mysql');

var con =mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'mydb'
});

/* DATABASE LOOMISEKS!
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    con.query('CREATE DATABASE mydb', function(err, result) {
        if(err) throw err;
        console.log("Database created");
    });
});
*/

// TABELI LOOMISEKS!
con.connect(function (err) {
    if(err) throw err;
    console.log('Connected!');
    var sql="CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Table created");
    });
});