import fetch from 'node-fetch';

function handleData(stock){

    if(stock.length === 0 || stock === null){
        return 'There is no stock data to handle.'
    }
    
    console.log('Input: '+ stock.date)
    console.log('Output:')
    console.log('Open: '+ stock.open)
    console.log('High: '+ stock.high)
    console.log('Low: '+ stock.low)
    console.log('Close: '+ stock.close)
}

async function get_request(){
    const url = 'https://jsonmock.hackerrank.com/api/stocks?date=5-January-2001&fields=open,high,close,low,date,rise';
    fetch(url).then(response=> response.json()).then(data=>{
        let stock_data = data['data'][0]
        handleData(stock_data);
    }).catch(error=>{
        return error;
    });
}

console.log(get_request())



