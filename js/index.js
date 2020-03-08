let score, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector(`#current-${activePlayer}`).innerText = dice;

        let diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        diceDOM.src = `dice-${dice}.png`;

        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).innerText = roundScore;

        } else {
            // next player
            nextPlayer();
        }
    }
});

document.querySelector(`.btn-hold`).addEventListener('click', function () {
    if (gamePlaying) {
        // add current score to total score
        score[activePlayer] += roundScore;
        // update the ui
        document.querySelector(`#score-${activePlayer}`).innerText = score[activePlayer];

        //check player won the game
        if (score[activePlayer] >= 10) {
            document.querySelector(`#name-${activePlayer}`).innerText = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').innerText = '0';
    document.querySelector('#score-1').innerText = '0';
    document.querySelector('#current-0').innerText = '0';
    document.querySelector('#current-1').innerText = '0';
    document.querySelector('#name-0').innerText = 'Player 1';
    document.querySelector('#name-1').innerText = 'Player 2';
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
}

function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    document.querySelector(`#current-0`).innerText = '0';
    document.querySelector(`#current-1`).innerText = '0';
    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}



