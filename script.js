let btn = document.querySelectorAll(".btn-perguntas");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let resposta = this.parentElement.querySelector(".resposta");
        if (resposta.style.display === "none") {
            resposta.style.display = "block";
        } else {
            resposta.style.display = "none";
        }
    });
}