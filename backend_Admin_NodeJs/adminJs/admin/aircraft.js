const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/showAircraft', (request, response) => {
    const statement = `select * from aircraft`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  router.post('/addAircraft', (request, response) => {
    const {capacity} = request.body
    const statement = `insert into aircraft (capacity) values ('${capacity}')`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })


  router.delete('/:acid', (request, response) => {
    const {acid} = request.params
    const statement = `delete from aircraft where ac_id = ${acid}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })
  
  router.put('/:acid', (request, response) => {
    const {acid} = request.params
    const {capacity} = request.body
    const statement = `update aircraft set capacity = '${capacity}' where ac_id = ${acid}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })


module.exports = router