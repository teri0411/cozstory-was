'use strict'

const { updateOne } = require('../../model')

module.exports = async function (app, opts) {
  app.put('/:id', async function (request, reply) {
    const id = request.params.id;
    const lastUpdate = new Date();
    
    try{
      const result = await updateOne(this.mongo, id);
      //result값을 콘솔로 찍어보고 수정된 값인지 확인하고 
      //수정된 값이 아니라면 다시 데이터 베이스에서 수정된 값을 조회한다.
      if (result){
        return reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({"value" : result, "Ok" : 1 })
      } else {
        return reply
        .code(404)
        .header('Content-Type', 'application/html; charset=utf-8')
        .send({"error" : "Not Found" })
      }
    } catch (error) {
      return reply
        .code(500)
        .header('Content-Type', 'application/html; charset=utf-8')
        .send(`<h1><center>요청을 처리하던 중에 서버에서 오류가 발생하였습니다.</h1></center>`)
    } 
  })
}