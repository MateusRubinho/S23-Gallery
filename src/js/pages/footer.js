fetch("src/pages/footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML= data;
})