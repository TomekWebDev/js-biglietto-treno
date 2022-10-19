/********************************
FIRST METHOD - MANUAL INPUT - ELSE IF
********************************/

// let age = 66
// let distance = 20


// const priceKmEuro = 0.21
// const u18DiscountPerc = 0.2
// const o65DiscountPerc = 0.4

// let price = distance * priceKmEuro

// let discountedPriceU18 = price - (price * u18DiscountPerc)

// let discountedPriceO65 = price - (price * o65DiscountPerc)

// console.log(age)

// if(age < 18){
//     totalPrice = price - (price * u18DiscountPerc)

// } else if(age > 65){
//     totalPrice = price - (price * o65DiscountPerc)

// } else{
//     totalPrice = price

// }

/********************************
SECOND METHOD - FORM INPUT - ELSE IF
********************************/

// const priceKmEuro = 0.21
// const u18DiscountPerc = 0.2
// const o65DiscountPerc = 0.4

// function calculateTotalPrice(){
//     // Selecting the input elements and get the values
//     var distanceValue = document.getElementById("distance").value;
//     console.log("check distance", distanceValue)

//     var ageValue = document.getElementById("age").value;
//     console.log("check age", ageValue)
    
//     let price = distanceValue * priceKmEuro


//     if(ageValue < 18){
//         totalPrice = price - (price * u18DiscountPerc)

//     } else if(ageValue > 65){
//         totalPrice = price - (price * o65DiscountPerc)

//     } else{
//         totalPrice = price

//     }

//     console.log(totalPrice)
// }

/********************************
THIRD METHOD - SWITCH / CASE 
********************************/

const priceKmEuro = 0.21
const u18DiscountPerc = 0.2
const o65DiscountPerc = 0.4

function calculateTotalPrice(){
    // Selecting the input element and get its value 
    var distanceValue = document.getElementById("distance").value;
    console.log("check distance", distanceValue)

    var ageValue = document.getElementById("age").value;
    console.log("check age", ageValue)
    
    let price = distanceValue * priceKmEuro

    if(ageValue < 18){
        let ageUnderOver = "under18"

    } else(ageValue > 65){
        ageUnderOver = "over65"

    }

    console.log("check ageUnderOver variable", ageUnderOver)


    switch(ageUnderOver){
        case under18:
        totalPrice = price - (price * u18DiscountPerc)

        case over65:
        totalPrice = price - (price * u18DiscountPerc)
    }

    console.log(totalPrice)
}
