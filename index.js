// Create a webpage with a 16x16 grid of square divs

const container = document.querySelector("#container");
container.setAttribute("style", "display: flex; justify-content: center; align-items: center")

const cell = document.createElement("div");
cell.classList.add("gridItem");
cell.setAttribute("style", "display: flex; flex-wrap: wrap; border: solid pink; gap: 10px; height: 25%; width: 25%;")

const grid = document.querySelector(".grid");

for (let i = 0; i < 4; i++){
        grid.append(cell.cloneNode(true));
}
// Use JS to create the divs, don't create them by hand in HTML

// Put your grid squares in a container div, THIS CAN BE WRITTEN IN HTML

// Use Flexbox to make the divs appear as a grid. (Be mindful of borders and margins, they adjust the size of squares)

// Set up a "hover" effect so the grid divs change color when the mouse passes over them

        //You can change the color of divs by either adding a class to the div OR changing the div's backkground color using JS


//Add a BUTTON to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
//Once entered, the existing grid should be REMOVED, a new grid should be generated in the same TOTAL space as before. 
//** Set the limit for the user input to a maximum of 100**/
//** Research button tags in HTML and how you can make a JS function run when one is clicked **/
//** Research PROMPTS **/


//EXTRA CREDIT: Add a randomize RGB squares feature (toggle)

//EXTRA CREDIT: Add a darken by 10% squares (toggle)