function login(input){

    let index = 0
    let username = input.shift()

    let wrongPasswordsCounter = 0;
    let currentPassword = ""

    let correctPassword = username.split("").reverse().join("")
 
    for (let i = 0; i <= input.length; i++){
        currentPassword = input[index]
        index++
        if (currentPassword === correctPassword){
            console.log(`User ${username} logged in.`)
            break;
        } else {
            console.log(`Incorrect password. Try again.`)
            wrongPasswordsCounter++
        }

    }
}
login(['Acer','login','go','let me in','recA']) 