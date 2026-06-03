
// =====================
// ACCORDION
// =====================

const accordionButtons =
document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight =
            content.scrollHeight + "px";
        }

    });

});

// =====================
// FONTE
// =====================

let fontSize = 100;

document
.getElementById("increaseFont")
.addEventListener("click", () => {

    fontSize += 10;
    document.body.style.fontSize =
    fontSize + "%";

});

document
.getElementById("decreaseFont")
.addEventListener("click", () => {

    fontSize -= 10;
    document.body.style.fontSize =
    fontSize + "%";

});

// =====================
// DARK MODE
// =====================

document
.getElementById("toggleTheme")
.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark-mode"
    );

});

// =====================
// LEITURA POR VOZ
// =====================

let speech;

document
.getElementById("startSpeech")
.addEventListener("click", () => {

    const content =
    document.getElementById("main-content")
    .innerText;

    speech =
    new SpeechSynthesisUtterance(
        content
    );

    speech.lang = "pt-BR";

    window.speechSynthesis.speak(
        speech
    );

});

document
.getElementById("stopSpeech")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});

// =====================
// FORMULÁRIO
// =====================

const form =
document.querySelector("form");

form.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        alert(
            "Inscrição enviada com sucesso!"
        );

        form.reset();

    }
);