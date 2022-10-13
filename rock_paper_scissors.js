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
    let user, pc;

    user = numberToName(getMoveUser()); 
    pc = numberToName(getMovePC());
    
    if (user == pc) { 
        return "Tie";

    } else if (user == "Rock") {
        if (pc == "Scissors") {
            return "Player";
        } else if (pc == "Paper") {
            return "PC";
        }

    } else if (user == "Paper") {
        if (pc == "Rock") {
            return "Player";
        } else if (pc == "Scissors") {
            return "PC";
        }

    } else if (user == "Scissors") {
        if (pc == "Rock") {
            return "PC";
        }
        else if (pc == "Paper") {
            return "Player";
        }
    }
}

