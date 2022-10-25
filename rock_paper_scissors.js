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

//starts and restarts the game, calls main function
function game() {
    const roundButton = document.querySelector('#start-button');
    const notifyText = document.querySelector('#notify');
    roundButton.textContent = 'Press to begin';

    roundButton.onclick = function () {
        roundButton.textContent = 'Restart game';
        notifyText.textContent = 'Choose a card';

        moves = [];
        removeColors();
        getMoveUser(); 
    }
}

// captures user click on cards, and activates playRound function
function getMoveUser() {
    let moves = document.querySelectorAll('.card');
    moves.forEach((div) => div.addEventListener('click', playRound))
}

//gets moves, removes the colors before each round, then colors them again, calls function for checking winner
function playRound(event) {
    const userMove = this.id;
    const userCard = this;
    const pcCard = getMovePC();
    const pcMove = pcCard.id;
    
    removeColors();
    colorCards([userCard, pcCard]);
    userVsPC(userMove, pcMove); //function for checking winner
}


//gets random move with help of math object, return html element (matches element.id with random item)
function getMovePC() {
    const moves = ["Rock", "Scissors", "Paper"];
    const randomNumber = Math.floor(Math.random() * moves.length);

    const randomItem = moves[randomNumber];
    const pcMove = document.querySelector(`#${randomItem}`)

    return pcMove;
}

let moves = [];
// compares user  and pc moves... prints who won the game after the round
function userVsPC(user, pc) {
    const notifyText = document.querySelector('#notify');

    const userWin = (user, pc) => notifyText.textContent = `You win the round (Rounds ${moves.length}/5)`; //functions for printing the round winner
    const pcWin = (user, pc) => notifyText.textContent = `Opponent wins the round (Rounds ${moves.length}/5)`;
    
    if (moves.length === 5) {
        notifyWinner();
        removeColors();
        return;
    }

    if (user == pc) {
        moves.push('Tie');
        notifyText.textContent = `It's a tie (Rounds ${moves.length}/5)`;
        return "Tie";

    } else if (user == "Rock") {
        if (pc == "Scissors") {
            moves.push("Player");
            userWin(user, pc);

        } else if (pc == "Paper") {
            moves.push("PC")
            pcWin(user, pc);
        }

    } else if (user == "Paper") {
        if (pc == "Rock") {
            moves.push("Player");
            userWin(user, pc);

        } else if (pc == "Scissors") {
            moves.push("PC")
            pcWin(user, pc);
        }

    } else if (user == "Scissors") {
        if (pc == "Rock") {
            moves.push("PC");
            pcWin(user, pc);
        }
        else if (pc == "Paper") {
            moves.push("Player")
            userWin(user, pc);
        }
    }
}

//heper function - deletes all added color classes, restarts card colors 
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
            } else if (card.classList[j] === 'white') {
                card.classList.remove('white')
            }
        }
    }
}

//helper function - colors the cards 
function colorCards(cards) {
    const userCard = cards[0];
    const pcCard = cards[1];
    const card = document.querySelectorAll('.card')

    if (userCard.id === pcCard.id) {
        pcCard.classList.add('grey');
    } else {
        userCard.classList.add('green');
        pcCard.classList.add('blue')
    }

    for (let i = 0; i < card.length; i++) {
        cardToCheck = card[i];

        if (!(cardToCheck.classList.contains('blue') || cardToCheck.classList.contains('grey') 
        || cardToCheck.classList.contains('green'))) {

            cardToCheck.classList.add('white')
        }
    }
}

function notifyWinner() {
    let pc = 0, user = 0;
    const notifyText = document.querySelector('#notify')

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == "PC") {
            pc++;
        } else if (moves[i] == "Player") {
            user++;
        }
    }

    if (pc > user) {
        notifyText.textContent = `Opponent Won The Game!`;
    } else if (pc < user ) {
        notifyText.textContent = 'You Won The Game!';
    } else {
        notifyText.textContent = 'It\'s a Tie';
    } 
}


game()