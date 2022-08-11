import somar from "./modules/somar.js";
import subtrair from "./modules/subtrair.js";
import multiplicar from "./modules/multiplicar.js";
import dividir from "./modules/dividir.js";


let sum = document.querySelector("#sumButton");
let sub = document.querySelector("#subButton");
let mult = document.querySelector("#multButton");
let divi = document.querySelector("#diviButton");

sum.addEventListener("click", somar);
sub.addEventListener("click", subtrair);
mult.addEventListener("click", multiplicar);
divi.addEventListener("click", dividir);