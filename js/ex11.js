let ege = [];
let names = [];
let egeBigger = 0;
let nameBigger = null;
let askAgain = true;
const numIterated = 3;

// solicita las edades al usuario y devuelve la edad mayor
while (askAgain) {
  let egeVerification = true;
  ege = [];

  for (let i = 0; i < numIterated; i++) {
    ege.push(parseInt(prompt(`ingrese la edad ${i + 1}: `)));

    if (ege[i] <= 0 || (Number.isNaN(ege[i]) && egeVerification)) {
      egeVerification = false;
    }
  }

  if (egeVerification === false) {
    askAgain === true;
    alert("por favor ingrese todas las edades solicitadas correctamente!");
  } else {
    egeBigger = Math.max(...ege);
    askAgain = false;
  }
}

askAgain = true;
// solicita los nombres al usuario y devuelve cual es mayor especificado *
while (askAgain) {
  nameBigger = null;
  let nameVerification = null;
  let repeatedBiggerName = 0;

  do {
    names = [];
    nameVerification = true;

    for (let i = 0; i < numIterated; i++) {
      names.push(
        prompt(
          `ingrese el ${
            i + 1
          } nombre ( el mayor tiene que ir con * al final ej: Esteban* ): `
        )
      );

      if (names[i] === "") {
        nameVerification = false;
        alert("el nombre a ingresar no puede estar vació");
        break;
      }
      if(names[i] == parseInt(names[i])){
        nameVerification = false;
        alert("el nombre a ingresar no puede ser un numero");
        break;
      }
    }
  } while (nameVerification === false);

  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(names[i].length - 1) === "*") {
      repeatedBiggerName++;
    }
  }

  if (repeatedBiggerName === 0) {
    alert(
      "no especifico el nombre del mayor y tendrá que volver a ingresar los datos ( recuerda que tiene que incluir el signo * al final del mismo )"
    );
    askAgain = true;
    continue;
  }

  if (repeatedBiggerName > 1) {
    alert("no puede ingresar dos o mas nombres especificados como mayor (*)");
    askAgain = true;
    continue;
  }

  if (repeatedBiggerName === 1) {
    for (let i = 0; i < names.length; i++) {
      if (names[i].charAt(names[i].length - 1) === "*") {
        nameBigger = names[i].substring(0, names[i].length - 1);
      }
    }
  }

  askAgain = false;
}

document.write(`el mayor es ${nameBigger} con ${egeBigger} años`);
