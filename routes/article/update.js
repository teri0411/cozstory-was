'use strict'

const { updateOne } = require('../../model')
const FILL_ME_IN = 'FILL_ME_IN 대신 다른 값을 채워넣으세요'

module.exports = async function (app, opts) {
  app.put('/:id', async function (request, reply) {
    const result = await updateOne(this.mongo, FILL_ME_IN, FILL_ME_IN)

    reply
      .code(404)
      .header()
      .send()
  })
}
