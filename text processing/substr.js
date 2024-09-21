function substr(str, startIndex, elementsCount){

    let result = str.substring(startIndex, elementsCount + startIndex)
    console.log(result)
}
substr('SkipWord', 4, 7)