function shoot(input) {

    let targets = input.shift().split(' ').map(Number)

    let currTargetValue = 0
    let shots = 0

    let updatedTargets = []

    for (let index of input) {
        index = Number(index);

        if (targets[index]) {

            currTargetValue = targets[index];
            targets[index] = -1;
            shots++;

            for (let target of targets) {
                // console.log(targets[index])
                if (target !== -1){

                    if (target > currTargetValue) {
                        target -= currTargetValue
                        updatedTargets.push(target)
                        continue
                    } else if (target <= currTargetValue) {
                        target += currTargetValue
                        updatedTargets.push(target)
                        continue;
                    }
                }
            }

        }
        targets = updatedTargets
    }
    console.log(targets, shots)
}
shoot((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]))