let contIterate = 1;
for (let i = 1; i <= 30; i++) {
  if (i % 4 === 0 || i % 9 === 0) {
    if (i % 4 === 0) {
      document.write(`<p>${i} (Múltiplo de 4)</p>`);
    }
    if (i % 9 === 0) {
      document.write(`<p>${i} (Múltiplo de 9)</p>`);
    }
  } else {
    document.write(`<p>${i}</p>`);
  }
  if (contIterate === 5) {
    document.write(`<p>————————————————————</p>`);
    contIterate = 0;
  }
  contIterate++;
}
