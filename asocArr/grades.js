function grades(input) {

    let map = new Map()
    let obj = {};
    for (let student of input) {

        let names = student.split(' ').shift();
        let grades = student.split(' ').splice(1, student.length).map(Number);

        let intValue = 0;
        let avgGrades = grades.reduce((acc, currValue) => acc + currValue, intValue);
        let avgGrade = avgGrades / grades.length;
        
        if (!map.has(names)) {
            map.set(names, avgGrade);
            obj[names] = avgGrade.toFixed(2) 

        } else {
            let currGrade = Number(map.get(names));
            let newGrade = Number((currGrade + avgGrade) / grades.length);
            map.set(names, newGrade);
            obj[names] = newGrade.toFixed(2) 
        }
    }

    let sorted = Object.entries(obj)
    sorted.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [key, value] of sorted){
        console.log(`${key}: ${value}`)
    }

}
grades(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3'])