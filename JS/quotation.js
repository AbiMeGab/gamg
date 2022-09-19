let btnSend = document.getElementById("enviar");
let btnEsti = document.getElementById("calcular");

btnSend.addEventListener("click", function(event){
    event.preventDefault();
    let btnEnviar = document.getElementsByClassName("alert alert-primary")[0] 
  btnEnviar.innerHTML = `Your message was sent <strong>thank you and have a nice day!</strong> I will respond ASAP.`
btnEnviar.style.display ="block";
setTimeout(() => {btnEnviar.style.display="none"}, 5000);
btnSend.disabled=true;

let quest = document.getElementById("question");
let proj = document.getElementById("project");
let supp = document.getElementById("support");
let tutor = document.getElementById("tutoring");
let host = document.getElementById("hosting");
const iva = (1+21/100);
let suma = 0;

if (
    nombre.value.length >= 6 &&
    nombre.value.length <= 35 &&
    isNaN(nombre.value)
  ) {
    nombre.value.toUpperCase();
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
  } else {
    nombre.classList.remove("is-valid");
    nombre.classList.add("is-invalid");
    btnEnviar.innerHTML = `Please type <strong>at least your First name and one Last name </strong>in the label.`
    setTimeout(() => {btnEnviar.style.display="none"}, 5000);
    check = false;
  }

  if (ValidateEmail(email.value)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    btnEnviar.innerHTML = `Please type <strong>a valid email </strong>in the label.`
    setTimeout(() => {btnEnviar.style.display="none"}, 5000);
    check = false;
  }

if (quest.checked || proj.checked || supp.checked || tutor.checked || host.checked) {
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
setTimeout(() => {btnEnviar.style.display="none";}, 5000);
btnEnviar.disabled=true;
} else {
    btnEnviar.innerHTML = `Please select <strong>at least ONE </strong>of the checkboxes.`
}

if (mensaje.value.length >= 10 &&
 mensaje.value.length <= 250) {
mensaje.classList.remove("is-invalid");
mensaje.classList.add("is-valid");
} else {
mensaje.classList.remove("is-valid");
mensaje.classList.add("is-invalid");
btnEnviar.innerHTML = `Please type <strong>almost 10 letters </strong>in the text box.`
setTimeout(() => {btnEnviar.style.display="none"}, 5000);
check = false;
}

});

btnEsti.addEventListener("click", function(event){
    event.preventDefault();

let quest = document.getElementById("question");
let proj = document.getElementById("project");
let supp = document.getElementById("support");
let tutor = document.getElementById("tutoring");
let host = document.getElementById("hosting");
const iva = (1+21/100);
let btnCalc = document.getElementsByClassName("alert alert-secondary")[0];
btnCalc.style.display ="block";
let suma = 0;

if (quest.checked || proj.checked || supp.checked || tutor.checked || host.checked) {
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

btnCalc.innerHTML = `Your estimated quotation is <strong>${suma} dollars</strong>. To buy a service, please fill all the fields and press SEND REQUEST.`
setTimeout(() => {btnCalc.style.display="none";}, 5000);
btnCalc.disabled=true;

} else {
    btnCalc.innerHTML = `Please select <strong>at least ONE </strong>of the checkboxes.`
    setTimeout(() => {btnCalc.style.display="none";}, 5000);
}
});

function ValidateEmail(email) {
    let valid = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;

    if (email.match(valid)) {
      return true;
    } else {
      return false;
    }
}