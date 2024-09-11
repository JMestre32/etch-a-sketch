// Create a webpage with a 16x16 grid of square divs

const container = document.querySelector("#container");
container.setAttribute("style", "display: flex; justify-content: center;")


const grid = document.querySelector(".grid");

function makeInitialGrid (size){
        for (let i = 0; i < size*size; i++){
                let gridSize = 960/size
                const cell = document.createElement("div");
                cell.classList.add("gridItem");
                cell.setAttribute("style", "display: flex; flex-wrap: wrap; margin: 0; padding: 0;")
                cell.style.width = `${gridSize}px`
                cell.style.height = `${gridSize}px`
                grid.append(cell);
                cell.addEventListener("mouseenter", () => {
                        cell.style.backgroundColor = "black";
                })
        }
        
}

function makeGrid(size){
        const deleteItems = document.getElementsByClassName("gridItem");
        for(let i = deleteItems.length - 1; i >= 0; --i){
                deleteItems[i].remove();
        }

        for (let j = 0; j < size*size; j++){
                let gridSize = 960/size
                const cell = document.createElement("div");
                cell.classList.add("gridItem");
                cell.setAttribute("style", "display: flex; flex-wrap: wrap; margin: 0; padding: 0;")
                cell.style.width = `${gridSize}px`
                cell.style.height = `${gridSize}px`
                grid.append(cell);
                cell.addEventListener("mouseenter", () => {
                        cell.style.backgroundColor = "black";
                })
        }

}

const resize = document.querySelector(".resize")

resize.addEventListener("click", () => {
        let newSize = 0
        newSize = prompt("Enter a number (1-100) to resize the canvas: ")
        while(newSize < 1 || newSize > 100 || isNaN(newSize)){
                newSize = prompt("Invalid input select a number 1-100: ")
        }
        makeGrid(newSize);
})


makeInitialGrid(16)

//EXTRA CREDIT: Add a randomize RGB squares feature (toggle)

//EXTRA CREDIT: Add a darken by 10% squares (toggle)