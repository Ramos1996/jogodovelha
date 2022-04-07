var jogador, vencedor = null;
var jogadorselecionado = document.getElementById(elementid = 'jogador-selecionado');
var vencedorSelecionado = document.getElementById(elementid = 'vencedor-selecionado');
var quadrado = document.getElementById(elementid = 'quadrado');

mudarjogador(valor = 'X');

function aperta(id) {

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== '.') {

        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';



    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarjogador(jogador);
    checaVencedor();
}


function mudarjogador(valor) {
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
}

 
function checaVencedor() {
    let quadrado1 = document.getElementById(elementid = 1);
    let quadrado2 = document.getElementById(elementid = 2);
    let quadrado3 = document.getElementById(elementid = 3);
    let quadrado4 = document.getElementById(elementid = 4);
    let quadrado5 = document.getElementById(elementid = 5);
    let quadrado6 = document.getElementById(elementid = 6);
    let quadrado7 = document.getElementById(elementid = 7);
    let quadrado8 = document.getElementById(elementid = 8);
    let quadrado9 = document.getElementById(elementid = 9);

    if (checasequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if (checasequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if (checasequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if (checasequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if (checasequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if (checasequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if (checasequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if (checasequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checasequencia(quadrado1, quadrado2, quadrado3) {
    let eigual = false;

    if (quadrado1.innerHTML != '.' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;

}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = "";

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '.';
    }

    mudarjogador(valor = 'X')

}