const { log } = require("console");
const fs = require("fs");
function readHttpLikeInput(){
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
        console.log(
`HTTP/1.1 ${statusCode} ${statusMessage}
Server: Apache/2.2.14 (Win32)
Content-Length: 34
Connection: Closed
Content-Type: text/html; charset=utf-8
                    
<h1 style="color:red">ERROR</h1>`);
    }else if(statusCode==200){
        console.log(
`HTTP/1.1 ${statusCode} ${statusMessage}
Server: Apache/2.2.14 (Win32)
Content-Length: 34
Connection: Closed
Content-Type: text/html; charset=utf-8
            
<h1 style="color:green">FOUND</h1>`);
    }else if(statusCode==500){
        console.log(
`HTTP/1.1 ${statusCode} ${statusMessage}
Server: Apache/2.2.14 (Win32)
Content-Length: 34
Connection: Closed
Content-Type: text/html; charset=utf-8
                        
<h1 style="color:green">ERROR</h1>`
        )
    }
}
function processHttpRequest($method, $uri, $headers, $body) {
    try {
        const text = fs.readFileSync('./password.txt',{ encoding: 'utf8', flag: 'r' }).toString().replace(/\r/g, "").split("\n");
        const login = text[0].split(":");
        const password = text[1].split(":");
        // console.log(login);
        // console.log(password);
        const a = $body.split("&");
        const login1 = a[0].split("=");
        const password1 = a[1].split("=");
        // console.log(password1);
        // console.log(login1);
        if($uri!="/api/checkLoginAndPassword"){
            outputHttpResponse(404,"NotFound",$headers,$body);
        }else if(login[1]==login1[1] && password[1]==password1[1]){
            outputHttpResponse(200,"OK",$headers,$body);
        }
    } catch (err) {
      
        outputHttpResponse(500,`Internal Server Error`,$headers,$body);
      
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
   
