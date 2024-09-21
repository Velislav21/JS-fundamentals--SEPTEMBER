function adAstra([input]) {

    let pattern = /([#|])(?<itemName>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;

    let totalCalls = 0;
    let items = []
    let matches = pattern.exec(input);

    while (matches != null) {

        let { itemName, expDate, cal } = matches.groups
        items.push({itemName, expDate, cal})        

        cal = Number(cal)
        totalCalls += cal
        matches = pattern.exec(input)
    }
    let lastingDays = Math.floor(totalCalls / 2000);
    console.log(`You have food to last you for: ${lastingDays} days!`);
    
    items.forEach(item => console.log(`Item: ${item.itemName}, Best before: ${item.expDate}, Nutrition: ${item.cal}`))
}
adAstra([

    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])