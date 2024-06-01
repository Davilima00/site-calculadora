const resposta = document.getElementById('presposta')

const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
const numero3 = document.getElementById('num3')
const numero4 = document.getElementById('num4')
const numero5 = document.getElementById('num5')
const numero6 = document.getElementById('num6')
const numero7 = document.getElementById('num7')
const numero8 = document.getElementById('num8')
const numero9 = document.getElementById('num9')
const numero0 = document.getElementById('button0')


let primeira_vez = 0
function updateResposta(num) {

    if (primeira_vez === 0) {

        if (num != 0 ){
            resposta.textContent = num;
            primeira_vez = 1

        }

    } else if (primeira_vez === 1) {

        if (resposta.textContent.length <= 14) {
            
            resposta.textContent += num;
        }
    }
}

const botao_limpar = document.getElementById('button-limpar')
function limpar() {
    resposta.textContent = 0
    primeira_vez = 0 



}

const botao_inveter = document.getElementById("button-inveter")
function inveter() {
    let valor_atual = Number(resposta.textContent);
    resposta.textContent = valor_atual * (-1)
}

const botao_float = document.getElementById("button-float");

function float() {
    let valor_atual = parseFloat(resposta.textContent);
    resposta.textContent = valor_atual.toFixed(1);
}












numero1.addEventListener('click', () => updateResposta(1));
numero2.addEventListener('click', () => updateResposta(2));
numero3.addEventListener('click', () => updateResposta(3));
numero4.addEventListener('click', () => updateResposta(4));
numero5.addEventListener('click', () => updateResposta(5));
numero6.addEventListener('click', () => updateResposta(6));
numero7.addEventListener('click', () => updateResposta(7));
numero8.addEventListener('click', () => updateResposta(8));
numero9.addEventListener('click', () => updateResposta(9));
numero0.addEventListener('click', () => updateResposta(0));


botao_limpar.addEventListener('click', () => limpar());
botao_inveter.addEventListener('click', () => inveter());
botao_float.addEventListener('click', () => float());

