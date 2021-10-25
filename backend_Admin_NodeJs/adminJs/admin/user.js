const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/showUser', (request, response) => {
    const statement = `select u.user_id, u.email, u.first_name, u.last_name, u.passport_number,u.phone, a.street,
     s.country from user u inner join address a on u.addr_id=a.addr_id inner join state s on  a.state_id=s.state_id;`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })



module.exports = router