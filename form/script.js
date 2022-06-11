/*
As always you should NOT edit the index.html, modify the script.js file :

-(1) Add a keyup listener on the first input field, so that once you type a letter 
in this field, it goes into the <span id="display-firstname">. The content of the 
field and the span should always remain the same.

-(2) Add a keyup listener on the second input (the number input), so that if the age 
is below 18 the content of the section a-hard-truth remains hidden, otherwise show 
them this hard to swallow fact.

-(3) Well this is a common one. Add a keyup listener on both fields and show a visual 
hint (for instance turn the field red) if the password is too short (less than 6 
    characters) or if the password and its confirmation do not match.

-(4) Finally, use a change listener on the <select> field to toggle a dark mode on the 
whole page. For ease of use, we'll say that the dark mode is just turning the background 
black and the text white.
*/

/* -----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1 */
const inputFirstName = document.querySelector('#firstname')
const displayFirstName = document.querySelector('#display-firstname')

function displayText(){
    
    displayFirstName.innerHTML = '';
    let textInFirstName = inputFirstName.value
    let createText = document.createTextNode(textInFirstName)
    displayFirstName.appendChild(createText);
    
}

inputFirstName.addEventListener('keyup', displayText)
/* -----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1 */


/* -----2-----2-----2-----2-----2-----2-----2-----2-----2-----2-----2-----2 */
const inputAge = document.querySelector('#age')
const hiddenText = document.querySelector('#a-hard-truth')

function checkAge(){

    let compareAge = inputAge.value
    if(compareAge >= 18){
        hiddenText.removeAttribute('style')
    }else{
        hiddenText.setAttribute('style', 'visibility : hidden;')
    }

}

inputAge.addEventListener('keyup', checkAge)
/* -----2-----2-----2-----2-----2-----2-----2-----2-----2-----2-----2-----2 */


/* -----3-----3-----3-----3-----3-----3-----3-----3-----3-----3-----3-----3 */
let inputPwd = document.querySelector('#pwd')
let inputPwdConfirm = document.querySelector('#pwd-confirm')

inputPwd.addEventListener('keyup', event => {

    if(inputPwd.value.length < 6){
        inputPwd.setAttribute('style', 'background-color : rgb(255, 0, 0, 0.5);')
    }else{
        inputPwd.setAttribute('style', 'background-color : none;')
    }
}) 

inputPwdConfirm.addEventListener('keyup', event => {

    if(inputPwd.value != inputPwdConfirm.value){
        inputPwdConfirm.setAttribute('style', 'background-color : rgb(255, 0, 0, 0.5);')
    }else{
        inputPwdConfirm.setAttribute('style', 'background-color : none;')
    }
})
/* -----3-----3-----3-----3-----3-----3-----3-----3-----3-----3-----3-----3 */


/* -----4-----4-----4-----4-----4-----4-----4-----4-----4-----4-----4-----4 */
const selectMode = document.querySelector('#toggle-darkmode')
const selectBody = document.querySelector('body')

function choseOption(){
    if(selectMode.value == 'dark'){
        selectBody.setAttribute('style', 'background-color: black; color: white;')
    }else{
        selectBody.setAttribute('style', 'background-color: white; color: black;')
    }
}

selectMode.addEventListener('change', choseOption)
/* -----4-----4-----4-----4-----4-----4-----4-----4-----4-----4-----4-----4 */