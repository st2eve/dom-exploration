console.log(document.title);

/* -------------------------------------------------------------------------------*/

document.title = "Modifying the DOM";

console.log(document.title);

/* -------------------------------------------------------------------------------*/

document.body.style.backgroundColor = "#FF69B4";

/* -------------------------------------------------------------------------------*/

const bodySelect = document.body.children;

for(const child of bodySelect){
    console.log(child);
}

/* -------------------------------------------------------------------------------*/
