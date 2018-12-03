var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'wyt',
    password: 'zjh222666',
    database: 'kspace'
});

var query = function () {
    connection.connect();

    //查询
    connection.query('SELECT * FROM FUND', function (error, results, fields) {
        if (error) {
            throw error;
        }
        for (var res in results) {
            console.log("id: " + results[res].id + " code: " + results[res].code + " name: " + results[res].name);
        }
    });
    connection.end();
}

//添加
var add = function () {
    connection.connect();
    var addSql = "INSERT INTO jcr_journal_cus (edtion_id, issn, title, jif) VALUES (?,?,?,?)";
    var addSqlParams = ['2', '1005-3028', '自定义测试2', '3'];

    //开启事务
    connection.beginTransaction(function (err) {
        if (err) {
            throw err;
        }
        connection.query(addSql, addSqlParams, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                connection.rollback(function () {
                    throw err;
                });
                return;
            }
            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);
            console.log('INSERT ID:', result);
            console.log('-----------------------------------------------------------------\n\n');
        });

        connection.commit(function (err) {
            if (err) {
                connection.rollback(function () {
                    throw err;
                });
            }
            console.log('success!');
        });
    });
    connection.end();
}

//add();
query();