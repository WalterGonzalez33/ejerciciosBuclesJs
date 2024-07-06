const phrase = prompt("escribe una frase: ").toLowerCase();
const vowels = "aeiou";
let cantVowels = 0;

for (let i = 0; i < phrase.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (phrase[i] === vowels[j]) {
      cantVowels++;
    }
  }
}

document.write(`su frase tiene ${cantVowels} vocales`);
