var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operacion = /** @class */ (function () {
    function Operacion() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    Object.defineProperty(Operacion.prototype, "ValorA", {
        get: function () {
            return this.valorA;
        },
        set: function (value) {
            this.valorA = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "ValorB", {
        get: function () {
            return this.valorB;
        },
        set: function (value) {
            this.valorB = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "Resultado", {
        get: function () {
            return this.resultado;
        },
        enumerable: false,
        configurable: true
    });
    Operacion.prototype.ToString = function () {
        return this.resultado;
    };
    return Operacion;
}());
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Suma.prototype.Sumar = function () {
        this.resultado = this.valorA + this.valorB;
    };
    return Suma;
}(Operacion));
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Resta.prototype.Restar = function () {
        this.resultado = this.valorA - this.valorB;
    };
    return Resta;
}(Operacion));
var operacionS = new Suma();
operacionS.ValorA = 47775;
operacionS.ValorB = 86645;
operacionS.Sumar();
/*
console.log("Suma es: " + operacionS.Resultado);
document.getElementById('sumar1').innerHTML= "LA suma es: " + operacionS.Resultado.toString();
*/
/*document.write("La suma es: " + operacionS.Resultado);*/
console.log("ToString-suma: " + operacionS.ToString());
var operacionR = new Resta();
operacionR.ValorA = 45255;
operacionR.ValorB = 8455;
operacionR.Restar();
/*console.log("Resta es: " +operacionR.Resultado );*/
console.log("ToString-resta: " + operacionR.ToString());
