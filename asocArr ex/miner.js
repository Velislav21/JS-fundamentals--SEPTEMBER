function miner (input){

    let resources = {}

    for (let i = 0; i < input.length; i++){
        if (i % 2 == 0){
            if (input[i] in resources){
                resources[input[i]] += Number(input[i + 1])
            }else {
                resources[input[i]] = Number(input[i + 1])
            }
        }
    }
    let entries = Object.entries(resources)
    for (let [resource, qty] of entries){
        console.log(`${resource} -> ${qty}`)
    }
}
miner([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])