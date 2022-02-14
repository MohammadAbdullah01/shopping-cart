function numberUpdate(id, price, isIncreasing, priceId) {
    // catch the input value in number 
    let count = document.getElementById(id);
    let countValue = count.value;
    // if input click on plus/add btn then do increaseing 
    if (isIncreasing == true) {
        countValue = parseInt(count.value) + 1;
    }
    // if click on minus/decrease btn then do increaseing
    else if (parseInt(count.value) > 0) {
        countValue = parseInt(count.value) - 1;
    }
    // set the value of input with the new one 
    count.value = countValue;

    // catch the price id and set the price with gunnnn
    var priceId = document.getElementById(priceId);
    priceId.innerText = price * parseInt(count.value);
    totalPriceCalculation();
}
function getInputValue(id) {
    let identifier = document.getElementById(id);
    let innerText = identifier.value;
    let innerValue = parseFloat(innerText);
    return innerValue;
}

function totalPriceCalculation() {
    /* let subTotal = document.getElementById("sub-total");
    let tax = document.getElementById("tax");
    let total = document.getElementById("total");

    let mobileId = document.getElementById("mobile-amount");
    let mobileTotalPrice = parseFloat(mobileId.innerText);
    let caseId = document.getElementById("case-amount");
    let caseTotalPrice = parseFloat(caseId.innerText);

    let subTotalPrice = mobileTotalPrice + caseTotalPrice;
    subTotal.innerText = subTotalPrice;
    let taxAmount = subTotalPrice / 10;
    tax.innerText = taxAmount;
    let totalPrice = subTotalPrice + taxAmount;
    total.innerText = totalPrice;*/

    let mobileTotal = getInputValue("mobile-number") * 1229;
    let caseTotal = getInputValue("case-number") * 59;
    let subTotal = mobileTotal + caseTotal;
    let tax = subTotal / 10
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = subTotal + tax;
}
// for mobile addition
document.getElementById("phone-increase-btn").addEventListener("click", function () {
    numberUpdate("mobile-number", 1229, true, "mobile-amount");
})
// for mobile minus 
document.getElementById("phone-decrease-btn").addEventListener("click", function () {
    numberUpdate("mobile-number", 1229, false, "mobile-amount");
})


// for case addition
document.getElementById("increase-btn").addEventListener("click", function (event) {
    numberUpdate("case-number", 59, true, "case-amount");
})
// for case minus 
document.getElementById("decrease-btn").addEventListener("click", function () {
    numberUpdate("case-number", 59, false, "case-amount");
})

