import { log } from "handlebars/runtime";
import countries from "../db/countries.json";
import countriesTPL from "../templates/countries_tpl.hbs";
// console.log(countriesTPL);

const countriesRef = document.querySelector(".js-gallary");
console.log(countriesRef);
const markup = countriesTPL(countries);
console.log("Markup", markup);
countriesRef.insertAdjacentHTML("beforeend", markup);
