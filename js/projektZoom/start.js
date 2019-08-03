//pobranie elementów z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

let textSize = 16;

//okreslenie akcji

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + 'px';
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + 'px';
}

//ustawienie nasłuchiwania

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);

