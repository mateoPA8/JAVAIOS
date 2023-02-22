import verificarGenero from "./verificarGenero";
import verificarEdad from "./verificarEdad";
const nombre = document.querySelector("#Nombre");
const form = document.querySelector("#Saludador-form");
const div = document.querySelector("#Saludador-div");

const genero = document.querySelector("#genero");
const formGenero=document.querySelector("#saludadorPorGenero-form");
const divGenero=document.querySelector("#saludador-div");

const edad=document.querySelector("#edad");
const formGeneroEdad=document.querySelector("#saludadorPorGeneroEdad-form");
const divGeneroEdad=document.querySelector("#saludadorGeneroEdad-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "HOLA" + nombre.value;
});
formGenero.addEventListener("submit", (event) => {
  event.preventDefault();

  divGenero.innerHTML = "<p>" + verificarGenero(genero.value, nombre.value) + "</p>";
});

formGeneroEdad.addEventListener("submit", (event) => {
  event.preventDefault();

  divGeneroEdad.innerHTML = "<p>" + verificarEdad(genero.value, nombre.value,edad.value) + "</p>";
});

