function sortArr2(arr: string[]) {

    const sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'))
}
sortArr(['alpha',
    'beta',
    'gamma'])