/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let who = [
    "Mi tia",
    "Mi vecina",
    "El portero",
    "El dueño de la tienda",
    "El jefe"
  ];
  let action = ["Corria", "Bailaba", "Patinaba", "Rompió", "Perdió", "tumbó"];
  let what = [
    "el florero",
    "Bachata",
    "en la calle",
    "la contraseña",
    "la mesa",
    "el carro",
    "el helado"
  ];
  let when = [
    "anoche",
    "ayer",
    "ahora",
    "pasado el tiempo",
    "mientras comía",
    "cuando llovia",
    "cuando dormia"
  ];

  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];

  return excuse;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // document.getElementById();
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
