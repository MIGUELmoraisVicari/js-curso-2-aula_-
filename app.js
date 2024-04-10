// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Insira um número de 1 a 10";
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Insira um número de 1 a 10');
}
exibirTextoInicial();
    

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroAleatorio)
    if (chute == numeroAleatorio){
        let palavraTentativa = tentativa >1 ? "tentativas😁" : "tentativa😮";
        let mensagem = (`Você acertou o numero secreto com ${tentativa} ${palavraTentativa}`)
        exibirTextoNaTela('h1', 'Parabéns')
        exibirTextoNaTela('p', (mensagem))
        document.getElementById('reiniciar').removeAttribute('disabled');
        alterarImagem('img', './img/RicardoPNG.png')
    }else{
        if (chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é menor');
    }
        else{
            exibirTextoNaTela('p', 'O número secreto é maior')
    }}
tentativa ++;
limparCampo();
}
function gerarNumeroAleatorio(){
    return parseInt (Math.random()*10+1);
}
function limparCampo(){
    chute= document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirTextoInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


function alterarImagem(objeto,caminhoImagem){
    document.getElementById(objeto).src = caminhoImagem;

}