'use strict'

const { deleteOne } = require('../../model')
//const FILL_ME_IN = require('dotenv').config()

module.exports = async function (app, opts) {
  app.delete('/:id', async function (request, reply) {
    const id = request.params.id;
    const lastUpdate = new Date();
    try {
      const result = await deleteOne(this.mongo, id);
      if (!result.value) {
      return reply
        .code(204)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({"value": null, "ok": 1});
  }   

  else {
    return reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(result, {"ok": 1});
  }
} catch (error) {
  return reply
    .code(500)
    .header('Content-Type', 'application/html; charset=utf-8')
    .send(`<h1><center>요청을 처리하던 중에 서버에서 오류가 발생하였습니다.</h1></center>`)
} 
})
}

