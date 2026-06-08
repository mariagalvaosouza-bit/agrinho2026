
// ACCORDION

const botoes =
document.querySelectorAll(".accordion-btn");

botoes.forEach(botao=>{

botao.addEventListener("click",()=>{

const conteudo =
botao.nextElementSibling;

if(conteudo.style.maxHeight){

conteudo.style.maxHeight=null;

}else{

conteudo.style.maxHeight=
conteudo.scrollHeight + "px";

}

});

});

// TEMA

const toggleTema =
document.getElementById("toggleTema");

toggleTema.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

// FONTE

let tamanho = 16;

document
.getElementById("aumentarFonte")
.addEventListener("click",()=>{

tamanho += 2;

document.documentElement
.style.setProperty(
"--font",
tamanho + "px"
);

});

document
.getElementById("diminuirFonte")
.addEventListener("click",()=>{

tamanho -= 2;

if(tamanho < 12) tamanho = 12;

document.documentElement
.style.setProperty(
"--font",
tamanho + "px"
);

});

// LEITURA POR VOZ

let fala;

const synth =
window.speechSynthesis;

document
.getElementById("lerPagina")
.addEventListener("click",()=>{

synth.cancel();

const conteudo =
document.getElementById("conteudoPrincipal")
.innerText;

fala =
new SpeechSynthesisUtterance(
conteudo
);

fala.lang="pt-BR";

synth.speak(fala);

});

document
.getElementById("pararLeitura")
.addEventListener("click",()=>{

synth.cancel();

});