class Persona {


    private nombre:string;
    private apellido:string;
    private anioNac:number;

    constructor(nombres:string, apellidos:string){
        this.nombre= nombres;
        this.apellido= apellidos;
    }

    get Nombre():string{
        return this.nombre;
    }
    get Apellido():string {
        return this.apellido;
    }

    set Nombre(nombre:string){
        this.nombre = nombre;
    }
    set Apellido(appellido:string){
        this.apellido= appellido;     
    }
    get AnioNacimiento():number {
        return this.anioNac;
    }

    set AnioNacimiento(anio:number){
        this.anioNac= anio;     
    }
}



/* 
Si creo un objeto 

let persona1 = new Persona("mario", "apellido");
                             ^         ^ 
                            |         | 
                            Son los parametros que recibe el constructor.



*/

let per = new Persona("","");
per.Nombre="mario";
per.Apellido="yo";

console.log(per.Nombre);
console.log(per.Apellido);