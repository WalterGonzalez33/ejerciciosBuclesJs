const qualification = parseInt(prompt("ingrese su nota(0 - 10): "));

if (Number.isNaN(qualification)) {
  document.write("Introduce un número válido");
}

if (qualification >= 0 && qualification <= 10) {
  if (qualification <= 2) {
    document.write("Muy deficiente");
  }
  if (qualification === 3 || qualification === 4) {
    document.write("Insuficiente");
  }
  if (qualification === 5 || qualification === 6) {
    document.write("Suficiente");
  }
  if (qualification === 7) {
    document.write("Bien");
  }
  if (qualification === 8 || qualification === 9) {
    document.write("Notable");
  }
  if (qualification === 10) {
    document.write("Sobresaliente");
  }
} else if(qualification > 10 || qualification < 0){
  document.write("Número erróneo");
}