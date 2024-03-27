const container = document.querySelector("#container");
const askUser = document.querySelector(".resolution");
let click = false;
let color = "black";

askUser.addEventListener("click", promptUser = () =>{
  promptUserInput = prompt("Enter number of Divs");
  makeRows(promptUserInput,promptUserInput);
});

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName = "button"){
  click =! click;
  }
});

let makeRows = (rows, cols) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.addEventListener("mouseover", colorBlackDiv)
      cell.innerText = ""
      container.appendChild(cell).className = "grid-item";
    };
  
  const resetBtn = document.querySelector(".reset");
  const divs = document.querySelectorAll(".grid-item");
  
  let reset = () => {
  divs.forEach(resetAllDiv => {
      resetAllDiv.style.backgroundColor = "white";
    });
  }

  resetBtn.addEventListener("click", reset)

}

let colorBlackDiv = (e) => {
  if (click){
    if (color == "random"){
    e.target.style.backgroundColor = get_random_color();
    }else{
    e.target.style.backgroundColor = "black";
  }
}
} 

function setColor (colorChoice){
  color = colorChoice
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color() {
    var h = rand(1, 360);
    var s = rand(0, 100);
    var l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}


