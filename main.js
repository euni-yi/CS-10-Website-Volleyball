// Website quiz

// HTML Variables
let gradeEl = document.getElementById("final score")
let num=0


// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){

    let answer = document.getElementById("first").value.toLowerCase();
    

    // input
    if(answer ==="no"){
        console.log("ture")
        gradeEl.innerHTML = num+1
    }

    let answer2 = document.getElementById("second").value;

    // input
    if(answer2 ==="3"){
        console.log("ture")
        gradeEl.innerHTML = num+23
    }

    let answer3 = document.getElementById("third").value.toLowerCase();

    // input
    if(answer3==="false"){
        console.log("true")
        gradeEl.innerHTML = num++
    }

    let answer4 = document.getElementById("fourth").value.toLowerCase();

    // input
    if(answer4==="true"){
        console.log("true")
        gradeEl.innerHTML = num++
    }
}

