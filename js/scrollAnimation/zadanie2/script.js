document.body.style.height = '10000px';
const div = document.createElement('div');
document.body.appendChild(div);

let size = 20;
let grow = true;

div.style.width = '100%';
div.style.height = size + 'px';
div.style.position = 'fixed';
div.style.left = '0';
div.style.top = '0';
div.style.backgroundColor = 'green';

const changeHeight = function () {
    if (size <= 0) {
        grow = true;
    } else if (size >= window.innerHeight / 2) grow = !grow;


    if (grow) {
        size += 5;
        div.style.height = size + 'px';
        div.style.backgroundColor = 'green';
    } else {
        size -= 5;
        div.style.height = size + 'px';
        div.style.backgroundColor = 'red';
    }
}

document.addEventListener('scroll', changeHeight);