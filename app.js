const express = require('express')
const path = require('path')

const port = 3030

const app = express();
app.set('views',path.join(__dirname,"./views/partials"))
app.set('view engine','ejs')


app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/acceso', (req, res) =>{
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

