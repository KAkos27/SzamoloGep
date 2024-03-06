import gombGen from "./gombgeneralas.js";

gombGen();

const kijelzo = document.querySelector("#kijelzo");
const gombok = document.querySelectorAll(".gomb");

gombok.forEach((szam) => {
  szam.addEventListener("click", (event) => {
    kijelzo.value += event.target.innerHTML;
  });
});

const egyenlo = document.querySelector("#egyenlo");

egyenlo.addEventListener("click", () => {
  kijelzo.value = eval(kijelzo.value);
});

const torles = document.querySelector("#torles");

torles.addEventListener("click", () => {
  kijelzo.value = "";
});
