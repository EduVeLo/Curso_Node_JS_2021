const fs = require('fs');
const salida = 'Hola munudo';
fs.writeFile('hola.txt', salida, (error)=>{
    if(error) {
        console.log(error)
    }
    else {
        console.log('El archivo se creo!')
    }
});