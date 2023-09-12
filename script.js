let ogSize = 16;

window.onload = () => {
    createGrid(ogSize);
}

function createGrid(newSize) {

    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    for (let r = 0; r < newSize; r++) {   
        let row = document.createElement('div');
        row.classList.add('row');

        for (let c = 0; c < newSize; c++) {
            let square = document.createElement('div');
            square.addEventListener('mouseover', function () {
                square.classList.add('draw')
            })
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function getSize() {
    let newSize = prompt('Enter a number between 1-100', 16);
    if ((newSize > 100) || (newSize < 1)) {
        newSize = prompt("Number MUST be between 1-100!")
    }
    createGrid(newSize)
}



const body = document.querySelector('body');
const container = document.getElementById('container');
const sizeBtn = document.createElement('button');
sizeBtn.textContent = "New Size";
sizeBtn.addEventListener('click', function() {
    getSize();
});




body.insertBefore(sizeBtn, container);