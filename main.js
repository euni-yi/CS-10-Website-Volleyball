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
        document.getElementById("q1").innerHTML = "Correct";
        num++
    }else{
        document.getElementById("q1").innerHTML = "incorrect";
    }

    let answer2 = document.getElementById("second").value;
    // input
    if(answer2 ==="3"||answer2==="three"){
        document.getElementById("q2").innerHTML = "Correct";
        num++
    }else{
        document.getElementById("q2").value.innerHTML = "incorrect"
    }

    let answer3 = document.getElementById("third").value.toLowerCase();
    // input
    if(answer3==="false"|| answer3==="incorrect" || answer3==="no"){
        document.getElementById("q3").innerHTML = "Correct";
        num++
    }else{
        document.getElementById("q3").innerHTML = "incorrect";
    }

    let answer4 = document.getElementById("fourth").value.toLowerCase();
     // input
    if(answer4==="true" || answer4==="yes"|| answer4==="correct"){
        document.getElementById("q4").innerHTML = "Correct";
        num++
    }else{
        document.getElementById("q4").innerHTML = "incorrect";
    }
document.getElementById("num").value.innerHTML = ("final score")
}

    