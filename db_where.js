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
    var sql = "SELECT * FROM customers WHERE address='Tartu Kopli 2'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('1. päring')
        console.log(result);
    });
    // Select all addresses which end with number 4
    var sql2 = "SELECT * FROM customers WHERE address LIKE '%4'";
    con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log('2. päring')
        console.log(result);
    });
    // Escaping query values with new variable
    var addr = 'Tartu Pirni 7'
    var sql3 = "SELECT * FROM customers WHERE address= " + mysql.escape(addr);
    con.query(sql3, function (err, result) {
        if (err) throw err;
        console.log('3. päring')
        console.log(result);
    });
    // Escaping query values with ?
    var addr = 'Tartu Riia 1'
    var sql4 = "SELECT * FROM customers WHERE address= ?";
    con.query(sql4, [addr], function (err, result) {
        if (err) throw err;
        console.log('4. päring');
        console.log(result);
    });
    // Escaping query multiple values
    var name = 'Mare Mahlane'
    var addr = 'Tartu Turu 3-2'
    var sql4 = "SELECT * FROM customers WHERE name=? OR address= ?";
    con.query(sql4, [name, addr], function (err, result) {
        if (err) throw err;
        console.log('5. päring')
        console.log(result);
    });
});