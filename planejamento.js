const atividade = document.getElementById('text');
const listaItems = document.getElementById('listaItems');
const tvalor = document.getElementById('tnum');
const valor = tvalor.value;
//let array = []
let numArray = [];

function format(value) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(value);
}

function adicionar() {
    const nomeAtividade = atividade.value
    const valorReal = tvalor.value
    //^^^^ ver se está vazio o campo

    if (nomeAtividade === "") {
        alert('Escreva um motivo no campo determinado!')
    } else {
        const li = document.createElement('li')
        li.innerHTML = `<span data-value="${valorReal}">${nomeAtividade} - ${format(valorReal)} reais </span> <button 
        class="botaoRemover" onclick="remover()"> Remover </button>`
        listaItems.appendChild(li)
        somar()
        limparForm()
    }
}

function remover() {
    const li = event.target.parentElement;
    listaItems.removeChild(li)
    somar()
    limparForm()
}

atividade.addEventListener
    ('keypress', function (event) {

        if (event.key === 'Enter') {
            adicionar();
        }
    });

tvalor.addEventListener
    ('keypress', function (event) {

        if (event.key === 'Enter') {
            adicionar();
        }
    });

function somar() {
    const valorTotal = document.getElementById('valorTotal')
    const elements = document.getElementsByTagName("span")
    const arr = [].slice.call(elements)
    const arr2 = arr.map((el) => el.dataset.value);
    const soma = arr2.reduce((pv, cv) => Number(pv) + Number(cv), 0)

    valorTotal.innerHTML = `${format(soma)} reais`
}

function limparForm() {
    atividade.value = ''
    tvalor.value = ''
}