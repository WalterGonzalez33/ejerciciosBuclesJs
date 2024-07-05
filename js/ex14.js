const textUser = prompt('ingrese un texto: ')
let newText = '';
for (let i = 0; i < textUser.length; i++) {
    newText += i + 1 === textUser.length ? textUser.charAt(i) : textUser.charAt(i) + '-';
}

document.write(`cadena modificada: ${newText}`)