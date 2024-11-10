// step-1: add click event handler with the submit
document.getElementById('button-submit').addEventListener('click', function(){
    // console.log('submit button clicked');
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from a input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step -3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DO NOT COMPARE email password on the client side
    // step: verify email and password
    if((email === 'amar@bank.com') && (password === '1234')){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})