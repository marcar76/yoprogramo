var Persona = /** @class */ (function () {
    function Persona(nombres, apellidos) {
        this.nombre = nombres;
        this.apellido = apellidos;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        get: function () {
            return this.apellido;
        },
        set: function (appellido) {
            this.apellido = appellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "AnioNacimiento", {
        get: function () {
            return this.anioNac;
        },
        set: function (anio) {
            this.anioNac = anio;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
/*
Si creo un objeto

let persona1 = new Persona("mario", "apellido");
                             ^         ^
                            |         |
                            Son los parametros que recibe el constructor.



*/
var per = new Persona("", "");
per.Nombre = "mario";
per.Apellido = "yo";
console.log(per.Nombre);
console.log(per.Apellido);
