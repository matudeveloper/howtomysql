var mysql = require('mysql');

var con =mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'mydb'
});

con.connect(function (err) {
    if(err) throw err;
    console.log('Connected!');
    var sql="SELECT * FROM customers";
    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
    var sql2="SELECT name, address FROM customers";
    con.query(sql2, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
        console.log(result[4].address);
        console.log(fields);
        console.log(fields[1].name)
    });
});