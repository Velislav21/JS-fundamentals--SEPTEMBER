function sortArr(arr) {
    var sortedArr = arr.sort(function (a, b) { return a.length - b.length || a.localeCompare(b); });
    console.log(sortedArr.join('\n'));
}
sortArr(['alpha',
    'beta',
    'gamma']);
