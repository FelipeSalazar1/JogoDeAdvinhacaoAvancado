//variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let trys = 1;

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleEnterKey);

//funções
function handleTryClick(event) {
  //Padrão de um botão dentro do form é enviar e recarregar a página
  //preventDefault = não faça o padrão
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    event.Default();
    alert("Selecione um número entre 0 e 10");
  } else {
    if (Number(inputNumber.value) == randomNumber) {
      toogleScreen();
      screen2.querySelector(
        "h2"
      ).innerText = `Você acertou em ${trys} tentativas!`;
    }
    inputNumber.value = "";

    trys++;
  }
}

function handleResetClick() {
  toogleScreen();
  randomNumber = Math.round(Math.random() * 10);
  trys = 1;
}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleEnterKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
