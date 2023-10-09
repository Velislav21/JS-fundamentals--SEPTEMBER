function commonEl (arr1, arr2){

    for (let i = 0; i < arr1.length; i++){

        let element = arr1[i];

        if (arr1.includes(element) && arr2.includes(element)){
            console.log(element)
        }
    }

}
commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])