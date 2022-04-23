var mysql = require('mysql');

var con =mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'mydb'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    // DROP TABLE
    /*
    var sql = "DROP TABLE customers2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table deleted');
    });*/

    // DROP TABLE if the table exists
    var sql = "DROP TABLE IF EXISTS customers2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});