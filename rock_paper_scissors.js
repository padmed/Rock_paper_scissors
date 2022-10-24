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
// 5. listen to button

function game() {
    const roundButton = document.querySelector('#start-button');
    roundButton.textContent = 'Press to begin';
    roundButton.onclick = function () {
        roundButton.textContent = 'Restart game';
        removeColors();
        getMoveUser();
    }
}

function getMoveUser() {
    let moves = document.querySelectorAll('.card');
    moves.forEach((div) => div.addEventListener('click', playRound))
}


function playRound(event) {
    const userMove = this.id;
    const userCard = this;
    const pcCard = getMovePC();
    
    removeColors();
    colorCards([userCard, pcCard]);
    userVsPC(userMove, pcCard.id);
}


//gets random move with help of math object
function getMovePC() {
    let randomNumber;
    let randomItem;
    const moves = ["Rock", "Scissors", "Paper"];

    randomNumber = Math.floor(Math.random() * moves.length);
    randomItem = moves[randomNumber];

    const pcMove = document.querySelector(`#${randomItem}`)

    return pcMove;
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

function removeColors() {
    const cards = document.querySelectorAll('.card');
    
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        
        for (let j = 0; j < card.classList.length; j++) {
            if (card.classList[j] === 'grey') {
                card.classList.remove('grey');
            } else if (card.classList[j] === 'green') {
                card.classList.remove('green')                
            } else if (card.classList[j] === 'blue') {
                card.classList.remove('blue')
            }
        }
    }
}

function colorCards(cards) {
    const userCard = cards[0];
    const pcCard = cards[1];

    if (userCard.id === pcCard.id) {
        pcCard.classList.add('grey');
    } else {
        userCard.classList.add('green');
        pcCard.classList.add('blue')
    }
}


game()