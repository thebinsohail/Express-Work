const fs= require('fs');
const server= require('http').createServer();

server.on('request',(req,res)=>{

    const readableStream=fs.createReadStream('qualifying.txt');

    readableStream.pipe(res);

});

server.listen(3000,'localhost',(err)=>{
    console.log('Server is running');

    if(err)console.log(err);
});