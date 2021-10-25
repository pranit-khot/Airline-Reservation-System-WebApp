const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/showAirfare', (request, response) => {
    const statement = `select a.airfare_id,a.fare,r.source, r.destination,r.route_code
     from airfare a inner join route r on a.rt_id=r.rt_id;`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  router.post('/:rt_id', (request, response) => {
    const {rt_id} = request.params
    const {fare} = request.body
    //console.log("in post method of airfare")
    //console.log(fare,rt_id)
    const statement = `insert into airfare (fare, rt_id) values (
      '${fare}', '${rt_id}')`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  }) 
  
  router.put('/:id', (request, response) => {
    const {id} = request.params
    const {fare, rt_id} = request.body
    const statement = `update airfare set fare = '${fare}', rt_id = '${rt_id}' 
      where airfare_id = ${id}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  }) 
 
  router.delete('/:id', (request, response) => {
    const {id} = request.params
    const statement = `delete from airfare where airfare_id = ${id}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

module.exports = router