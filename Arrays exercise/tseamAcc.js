function steamAcc(arr) {

    let account = arr.shift()
    let newArr = []

    newArr.push(account)

    let splittedNewArr = (newArr[0].split(" "))


    for (let i = 0; i < arr.length; i++) {
        let splittingIndex = arr[i].split(" ");

        let command = splittingIndex[0];
        let game = splittingIndex[1];
        while (command !== "Play!") {

            switch (command) {
                case "Install":
                    if (!splittedNewArr.includes(game)){
                        splittedNewArr.push(game);
                    }
                    break;
                case "Uninstall":
                    if(splittedNewArr.includes(game)){
                        splittedNewArr.splice(1,1)
                    }
                    break;
                case "Update":
                    if(splittedNewArr.includes(game)){
                        splittedNewArr[splittedNewArr.length - 1] = game
                    }
                    break;
                case "Expansion":
                    break;
            }
        }
    }
}
steamAcc(['CS WoW Diablo',

        'Install LoL',

        'Uninstall WoW',

        'Update Diablo',

        'Expansion CS-Go',

        'Play!'])