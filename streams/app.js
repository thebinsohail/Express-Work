const fs= require('fs');
const server= require('http').createServer();

server.on('request',(req,res)=>{

        fs.readFile('qualifying.txt',(err,data)=>{

            if(err){
                console.log(err);
            }

                else{
                    
                    res.end(data);

                }
        });

});

server.listen(3000,'localhost',(err)=>{
    console.log('Server is running');

    if(err)console.log(err);
});