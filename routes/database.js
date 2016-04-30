var mysql = require('mysql');

var connection = mysql.createPool({
    host: '76.14.27.193',
    user: 'api',
    password: 'webaccess1992',
    port: '3306',
    database: 'personal_website'
});

function getProjects(tableName, callback) {

    connection.getConnection(function(err, connection) {
        if(err) {
            console.log(err);
        }
        else {
            console.log(tableName);
            var query = 'SELECT * FROM ' + tableName;
            connection.query(query, null, function(error, result) {
                if(error) {
                    console.log(error);
                }
                else {
                    callback(error, result);
                }
            });
        }
        connection.release();
    });
}

exports.getProjects = getProjects;