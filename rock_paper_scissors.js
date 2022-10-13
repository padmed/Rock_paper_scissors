// 1. get move from user 
// 2. get move from pc 
// 3. compare moves and return winner 
// 4. let user play a game many times

let moves = ["rock", "scissors", "paper", "1", "2", "3"];

function getMoveUser() {
    let move;

    while (true) {
        move = prompt("What's your move? (Enter number or name)\n\nRock(1) or Paper(2) or Scissor(3)\n").toLowerCase();

        if (moves.includes(move)) {
            return move;
        }
        else {
            alert("Please enter proper value!")
        }
    }
}


function getMovePC() {
    let randomNumber;
    let randomItem;

    randomNumber = Math.floor(Math.random() * moves.length);
    randomItem = moves[randomNumber];

    return randomItem;
}

//converts digits (id of items) to their names || returns string with capitalized firts character
function numberToName(move) {
    if (move == "1" || move == "rock") {
        move = "Rock";
    }
    else if (move == "2" || move == "paper") {
        move = "Paper";
    }
    else if (move == "3" || move == "scissors") {
        move = "Scissors";
    }

    return move;
}

function userVsPC() {
    let user, pc, userWin, pcWin;

    user = numberToName(getMoveUser()); 
    pc = numberToName(getMovePC());
    
    userWin = (user, pc) => console.log(`Player wins\n\nPlayer: ${user} PC: ${pc}`);
    pcWin = (user, pc) => console.log(`PC wins\n\nPlayer: ${user} PC: ${pc}`);
    
    if (user == pc) {
        console.log("It's a tie") 
        return "Tie";

    } else if (user == "Rock") {
        if (pc == "Scissors") {
            userWin(user, pc)
            return "Player";
        } else if (pc == "Paper") {
            pcWin(user, pc)
            return "PC";
        }

    } else if (user == "Paper") {
        if (pc == "Rock") {
            userWin(user, pc)
            return "Player";
        } else if (pc == "Scissors") {
            pcWin(user, pc)
            return "PC";
        }

    } else if (user == "Scissors") {
        if (pc == "Rock") {
            pcWin(user, pc)
            return "PC";
        }
        else if (pc == "Paper") {
            userWin(user, pc)
            return "Player";
        }
    }
}

function game() {
    let player = 0;
    let PC = 0;


    for (let counter = 0; counter <= 5; counter++) {
        let gameResult = userVsPC();

        if (gameResult == "Tie") {
            player++
            PC++

        } else if (gameResult == "Player") {
            player++

        } else {
            PC++
        }
    }
}


userVsPC()