var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var database = require('./routes/database');
var routes = require('./routes/index');
var api = require('./routes/projects');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*passport.use(new GoogleStrategy({
    clientID: 556527221886-1gov53rrlcidvkqjiuuffe8gvet5mqvo.apps.googleusercontent.com,
    clientSecret: zTaO8qmwJuVPWw6LdnrSYITF,
    callbackURL: "someurl"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({googleId: profile.id}, function(err, user) {
            return cb(err, user);
        });
    }
));*/

app.use('/', routes);



app.get('/api', api.showAllProjects);

//Single page application **Must be below all the APIs**
app.get('/:name', function (req, res) {
    var name = req.params.name;
    console.log(name);
    res.render(name);
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
