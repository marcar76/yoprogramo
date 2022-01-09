class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre; // "this": Para hacerla publica. Accesible desde afueras 
        this._edad = edad;
        let _dni;

    }
    set inputDni(valor) {

        personaMap.get(this)._dni = valor;
    }
    get getDni() { return "DNI: " + this._dni };


    saludar() {
        console.log("mi nombre es: " + this._nombre + " con edad: " + this._edad + " y DNI: " + this._dni);
    }
}

let ObjetoPersona = new Persona("test", 99);

console.log("nombre afuera: " + ObjetoPersona._nombre);
ObjetoPersona.inputDni = "3333333";
ObjetoPersona.saludar();