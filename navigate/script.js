/*
Modify the script.js, do not create any new nodes!

    - Select the last child of the <ol> tag and put it at the beginning of the list

    - Move the <h2> of the third section in the second one and vice-versa

    - Delete the last section from the DOM, we don't need it anyways
*/

const olLastChild = document.querySelector('ol');

console.log(olLastChild.lastElementChild);

/* -------------------------------------------------------------------------------*/

const selectSection = document.querySelectorAll('section');
const selectTitle = document.querySelectorAll('h2');

selectSection[1].prepend(selectTitle[2]);
selectSection[2].prepend(selectTitle[1]);

/* -------------------------------------------------------------------------------*/

selectSection[2].remove();


