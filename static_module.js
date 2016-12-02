module.exports = function(request, response){
    var fs = require('fs');
    var http = require('http');
    url = request.url;
    if(url.indexOf("stylesheets") != -1){
        var str = url.substring(1, url.length);
        fs.readFile(str, 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
        return true;
    }
    else if(url.indexOf("images") != -1){
        var str = url.substring(1, url.length);
        var type = url.substring(url.lastIndexOf(".")+1, url.length);
        fs.readFile(str, function(errors, contents){
            console.log(type);
            response.writeHead(200, {'Content-type': 'image/' + type});
            response.write(contents);
            response.end();
        });
        return true;
    }
    else if(url.indexOf("javascript") != -1){
        var str = url.substring(1, url.length);
        fs.readFile(str, function(errors, contents){
            console.log(type);
            response.writeHead(200, {'Content-type': 'text/javascript'});
            response.write(contents);
            response.end();
        });
        return true;
    }
    return false;
}
