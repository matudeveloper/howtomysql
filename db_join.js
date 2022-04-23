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
    var sql="SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.lemmiktoode=products.id";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('INNER JOIN')
        console.log(result);
    });
    var sql="SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.lemmiktoode=products.id";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('LEFT JOIN')
        console.log(result);
    });
    var sql="SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.lemmiktoode=products.id";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('RIGHT JOIN')
        console.log(result);
    });
});