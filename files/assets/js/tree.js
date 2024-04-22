const allTree = document.querySelectorAll('.tree-top');
const allTreePopups = document.querySelectorAll('.tree-bottom');
const dottedLine = document.querySelectorAll('.dotted-line');
const popUpClose = document.querySelectorAll('.popup-close');
const dots = document.querySelectorAll('.dot');
const overlay = document.querySelector('.tree-overlay');
const block = document.querySelectorAll('.ce_rsce_my_tree');
console.log(allTree);
console.log(block)

allTree.forEach(tree => {
    tree.addEventListener('click', event => {
        let treePopUp = tree.nextElementSibling;
        let treeDot = tree.firstElementChild;
        let line = tree.offsetParent.lastElementChild;
        console.log(line)
        if (treePopUp.style.display === "block") {
            treePopUp.style.display = "none";
            overlay.style.display = 'none';
            line.style.display = "none";
        } else {
            treePopUp.style.display = "block";
            overlay.style.display = 'block';
            treeDot.classList.add('active');
            line.style.display = "block";

        }
    });
});

popUpClose.forEach(close => {
    close.addEventListener('click', (event) => {
        event.preventDefault();
        allTreePopups.forEach(treePopUp => {
            treePopUp.style.display = "none";
        })
        dots.forEach(dot => {
            dot.classList.remove('active')
        })
        overlay.style.display = 'none';
        dottedLine.forEach(line => {
            line.style.display = "none";
        })

    })
})
