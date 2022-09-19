let btnSend = document.getElementById("enviar");
let btnEsti = document.getElementById("calcular");

btnSend.addEventListener("click", function(event){
    event.preventDefault();
    let btnEnviar = document.getElementsByClassName("alert alert-primary")[0]
  btnEnviar.innerHTML += `Your message was sent <strong>thank you and have a nice day!</strong> I will respond ASAP.<br/>`
  btnEnviar.style.display="block";
  btnSend.disabled=true;
setTimeout(() => {btnEnviar.style.display="block"}, 5000);
// setTimeout(() => {window.location.reload()}, 5500);

});


btnEsti.addEventListener("click", function(event){
    event.preventDefault();
    let btnEst = document.getElementsByClassName("alert alert-secondary")[0]
  btnCalc.innerHTML += `Your estimated quotation is <strong>${estimated} dollars</strong>. To buy a service, please fill all the fields.<br/>`
  btnEst.style.display="block";
setTimeout(() => {btnEst.style.display="none";}, 8000);
setTimeout(() => {window.location.reload()}, 8500);
});

let quest = parseInt(document.getElementById("question").value);
let proj = parseInt(document.getElementById("project").value);
let supp = parseInt(document.getElementById("support").value);
let tutor = parseInt(document.getElementById("tutoring").value);
let host = parseInt(document.getElementById("hosting").value);
const iva = (1+21/100);