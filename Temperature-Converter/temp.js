function convertTemperature() {
    // Get user input
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    
    // Check for valid input
    if (isNaN(inputTemp)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Perform temperature conversion
    let result;
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (inputTemp * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (inputTemp - 32) * 5/9;
    } else {
        result = inputTemp; // Default to no conversion if same units are selected
    }
    const resultDiv =  document.getElementById('result');

    // Display the result
    resultDiv.innerText = `Result: ${result.toFixed(2)} ${toUnit}`;

     // Show the result
    resultDiv.style.display = 'block';
}
