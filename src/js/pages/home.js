
fetch('/src/pages/home.html')
.then(response => response.text()).then(data => {
    document.getElementById("home").innerHTML = data;
    
    setTimeout(() => {
        document.getElementById("animatedBox").classList.add("show");
        document.getElementById("animatedBox2").classList.add("active");
    }, 100);
})



// fetch('src/pages/welcome.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('welcome').innerHTML = data;

//         setTimeout(() => {
//             document.getElementById("animatedBox").classList.add("active");
//         }, 100);
//     });   