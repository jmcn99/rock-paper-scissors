

function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cpuIn() {
    return getRandInt(1, 3);
}

function point(player) {
    if(player === "user") {
        playerScore++;
    } else {
        cpuScore++;
    }
    console.log("Score: " + playerScore + ":" + cpuScore + ".");
}

// 1 = rock
// 2 = paper
// 3 = scissors
function play() {
    let cpu = cpuIn();
    let user;
    //do {
        user = prompt("Please enter '1' for rock, '2' for paper, and '3' for scissors. Good luck!");
    //} while (user != 1 || user != 2 || user != 3) {
       // user = prompt("Input not recognized. Please enter '1' for rock, '2' for paper, and '3' for scissors.");
    //}
    console.log(user);
    console.log(cpu);
    if(user == 1) {
        if(cpu == 1) {
            console.log("It's a tie! Both players chose rock.");
            return null;
        } else if(cpu == 2) {
            console.log("CPU wins! Paper beats Rock. ");
            return point("CPU");
        } else {
            console.log("User wins! Rock beats Scissors. ");
            return point("user");
        }
    } else if(user == 2) {
        if(cpu == 1) {
            console.log("User wins! Paper beats Rock. ");
            return point("user");
        } else if(cpu == 2) {
            console.log("It's a tie! Both players chose Paper.");
            return null;
        } else {
            console.log("CPU Wins! Scissors beats Paper. ");
            return point("CPU");
        }
    } else if(user == 3) {
        if(cpu == 1) {
            console.log("CPU Wins! Rock beats Scissors. ");
            return point("CPU");
        } else if(cpu == 2) {
            console.log("User Wins! Scissors beats Paper. ");
            return point("user");
        } else {
            console.log("It's a tie! Both players chose Scissors.");
            return null;
        }
    } else {
        console.log("something went wrong...");
        return null;
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
playGame();

