const [, ,arg3='base=1'] = process.argv;
console.log(arg3);
const base = arg3.split('='); // Convierte mi texto en array
var baseNumero = 1;
if (base[0] == 'base'){
    var baseNumero = base[1];
    console.log(baseNumero)
}
else {
    console.log('Argumentos invalidos');
    return false;
}
for (let i=1; i<= 10; i++) {
    console.log(`${baseNumero}x${i} = ${parseInt(baseNumero)*i}`)
}
