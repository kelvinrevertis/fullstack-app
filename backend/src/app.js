//const express = require('express')
import express from 'express'

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

/*app.get('', (request,response)=>{
    return response.send('Hello World, teste')
})*/
}

export default new App().server