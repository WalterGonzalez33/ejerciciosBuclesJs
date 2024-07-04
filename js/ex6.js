
for (let i = 0; i <= 30; i++) {
    for (let j = 0; j < i; j++) {
        if(i < 10){
            document.write(`<span>0${i}</span>`)
        }else{
            document.write(`<span>${i}</span>`)
        }
    }
    document.write('<br>')
}