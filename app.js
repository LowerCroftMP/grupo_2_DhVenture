const express = require('express')
const path = require('path')

const port = 3030

const app = express();

const otherRoutes = require('./routers/other.routes')

app.use(express.static('public'));
app.set('view engine','ejs')

app.use('/', otherRoutes)

app.use('/home/acceso', otherRoutes)

app.use('/detalle', otherRoutes)

app.use('/home/registro', otherRoutes)

app.get('/form-edit', otherRoutes)

app.get('/carrito', otherRoutes)



app.listen(port,() =>console.log(`http://localhost:${port}`))