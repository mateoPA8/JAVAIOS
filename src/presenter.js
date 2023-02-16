import sumar from "./sumador";
import multiplicar from "./multiplicador";


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const third = document.querySelector("#tercer-numero");
const fourth = document.querySelector("#cuarto-numero");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divMultiplicar = document.querySelector("#resultadoMultiplicador-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
  formMultiplicar.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const tercerNumber = Number.parseInt(third.value);
    const cuartoNumber = Number.parseInt(fourth.value);
  
    divMultiplicar.innerHTML = "<p>" + multiplicar(tercerNumber, cuartoNumber) + "</p>";
});
