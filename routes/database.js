var mysql = require('mysql');

var pool = mysql.createPool({
    host: '76.14.27.193',
    user: 'api',
    password: 'webaccess1992',
    port: '3306',
    database: 'personal_website'
});

