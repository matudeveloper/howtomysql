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
    var sql="SELECT * FROM customers LIMIT 5";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('1. päring - võta esimesed 5 rida')
        console.log(result);
    });
    var sql="SELECT * FROM customers LIMIT 5 OFFSET 2"; // sama päring lühemalt: LIMIT 2,5
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log('2. päring - võta alates 3. reast 5 rida')
        console.log(result);
    });
});