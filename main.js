let distance = 100
let age = 66

const priceKmEuro = 0.21
const u18DiscountPerc = 0.2
const o65DiscountPerc = 0.4

let price = distance * priceKmEuro

let discountedPriceU18 = price - (price * u18DiscountPerc)

let discountedPriceO65 = price - (price * o65DiscountPerc)

console.log(age)

if(age < 18){
    totalPrice = price - (price * u18DiscountPerc)

} else if(age > 65){
    totalPrice = price - (price * o65DiscountPerc)

} else{
    totalPrice = price

}


// switch (age) {
//     case age < 18:
        
//         totalPrice = price - (price * u18DiscountPerc)
//         break

//     case (age > 65):
//         totalPrice = price - (price * o65DiscountPerc)
        
//         break

//     default:
//         totalPrice = price
// }



console.log(totalPrice)

function outputPrice(){

}