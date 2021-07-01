var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productos = require('./routes/productos');
const registro = require('./routes/registro');
const login = require('./routes/login');
const adminIndex = require('./routes/admin/index');
const adminProductos = require('./routes/admin/productos');
const adminCategorias = require('./routes/admin/categorias');
const adminUsuarios = require('./routes/admin/usuarios');
const adminEmpleados = require('./routes/admin/empleados');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos',productos);
app.use('/registro',registro);
app.use('/login', login);
app.use('/admin',adminIndex);
app.use('/admin/productos',adminProductos);
app.use('/admin/categoryos',adminCategorias);
app.use('/admin/usuarios',adminUsuarios);
app.use('/admin/empleados',adminEmpleados);

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
