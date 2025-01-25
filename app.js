//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let campoEntrada = document.getElementById('amigo');
    let nomeAmigo = campoEntrada.value;
    if (nomeAmigo === '') {
        alert("Por Favor insira um Nome Válido!");
        return;
    } 
    listaAmigos.push(nomeAmigo);
    campoEntrada.value = '';

    exibirAmigos();

}

function exibirAmigos() {
    let listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = ""; // Limpar a lista antes de exibir novamente

    // Adicionar cada amigo como um item de lista
    listaAmigos.forEach(amigo => {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaExibicao.appendChild(itemLista);
    });
}
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('É necessário digitar Pelo menos 1 nome');
        return;
    } 
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
