function race(input) {

    let pattern = /(#|$|%|\*|&)(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<code>\S+)/g

    for (let line of input) {

        let match = pattern.exec(line)

        if (match) {

            let { name, length, code } = match.groups
            length = Number(length)

            if (length == code.length) {
                let result = ''
                let codeAsChars = code.split('')
                for (let char of codeAsChars) {
                    let charCode = char.charCodeAt()

                    let charCodeForResult = String.fromCharCode(charCode + length)

                    result += charCodeForResult
                }
                console.log(`Coordinates found! ${name} -> ${result}`);
                return
            }
            console.log(`Nothing found!`)

        } else {
            console.log(`Nothing found!`)
        }
    }
}
race(["%GiacomoAgostini%=7!!hbqw",
    "&GeoffDuke*=6!!vjh]zi",
    "JoeyDunlop=10!!lkd,rwazdr",
    "Mike??Hailwood=5!![pliu",
    "#SteveHislop#=16!!df%TU[Tj(h!!TT[S "])

// race(["Ian6Hutchinson=7!!\(58ycb4",
//     "#MikeHailwood#!!'gfzxgu6768=11",
//     "slop%16!!plkdek/.8x11ddkc",
//     "$Steve$=9Hhffjh",
//     "*DavMolyneux*=15!!efgk#'_$&UYV%h%",

//     "RichardQ^uayle=16!!fr5de5kd"])