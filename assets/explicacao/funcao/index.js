let idade = 29;
const botao = window.document.querySelector("button");

function ficaMaisVelho () {
    idade = idade + 1;
    alert (idade);
}

botao.onclick = ficaMaisVelho;