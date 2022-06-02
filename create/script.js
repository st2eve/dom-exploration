/*
-Modify the script.js to create a new <section> with a random background-color for each 
learner in your group. This section should contain a paragraph with the name of the learner. 
Those sections should be appended in the <article>

-If the background is dark the text should be white, if the background is light the text 
should be black

-Find a way so that everytime you load the page the order of the elements changes!
*/

let articleAdd = document.querySelector("article");
let learner = ["Dylan", "Anais", "Dorian", "Henri", "Kevin", "Arthur", "Nicolas","Latifa", "Marlène", "Louis", "Duc", "Lydia", "Mariya", "Melih", "Mehdi", "Olivier", "Miguel", "Quentin", "Semih", "Tanguy", "Antoine", "Sébastien"];
let colorRgb = [];

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}

for(let i = 0; i < learner.length; i++){

let newSection = document.createElement("section");
newSection.setAttribute("style", "background-color: " + randomColor() + ";");
let newP = document.createElement("p");
let newContent = document.createTextNode(learner[i]);
newP.appendChild(newContent);
newSection.appendChild(newP);
articleAdd.appendChild(newSection);

/* -------------------------------------------------------------------------------*/

let sectionColor = window.getComputedStyle(newSection).backgroundColor;
colorRgb.push(sectionColor);
let colorNb = colorRgb[i].match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
colorNb = colorNb.join("");

console.log(sectionColor);
console.log(colorRgb);
/*console.log(colorNb);*/

let setContrast = rgb =>
    (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white'

let getCorrectColor = setContrast(sectionColor);

console.log(getCorrectColor);
}


