const grid = document.querySelector('.grid');
let gridItems = document.querySelectorAll('.grid-item');
const button = document.querySelector('button');

grid.addEventListener('mouseover', (e) => {
    console.log(e.target);
    if(e.target.className != "grid"){
        e.target.style.backgroundColor = 'black';
    }
})

grid.addEventListener('mouseout', (e) => {
    if(e.target.className != "grid"){
        e.target.style.backgroundColor = 'blue';
    }
}) 

button.addEventListener('click', () => {
    let dimension = Number(prompt('Enter dimenson of grid: '));
    if(dimension <= 100){
        removeSquares(gridItems);
        makeSquares(dimension);
        setProperties(gridItems, dimension);
    }   
})

function makeSquares (dimenson) {
    for(i = 0; i < (dimenson * dimenson); i++){
        const newItem = document.createElement('div');
        newItem.classList.add('grid-item');
        grid.appendChild(newItem);
    }
    gridItems = document.querySelectorAll('.grid-item');
    setProperties(gridItems, dimenson);
}

function removeSquares (nodeList) {
    nodeList.forEach((item) => {
        item.parentNode.removeChild(item);
    })
}

function setProperties(nodeList, dimension){
    let percentage = 100/dimension;
    nodeList.forEach((item) => {
        item.style.flexBasis = `${percentage}%`;
        item.style.height = `${percentage}%`;
    })
}