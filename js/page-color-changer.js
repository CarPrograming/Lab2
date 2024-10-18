//declaring the inputs we will use
let changeRed = document.querySelector("#red");
let changeGreen = document.querySelector("#green")
let changeBlue = document.querySelector("#blue");





//method to send the values to the css
function changingBackgroud(){
    //saving the values in variables
    let redValue = changeRed.value;
    let greenValue = changeGreen.value;
    let blueValue = changeBlue.value;

    let rndCol = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
    

    document.documentElement.style.backgroundColor = rndCol;
}

changeRed.addEventListener('input',changingBackgroud);
