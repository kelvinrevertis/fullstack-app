//const express = require('express')
import express from 'express'
import mongoose from 'mongoose'

class App{

    constructor(){
        this.server = express()
    }
    
    database(){
        mongoose.connect('mongodb+srv://totalzero:iHDKdWXKHgTMl2GI@cluster0.jhuejl6.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
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