// 1. get move from user 
// 2. get move from pc 
// 3. compare moves and return winner 
// 4. let user play a game many times

let moves = ["rock", "scissors", "paper", "1", "2", "3"];

// gets move from user, if the input is incorrect program asks user for another input
function getMoveUser() {
    let move;

    while (true) {
        move = prompt("What's your move? (Enter number or name)\n\nRock(1) or Paper(2) or Scissor(3)\n").toLowerCase();

        //check if inputed value is in aviavle moves
        if (moves.includes(move)) {
            return move;
        }
        else {
            alert("Please enter proper value!")
        }
    }
}

//gets random move by help of math object
function getMovePC() {
    let randomNumber;
    let randomItem;

    randomNumber = Math.floor(Math.random() * moves.length);
    randomItem = moves[randomNumber];

    return randomItem;
}

//converts digits (id of items) to their names || modifies string with capitalized firts character
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

// compares user  and pc moves... prints who won the game after the round
function userVsPC() {
    let user, pc, userWin, pcWin;

    user = numberToName(getMoveUser()); 
    pc = numberToName(getMovePC());
    
    userWin = (user, pc) => console.log(`Player wins\nPlayer: ${user} PC: ${pc}`); //functions for printing the round winner
    pcWin = (user, pc) => console.log(`PC wins\nPlayer: ${user} PC: ${pc}`);
    
    if (user == pc) {
        console.log(`It's a tie\nPlayer: ${user} PC: ${pc}`) 
        return "Tie";

    } else if (user == "Rock") {
        if (pc == "Scissors") {
            userWin(user, pc);
            return "Player";
        } else if (pc == "Paper") {
            pcWin(user, pc);
            return "PC";
        }

    } else if (user == "Paper") {
        if (pc == "Rock") {
            userWin(user, pc);
            return "Player";
        } else if (pc == "Scissors") {
            pcWin(user, pc);
            return "PC";
        }

    } else if (user == "Scissors") {
        if (pc == "Rock") {
            pcWin(user, pc);
            return "PC";
        }
        else if (pc == "Paper") {
            userWin(user, pc);
            return "Player";
        }
    }
}


// helper function for printing the stats when game is finished
function notifyStats(stats) {
    let player = stats[0];
    let pc = stats[1];

    console.log("End of game");

    if (player === pc) {
        console.log("It's a tie");
    } else if (player > pc) {
        console.log(`Player won the game! \nPlayer: ${player} PC: ${pc}`);
    } else {
        console.log(`PC won the game! \nPlayer: ${player} PC: ${pc}`);
    }

}

//main function 
function game() {
    let player = 0;
    let PC = 0;


    for (let counter = 0; counter < 5; counter++) {
        let gameResult = userVsPC();

        if (gameResult == "Tie") {
            continue;

        } else if (gameResult == "Player") {
            player++;

        } else {
            PC++;
        }
    }
    
    notifyStats([player, PC]);
}


game()