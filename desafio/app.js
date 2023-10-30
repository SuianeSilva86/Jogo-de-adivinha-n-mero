function exibeConsole(){
    console.log("Está mensagem e exibida apenas no console");
}
function mostraAlerta(){
    alert("Olá?");
}
function fazSoma(){
    let num1 =parseInt(prompt("digite um número"));
    let num2 = parseInt(prompt("digite outro numero"));
    alert(`A soma de ${num1} é ${num2} e:\n ${num1 + num2}`);
}