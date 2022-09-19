let btnSend = document.getElementById("enviar");
let btnEsti = document.getElementById("calcular");

btnSend.addEventListener("click", function(event){
    event.preventDefault();
    let btnEnviar = document.getElementsByClassName("alert alert-primary")[0] 
  btnEnviar.innerHTML = `Your message was sent <strong>thank you and have a nice day!</strong> I will respond ASAP.<br/>`
btnEnviar.style.display ="block";
setTimeout(() => {btnEnviar.style.display="none"}, 5000);
btnSend.disabled=true;
});


btnEsti.addEventListener("click", function(event){
    event.preventDefault();

let quest = document.getElementById("question");
let proj = document.getElementById("project");
let supp = document.getElementById("support");
let tutor = document.getElementById("tutoring");
let host = document.getElementById("hosting");
const iva = (1+21/100);

let suma = 0;

if (quest.checked) {
    suma += parseInt(quest.value);
} 
if (proj.checked) {
    suma += parseInt(proj.value);
} 
if (supp.checked) {
    suma += parseInt(supp.value);
} 
if (tutor.checked) {
    suma += parseInt(tutor.value);
} 
if (host.checked) {
    suma += parseInt(host.value);
} 

suma = ((suma) * (iva)).toFixed(2);

let btnCalc = document.getElementsByClassName("alert alert-secondary")[0];
btnCalc.innerHTML = `Your estimated quotation is <strong>${suma} dollars</strong>. To buy a service, please fill all the fields.<br/>`
btnCalc.style.display ="block";
setTimeout(() => {btnCalc.style.display="none";}, 3000);
btnCalc.disabled=true;

});




