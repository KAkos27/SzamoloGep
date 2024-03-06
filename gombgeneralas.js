function gombGen() {
  const tarolo = document.querySelector(".gombTarolo");

  for (let i = 0; i < 10; i++) {
    tarolo.innerHTML += `<button class="gomb">${i}</button>`;
  }

  const opTarolo = document.querySelector(".operatorTarolo");

  opTarolo.innerHTML += `<button class="gomb">${"+"}</button>`;
  opTarolo.innerHTML += `<button class="gomb">${"-"}</button>`;
  opTarolo.innerHTML += `<button class="gomb">${"*"}</button>`;
  opTarolo.innerHTML += `<button class="gomb">${"/"}</button>`;
  opTarolo.innerHTML += `<button class="gomb">${"."}</button>`;
  opTarolo.innerHTML += `<button id="egyenlo">${"="}</button>`;
  opTarolo.innerHTML += `<button id="torles">${"C"}</button>`;
}

export default gombGen;
