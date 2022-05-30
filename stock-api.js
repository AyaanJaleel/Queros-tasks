import fetch from 'node-fetch';

function handleData(stock){
    //if stock data in null or incomplete, return error msg
    if(stock.length === 0 || stock === null){
        return 'There is no stock data to handle.'
    }
    // else, log the data
    console.log('Input: '+ stock.date)
    console.log('Output:')
    console.log('Open: '+ stock.open)
    console.log('High: '+ stock.high)
    console.log('Low: '+ stock.low)
    console.log('Close: '+ stock.close)
}

async function get_request(){
    // link to api data
    const url = 'https://jsonmock.hackerrank.com/api/stocks?date=5-January-2001&fields=open,high,close,low,date,rise';
    // fetching api data
    fetch(url).then(response=> response.json()).then(data=>{
        // if fetch is successful, save json data to variable
        let stock_data = data['data'][0]
        // funtion will print out the stock data in a human-readable way
        handleData(stock_data);
        // if any error while fetching, log the error
    }).catch(error=>{
        console.error(error);
    });
}

//calling async function
console.log(get_request())



