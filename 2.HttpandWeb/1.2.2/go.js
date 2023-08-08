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
        method: method,
        uri: uri,
        "headers": headers,
        body: requestBody
    }; 
}

http = parseTcpStringAsHttpRequest(contents); 
console.log(JSON.stringify(http, undefined, 2));
