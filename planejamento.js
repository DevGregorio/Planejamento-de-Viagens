const atividade = document.getElementById('text')
const res = document.getElementById('res')
const tvalor = document.getElementById('tnum')
const valor = tvalor.value
let array = []
let numArray = []


function adicionar() {
    const nomeAtividade = atividade.value
    const valorReal = tvalor.value
    //^^^^ ver se está vazio o campo

    if (nomeAtividade === "") {
        alert('Escreva um motivo no campo determinado!')
    } else {
        const li = document.createElement('li')
        li.innerHTML = ` ${nomeAtividade} - ${valorReal} reais <button 
        class="botaoRemover" onclick="remover()"> Remover </button>`;
        res.appendChild(li)
        array.push(tvalor.value)
    }
}

function remover() {
    const li = event.target.parentElement;
    res.removeChild(li)
    array.pop()
    numArray.pop()
}

atividade.addEventListener
    ('keypress', function (event) {

        if (event.key === 'Enter') {
            adicionar();
        }
    });

function somar() {
    const valorTotal = document.getElementById('valorTotal')
    for (let i = 0; i < array.length; i++) {
        numArray.push(Number(array[i]));
    }
    let soma = 0
    for (let i = 0; i < numArray.length; i++) {
        soma += numArray[i]
    }

    valorTotal.innerHTML = `${soma} reais`
}