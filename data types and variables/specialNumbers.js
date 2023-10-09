function specialNum(n) {

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let iAsString = String(i)
        sum += Number(iAsString)
        
    }
    console.log(sum)
}
specialNum(15)
console.log(`---------------`)
specialNum()

//for (let j = i; iAsString.length < n; j++) {
  //  sum += Number(i[j])
//}