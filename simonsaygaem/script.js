
let gameSeq = [];
let userSeq = [];
let colors = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start game when the button is clicked
document.getElementById("startButton").addEventListener("click", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

// Function to flash a button in Simon's sequence
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

// Function to flash a button when the user clicks
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

// Function to generate the next step in the game sequence
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    let randBtn = document.getElementById(randColor);
    
    gameSeq.push(randColor);
    
    setTimeout(() => {
        gameFlash(randBtn);
    }, 500);
}

// Function to check user input
function checkAnswer(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score: <b>${level}</b> <br>Click Start to play again`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

// Function to handle user button click
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAnswer(userSeq.length - 1);
}

// Add event listeners to buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset game after losing
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
