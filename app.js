// // let titulo = document.querySelector("h1");
// // titulo.innerHTML = "Jogo do número secreto";

// // let paragrafo = document.querySelector("p");
// // paragrafo.innerHTML = "Escolha um número de 1 a 10";
// let listaSecreta = [];
// let tentativas = 0;
// let numSecreto = verificarChute();
// function exibeTextoTela(tag, texto) {
//   let paragrafo = document.querySelector(tag);
//   paragrafo.innerHTML = texto;
// }

// function limpaCampo() {
//   chute = document.querySelector("input");
//   chute.value = "";
// }
// function mensagemInicia() {
//   exibeTextoTela("h1", "Jogo do número secreto");
//   exibeTextoTela("p", "Escolha um número de 1 a 10");
// }
// mensagemInicia();
// function verificarChute() {

//   let chute = document.querySelector("input").value; //o .value armazena o input digitado pelo use
//    let numAleatorio = Math.floor(Math.random() * 10);

//   // let numAleatorio = 9;

//   if (chute == numAleatorio) {
//     exibeTextoTela("h1", "Acertou!");
//     let palavraTetativa = tentativas > 1 ? "tentativas" : "tentativa";
//     let numTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTetativa}!`;
//     exibeTextoTela("p", numTentativas);
//     document.getElementById("reiniciar").removeAttribute("disabled"); //chama um elemento pelo id
//   } else {
//     if (chute > numAleatorio) {
//       exibeTextoTela("p", "O número secreto e menor");
//       if(listaSecreta.includes(numAleatorio)){}
//     } else {
//       exibeTextoTela("p", "O número e maior");
//     }
//     tentativas++;
//     limpaCampo();
//   }

//   let resultado = numAleatorio == chute;
//   console.log(resultado);
//   return resultado;
// }

// function reiniciar() {
//   numSecreto = verificarChute();
//   limpaCampo();
//   tentativas = 0;
//   mensagemInicia();
//   document.getElementById("reiniciar").setAttribute("disabled", true);
// }
let listaNumerosSorteados = [];
let limite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female' ,{rate:1.2})
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numEscolhido = parseInt(Math.random() * limite + 1);
  let quantidadeItens = listaNumerosSorteados.length;

  if (quantidadeItens == limite) {
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(numEscolhido)) {
    return gerarNumeroAleatorio(); //pede para que se o numero gerado ja existir ele gera um numero diferente
  } else {
    listaNumerosSorteados.push; //push adiciona um item no final da lista
    console.log(listaNumerosSorteados);
    return numEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
