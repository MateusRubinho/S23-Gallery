let dataFuturo;
fetch("src/pages/info.html")
    .then(response => response.text())
    .then(data => {
        dataFuturo=data;
        document.getElementById("info").innerHTML = data;
    });

function closeModal(){
    document.getElementById("conteudo").style.display = 'none';
}
window.closeModal = closeModal;

function mostrarInformacoes() {
    document.getElementById('conteudo').innerHTML = dataFuturo;
    document.getElementById("conteudo").style.display = 'flex';
}
window.mostrarInformacoes = mostrarInformacoes;