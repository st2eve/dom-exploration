/*
-Modify the script.js to create a new <section> with a random background-color for each 
learner in your group. This section should contain a paragraph with the name of the learner. 
Those sections should be appended in the <article>

-If the background is dark the text should be white, if the background is light the text 
should be black

-Find a way so that everytime you load the page the order of the elements changes!
*/

let articleAdd = document.querySelector("article");
const learner = ["Dylan", "Anais", "Dorian", "Henri", "Kevin", "Arthur", "Nicolas","Latifa", "Marlène", "Louis", "Duc", "Lydia", "Mariya", "Melih", "Mehdi", "Olivier", "Miguel", "Quentin", "Semih", "Tanguy", "Antoine", "Sébastien"];
let colorRgb = [];

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}

/* ------point 3------------------------------------------------------------------*/

let l = learner.length, k , temp;
   while(--l > 0){
      k = Math.floor(Math.random() * (l+1));
      temp = learner[k];
      learner[k] = learner[l];
      learner[l] = temp;
   }

/* -------------------------------------------------------------------------------*/

for(let i = 0; i < learner.length; i++){

   
    
    colorRgb = [];

    let newSection = document.createElement("section");
    newSection.setAttribute("style", "background-color: " + randomColor() + ";");
    let newP = document.createElement("p");
    let newContent = document.createTextNode(learner[i]);
    newP.appendChild(newContent);
    newSection.appendChild(newP);
    articleAdd.appendChild(newSection);

/* -------------------------------------------------------------------------------*/

    let sectionColor = window.getComputedStyle(newSection).backgroundColor;
    colorRgb.push(...sectionColor.match(/\d+/g));
    let r = parseInt(colorRgb[0]);
    let g = parseInt(colorRgb[1]);
    let b = parseInt(colorRgb[2]);

    if (((r * 299) / 1000) + ((g * 587) / 1000) + ((b * 114) / 1000) > 186) {
        newP.setAttribute("style", "color: black;");
    } else {
        newP.setAttribute("style", "color: white;");
    }

}
