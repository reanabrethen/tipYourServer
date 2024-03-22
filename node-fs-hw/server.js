const http = require('http')
const fs = require('fs')

http   
    .createServer(function(request, response){
        if(request.url === '/create-directory'){
            fs.mkdir('content', (error)=>{
                if(error){
                    response.end(error)
                }else{
                    response.end('content folder created')
                }
            })
        }else if(request.url === '/create-text'){
            fs.writeFile('randomText.txt',(error)=>{
                if(error){
                    response.end(error)
                }else{
                    response.end('randomtext.txt created')
                }
            })
        }else if(request.url === '/new-folder-and-file'){
            fs.mkdir('new folder', (error)=>{
                if(error){
                    response.end(error)
                }else{
                    response.end('new folder created')
                }
                fs.writeFile('verbage.txt', (error)=>{
                    if(error){
                        response.end(error)
                    }else{
                        response.end('verbage.txt created')
                    }
                })
            })
        } setTimeout(()=>{
            fs.unlinkSync('./content/verbage.txt')
            fs.rmdir('content', (error)=>{
                if(error){
                    response.end(error)
                }else{
                    response.end('content folder removed')
                }
            }, 7000)
        })
    })
    .listen(3000, function(){
        console.log('Server Started!')
    })