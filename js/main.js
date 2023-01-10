//variables
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');


somar.addEventListener("click", (event) => {
    braco.value = parseInt(braco.value) + 1;
    console.log(braco.value)

})

subtrair.addEventListener('click', (event) => {
    braco.value = parseInt(braco.value) - 1

})
