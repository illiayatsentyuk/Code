function readHttpLikeInput(){
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for(;;){ 
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
        if(buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10) 
                break;
            was10++;
        } else 
           was10 = 0;
        res += new String(buffer);
    }

    return res;
}
   
let contents = readHttpLikeInput();
   
function outputHttpResponse(statusCode, statusMessage, headers, body,c) {
    if(statusCode==404){
        console.log(`HTTP/1.1 ${statusCode} ${statusMessage}
Date: Sun, 18 Oct 2012 10:36:20 GMT -- тут текущее время
Server: Apache/2.2.14 (Win32)
Connection: Closed
Content-Type: text/html; charset=utf-8
Content-Length: 2
    
not found`);
    }else if(statusCode==200){
        console.log(`HTTP/1.1 ${statusCode} ${statusMessage}
Server: Apache/2.2.14 (Win32)
Connection: Closed
Content-Type: text/html; charset=utf-8
Content-Length: 2

${c}`);
    }else if(statusCode==400){
        console.log(`HTTP/1.1 ${statusCode} ${statusMessage}
Server: Apache/2.2.14 (Win32)
Connection: Closed
Content-Type: text/html; charset=utf-8
Content-Length: 2

${c}`)
    }

}
   
function processHttpRequest($method, $uri, $headers, $body) {
    let uriStarts = $uri.split("?");
    let uriNums = uriStarts[1].split("=");
    uriNums = uriNums[1].split(",")
    let c = 0;
    for(let i = 0;i<uriNums.length;i++){
        c+=parseInt(uriNums[i]);
    }
    if(uriStarts[0]!="/sum"){
       outputHttpResponse(404,"NotFound",$headers,$body);
    }else if(!uriStarts[1].includes("nums") || $method!="GET"){
        outputHttpResponse(400,"Bad Request",$headers,$body);
    }else{
        outputHttpResponse(200,"OK",$headers,$body,c);
    }
}

function parseTcpStringAsHttpRequest(string) { 
    const lines = string.split('\n');
    const [method, uri, protocol] = lines[0].split(' ');
    const headers = {};
    let index = 1;
    while (lines[index] !== '') {
        const [key, value] = lines[index].split(': ');
        headers[key] = value;
        index++;
    }
    const requestBody = lines.slice(index + 1).join('');
    return {
        method:method,
        uri:uri,
        requestBody:requestBody,
        headers:headers
    }
}

   
http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.requestBody);
   
