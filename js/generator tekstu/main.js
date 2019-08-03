const options  =["walcz!","przemyśl to jeszcze raz"];

const text = document.querySelector('h1');

const input = document.querySelector('input');

const clean = document.querySelector('.clean');
const add = document.querySelector('.add');
const advice = document.querySelector('.showAdvice');
const option = document.querySelector('.showOptions');

// RESET BUTTON
clean.addEventListener('click', (e) => {
    e.preventDefault();
    text.textContent = '';
    options = ["walcz!","przemyśl to jeszcze raz"];
});

// SHOWING ADVICE
advice.addEventListener('click', () => {
    text.textContent = options[Math.floor(Math.random() * options.length)];
})

// SOWING OPTIONS
option.addEventListener('click', () => {
    alert(`Dostępne opcje to: ${options.join(",  ")}`);
})

// ADDING NEW OPTIONS

add.addEventListener('click', (e) => {
    const newText = input.value;
    e.preventDefault();

    if(input.value.length){
        for(inputText of options){
            if(inputText === newText){
                alert('Taka rada została już dodana!');
                return
            }
        }
    }

    options.push(newText);
    input.value = '';
})


