//variables
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste')


controle.forEach( (elemento) => {
    elemento.
    elemento.addEventListener("click", (event) => {
        manipulaDados(event.target.textContent)
    })
})

function manipulaDados(operation, element) {
    if (operation === '-') {
        element.value = parseInt(braco.value) - 1;
    } else {
        element.value = parseInt(braco.value) + 1;
    }
}
