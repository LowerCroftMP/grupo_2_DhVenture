const express = require('express')
const path = require('path')

const port = 3030

const app = express();

const otherRoutes = require('./routers/other.routes')

app.use(express.static('public'));

app.set('view engine','ejs')

app.use('/', otherRoutes)

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/detalle', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/detail.html'))
})

app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});


app.get('/carrito',(req,res)=>{res.sendFile(path.join(__dirname,'./views/carrito.html'))})

app.listen(port,() =>console.log(`http://localhost:${port}`))

