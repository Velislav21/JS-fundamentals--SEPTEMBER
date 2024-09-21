function meetings(input){

    let obj = {};

    for (let line of input){

        let [weekDay, name] = line.split(' ');

        if (obj.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);

        } else {
            obj[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }
    for (let meeting in obj){
        console.log(`${meeting} -> ${obj[meeting]}`)
    }
}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])