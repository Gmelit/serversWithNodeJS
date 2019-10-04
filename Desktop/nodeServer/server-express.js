const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hola mundo'); 
})
app.get('/carro', function (req, res) {
    let carro ={
        placa: "ABC123",
        modelo:"2019",
        marca:"Mazda",
        puertas : 4
    }
    res.send(carro);
  })
app.listen(3000)