// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número de 1 a 10";

let tentativas = 0;
let numSecreto = verificarChute();
function exibeTextoTela(tag, texto) {
  let paragrafo = document.querySelector(tag);
  paragrafo.innerHTML = texto;
}

function limpaCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function mensagemInicia() {
  exibeTextoTela("h1", "Jogo do número secreto");
  exibeTextoTela("p", "Escolha um número de 1 a 10");
}
mensagemInicia();
function verificarChute() {
  let chute = document.querySelector("input").value; //o .value armazena o input digitado pelo use
  // let numAleatorio = Math.floor(Math.random() * 10);

  let numAleatorio = 9;

  if (chute == numAleatorio) {
    exibeTextoTela("h1", "Acertou!");
    let palavraTetativa = tentativas > 1 ? "tentativas" : "tentativa";
    let numTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTetativa}!`;
    exibeTextoTela("p", numTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled"); //chama um elemento pelo id
  } else {
    if (chute > numAleatorio) {
      exibeTextoTela("p", "O número secreto e menor");
    } else {
      exibeTextoTela("p", "O número e maior");
    }
    tentativas++;
    limpaCampo();
  }

  let resultado = numAleatorio == chute;
  console.log(resultado);
  return resultado;
}

function reiniciar() {
  numSecreto = verificarChute();
  limpaCampo();
  tentativas = 0;
  mensagemInicia();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
