// Website quiz

// HTML Variables
let gradeEl = document.getElementById("final score")
let num = 0


// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){

    let answer = document.getElementById("first").value.toLowerCase();
    // input
    if(answer ==="no"||answer==="incorrect"||answer==="false"){
        console.log("ture")
        num++
    }

    let answer2 = document.getElementById("second").value;
    // input
    if(answer2 ==="3"||answer2==="three"){
        console.log("ture")
    }

    let answer3 = document.getElementById("third").value.toLowerCase();
    // input
    if(answer3==="false"|| answer3==="incorrect" || answer3==="no"){
        console.log("true")

    }

    let answer4 = document.getElementById("fourth").value.toLowerCase();
    // input
    if(answer4==="true" || answer4==="yes"|| answer4==="correct"){
        console.log("true")
     
        
    }

}

    