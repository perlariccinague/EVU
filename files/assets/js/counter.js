const counter = document.getElementById("counter");

let sum = 0;
let sumString;
const memberAll = document.querySelectorAll('.ce_rsce_my_counter_tree');
memberAll.forEach(element => {
    let numberTree = element.dataset.number;
    const intNumber = parseInt(numberTree) || 0;
    sum += intNumber;
    sumString = sum.toString();
})

function SumString () {
    const zeroSpan = document.createElement('span');
    zeroSpan.innerHTML = '0';
    counter.appendChild(zeroSpan)
    for(let i = 0; i < sumString.length; i++) {
        console.log(sumString[i])
        const span = document.createElement('span');
        span.innerHTML = sumString[i];
        counter.appendChild(span);
    }
}

SumString();





