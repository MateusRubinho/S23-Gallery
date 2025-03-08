fetch("src/pages/info.html")
.then(response => response.text())
.then(data => {
    document.getElementById("info").innerHTML = data;
});