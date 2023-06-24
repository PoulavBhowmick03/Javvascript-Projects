const btnEl = document.getElementById('calculate');
const billInput= document.getElementById('bill');
const tipInput= document.getElementById('tip');
const totalSpan = document.getElementById('total');

function calculateTotal(){
    const bill = billInput.value;
    const tip = tipInput.value;
    const total = bill * (1 + tip)/100;
    totalSpan.innerText = totalvalue.toFixed(2);
    console.log(total);
}

btnEl.addEventListener('click', calculateTotal);