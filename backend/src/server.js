const express = require('express')

const app = express()
/*
GET= Buscar 
DELETE = Deletar 
PUT = Alterar 
POST = Criar
*/

app.get('', (request,response)=>{
    return response.send('ok')
})

app.listen(3000, ()=> {
    console.log('Serviço rodando  na porta 3000')
})