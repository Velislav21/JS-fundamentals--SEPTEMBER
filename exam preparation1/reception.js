function reception(input) {

    let studentsCount = Number(input.pop())
    let studentsHelpedPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let hoursNeeded = 0;


    for (let i = 1; i <= 24; i++) {

        if (i % 4 === 0) {
            hoursNeeded++
            continue;
        }
        studentsCount -= studentsHelpedPerHour;
        hoursNeeded++;
        if (studentsCount <= 0) {
            console.log(`Time needed: ${Math.ceil(hoursNeeded)}h.`)
            return
        }
    }
}
reception(['5', '6', '4', '20'])
reception(['3', '2', '5', '40'])
reception(['1', '2', '3', '45'])