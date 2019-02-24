var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/bookmybus', { useNewUrlParser: true });

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var registerRouter = require('./routes/registration');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build')));

//app.use('/', indexRouter);
app.use('/login', usersRouter);
app.use('/register', registerRouter);

app.get("*", function(req, res, next){
  res.sendFile(path.join(__dirname, 'build/index.html'))  
});
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, function(){
  console.log(`Running on localhost: ${port}`);
});

module.exports = app;