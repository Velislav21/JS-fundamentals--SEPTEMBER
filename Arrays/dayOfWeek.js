function days(index){

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let result = days[index - 1]
    if (result !== undefined){
        console.log(result)
    } else{
        console.log("Invalid day!")
    }

}
days(3)
days(4)