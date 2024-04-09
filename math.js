/*function calcularTriangulo(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}*/

/*console.group('circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});*/
function calcularCirculo(radio) {
    const diametro = (radio * 2);
    const radioAlCuadrado = Math.pow(radio, 2);
    return{
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,

    }
}

console.groupEnd('circle')
