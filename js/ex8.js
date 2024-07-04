const cantNumberPyramid = parseInt(prompt('ingrese el numero para su pirámide(no mas de 50): '))

if(cantNumberPyramid <= 50){
    for (let i = 0; i < cantNumberPyramid; i++) {
        for (let j = 0; j < i; j++) {
            document.write(`<span>${(j + 1)}</span>`)
        }
        document.write('<br>')
    }
}