const content = document.querySelector('#content'); 
const resetButton = document.getElementById('gridReset');

newGrid(); // Runs the function on load to populate the page.

function newGrid() {
    let gridSize = window.prompt("What size grid would you like?");
    if (gridSize < 100 && gridSize > 0) { // To prevent performance issues

        content.textContent = ""; // Resets any previous grid content

        for (let i = 0; i < (gridSize * gridSize); i++) {
            const div = document.createElement('div');
            div.classList = "box";
            div.addEventListener('mouseover', () => {div.classList = 'boxColored';});
            content.appendChild(div);
        }

        content.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`; // Generates a grid based on the user's specified grid size

    } else {
        alert("Please reset the grid and enter a number between 1 and 100"); 
    }  
}

resetButton.addEventListener("click", newGrid);

