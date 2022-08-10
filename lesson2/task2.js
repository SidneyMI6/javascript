function notaFinal(num1,num2,num3,num4){
    let media = (num1+num2+num3+num4)/4

    if (media >= 7.5) {
        return console.log('Você passou' , media)
    } else {
        return console.log ('Você não passou' , media)
    }
}

notaFinal(8,9,6,9)