const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.put('/:afid', (request, response) => {
    const {afid} = request.params
    const statement = `update seat_reservation set status = 'false' where afid = ${afid}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

module.exports = router