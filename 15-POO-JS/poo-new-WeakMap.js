let personaMap = new WeakMap();

class Persona {
    constructor(nombre, edad) {

        personaMap.set(this, {
            _nombre: nombre,
            _edad: edad,
            _dni: ''
        })
    }

    set inputDni(valor) {
        personaMap.get(this)._dni = valor;
    }

    get _dni() {
        return personaMap.get(this)._dni;
    }

    saludar() {
        console.log("mi nombre es: " + personaMap.get(this)._nombre + "\ncon edad: " + personaMap.get(this)._edad + "\ny DNI: " + personaMap.get(this)._dni);
    }
}

let ObjetoPersona = new Persona("test", 99);

//console.log("nombre afuera: " + ObjetoPersona._nombre);
ObjetoPersona.inputDni = "3333333";
ObjetoPersona.saludar();