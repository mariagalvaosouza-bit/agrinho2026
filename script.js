
// ======================
// ACCORDION
// ======================

const accordionButtons =
document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        const visible =
        content.style.display === "block";

        document
        .querySelectorAll(".accordion-content")
        .forEach(item => {
            item.style.display = "none";
        });

        if(!visible){
            content.style.display = "block";
        }

    });

});

// ======================
// AUMENTAR FONTE
// ======================

let currentFontSize = 100;

document
.getElementById("increaseFont")
.addEventListener("click", () => {

    currentFontSize += 10;

    document.body.style.fontSize =
    currentFontSize + "%";

});

document
.getElementById("decreaseFont")
.addEventListener("click", () => {

    currentFontSize -= 10;

    document.body.style.fontSize =
    currentFontSize + "%";

});

// ======================
// DARK MODE
// ======================

document
.getElementById("toggleTheme")
.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

// ======================
// LEITURA POR VOZ
// ======================

let speech = null;

document
.getElementById("startReading")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const texto =
    document
    .getElementById("mainContent")
    .innerText;

    speech =
    new SpeechSynthesisUtterance(texto);

    speech.lang = "pt-BR";

    window.speechSynthesis.speak(speech);

});

document
.getElementById("stopReading")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});

// ======================
// FORMULÁRIO
// ======================

document
.querySelector("form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Inscrição enviada com sucesso!"
    );

});

// ======================
// COMENTÁRIO
// ======================

document
.querySelector(".comment-btn")
.addEventListener("click", () => {

    alert(
        "Comentário enviado!"
    );

});