//console.log(document.getElementById("novoItem"))

const form = document.getElementById("novoItem")
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) ||  []

itens.forEach( (elemento =>{
    criaElementos(elemento)
}))


form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemAtual = {
        "nome":nome.value,
        "quantidade":quantidade.value
    }

    criaElementos(itemAtual)
    
    nome.value = ""
    quantidade.value = ""


    itens.push(itemAtual)

    localStorage.setItem("itens",JSON.stringify(itens))
})

function criaElementos(item){
    console.log(nome)
    console.log(quantidade)

    //<li class="item"><strong>7</strong>Camisas</li>

    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem) 
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)

    console.log(novoItem)


}