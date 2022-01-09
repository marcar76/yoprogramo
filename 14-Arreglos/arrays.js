let arreglo = new Array(5);
let exponente = 2;
for (let i = 0; i < 5; i++) {

    arreglo[i] = i ** exponente;
}


for (let i = 0; i < arreglo.length; i++) {
    // document.getElementById("diva").innerText = arreglo[i];
    console.log("R: " + i + "^" + exponente + " = " + arreglo[i]);
}