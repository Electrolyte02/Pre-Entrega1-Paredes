var tipoCambio = 0;

do
  tipoCambio = prompt(
    "Ingresar 1 si el precio en el sitio web esta en dolares(U$D) o 2 si esta en pesos argentinos (AR$)"
  );
while (tipoCambio != 1 && tipoCambio != 2);

if (tipoCambio == 1) {
  var precio = prompt("Ingresar el precio en dolares(U$D)");
  precio = parseInt(precio);
  precio = precio * 183.17;

  var numOperacion = "0";
  do {
    numOperacion = prompt(
      "Ingrese 1 si gasto menos de 300 USD en este mes o 2 si gasto mas de 300USD este mes"
    );
    numOperacion = parseInt(numOperacion);
  } while (numOperacion != 1 && numOperacion != 2);
}

if (tipoCambio == 2) {
  var precio = prompt("Ingresar el precio en pesos argentinos(AR$)");
  precio = parseInt(precio);

  var numOperacion = "0";
  do {
    numOperacion = prompt(
      "Ingrese 1 si gasto menos de 300 USD en este mes o 2 si gasto mas de 300USD este mes"
    );
    numOperacion = parseInt(numOperacion);
  } while (numOperacion != 1 && numOperacion != 2);
}

var total = 0;

if (numOperacion == 1) {
  total = precio * 1.75;
}
if (numOperacion == 2) {
  total = precio * 2;
}
console.log(total);
alert("Le llegara al resumen de su tarjeta en pesos argentinos:$" + total);
