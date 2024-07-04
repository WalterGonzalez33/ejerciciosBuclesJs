const DNI_LETTERS = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
let DNIlist = [];
let DNIlettersList = [];
do {
  const userDNI = parseInt(prompt("ingrese su DNI: "));
  let index_latterDNI = null;

  if (Number.isNaN(userDNI)) {
    alert("ingrese un numero de DNI valido!");
    continue;
  }
  if (userDNI > 0 && userDNI < 99999999) {
    DNIlist.push(userDNI);
    index_latterDNI = userDNI % 23;
    DNIlettersList.push(DNI_LETTERS[index_latterDNI]);
  } else {
    alert("ingrese un numero de DNI valido!");
  }
} while (confirm("quieres ingresar otro DNI?"));

for (let i = 0; i < DNIlist.length; i++) {
  document.write(` ${i + 1}_DNI ${DNIlist[i]}${DNIlettersList[i]}||`);
}
