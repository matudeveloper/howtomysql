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
    var sql = "DELETE FROM customers WHERE address= 'Tartu Anne 4-3'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('1. päring')
        console.log(result.affectedRows + ' row(s) where deleted');
    });
});