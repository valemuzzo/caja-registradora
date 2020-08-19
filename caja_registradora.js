/*mostrar los numeros y los resultadops en el display*/
function mostrarResultado(valor) {
  document.getElementById("display").innerHTML = valor;
}
/*captura del valor del ultimo resultado mostrado en el display*/
function obtenerResultado() {
  return document.getElementById("display").innerHTML;
}
/*funcionamiento de los botones*/
/*al colocar la R en binario (01010010), nuestro display
muestre "Rolling (<>)" */
function presionarNumero(valor) {
  var result = obtenerResultado();
  if (result == "01010010") {
    mostrarResultado("Rolling (<>)");
  } else {
    mostrarResultado(result + valor);
  }
}
/*variables para realizar las operaciones*/
var num1;
var num2;
var operacion;
/*funciones de las operaciones*/
function sumar() {
  num1 = obtenerResultado();
  operacion = "+";
  limpiar();
}

function restar() {
  num1 = obtenerResultado();
  operacion = "-";
  limpiar();
}
function multiplicar() {
  num1 = obtenerResultado();
  operacion = "*";
  limpiar();
}
function dividir() {
  num1 = obtenerResultado();
  operacion = "/";
  limpiar();
}
/*funcionar para limpiar*/
function limpiar() {
  mostrarResultado(" ");
}
/*guarda el resultado del valor del segundo numero al mismo tiempo que llama a la funcion resolver()*/
function calcular() {
  num2 = obtenerResultado();
  resolver();
}
/*funcion que define la resolucion de la operacion*/
function resolver() {
  var calculo;
  var op1 = parseFloat(num1);
  var op2 = parseFloat(num2);
  if (operacion === "+") {
    calculo = op1 + op2;
  } else if (operacion === "-") {
    calculo = op1 - op2;
  } else if (operacion === "/") {
    calculo = op1 / op2;
    if (op2 === 0) {
      calculo = "Error";
    }
  } else if (operacion === "*") {
    calculo = op1 * op2;
  }
  mostrarResultado(calculo);
  operacion = " ";
  num1 = 0;
  num2 = 0;
}
/*funcion para restablecer todo a cero All Clear 'AC'*/
function ac() {
  mostrarResultado(" ");
  num1 = 0;
  num2 = 0;
}
