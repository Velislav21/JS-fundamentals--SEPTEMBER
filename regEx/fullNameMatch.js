function nameMatch(input){

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    
    let result = input.match(pattern)
    console.log(result.join(' '))
}
nameMatch('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov')