var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res)
{
    if(req.url=="/")
    {
        let result=fs.existsSync("inddex.html");
        if(result)
        {
            res.writeHead(200)
            res.end("True");
        }
        else
        {
            res.writeHead(404);
            res.end("404 Not Found");
        }
    }

});
server.listen(3000);
console.log("Server running");