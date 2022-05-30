import fetch from 'node-fetch';

async function get_request(){
    const url = 'https://jsonmock.hackerrank.com/api/stocks?date=5-January-2001&fields=open,high,close,low,date,rise';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}

console.log(get_request())



