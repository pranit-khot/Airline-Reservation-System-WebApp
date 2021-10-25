const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/showRoute', (request, response) => {
    const statement = `select * from route`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  router.post('/addRoutes', (request, response) => {
    const {source, destination, routeCode} = request.body
    const statement = `insert into route (source, destination, route_code) 
    values ('${source}','${destination}','${routeCode}')`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  // router.delete('/:rtid', (request, response) => {
  //   const {rtid} = request.params
  //   const statement = `delete from route where rt_id = ${rtid}`
  //   db.query(statement, (error, data) => {
  //     response.send(utils.createResult(error, data))
  //   })
  // })

  

  router.delete('/:rtid', (request, response) => {
    const {rtid} = request.params
    const statement = `CALL sp_delete_route (${rtid})`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  router.put('/:rtid', (request, response) => {
    const {rtid} = request.params
    const {source, destination, routeCode} = request.body
    const statement = `update route set source = '${source}',destination = '${destination}', route_code = '${routeCode}'
     where rt_id = ${rtid}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

module.exports = router