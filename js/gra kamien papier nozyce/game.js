const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

// funkcja wyboru gracza
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 0 4px cadetblue';
}

// funkcja wyboru komputera

function aiChoice() {
    return hands[Math.floor(Math.random()*3)].dataset.option; 
}

// funkcja wyboru zwycięzcy

function checkResult(player, ai) {
    if(player === ai){
        return "draw"
    } else if((player === "papier" && ai === "kamień") || (player ==="kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")){
        return "win"
    } else return "loss"
}

// funkcja publikacji wyników
    function publishResult(player, ai, result) {
        document.querySelector('[data-summary="your-choice"]').textContent = player;
        document.querySelector('[data-summary="ai-choice"]').textContent = ai;

        gameSummary.numbers+1;

        document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

        if(result === "win"){
            document.querySelector('p.wins span').textContent = ++gameSummary.wins;
            document.querySelector('[data-summary="who-win"]').textContent = "Wygrywasz!";
            document.querySelector('[data-summary="who-win"]').style.color = 'green';
        } else if (result === 'loss') {
            document.querySelector('p.losses span').textContent = ++gameSummary.losses;
            document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał!";
            document.querySelector('[data-summary="who-win"]').style.color = 'red';
        } else {
            document.querySelector('p.draws span').textContent = ++gameSummary.draws;
            document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
            document.querySelector('[data-summary="who-win"]').style.color = 'black';
        }
    }

// funkcja kończąca

    function endGame() {
        document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
        game.playerHand = '';
    }

// funkcja sterująca
function startGame() {
    if(!game.playerHand) return alert('Wybierz dłoń!');
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection));
document.querySelector('.start').addEventListener('click', startGame);