function resultadooperacion(operador) {

    let numUno = parseInt(document.getElementById("numerouno").value);
    let numDos = parseInt(document.getElementById("numerodos").value);

    /*Suma*/
    let resultado1 = numUno + numDos;

    document.getElementById("resultado").value = resultado1;

}