
// creating a loop for div creation and append


/*

#1 : create grid - done
#2 : reset grid - done
#3 : Button to input size of grid - done
#4 : option to choose different colors 


*/


const btnGrid = document.querySelector('#btnGridSize')
btnGrid.addEventListener('click', ()=> {
    const sizeOfGrid= document.querySelector('#sizeOfGrid');
    let gridValue = sizeOfGrid.value;
    if(gridValue > 100){
        gridValue = 100;
    }
    console.log(gridValue);
    resetGrid();
    createGrid(gridValue);
});


function createGrid(gridValue=16){

    // let sizeOfGrid = 4;
    let sizeOfBoard = 640;
    let dimension = sizeOfBoard/gridValue;
    // console.log(dimension) -> used for debugging
    // console.log(gridValue);


    for(i = 0; i< gridValue * gridValue; i++){
        let parent = document.querySelector('.parentContainer');
        let child = document.createElement('div');
        // child.textContent = 'A'; -> used for debugging
        child.classList.add('child');
        child.style.width = `${dimension}px`;
        child.style.height = `${dimension}px`;
        child.addEventListener('mouseover', (event) => {
            randomColor = getColor();
            event.target.style.backgroundColor = randomColor;
        });
        parent.appendChild(child);
    }
}


// To reset grid to default size
function resetGrid(){
    const parentContainer = document.querySelector('.parentContainer');
    parentContainer.textContent='';
}


// To get random color for mouseover movement
function getColor(){
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);

    // console.log(redValue); -> used for debugging

    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

// To delete the current grid with colors and also create a new grid with default size
function deleteGrid(){
    resetGrid();
    const sizeOfGrid= document.querySelector('#sizeOfGrid');
    sizeOfGrid.value = 16;
    createGrid();

}
createGrid();
// getColor();




