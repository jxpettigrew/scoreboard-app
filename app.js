const playerOneScore = document.getElementById('player-one-score');
const playerTwoScore = document.getElementById('player-two-score');
const scoreList = document.getElementById('score-list');
const playerOneButton = document.getElementById('player-one-button');
const playerTwoButton = document.getElementById('player-two-button');
const resetButton = document.getElementById('reset-button');

function addPoint(score) {
    let newScore = parseInt(score.innerHTML) + 1;
    score.innerHTML = newScore.toString();
};

function checkWin(playerScore, opponentScore) {
    if (parseInt(playerScore.innerHTML) == parseInt(scoreList.value)) {
        playerScore.style.color = "#00D1B2";
        opponentScore.style.color = "#FF3860";
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
}

scoreList.addEventListener("change", () => {
    scoreList.disabled = true;
})

playerOneButton.addEventListener("click", () => {
    addPoint(playerOneScore);
    checkWin(playerOneScore, playerTwoScore);
})

playerTwoButton.addEventListener("click", () => {
    addPoint(playerTwoScore);
    checkWin(playerTwoScore, playerOneScore);
})

resetButton.addEventListener("click", () => {
    playerOneScore.innerHTML = "0";
    playerTwoScore.innerHTML = "0";
    playerOneScore.style.color = "#343434";
    playerTwoScore.style.color = "#343434";
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    scoreList.disabled = false;
    scoreList.value = "3";
})
