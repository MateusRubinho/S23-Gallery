fetch("src/pages/fotos.html").then(
    response => response.text()
).then(data => {
    document.getElementById("fotos").innerHTML = data;
})
function closeFoto(){
    document.getElementById("imagemExibida").style.display = 'none';
    document.getElementById("divImagem").style.visibility = 'hidden';
}
window.closeFoto = closeFoto;
function abrirFoto(url){
    document.getElementById('imagemExibida').src = url;
    document.getElementById("imagemExibida").style.display = 'flex';
    document.getElementById("divImagem").style.visibility = "visible";
}
window.abrirFoto = abrirFoto;