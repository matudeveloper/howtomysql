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
    var sql="INSERT INTO customers (name, address) VALUES ('Teet Ploom', 'Tartu Pirni 7')";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result.affectedRows + ' rows inserted');
        console.log(result);
        console.log('customer with id ' + result.insertId + ' has inserted');
    });
});