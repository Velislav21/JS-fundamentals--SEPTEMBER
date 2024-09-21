function calc(num, num2, operator) {

    let result = 0;
    switch (operator) {
        case "+": result = num + num2;
            break;
        case "-": result = num - num2;
            break;
        case "*": result = num * num2;
            break;
        case "/": result = num / num2;
            break;
        case "%": result = num % num2;
            break;
        case "**": result = num ** num2;
            break;
    }
    console.log(result)
}
calc(5, 6, '+')