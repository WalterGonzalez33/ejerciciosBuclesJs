const cantNumberPyramid = parseInt(prompt('ingrese el numero para su pirámide(no mas de 50): '))

if(cantNumberPyramid <= 50){
    for (let i = cantNumberPyramid; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if(i < 10){
                document.write(`<span>0${i}</span>`)
            }else{
                document.write(`<span>${i}</span>`)
            }
        }
        document.write('<br>')
    }
}