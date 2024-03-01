const express = require('express')
const path = require('path')

const port = 3030

const app = express();

const otherRoutes = require('./routers/other.routes')
const adminRoutes = require('./routers/admin.routes')


app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.static('public'));

app.use('/', otherRoutes)

app.use("/",adminRoutes)

app.use('/home/login', otherRoutes)

app.use('/detalle', otherRoutes)

app.use('/home/registro', otherRoutes)

app.get('/form-edit', adminRoutes)

app.get('/carrito', otherRoutes)

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { pageTitle: 'Dashboard' });
});

app.listen(port,() =>console.log(`http://localhost:${port}`))