let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)
let tentativas = 1;

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}
function exibirMensagemInicial () {
    exibirNaTela('h1','Jogo do Numero Secreto');
    exibirNaTela('p', 'Escolha um numero de 1 a 10.');    
}   
exibirMensagemInicial();

function verificarChute(){
    
    let chute = document.querySelector('input').value;
    if( chute == numeroSecreto){
        exibirNaTela("h1",'acertou');
        let palavraTentativa = tentativas == 1 ? 'tentativa.' : 'tentativas';
        let mensagemTentativas = `você descobriu o numero secreto em ${tentativas} ${palavraTentativa}`;
        exibirNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto){
        exibirNaTela('p','O Numero Secreto é Menor.');
    }else{
        exibirNaTela('p','O Numero Secreto é maior.');
    }
    tentativas++;
    limparCampo()
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * 10 +1);
    let numerosNaLista = listaDeNumerosSorteados.length;

    if(numerosNaLista == 10){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    }else{
        console.log(listaDeNumerosSorteados)
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}


function limparCampo() {
   chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
console.log(numeroSecreto)