function calculate() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var operator = document.getElementById('operator').value;
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check for valid inputs
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Perform calculation based on the operator
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = (num1 * num2).toFixed(2);
            break;
        case '/':
            // Check for division by zero
            if (num2 === 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = (num1 / num2).toFixed(2);
            break;
        default:
            alert('Invalid operator. Please enter +, -, *, or /.');
            return;
    }

    // Display the result
    document.getElementById('result').innerText = 'Result: ' + result;
}
