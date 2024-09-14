document.getElementById('generateInputs').addEventListener('click', function () {
    const numValues = document.getElementById('numValues').value;
    const inputFields = document.getElementById('inputFields');

    inputFields.innerHTML = '';

    for (let i = 0; i < numValues; i++) {
        const inputGroup = document.createElement('div');
        inputGroup.classList.add('input-group');

        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.placeholder = `Value ${i + 1}`;
        numberInput.classList.add('number-input');
        inputGroup.appendChild(numberInput);

        if (i < numValues - 1) {
            const operatorSelect = document.createElement('select');
            operatorSelect.classList.add('operator-input');

            const operators = ['+', '-', '*', '/'];
            operators.forEach(op => {
                const option = document.createElement('option');
                option.value = op;
                option.textContent = op;
                operatorSelect.appendChild(option);
            });

            inputGroup.appendChild(operatorSelect);
        }

        inputFields.appendChild(inputGroup);
    }
});

document.getElementById('calculate').addEventListener('click', function () {
    const numberInputs = document.querySelectorAll('.number-input');
    const operatorInputs = document.querySelectorAll('.operator-input');
    let result = parseFloat(numberInputs[0].value);

    for (let i = 0; i < operatorInputs.length; i++) {
        const operator = operatorInputs[i].value;
        const nextValue = parseFloat(numberInputs[i + 1].value);

        switch (operator) {
            case '+':
                result += nextValue;
                break;
            case '-':
                result -= nextValue;
                break;
            case '*':
                result *= nextValue;
                break;
            case '/':
                result /= nextValue;
                break;
            default:
                alert('Invalid operator!');
                return;
        }
    }

    document.getElementById('result').textContent = result;
});
