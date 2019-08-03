// const arrow = document.querySelector('.arrow');
// const navOn = document.querySelector('nav');

// arrow.addEventListener('click', function () {
//     arrow.classList.toggle('on');
//     navOn.classList.toggle('on');
// })

$('.arrow').on('click', function () {
    $('.off').toggleClass('on');
})