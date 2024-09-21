function loadingBar(num) {

    let goal = 100;
    let printLine = `${num}% [`

    for (let i = 0; i < num; i += 10) {
        printLine += '%';
    }
    let repeated = '.'.repeat((goal - num) / 10)
    printLine += `${repeated}]`

    if(num == goal){
        console.log("100% Complete!")
    }else {
        console.log(printLine)
        console.log("Still loading...")
    }
}
loadingBar(30)
//loadingBar()