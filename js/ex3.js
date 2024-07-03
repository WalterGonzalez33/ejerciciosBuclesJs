let phrases = [];

do {
  phrases.push(prompt("ingrese una palabra o frase: "));
} while (confirm("quieres continuar escribiendo?"));

for (let i = 0; i < phrases.length; i++) {
  document.write(`-${phrases[i]}`);
}
