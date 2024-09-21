function manageCollection(input) {
    let collection = new Map();
    let numberOfPieces = parseInt(input[0]);

    for (let i = 1; i <= numberOfPieces; i++) {
        let [piece, composer, key] = input[i].split("|");
        collection.set(piece, { composer, key });
    }

    for (let i = numberOfPieces + 1; i < input.length; i++) {
        if (input[i] === "Stop") break;

        let [command, piece, detail1, detail2] = input[i].split("|");

        switch (command) {
            case "Add":
                if (collection.has(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    collection.set(piece, { composer: detail1, key: detail2 });
                    console.log(`${piece} by ${detail1} in ${detail2} added to the collection!`);
                }
                break;
            case "Remove":
                if (collection.has(piece)) {
                    collection.delete(piece);
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                if (collection.has(piece)) {
                    collection.get(piece).key = detail1;
                    console.log(`Changed the key of ${piece} to ${detail1}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
    }
    collection.forEach((value, key) => {
        console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`);
    });
}
manageCollection([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',

    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])