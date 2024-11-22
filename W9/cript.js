function calculate(operator) {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    resultElement.textContent = '';
    errorElement.textContent = '';

    if (num1 === '' || num2 === '') {
      errorElement.textContent = 'Both inputs are required!';
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let result;

    switch (operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          errorElement.textContent = 'Cannot divide by zero!';
          return;
        }
        result = n1 / n2;
        break;
      default:
        errorElement.textContent = 'Invalid operation!';
        return;
    }
    result = Math.round(result * 100) / 100;
    resultElement.textContent = 'Result: '+ result;
  }