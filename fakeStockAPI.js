export function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: getPrice(),/* return a random number between 0 and 3 to two decimal places */ 
        time: getTimestamp(),/* return a timestamp in this format: hh/mm/ss */
    }
}


function getPrice() {
    let price = Math.random() * 3
    return price.toFixed(2)
}

function getTimestamp() {
    let timestamp = new Date()
    return timestamp.toLocaleTimeString("en-GB")
}