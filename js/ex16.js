const phrase = prompt("escribe una frase: ");
let newPhraseInverted = '';

for (let i = phrase.length; i > 0; i--) {
    newPhraseInverted += phrase[i - 1]
}

document.write(newPhraseInverted)