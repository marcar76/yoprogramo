 function resultado() {


     let usuario = {
         nombre: "mario",
         edad: 45
     };




     let texto = '{ "empleados" : [' +
         ' { "nombre":"Mario", "Edad":"45"},' +
         ' { "nombre":"Mario1", "Edad":"451"}]}';




     let obj = JSON.parse(texto); //Converts text to JSON format
     document.getElementById("p-json").innerHTML = "En Formato Json solo mostrara objeto en HTML";
     document.getElementById("resultado").innerHTML = obj;
     let objstring = JSON.stringify(obj);
     document.getElementById("p-json-string").innerHTML = "En String convertido de Formato Json";
     document.getElementById("resultado1").innerHTML = objstring;
     console.log(texto);
 };