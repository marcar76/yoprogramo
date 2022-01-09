document.getElementById("crear").addEventListener("click", crear);
document.getElementById("mostrar").addEventListener("click", mostrar);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("eliminar").addEventListener("click", eliminar);


function crear() {
    sessionStorage.setItem("usuario", "mario");
}

function mostrar() {
    sessionStorage.getItem("usuario");
}

function modificar() {
    sessionStorage.setItem("usuario", "mario123");
}

function eliminar() {
    sessionStorage.removeItem("usuario");
}