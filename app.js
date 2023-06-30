// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
// module.exports = { sum };


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(value){
 
    let valueInYenes = value * 127.9;
    // retornamos el valor
    return Math.floor(valueInYenes);
}

const fromYenToPound = function(value){
 
    let valueInPound = value * 0.8;
    // retornamos el valor
    return Math.floor(valueInPound);
}



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// let euro = oneEuroIs.USD;
//1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)


// function fromDollarToYen(value) {
//     let conversion = oneEuroIs["JPY"] / oneEuroIs["USD"];
//     let valorEnYen = value * conversion;
//     return valorEnYen;
// }
// console.log(fromDollarToYen(2));

// function fromEuroToDollar(value) {
//     let conversionRate = oneEuroIs["USD"];
//     let amountInDollars = value * conversionRate;
//     return amountInDollars;
// }
// console.log(fromEuroToDollar(2));

// function fromYenToPound(value) {
//     let conversion = oneEuroIs["GBP"] / oneEuroIs["JPY"];
//     let valorEnGBP = value * conversion;
//     return valorEnGBP;
    
// } 

// console.log(fromYenToPound(2));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }