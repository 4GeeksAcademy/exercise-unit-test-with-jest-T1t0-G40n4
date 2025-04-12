
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Funcion para convertir dollar en Yen
function fromDollarToYen (dollars){
    let euros = dollars/ oneEuroIs.USD;
    let yens = euros * oneEuroIs.JPY;
    return yens;
}
//Funcion para convertir euro en dollar

function fromEuroToDollar (euros){
    return euros * oneEuroIs.USD
}
console.log(fromEuroToDollar(3.5));

function fromYenToPound(yens){
    let euros = yens / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

module.exports =  { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }