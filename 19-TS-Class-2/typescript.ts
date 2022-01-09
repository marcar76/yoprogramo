class Operacion {
    protected valorA: number;
    protected valorB: number;
    protected resultado: number;
   
    constructor(){
        this.valorA= 0;
        this.valorB=0; 
        this.resultado=0; 
    }

    set ValorA(value:number){
        this.valorA=value;
    }
    set ValorB(value:number){
        this.valorB=value;
    }
    
    get ValorA():number {
        return this.valorA;
    }
    get ValorB():number {
        return this.valorB;
    }
    get Resultado():number {
        return this.resultado;
    }

    public ToString(){
        return this.resultado;
    }

}



class Suma extends Operacion {
    Sumar(){ 
        this.resultado = this.valorA + this.valorB;
    }
}
     
class Resta extends Operacion {
    Restar(){ 
        this.resultado = this.valorA - this.valorB;
    }
}

let operacionS = new Suma();
operacionS.ValorA=47775;
operacionS.ValorB=86645;
operacionS.Sumar();
/* 
console.log("Suma es: " + operacionS.Resultado);
document.getElementById('sumar1').innerHTML= "LA suma es: " + operacionS.Resultado.toString();
*/
/*document.write("La suma es: " + operacionS.Resultado);*/
console.log("ToString-suma: " + operacionS.ToString());

let operacionR = new Resta();
operacionR.ValorA=45255;
operacionR.ValorB=8455;
operacionR.Restar();
/*console.log("Resta es: " +operacionR.Resultado );*/
console.log("ToString-resta: " + operacionR.ToString());    