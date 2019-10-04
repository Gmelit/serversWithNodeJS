const http = require('http');
let date = new Date().getDate();
let fecha= date.toString();
http.createServer((req,res)=>{

    res.writeHead(200{"Content-Type": "application/json"});

    let carro ={
        placa: "ABC123",
        modelo:"2019",
        marca:"Mazda",
        puertas : 4
    }
    //Obtenemos la url del servidor y la mostramos
    //res.write(`Soy un server ${req.url}\n`);
    //
    //res.write(`Carro : ${carro.placa}`)
    //Convertir un objeto a formato JSON
    res.write(JSON.stringify(carro));

    000000

    //Convertir un objeto en formato JSON a text
    res.end();
}).listen(8080);

console.log(`Server running ${fecha}`);
