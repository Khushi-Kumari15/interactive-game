let score = 0;
let correctAnswer;
let timeLeft = 30;
let timer;

function startTimer(){

    clearInterval(timer);

    timeLeft = 30;

    document.getElementById("timer").innerText =
    `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerText =
        `Time Left: ${timeLeft}s`;

        if(timeLeft <= 0){

            clearInterval(timer);

            document.getElementById("result").innerText =
            "⏰ Time's Up!";

            document.getElementById("submitBtn").disabled = true;
        }

    },1000);
}

function generateQuestion(){

    let level =
    document.getElementById("level").value;

    let num1, num2, operator;

    if(level === "easy"){
        num1 = Math.floor(Math.random()*10)+1;
        num2 = Math.floor(Math.random()*10)+1;
        operator = "+";
    }
    else if(level === "medium"){
        num1 = Math.floor(Math.random()*20)+1;
        num2 = Math.floor(Math.random()*20)+1;

        operator = Math.random() > 0.5 ? "+" : "-";
    }
    else{
        num1 = Math.floor(Math.random()*12)+1;
        num2 = Math.floor(Math.random()*12)+1;
        operator = "*";
    }

    if(operator === "+"){
        correctAnswer = num1 + num2;
    }
    else if(operator === "-"){
        correctAnswer = num1 - num2;
    }
    else{
        correctAnswer = num1 * num2;
    }

    document.getElementById("question").innerText =
    `${num1} ${operator} ${num2} = ?`;

    document.getElementById("answer").value = "";
}

function checkAnswer(){

    let userAnswer =
    Number(document.getElementById("answer").value);

    let result =
    document.getElementById("result");

    if(userAnswer === correctAnswer){

        score++;

        result.innerText = "✅ Correct!";
        result.style.color = "green";
    }
    else{

        result.innerText =
        `❌ Wrong! Answer: ${correctAnswer}`;

        result.style.color = "red";
    }

    document.getElementById("score").innerText =
    `Score: ${score}`;

    generateQuestion();
}

function restartGame(){

    score = 0;

    document.getElementById("score").innerText =
    "Score: 0";

    document.getElementById("result").innerText = "";

    document.getElementById("submitBtn").disabled = false;

    startTimer();
    generateQuestion();
}

document.getElementById("submitBtn")
.addEventListener("click",checkAnswer);

document.getElementById("restartBtn")
.addEventListener("click",restartGame);

document.getElementById("level")
.addEventListener("change",generateQuestion);

startTimer();
generateQuestion();