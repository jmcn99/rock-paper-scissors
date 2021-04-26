const buttons = document.querySelectorAll('i')


let user;
let cpu;

buttons.forEach((i) => {
    i.addEventListener('click', () => {
        buttonsClear();
        user = parseInt(i.id);
        i.style.borderColor = "green";
        play();
    });
});

function buttonsClear() {
    buttons.forEach((i) => {
        i.style.borderColor="gray";
    });
}


function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cpuIn() {
    let num = getRandInt(1, 3);
    let temp = document.getElementById(num);
    if(num === user) {
        temp.setAttribute('style', 'border-top-color: red; border-right-color: red; border-left-color: green; border-bottom-color: green')

    } else {
        temp.style.borderColor = 'red';
    }
    return num;
    
}

function changeSign(num1, num2) {
    console.log(num1);
    console.log(num2);
    console.log("change");
    if(num1 === 1) {
        winner.classList.remove('fa-hand-paper', 'fa-hand-scissors');
        winner.classList.add('fa-hand-rock');
    } else if(num1 === 2) {
        winner.classList.remove('fa-hand-rock', 'fa-hand-scissors');
        winner.classList.add('fa-hand-paper');
    } else {
        winner.classList.remove('fa-hand-paper', 'fa-hand-rock');
        winner.classList.add('fa-hand-scissors');
    }
    
    if(num2 === 1) {
        loser.classList.remove('fa-hand-paper', 'fa-hand-scissors');
        loser.classList.add('fa-hand-rock');
    } else if(num2 === 2) {
        loser.classList.remove('fa-hand-rock', 'fa-hand-scissors');
        loser.classList.add('fa-hand-paper');
    } else {
        loser.classList.remove('fa-hand-paper', 'fa-hand-rock');
        loser.classList.add('fa-hand-scissors');
    }

}
 
function point(player) {
    let winner = document.getElementById("winner");
    let loser = document.getElementById("loser");
    if(player === "user") {
        document.getElementById("greaterthan").innerHTML = ">";
        document.getElementById("f1").style.borderColor = "green";
        document.getElementById("f2").style.borderColor = "red";
        console.log('user score')
        playerScore++;
        changeSign(user, cpu);
    } else if(player === "cpu") {
        document.getElementById("f2").style.borderColor = "green";
        document.getElementById("f1").style.borderColor = "red";
        document.getElementById("greaterthan").innerHTML = ">";
        console.log("cpu score");
        cpuScore++;
        changeSign(cpu, user);
    } else {
        document.getElementById("greaterthan").innerHTML = "=";
        document.getElementById("f1").setAttribute('style', 'border-top-color: red; border-right-color: red; border-left-color: green; border-bottom-color: green');
        document.getElementById("f2").setAttribute('style', 'border-top-color: red; border-right-color: red; border-left-color: green; border-bottom-color: green');
        if(cpu === 1) {
            loser.classList.remove('fa-hand-paper', 'fa-hand-scissors');
            loser.classList.add('fa-hand-rock');
            winner.classList.remove('fa-hand-paper', 'fa-hand-scissors');
            winner.classList.add('fa-hand-rock');
        } else if(cpu === 2) {
            loser.classList.remove('fa-hand-rock', 'fa-hand-scissors');
            loser.classList.add('fa-hand-paper');
            winner.classList.remove('fa-hand-rock', 'fa-hand-scissors');
            winner.classList.add('fa-hand-paper');
        } else {
            loser.classList.remove('fa-hand-paper', 'fa-hand-rock');
            loser.classList.add('fa-hand-scissors');
            winner.classList.remove('fa-hand-paper', 'fa-hand-rock');
            winner.classList.add('fa-hand-scissors');
        }
    }
}


// 1 = rock
// 2 = paper
// 3 = scissors
function play() {
    cpu = cpuIn();
    
    //tie
    if(user === cpu) {
        point("tie");
    //user win
    } else if((user === 1 && cpu === 3) || (user === 2 && cpu === 1) || (user === 3 && cpu === 2)) {
        console.log("user win");
        point("user");
    //cpu win
    } else if((cpu === 1 && user === 3) || (cpu === 2 && user === 1) || (cpu === 3 && user === 2)) {
        console.log("cpu win");
        point("cpu")
    }
    
    
}


function playGame() {

    console.log("Welcome to Rock, Paper, Scissors");
    console.log("Ready to play?"); 
    while(playerScore < 5 || cpuScore < 5) {
        
        play();
        console.log(playerScore +"ps");
        console.log(cpuScore + "cpu");
    }
    if(playerScore === 5) {
        console.log("You win!");
    } else if (cpuScore === 5) {
        console.log("You lose.");
    }
}
let playerScore = 0;
let cpuScore = 0;


