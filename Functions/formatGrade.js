function formatGrade(grade) {

    let text = " "
    if (grade < 3) {
        text = "Fail (2)"
    } else if (grade >= 3 && grade < 3.50) {
        text = `Poor (${grade.toFixed(2)})`

    } else if (grade >= 3.50 && grade < 4.50) {
        text = `Good (${grade.toFixed(2)})`

    } else if (grade >= 4.50 && grade < 5.50) {
        text = `Very good (${grade.toFixed(2)})`
        
    } else {
        text = `Excellent (${grade.toFixed(2)})`
    }
    console.log(text)
}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(5.50)
formatGrade(5.49)