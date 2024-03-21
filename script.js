const grid = document.querySelector('.grid');
let gridItems = document.querySelectorAll('.grid-item');
const button = document.querySelector('button');

grid.addEventListener('mouseover', (e) => {
    console.log(e.target);
    if(e.target.className != "grid" && !(e.target.classList.contains('touched'))){
        e.target.style.backgroundColor = getRandomColor();
        e.target.classList.toggle('touched');
        e.target.style.opacity = 1;
    }else {
        darkenSquare(e.target);
    }
})

// grid.addEventListener('mouseout', (e) => {
//     if(e.target.className != "grid"){
//         e.target.style.backgroundColor = '#f3f3f3';
//     }
// }) 

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
    let percentage = (100/dimension);
    nodeList.forEach((item) => {
        item.style.flexBasis = `${percentage}%`;
        item.style.height = `${percentage}%`;
    })
}


function getRandomColor() {
    let newColor = '#';
    for(i = 0; i < 6; i++) {
        newColor += getHexNumber();
    }
    console.log(newColor);
    return newColor;
}

function getHexNumber () {
    if(Math.random() <= 0.375) {
        switch (Math.floor(Math.random()*6)){
            case 0:
                return 'a';
                break;
            case 1: 
                return 'b';
                break;
            case 2: 
                return 'c';
                break;
            case 3: 
                return 'd';
                break;
            case 4: 
                return 'e';
                break;
            case 5: 
                return 'f';
                break;
            default: 
                return 'a';
        }
    } else {
        return Math.floor(Math.random()*10);
    }
}

function darkenSquare(target) {
    let currentOpacity = target.style.opacity;
    currentOpacity -= 0.1;
    target.style.opacity = currentOpacity;
}