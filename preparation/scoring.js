function scoring(input){

    let studentsCount = Number(input.shift());
    let lecturesCountInCourse = Number(input.shift());
    let bonus = Number(input.shift());

    let maxBonusPoints = 0;
    let attendances = input.map(Number);
    let lecturesCountForResult = 0;
    for (let i = 0; i < studentsCount; i++){

        let currStudentBonusPoints = attendances[i] / lecturesCountInCourse * (5 + bonus)
        if (maxBonusPoints < currStudentBonusPoints){
            maxBonusPoints = currStudentBonusPoints
            lecturesCountForResult = attendances[i]
        }
        
    }
    console.log(`Max bonus: ${Math.ceil(maxBonusPoints)}.`)   
    console.log(`The student has attended ${lecturesCountForResult} lectures.`)   
}

scoring([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])