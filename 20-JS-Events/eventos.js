function random(numero) {
    return Math.floor(Math.random() * (numero + 1));
}

let btn = document.getElementById('btn');
// recomendada usar: EventListener
btn.addEventListener('click', cambiarFondo);



/* Otra opcion es hacer:

btn.onclick = cambiarFondo;

Sino es 

btn.onclick = function() {

    let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = color;
}

*/




function cambiarFondo() {

    let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = color;
}


let elem = document.documentElement;

function fullscreen() {


    elem.requestFullscreen();
}

function exitFullscreen() {

    document.body.fullscreen = false;
}


let txtNombre = document.getElementById('nombre');
let txtEmail = document.getElementById('email');
let chkEstudiante = document.getElementById('estudiante');
let selNivel = document.getElementById('nivel');
let divNivel = document.getElementById('div_nivel');
txtNombre.onkeyup = function() {
    document.getElementById("rnombre").innerText = txtNombre.value;
}

txtEmail.onfocus = function() {
    document.getElementById("remail").innerText = "En foco";
}

txtEmail.onblur = function() {
    document.getElementById("remail").innerText = "Salio del foco";
}

chkEstudiante.onchange = function() {
    if (chkEstudiante.checked) {
        divNivel.style.display = "inline";
    } else {
        divNivel.style.display = "none";
    }
}

selNivel.onchange = function() {
    alert(selNivel.value);
}

let formulario = document.getElementById("formulario");
formulario.onsubmit = function() {
    if (txtNombre.value == "" || txtEmail.value == "") {
        alert("Debe completar ambos parametros.")
        return false;
    }
}