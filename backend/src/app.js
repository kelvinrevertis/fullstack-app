const express = require('express')

class App{

    constructor(){
        this.server = express()
    }
    

/*
GET= Buscar 
DELETE = Deletar 
PUT = Alterar 
POST = Criar
*/

app.get('', (request,response)=>{
    return response.send('Hello World, teste')
})
}