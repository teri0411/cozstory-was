'use strict'

const { readAll, readOne } = require('../../model')
const FILL_ME_IN = 'FILL_ME_IN 대신 다른 값을 채워넣으세요'

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readAll(this.mongo)

    reply
      .code(404)
      .header()
      .send()
  })

  app.get('/:id', async function (request, reply) {
    const result = await readOne(this.mongo, FILL_ME_IN)

    reply
      .code(404)
      .header()
      .send()
  })
}
