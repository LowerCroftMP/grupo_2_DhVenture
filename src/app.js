var createError = require('http-errors')

const express = require('express')
const path = require('path')

var cookieParser = require('cookie-parser')

var logger = require('morgan')


//*RUTAS
const adminRoutes = require('./routes/admin.routes');
const authRoutes = require('./routes/authentication.routes');
const cartRoutes = require('./routes/cart.routes');
const otherRoutes = require('./routes/other.routes');
const productsRoutes = require('./routes/products.routes');

const app = express();

//*CONFIGURACION
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')


//* MIDDLEWARE 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//*ENRUTADORES
app.use('/', otherRoutes)
app.use('/authentication', authRoutes)
app.use('/', cartRoutes)
app.use('/', productsRoutes)
app.use('/', adminRoutes)


//! NOT FOUND AGREGAR IMAGEN
//app.use((req,res, next) => {
//    res.status(404).render("notFound") //* poner la RUTA correcta
//  })
//


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