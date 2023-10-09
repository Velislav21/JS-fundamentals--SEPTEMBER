function repeat(string, repetitions) {

    let result = " ";
    for (let i = 0; i < repetitions; i++) {
        result += string
    }
    return result
}

repeat("abc", 3)
repeat("String", 2)
