const buttons = document.querySelectorAll('i');

let user;
let cpu;
let playerScore = 0;
let cpuScore = 0;

buttons.forEach((i) => {
    i.addEventListener('click', () => {
        if(cpuScore != 5 && playerScore != 5) {
            buttonsClear();
            user = parseInt(i.id);
            i.style.borderColor = "green";
            play();
        }
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
        document.getElementById("player-score-number").innerHTML = playerScore;
        changeSign(user, cpu);
    } else if(player === "cpu") {
        document.getElementById("f2").style.borderColor = "green";
        document.getElementById("f1").style.borderColor = "red";
        document.getElementById("greaterthan").innerHTML = ">";
        console.log("cpu score");
        cpuScore++;
        document.getElementById("cpu-score-number").innerHTML = cpuScore;
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

function scoreCheck() {
    if(playerScore === 5 || cpuScore === 5) {
        fadeOut();
    } else {
        
    }
}

function fadeOut() {
    let container = document.getElementById("game-container");
    let scores = document.getElementById("scoresContainer");
    let fade = setInterval(function () {
        if(!container.style.opacity || !scores.style.opacity) {
            container.style.opacity = 1;
            scores.style.opacity = 1;
        }
        if(container.style.opacity > 0 && container.style.opacity != null) {
            container.style.opacity -= 0.01;
            scores.style.opacity -= 0.01;
            console.log("fade down");
        } else {
            clearInterval(fade);
            document.getElementById("game-container").remove();
            fadeIn();
            return null;
        }
    }, 10);
}
function fadeIn() {
    let scores = document.getElementById("scoresContainer");
    let opacity = 0;
    scores.style.opacity = opacity;
    playAgain();
    let fade = setInterval(function () {
        if(opacity < 1) {
            opacity += 0.01;
            scores.style.opacity = opacity;
        } else {
            clearInterval(fade);
        }
    }, 10)
}

function playAgain() {
    const container = document.getElementById('scores');
    const playAgain = document.createElement('p');
    playAgain.innerText = "Play Again";
    playAgain.onclick = () => reset();
    playAgain.onmouseover = () => playAgain.style.cursor = 'pointer';
    playAgain.onmouseleave = () => playAgain.style.cursor = 'default';
    playAgain.setAttribute('style', 'border-radius: 25px; border-width: 1px; border-color: grey; border-style: solid; margin-top: 50px; padding: 25px;')
    container.appendChild(playAgain);
}

function reset() {
    const all = document.getElementById("main");
    let opacity = 1;
    all.style.opacity = opacity;
    let fade = setInterval(function () {
        if(opacity > 0) {
            opacity -= 0.01;
            all.style.opacity = opacity;
        } else {
            clearInterval(fade);
            window.location.reload();

        }
    }, 10)
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
        point("user");
    //cpu win
    } else if((cpu === 1 && user === 3) || (cpu === 2 && user === 1) || (cpu === 3 && user === 2)) {
        point("cpu")
    }
    
        scoreCheck();
}





