function adicionarAmigo() {
    var inputAmigo = document.getElementById('amigo');
    var nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    var listaAmigos = document.getElementById('listaAmigos');
    var novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;
    listaAmigos.appendChild(novoItem);

    inputAmigo.value = '';
}

function sortearAmigo() {
    var listaAmigos = document.getElementById('listaAmigos');
    var amigos = Array.from(listaAmigos.children);

    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    var indiceSorteado = Math.floor(Math.random() * amigos.length);
    var amigoSorteado = amigos[indiceSorteado].textContent;

    listaAmigos.innerHTML = '';

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}