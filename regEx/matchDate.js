function matchDate([input]){

    let pattern = /(?<day>\d{2})(?<sep>[-./])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g;

    let match = pattern.exec(input)

    while (match !== null){

        let {day, month, year} = match.groups;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        
        match = pattern.exec(input)
    }
}
matchDate(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])