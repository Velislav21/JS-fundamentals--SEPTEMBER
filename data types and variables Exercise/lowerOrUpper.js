function char(input) {

    //if (input.charCodeAt() <= 97) {
    //    console.log("upper-case")
    //} else {
    // console.log("lower-case")
    //}
    let upperCase = input.charCodeAt() <= 97 ? console.log("upper-case") : console.log("lower-case")
    console.log(upperCase)
}
char('L')