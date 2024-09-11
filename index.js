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



makeInitialGrid(16)

//EXTRA CREDIT: Add a randomize RGB squares feature (toggle)

//EXTRA CREDIT: Add a darken by 10% squares (toggle)