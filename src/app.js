var createError = require('http-errors');
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride =  require('method-override'); 
const session = require('express-session');

const checkCookie = require('./middlewares/checkCookie');
const checkSession = require('./middlewares/checkSession');

//*RUTAS
const otherRoutes = require('./routes/other.routes');
const authRoutes = require('./routes/authentication.routes');
const cartRoutes = require('./routes/cart.routes');
const productsRoutes = require('./routes/products.routes');
const adminRoutes = require('./routes/admin.routes');
const profile=require('./routes/users.routes')


const app = express();

//*CONFIGURACION
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');


//* MIDDLEWARE 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({secret:'palabra secreta'}));
app.use(checkCookie)
app.use(checkSession);

//*ENRUTADORES
app.use('/', otherRoutes);
app.use('/authentication', authRoutes);
app.use('/', cartRoutes);
app.use('/productos', productsRoutes);
app.use('/admin', adminRoutes);
app.use('/users',profile)

app.use((req,res, next) => {
    res.status(404).render("./other/notFound") 
});



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
  res.render('./error');
});

module.exports = app;