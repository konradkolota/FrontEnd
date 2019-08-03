const spanText = document.querySelector('.text');
const spnCursor = document.querySelector('.belka');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iusto aspernatur vitae aliquam est officiis. Esse natus nobis cumque dicta, officiis expedita voluptas iusto, tempora iure, rerum aliquid eum minus.';

//parametry
let indexText = 0;
const time = 50;

//implementacja
const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);