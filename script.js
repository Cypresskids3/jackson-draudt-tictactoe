let curtainTurn = 0;
let gameOver = false;


const button1 = document.getElementById("sq1")
const button2 = document.getElementById("sq2")
const button3 = document.getElementById("sq3")
const button4 = document.getElementById("sq4")
const button5 = document.getElementById("sq5")
const button6 = document.getElementById("sq6")
const button7 = document.getElementById("sq7")
const button8 = document.getElementById("sq8")
const button9 = document.getElementById("sq9")

const box = document.querySelector(".box"); //function call

let buttonlist = [
    button1, button2, button3, button4, button5, button6, button7, button8, button9,
];


function gameplay(){   // function defenition
buttonlist.forEach(button => {
button.onclickc = () => {
    let ptag = button.children[0]
    if(currentTurn % == 0 ){
        currentTurns++; 
     ptag.innerHTML = "X"
     button.diabled = true;
     button.classList.
     
    }
}
}); 
}

function AIturn(list){
    if(list.length > 0 ){
        let random  = math. floor
    }
}
