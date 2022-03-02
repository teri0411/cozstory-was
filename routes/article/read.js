'use strict'

const { readAll, readOne } = require('../../model')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    try{
      const result = await readAll(this.mongo);
      const lastUpdate = new Date();
     // console.log('readAll result');
     // console.log(result);
    //200 : success, 404 : not found

      if(result === []){
        return reply
        .code(404)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(`<h1><center>글이 없습니다</center></h1>`);
      } else {
        return reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(result);
      }
  }  catch (error) {
      return reply
      .code(500)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(`<h1><center>글이 없습니다</center></h1>`);
    }
})


  app.get('/:id', async function (request, reply) {
    const aid = request.params.id;
    try {
      const result = await readOne(this.mongo, aid);
      return reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(result);
  }   catch (error) {
      return reply
        .code(500)
        .header('Content-Type', 'application/html; charset=utf-8')
        .send(`<h1><center>요청을 처리하던 중에 서버에서 오류가 발생하였습니다.</h1></center>`);
  }
})
}