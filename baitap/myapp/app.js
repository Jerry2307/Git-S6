<<<<<<< HEAD
var createError = require('http-errors1');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
=======
var createError = require('http-errors');
var express = require('express1');
var path = require('path1');
var cookieParser = require('cookie-parser1');
>>>>>>> dinhngocdo
var logger = require('morgan1');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express1();
dsađâsđá
<<<<<<< HEAD
42141414141
312312312312
hehehehedsađâsdsa132123123123
<<<<<<< HEAD
dsađâsdá
dsađâsđâsdsadsadá

=======
12313213
dsađâsđâsdsađâsdá
dsađá
>>>>>>> dinhngocdo
=======

>>>>>>> dinhngocdo
// view engine setup
app.set('views', path.join(__dirname, 'views1'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
