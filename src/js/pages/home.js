
fetch('/src/pages/home.html')
.then(response => response.text()).then(data => {
    document.getElementById("home").innerHTML = data;
    
    setTimeout(() => {
        document.getElementById("animatedBox").classList.add("show");
        document.getElementById("animatedBox2").classList.add("active");

        window.addEventListener("scroll", function () {
            let scrollY = window.scrollY; // Posição do scroll
            let threshold = 200; // Quando começar a desaparecer

            let img1 = document.querySelector(".img1");
            let img2 = document.querySelector(".img2");
            let title = document.querySelector(".title");


            // Calculando a opacidade
            let opacity = Math.max(0, 1 - scrollY / threshold); // Decrease opacity as you scroll down
            let translateY = Math.min(100, scrollY / 5); // Move images as you scroll

            img1.style.opacity = opacity;
            img1.style.transform = `translateY(${translateY}px)`; // Translate image downward

            img2.style.opacity = opacity;
            img2.style.transform = `translateY(${translateY}px)`; // Same effect for img2

            title.style.opacity = opacity;
            title.style.transform = `translateY(${translateY}px)`;
        });


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