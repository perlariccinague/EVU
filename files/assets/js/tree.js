const allTree = document.querySelectorAll('.tree-top');
const allTreePopups = document.querySelectorAll('.tree-bottom');
const popUpClose = document.querySelectorAll('.popup-close');
const dots = document.querySelectorAll('.dot');
const overlay = document.querySelector('.tree-overlay');

allTree.forEach(tree => {
    tree.addEventListener('click', event => {
        let treePopUp = tree.nextElementSibling;
        let treeDot = tree.firstElementChild;
        console.log(treeDot);
        if (treePopUp.style.display === "block") {
            treePopUp.style.display = "none";
            overlay.style.display = 'none';
        } else {
            treePopUp.style.display = "block";
            overlay.style.display = 'block';
            treeDot.classList.add('active')

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

    })
})
