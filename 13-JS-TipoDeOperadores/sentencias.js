function validarEdad(edad) {
    if (edad >= 18) {
        document.getElementById("respuesta").innerHTML = "Mayor de Edad";
    } else {
        document.getElementById("respuesta").innerHTML = "Menor de Edad";
    }
}

function comparar() {


    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let num3 = parseInt(document.getElementById("numero3").value);


    if (num1 > num2) {

        if (num1 > num3) {
            document.getElementById("comparacion").innerHTML = "El mayor es N1:  " + num1;
        } else {
            document.getElementById("comparacion").innerHTML = "El mayor es N3:  " + num3;
        }
    } else {
        if (num2 > num3) {
            document.getElementById("comparacion").innerHTML = "El mayor es N2:  " + num2;
        } else {
            document.getElementById("comparacion").innerHTML = "El mayor es N3:  " + num3;
        }
    }

}



function devolvertexto(numero) {
    let ndia = parseInt(numero);
    /* Ingreso Numero de dia  y devuelve el texto */
    switch (ndia) {
        case 1:
            return "Domingo";
            break;
        case 2:
            return "Lunes";
            break;
        case 3:
            return "Martes";
            break;
        case 4:
            return "Miercoles";
            break;
        case 5:
            return "Jueves";
            break;
        case 6:
            return "Viernes";
            break;
        case 7:
            return "Sabado";
            break;
        default:
            return "No Valido";
    }
}

function dia_texto() {
    let dia = document.getElementById("dianumero").value;
    document.getElementById("diaentexto").innerHTML = `El dia en numero:  ${dia}, es en texto:   ${devolvertexto(parseInt(dia))}`;
}