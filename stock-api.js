import fetch from 'node-fetch';

async function get_request(){
    const url = 'https://jsonmock.hackerrank.com/api/stocks?date=5-January-2001&fields=open,high,close,low,date,rise';
    fetch(url).then(response=> response.json()).then(data=>{
        console.log(data);
        }).catch(error=>{
            return error;
        });
}

console.log(get_request())



