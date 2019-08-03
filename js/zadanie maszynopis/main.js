const textArray =['tekst1', 'tekst2', 'tekst3'];

const  cursor = document.querySelector('span.cursor');
const textSpan = document.querySelector('span.text');

let indexWord = 0;
let indexLetter = 0;
// animacja kursora

const cusrorAnimation = () => {
    cursor.classList.toggle('active');
}

setInterval(cusrorAnimation, 400);

//animacja tekstu

const textAnimation = () => {
    textSpan.textContent += textArray[indexWord][indexLetter];
    indexLetter++;

    if(indexLetter === textArray[indexWord].length) {
        indexWord++;
        if(indexWord === textArray.length) return;

        return setTimeout(() => {
            indexLetter = 0;
            textSpan.textContent = '';
            textAnimation();
        }, 5000)
    }


    setTimeout(textAnimation, 200);
}


textAnimation();

