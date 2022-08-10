function pitagoras(leg1,leg2,hypotenuse){
    if (leg1 === 0){
        let result = (Math.pow(hypotenuse,2)-Math.pow(leg2,2))
        return console.log('O valor do cateto é: ' , Math.sqrt(result).toFixed(2))
    }else if (leg2 === 0){
        let result = (Math.pow(hypotenuse,2)-Math.pow(leg1,2))
        return console.log('O valor do cateto é: ', Math.sqrt(result).toFixed(2))
    }else if (hypotenuse === 0){
        let result = (Math.pow(leg1,2)+Math.pow(leg2,2))
        return console.log('O valor da hipotenusa é: ', Math.sqrt(result).toFixed(2))
    }
}

pitagoras(4,5,0)