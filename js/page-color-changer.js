//declaring the inputs we will use
let changeRed = document.querySelector("#red");
let changeGreen = document.querySelector("#green")
let changeBlue = document.querySelector("#blue");


//method to send change the color of the backgroung
function changingBackgroud(){
    //saving the values in variables
    let redValue = changeRed.value;
    let greenValue = changeGreen.value;
    let blueValue = changeBlue.value;

    //saving variables and set an string to use later to update color.
    let rndCol = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
    
    // changing the color
    document.documentElement.style.backgroundColor = rndCol;
}
// this are the event listened that call the fucntion after user slide the bar.
changeRed.addEventListener('input',changingBackgroud);
changeGreen.addEventListener('input',changingBackgroud);
changeBlue.addEventListener('input',changingBackgroud);
