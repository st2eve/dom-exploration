
let addTitle = document.querySelectorAll('.important');

for(let i = 0; i < addTitle.length; i++){
    addTitle[i].setAttribute("title", "This is an important item");
}

/* -------------------------------------------------------------------------------*/

let selectImg = document.querySelectorAll('img');

for(let i = 0; i < selectImg.length; i++){
    if(selectImg[i].getAttribute("class") != "important"){
        selectImg[i].setAttribute("style", "display: none;")
    }
}

/* -------------------------------------------------------------------------------*/

let selectP = document.querySelectorAll('p');

for(let i = 0; i < selectP.length; i++){

    if(selectP[i].getAttribute("class")){
        console.log(selectP[i].getAttribute("class"));
    }
console.log(selectP[i].textContent);

}

/* -------------------------------------------------------------------------------*/

selectP = document.querySelectorAll('p');

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}

for(let i = 0; i < selectP.length; i++){
    selectP[i].setAttribute("style", "color: " + randomColor() + ";")
    if(selectP[i].getAttribute("class")){
        selectP[i].setAttribute("style", "color: initial;")
    }
}