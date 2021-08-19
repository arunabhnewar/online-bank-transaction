function getInputValue(inputId) {
    // debugger;
    // get the input------------------->
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear the deposit input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    // update the  current total field---------------->
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    // add between previous input amount and new input---------->
    totalElement.innerText = previousTotal + amount;

}

function getCurrentBalance() {
    // get user current balance-------->
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    // update user current balance----------->
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();

    // condition----------->
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// handle deposit event button------------------>
document.getElementById('deposit-btn').addEventListener('click', function () {

    // call get input value function--------------->
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {

        // call the get update total field function--------------->
        updateTotalField('deposit-total', depositAmount);

        // call the update balance function------------->
        updateBalance(depositAmount, true);
    }
});


// handle withdraw event button------------------>
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // call get withdraw value function--------------->
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {

        // call the get update total field function--------------->
        updateTotalField('withdraw-total', withdrawAmount);

        // call the update balance function------------->
        updateBalance(withdrawAmount, false);
    }
    else if (withdrawAmount > currentBalance) {
        console.log("You can't withdraw more than you have in your account")
    }
});