class Persona {
    constructor(nombre, edad) {
        this.nombrePersona = nombre;
        this.edadPersona = edad;
    }

    datosPersona() {
        return "Nombre: " + this.nombrePersona + "\nEdad: " + this.edadPersona;
    }

}

class Alumno extends Persona {
    constructor(nombre, edad, matricula) {
        super(nombre, edad); //llamamos la clase Padre y la inicializamos.
        this.matriculaAlumno = matricula;
    }
    mostrarDatos() {
        console.log(super.datosPersona() + "\nMatricula= " + this.matriculaAlumno);
    }

}

// Genero la clase de Profesor heredada de Persona 
// pero el Departamento lo ingreso como set.
class Profesor extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    set gDepartamento(valor) {
        this.departamento = valor;
    }
    get sDepartamento() {
        return this.departamento;
    }
    mostrarDatos() {
        console.log(super.datosPersona() + "\nDepartamento= " + this.departamento);
    }

}



let per = new Persona("Mario", 45);
console.log("Persona");
console.log(per.datosPersona());

let alum = new Alumno("Mario", 45, 12332323232);
console.log("Alumno");
alum.mostrarDatos();


let prof = new Profesor("Profe Homero", 55);
console.log("Profesor");
prof.gDepartamento = "Electronica";
prof.mostrarDatos();