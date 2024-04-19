const counter = document.getElementById("counter");

let sum = 0;
const memberAll = document.querySelectorAll('.ce_rsce_my_tree');
memberAll.forEach(element => {
    let numberTree = element.dataset.number;
    const intNumber = parseInt(numberTree) || 0;
    sum += intNumber;
})

counter.innerHTML = sum;





