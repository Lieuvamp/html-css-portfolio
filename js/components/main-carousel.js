// 1 Acessar a janela (browser)
// 2 Pegar o HTML todo
// 3 Pegar o botão
// 4 Saber click no botão
// 5 Pegar o elements
// 6 Mover o elements para a direita

const elements = document.querySelector('.elements');
const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
let pixels = 100;

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`
});