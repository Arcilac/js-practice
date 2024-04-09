/*const inputFullPrice = document.querySelector('#fullPrice');
const inputDiscountRate = document.querySelector('#discountRate');
const inputResultContainer = document.querySelector('#discountResult');
const btn = document.querySelector('#sendDiscount');
btn.addEventListener('click', calculateDiscount);

function calculateDiscount() {
    const fullPrice = Number(inputFullPrice.value);
    const discountRate = Number(inputDiscountRate.value);
    let discountRate;

    if(!fullPrice || !descountRate) {
        message = 'Debes escribir el cupon a aplicar';
        return;
    }
    let discountRate;


    if (discountRate == 'JuanDC') {
        discount = 30;
    } else if (discountRate == 'Juan') {
        discount = 20;
    } else {
        inputResultContainer = 'el cupon es invalido';
    } 
        
            discount = (fullPrice * (100 - discount))/100;
            message = 'El precio aplicando el cupon es $'+ discount;
        
    
    inputResultContainer.innerText = message;
}*/
function esPar(lista) {
  
    return !(lista.length % 2);
}
function esImpar(lista) {
    return !(lista.length % 2);
}
function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }

    }

    const listaArray = Object.entries(listaCount);
   // console.log({listaCount, listaArray});

     const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
     const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
     //console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
    //console.log('la moda es: ' + listaMaxNumber[0])   
    const moda = listaMaxNumber[0];
    return moda;
}
function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
       const indexMitad1ListaPar = (lista.length / 2) - 1;
       const indexMitad2ListaPar = lista.length / 2;

        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
    }

}
function calcularPromedio(lista) {
    function sumarElementos(valorAcum, nuevoValor) {
        return valorAcum + nuevoValor;
    }
        const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}
function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcum, nuevoValor){
        /*if (valorAcum > nuevoValor){
            return 1;
        } else if (valorAcum == nuevoValor) {
            return 0;
        } else if (valorAcum < nuevoValor){
            return -1;
        }]*/
        return valorAcum - nuevoValor;
        
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    // const lista = listaDesordenada.sort((a,b) => a-b);
    return lista;
}
function ordenarListaBidimensional(listaDesordenada) {
    function ordenarListaSort(valorAcum, nuevoValor){
        return valorAcum[1] - nuevoValor[1];
        
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
