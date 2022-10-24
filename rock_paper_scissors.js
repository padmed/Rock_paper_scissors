// 1. get move from user
    // 1. get move elements with id
    // 2. listen on clicks
    // 3. highlight selected move
    // 4. return move
// 2. get move from pc
    // 1. highlight pc move
// 3. compare pc and user moves, return winner
// 4. print out the winner of the round
    // 1. Add html container to display results




function getMoveUser() {
    let moves = document.querySelectorAll('.button');
    moves.forEach((div) => div.addEventListener('click', game))
}

//gets random move with help of math object
function getMovePC() {
    let randomNumber;
    let randomItem;
    const moves = ["Rock", "Scissors", "Paper"];

    randomNumber = Math.floor(Math.random() * moves.length);
    randomItem = moves[randomNumber];

    return randomItem;
}


// compares user  and pc moves... prints who won the game after the round
function userVsPC(user, pc) {
    let  userWin, pcWin;
    
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

function game(event) {
    const userMove = this.id;
    const pcMove = getMovePC();
    
    this.style.backgroundColor ='green';


    userVsPC(userMove, pcMove);
}

// helper function for printing the stats when game is finished
// function notifyStats(stats) {
//     let player = stats[0];
//     let pc = stats[1];

//     console.log("End of game");

//     if (player === pc) {
//         console.log("It's a tie");
//     } else if (player > pc) {
//         console.log(`Player won the game! \nPlayer: ${player} PC: ${pc}`);
//     } else {
//         console.log(`PC won the game! \nPlayer: ${player} PC: ${pc}`);
//     }

// }

// //main function 
// function game() {
//     let player = 0;
//     let PC = 0;


//     for (let counter = 0; counter < 5; counter++) {
//         let gameResult = userVsPC();

//         if (gameResult == "Tie") {
//             continue;

//         } else if (gameResult == "Player") {
//             player++;

//         } else {
//             PC++;
//         }
//     }
    
//     notifyStats([player, PC]);
// }


getMoveUser()