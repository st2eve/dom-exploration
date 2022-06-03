const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}


const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)


/* -1---- */
let getStyle = actionSquare.getAttribute("class");

let selectSection = document.querySelectorAll("section");
function addNewDiv(){

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "displayedsquare displayedsquare-wrapper ." + getStyle + "");
    selectSection[0].appendChild(newDiv);
    
/* -2---- */
let newLi = document.createElement("li");
const putLi = document.querySelector("ul");
let newContent = document.createTextNode("Action click done !");
newLi.appendChild(newContent);
putLi.appendChild(newLi);
/* -2---- */

}
/* -1---- */



/* -1---- */
  actionSquare.addEventListener('click', addNewDiv)
/* -1---- */


}

/*
Everytime the user clicks on one of the action squares

- Create a new <div> with a class .displayedsquare and the corresponding clicked color in 
the div above (.displayedsquare-wrapper)

- Create a new <li> in the log below to state when the action was done 


Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)

  - When the spacebar is hit randomly change the background color of the whole page
  - Log when the spacebar is used the same way you used for the generated squares.
  - When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for 
  - loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
  - When the s key is pressed the squares get deleted (erases the generated squares)

Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
*/


document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
  
      function randomColor() {
      return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
    }
    
    let bodyColor = document.querySelector("body");
    
    bodyColor.setAttribute("style", "background-color: " + randomColor() + ";");
    
    newLi = document.createElement("li");
    putLi = document.querySelector("ul");
    newContent = document.createTextNode("Action space bar done !");
    newLi.appendChild(newContent);
    putLi.appendChild(newLi);

  }else if(event.which === 76){
    
      let selectLi = document.querySelector("li");
      selectLi.remove();
    }
    else if(event.which === 83){
      
      const deleteSqr = document.querySelector('.displayedsquare')
      deleteSqr.remove();
    }
    
})