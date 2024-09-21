function memoryGame(input) {

    let sequence = input.shift().split(' ')

    let line = input.shift();
    let turns = 0;
    while (line != "end") {
        turns++
        let midIndex = sequence.length / 2;
        let [firstIndex, secondIndex] = line.split(" ")

        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        let biggerIndex = 0;
        let smallerIndex = 0;

        if (firstIndex !== secondIndex) {

            if (firstIndex > secondIndex) {
                biggerIndex = firstIndex;
                smallerIndex = secondIndex
            } else {
                biggerIndex = secondIndex;
                smallerIndex = firstIndex
            }
        }

        if (firstIndex == secondIndex || firstIndex < 0 || secondIndex < 0) {
            let insertedElement = `-${turns}a`;
            sequence.splice(midIndex, 0, insertedElement, insertedElement);
            console.log(`Invalid input! Adding additional elements to the board`);
            line = input.shift()
            continue;
        }
        if (sequence[firstIndex] == sequence[secondIndex]) {
            if (sequence.length == 0) {
                console.log(`You have won in ${turns - 1} turns!`)
                return;
            }
            let char = sequence[firstIndex]
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);

            let firstOccurence = sequence.indexOf(char);
            sequence.splice(firstOccurence, 1);

            let secondOccurence = sequence.indexOf(char);
            sequence.splice(secondOccurence, 1);
        }else {
            console.log(`Try again!`)
        }

        line = input.shift();
    }
    if (line == "end" && sequence.length >= 1) {
        console.log(`Sorry you lose :(`)
        console.log(sequence.join(' '))
    }

}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])