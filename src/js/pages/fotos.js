fetch("src/pages/fotos.html").then(
    response => response.text()
).then(data => {
    document.getElementById("fotos").innerHTML = data;
})