const express = require('express')
const path = require('path')

const port = 3030

const app = express();

const otherRoutes = require('./routers/other.routes')


app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.static('public'));

app.use('/', otherRoutes)

app.use("/crear-producto",otherRoutes)



app.use('/home/login', otherRoutes)

app.use('/detalle', otherRoutes)

app.use('/home/registro', otherRoutes)

app.get('/form-edit', otherRoutes)

app.get('/carrito', otherRoutes)



app.listen(port,() =>console.log(`http://localhost:${port}`))