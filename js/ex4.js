let numbersToSum = [];
let continueQuestion = true;
let sumNumber = 0;

do {
  let numUser = parseInt(prompt("ingrese un numero: "));

  if (Number.isNaN(numUser)) {
    alert("lo que ingreso no es un numero, por favor ingrese solo números");
    continue;
  }

  numbersToSum.push(numUser);

  continueQuestion = confirm("quieres continuar?");
} while (continueQuestion);

for (let i = 0; i < numbersToSum.length; i++) {
  sumNumber += numbersToSum[i];
}

document.write(`la suma de todos los números ingresados es: ${sumNumber}`);
