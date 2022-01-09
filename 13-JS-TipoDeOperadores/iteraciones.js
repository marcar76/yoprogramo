function generartabla(numero) {
    let num = parseInt(numero);
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    for (let contador = 1; contador <= 10; contador++) {
        let resultado = contador * num;
        let fila = tabla.insertRow(tabla.rows.length);
        let celda = fila.insertCell(0); // Solo tengo una columna
        celda.innerHTML = contador + " * " + num + " = " + resultado;
        celda = fila.insertCell(1);
        celda.innerHTML = contador + " * " + num + " = " + resultado;

    }
}