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

