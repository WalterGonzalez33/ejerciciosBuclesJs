const row = parseInt(prompt("filas: "));
const column = parseInt(prompt("columnas: "));
let numCells = row * column;

if (numCells > 2000) {
  alert(`ESTAS LOCO!!! QUERÉS QUE EXPLOTE EL NAVEGADOR!!!`);
} else {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (numCells < 10) {
        document.write(`<span>| 0${numCells} | </span>`);
      } else {
        document.write(`<span>| ${numCells} | </span>`);
      }
      numCells--;
    }
    document.write(`<br>`);
    for (let j = 0; j < column; j++) {
      document.write(`<span>——</span>`);
    }
    document.write(`<br>`);
  }
}

