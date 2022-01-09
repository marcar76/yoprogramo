function Persona(nombre, edad) {
    this.nombre = nombre; // "this": Para hacerla publica. Accesible desde afueras 
    this.edad = edad;
    let dni = "11111111";
    //console.log("Nombre: " + nombre);

    this.getDni = function() { return "DNI: " + dni; }
}

let ObjetoPersona = new Persona("test", 99);

console.log("nombre afuera: " + ObjetoPersona.nombre);
console.log("CallDNI:" + ObjetoPersona.getDni());