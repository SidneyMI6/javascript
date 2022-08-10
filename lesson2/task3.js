function conceito(nota){
    console.log('shablau' , nota)
    if (nota > 9 && nota <= 10){
        return console.log('A')
    }else if (nota > 8 && nota <= 9){
        return console.log('B')
    }else if (nota > 7 && nota <= 8){
        return console.log('C')
    }else if (nota > 6 && nota <= 7){
        return console.log('D')
    }else if (nota > 5 && nota <= 6) {
        return console.log('F')
    }
}

conceito(5.3)