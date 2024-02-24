let contmain = 'Original<br>Text';
let fuck = 'Zweiter<br>Text';
let fugg = 'Dritter<br>Text';
let def = 'default';

document.getElementById("story").innerHTML = contmain;

function mainStory(str){
    document.getElementById("story").innerHTML = str;
}



function buttonChangeContinue(textContinue) {
  document.getElementById("buttonContinue").textContent = textContinue;
}

function buttonChangeOne(textOne){
  document.getElementById("buttonOne").textContent = textOne;
    }


function buttonChangeTwo(textTwo){
  document.getElementById("buttonTwo").textContent = textTwo;
    }


function buttonChangeThree(textThree){
  document.getElementById("buttonThree").textContent = textThree;
    }




