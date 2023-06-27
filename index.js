const gameBoard = document.querySelector(".box");
const info = document.querySelector(".inform");

const cells = [
    "", "", "", "", "", "", "", "", ""
];
 //first text//
let go = "circle";
info.textContent = "Circle Goes First"

//creating board//
function createBoard(){
     cells.forEach((_cell,index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click' , clicked)
        gameBoard.append(cellElement);
     })
    }
 createBoard()

  //clicling event//
function clicked(e){
    const display = document.createElement('div')
    display.classList.add(go)
    e.target.append(display)
    go = go === "circle" ? "cross" : "circle"
    info.textContent = "It is now " + go + "'s go."
    e.target.removeEventListener("click" , clicked)
    checkScore();
}    

function checkScore(){
    const allSquare = document.querySelectorAll(".square")
  const winning = [ [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ]
  winning.forEach(array => { //circle winning//
    const circleWins = array.every(cell => 
        allSquare[cell].firstChild?.classList.contains('circle'))
        if(circleWins){
            info.textContent = "Circle Wins!"
            allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
        
  })
  //cross winning//
  winning.forEach(array => {
    const crossWins = array.every(cell => 
        allSquare[cell].firstChild?.classList.contains('cross'))
        if(crossWins){
            info.textContent = "Cross Wins!"
            allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
        
  })
}
   


