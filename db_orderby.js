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
    var sql = "SELECT * FROM customers ORDER BY name";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('1. päring')
        console.log(result);
    });
    var sql = "SELECT * FROM customers ORDER BY address DESC";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('2. päring')
        console.log(result);
    });
});