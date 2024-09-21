function concert(input) {

    let line = input.shift();
    let list = {};
    let totalTime = 0;

    let time = {}
    while (line !== "Start!") {
        
        let tokens = line.split('; ')
        let command = tokens[0]
        let bandName = tokens[1]
        if (command == "Add") {           

            let members = tokens[2].split(', ')
            if (bandName in list) {

                members.forEach(member => {
                    if (!list[bandName].includes(member)) {
                        list[bandName].push(member)
                    }
                })
            } else {
                list[bandName] = []
                members.forEach(member => {
                    if (!list[bandName].includes(member)) {
                        list[bandName].push(member)
                    }
                })
            }

        } else if (command == "Play"){
            let currentBandTime = Number(tokens[2]);

            if (bandName in time){
                time[bandName][0] += currentBandTime
            }else {
                time[bandName] = []
                time[bandName].push(currentBandTime)
            }
            totalTime += currentBandTime
        }
        line = input.shift()
    }
    let listKeys = Object.keys(list)
    let timeKeys = Object.keys(time)

    console.log(`Total time: ${totalTime}`)
    if (listKeys.length > 0 && timeKeys.length > 0){

        for (let band in time){
            console.log(`${band} -> ${time[band]}`)
        }
        
        for (let band in list){
            console.log(band)
            for (let member of list[band]){
                console.log(`=> ${member}`)
            }
            break;
        }
    }
}
concert(["Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
"Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
"Play; The Beatles; 4569",
"Play; The Beatles; 2456",
"Play; The Beatles; 2975",
"Play; Queen; 1250",
"Play; Queen; -250",
"Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon",
"Play; Queen; 6000",
"Start!"])