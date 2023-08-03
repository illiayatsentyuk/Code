// этот файл надо будет дописать...

// не обращайте на эту функцию внимания 
// она нужна для того чтобы правильно читать входные данные
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

// вот эту функцию собственно надо написать
function parseTcpStringAsHttpRequest(string) { 
  return { 
    method: "POST", 
    uri : "/doc/test", 
    "headers": {
        "Host": "shpp.me",
        "Accept": "image/gif, image/jpeg, */*",
        "Accept-Language": "en-us",
        "Accept-Encoding": "gzip, deflate",
        "User-Agent": "Mozilla/4.0",
        "Content-Length": "35"
    }, 
    body :"bookId=12345&author=Tan+Ah+Teck", 
  }; 
}

http = parseTcpStringAsHttpRequest(contents); 
console.log(JSON.stringify(http, undefined, 2));