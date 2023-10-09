function intOrFloat(a, b, c){
    let result = a + b + c

    let intOrFloat = result % 1 == 0 ? `${result} - Integer` : `${result} - Float`
    console.log(intOrFloat)
}
intOrFloat(9, 100, 1.1);
console.log(`----------------`)
intOrFloat(100, 200, 300);