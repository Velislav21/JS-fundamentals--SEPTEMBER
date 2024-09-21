function destination(input) {

    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let matches = input.matchAll(pattern);
    let destinations = []
    let sum = 0;
    for (let match of matches) {
        if (match) {
            destinations.push(match[2])
            sum += match.groups.destination.length
        }
    }
    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${sum}`)
}
destination(("ThisIs some InvalidInput"))