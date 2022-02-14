function update(inputId, isIncreasing, priceId, amount) {
    let inputsId = document.getElementById(inputId);
    let inputText = inputsId.value;
    let inputValue = parseFloat(inputText);

    if (isIncreasing == true) {
        inputsId.value = inputValue + 1;
    }
    else if (inputValue > 0) {
        inputsId.value = inputValue - 1;
    }

    let price = document.getElementById(priceId);
    price.innerText = amount * inputsId.value;
    totalCalculation()
}

function getInput(id) {
    let identifier = document.getElementById(id);
    let idText = identifier.value;
    let idInNumber = parseFloat(idText);
    return idInNumber;
}
function totalCalculation() {
    let mobilePrice = getInput("mobile-quantity") * 1219;
    let casePrice = getInput("case-quantity") * 59;
    let totalPrice = mobilePrice + casePrice;
    let tax = totalPrice / 10;
    document.getElementById("sub-total").innerText = totalPrice;
    document.getElementById("tax").innerText = totalPrice / 10;
    document.getElementById("total").innerText = totalPrice + tax
}


document.getElementById("mobile-increase-btn").addEventListener("click", function () {
    update("mobile-quantity", true, "mobile-price", 1219)
})
document.getElementById("mobile-decrease-btn").addEventListener("click", function () {
    update("mobile-quantity", false, "mobile-price", 1219);
})
document.getElementById("case-increase-btn").addEventListener("click", function () {
    update("case-quantity", true, "case-price", 59)
})
document.getElementById("case-decrease-btn").addEventListener("click", function () {
    update("case-quantity", false, "case-price", 59);
})