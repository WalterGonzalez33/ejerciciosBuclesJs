const phrase = prompt("escribe una frase: ").toLowerCase();
const vowels = "aeiou";
let positionVowel = 0;

for (let i = 0; i < phrase.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (phrase[i] === vowels[j]) {
      positionVowel = i;
      break;
    }
  }
  if (positionVowel > 0) {
    break;
  }
}

document.write(
  `la vocal '${phrase[positionVowel]}' está en la posición ${positionVowel}`
);
