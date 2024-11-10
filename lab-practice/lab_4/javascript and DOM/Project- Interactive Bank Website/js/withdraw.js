// Step 1: Add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function() {
    // Step 2: Get the withdraw amount from the input field
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Validation: Check if the input is a valid number and greater than 0
    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }

    // Step 3: Get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step 4: Update the withdraw total
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal.toFixed(2);

    // Step 5: Get the current balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step 6: Check if the withdrawal amount is less than or equal to the balance
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Insufficient funds.");
        return;
    }

    // Step 7: Subtract the withdrawal amount from the balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal.toFixed(2);

    // Step 8: Clear the withdrawal field
    withdrawField.value = '';
});

















// /*
// 1. add event handler with the withdraw button
// 2. get the withdraw amount from the input field
// */

// // step-1
// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     // step-2: get the deposit amount from the deposit input filed
//         // FOr input field use .value to the value inside the input field
//         const depositField = document.getElementById('withdraw');
//         const newDepositAmountString = depositField.value;
//         const newDepositAmount = parseFloat(newDepositAmountString);
//         // console.log(typeof newDepositAmount);
        
        
//         //step-3: get the current deposit total
//             // for non-input(element other than input, textarea) use innerText to get the text
//         const depositTotalElement = document.getElementById('deposit-total');
//         const previousDepositTotalString = depositTotalElement.innerText;
//         const previousDepositTotal = parseFloat(previousDepositTotalString);
    
//         // step-4: add numbers to set the total deposit
//         const currentDepositTotal = previousDepositTotal + newDepositAmount;
    
//         depositTotalElement.innerText = currentDepositTotal;
    
//         // step-5: get balance current total
//         const balanceTotalElement = document.getElementById('balance-total');
//         const previousBalanceTotalString = balanceTotalElement.innerText;
//         const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
//         // step -6: calculate current total balance
//         const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//         // set the balance total
//         balanceTotalElement.innerText = currentBalanceTotal;
    
//         // step-7: clear the deposit field
//         depositField.value = '';
// })

