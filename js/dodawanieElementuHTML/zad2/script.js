const ul = document.querySelector('ul');
let number = 1;
document.querySelector('button').addEventListener('click', function () {
    const li = document.createElement('li');
    ul.appendChild(li);
    if (number % 3 == 0) {
        li.classList.add('big');
    }
    li.textContent = number;
    number += 2;
})