function sorting(input){

    let tokens = input.toLowerCase().split(' ')
    let sortedTokens = tokens.sort((a, b) => a[0].localeCompare(b[0]))
    console.log(sortedTokens)
}
sorting('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')