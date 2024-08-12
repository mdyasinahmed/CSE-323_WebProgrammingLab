/*
1. add event handler with the withdraw button
2. get the withdraw amount from the input field
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the withdraw amount from the withdraw input filed
        // FOr input field use .value to the value inside the input field
        const withdrawField = document.getElementById('withdraw');
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount = parseFloat(newWithdrawAmountString);
        // console.log(typeof newWithdrawAmount);
        
        
        //step-3: get the current withdraw total
            // for non-input(element other than input, textarea) use innerText to get the text
        const withdrawTotalElement = document.getElementById('withdraw-total');
        const previousWithdrawTotalString = withdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
        // step-4: add numbers to set the total deposit
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    
        withdrawTotalElement.innerText = currentWithdrawTotal;
    
        // step-5: get balance current total
        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
        // step -6: calculate current total balance
        const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        // set the balance total
        balanceTotalElement.innerText = currentBalanceTotal;
        //
    
        // step-7: clear the withdraw field
        withdrawField.value = '';
})
