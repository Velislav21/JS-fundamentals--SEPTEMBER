function factorial(n1, n2) {

    let fac1 = calculateFactorial(n1)
    let fac2 = calculateFactorial(n2)

    function calculateFactorial(a) {
        let factorial = 1;

        for (let i = a; i > 1; i--) {
            factorial *= i
        }
        return factorial
    }


    let result = fac1 / fac2 
    console.log(result.toFixed(2))
}
factorial(5, 2)
factorial(6, 2) 