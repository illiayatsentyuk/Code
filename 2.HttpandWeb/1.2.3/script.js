
// function readHttpLikeInput(){
//     var fs = require("fs");
//     var res = "";
//     var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
//     let was10 = 0;
//     for(;;){ 
//         try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
//         if(buffer[0] === 10 || buffer[0] === 13) {
//             if (was10 > 10) 
//                 break;
//             was10++;
//         } else 
//            was10 = 0;
//         res += new String(buffer);
//     }

//     return res;
// }
// let contents = readHttpLikeInput();
function outputHttpResponse(statusCode, statusMessage, headers, body) {
    const date = new Date().toGMTString();
    console.log(`HTTP/1.1 ${statusCode} ${statusMessage}`);
    console.log(`Date: ${date}`);
    console.log(`Server: Apache/2.2.14 (Win32)`);
    console.log(`Content-Length: ${body.length}`);
    console.log(`Connection: Closed`);
    console.log(`Content-Type: text/html; charset=utf-8`);
    console.log("\n" + body);
}
   
function processHttpRequest(method, uri, headers, body) {
    if(method === 'GET' && uri.startsWith('/sum')){
        let a = uri.split("?");
        let b = a[1].split("=");
        b = b[1].split(",");
        a = b.map(Number);
        let summ = 0;
        for(let i = 0; i < a.length; i++){
            summ+=a[i];
        }
        outputHttpResponse(200,"OK",headers,body);
        console.log("\n"+summ)
    }else if(!uri.startsWith("/sum")){
        outputHttpResponse(404,"Not Fund",headers,body);
    }else{
        outputHttpResponse(400,"Bad Request",headers,body);
    }
}
   
function parseTcpStringAsHttpRequest(string) { 
    return { 
      method: "GET", 
      uri:"/sum?nums=1,2,3",
      "headers": {
          "Host": "student.shpp.me",
          "Accept": "image/gif, image/jpeg, */*",
          "Accept-Language": "en-us",
          "Accept-Encoding": "gzip, deflate",
          "User-Agent": "Mozilla/4.0",
          "Content-Length": "35"
      }, 
      body :"bookId=12345&author=Tan+Ah+Teck", 
    }; 
}

http = parseTcpStringAsHttpRequest();
processHttpRequest(http.method, http.uri, http.headers, http.body);