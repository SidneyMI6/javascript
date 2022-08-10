function total(value, service) {
    if (service === true) {
        let result = (value*0.1)+value
        return console.log('O total com serviço é: ' , result)

    }else if (service === false){
        return console.log('O total sem o serviço é: ', value)
    }
}

total(12,true)
total(12,false)