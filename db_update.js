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
    var sql="UPDATE customers SET address='Elva Ploomi 9' WHERE address='Tartu Pirni 7'";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('1. päring')
        console.log(result.affectedRows + ' row(s) updated');

    });
});