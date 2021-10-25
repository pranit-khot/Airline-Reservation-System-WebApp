const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/showTransaction', (request, response) => {
    const statement = `select t.ts_id, t.booking_date, t.departure_date, u.first_name,u.last_name,u.phone,r.route_code from transaction t 
    inner join user u on t.user_id=u.user_id inner join flight_schedule f on t.fls_id=f.fls_id 
    inner join route r on r.rt_id = f.rt_id;`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })



module.exports = router