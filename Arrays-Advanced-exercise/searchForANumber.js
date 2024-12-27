function searchANum(arr, info) {

    let [elementsNeeded, deleteCount, searchedNumber] = info

    let manipulatedArr = arr.splice(0, elementsNeeded);

    for (let i = 0; i < deleteCount; i++) {
        manipulatedArr.shift()
    }

    let searchedNumberCount = 0;
    for (let num of manipulatedArr) {
        if (num == searchedNumber) {
            searchedNumberCount++
        }
    }
    console.log(`Number ${searchedNumber} occurs ${searchedNumberCount} times.`)
}
//searchANum([5, 2, 3, 4, 1, 6],[5, 2, 3])
//console.log("---------------------")
searchANum([7, 1, 5, 8, 2, 7],
    [3, 1, 5])