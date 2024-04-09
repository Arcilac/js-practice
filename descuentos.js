
const inputFullPrice = document.querySelector('#fullPrice');
const inputDiscountRate = document.querySelector('#discountRate');
const inputResultContainer = document.querySelector('#discountResult');
    
const btn = document.querySelector('#sendDiscount');
btn.addEventListener('click', calculateDiscount);

function calculateDiscount() {
    const fullPrice = Number(inputFullPrice.value);
    const discountRate = Number(inputDiscountRate.value);
    let message = '';

    if(!fullPrice || !discountRate) {
        message = 'Debes escribir el precio del producto y el porcentaje de descuento a aplicar';
    } else {
        if(discountRate > 100) {
            message = 'El porcentaje de descuento debe ser menor al 100%';
        } else {
            discount = (fullPrice * (100 - discountRate))/100;
            message = 'El precio aplicando el descuento es $'+ discount;
        }
    }
    inputResultContainer.innerText = message;
}
