const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", 'user1', '1234'];
const messages = ["wiadomość", 'wiadomość 1', 'wiadomość 2']

input.addEventListener('input', (e) => {
    const text = e.target.value;
    div.textContent = '';
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.add('active');
})

// input.addEventListener('keyup', (e) => {
// console.log(e.target.value);
//     if(password === e.target.value) {
//         div.textContent = message;
//         e.target.value = '';
//     } else div.textContent = '';
// })