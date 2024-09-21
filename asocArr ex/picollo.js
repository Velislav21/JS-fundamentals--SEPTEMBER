function picollo (input){

    let parkingLot = {};
    for (let line of input){
        let [action, number] = line.split(', ');
        
        if (action !== 'OUT'){
            parkingLot[number] = true 
        }else {
            delete parkingLot[number]
        }
    }
    let entries = Object.entries(parkingLot).sort((a, b) => a[0].localeCompare(b[0]))
    
    
    if (Object.keys(parkingLot).length == 0){
        return console.log( "Parking Lot is Empty")
    }
    for (let key of entries){
        console.log(key[0])
    }
}
picollo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])