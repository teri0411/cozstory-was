'use strict'

const { createOne } = require('../../model')

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    const lastUpdate = new Date();
    const data =request.body
    const result = await createOne(this.mongo, data)
      if (data){
        return reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            id: result.insertedId
        });
      } 
      
      else {
        return reply
        .code(404)
        .header('Content-Type', 'application/html; charset=utf-8')
        .send(`<h1><center>error: Not Found</center></h1>`)
      }
    } 
     
    )
    }
    
