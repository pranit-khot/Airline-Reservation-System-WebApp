const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/showSchedule', (request, response) => {
    const statement = `select f.fls_id, f.arrival_time, f.departure_time, f.flight_date, a.capacity, ar.fare, r.destination, r.source, r.route_code 
    from flight_schedule f inner join aircraft a on f.ac_id=a.ac_id inner join airfare ar on f.airfare_id=ar.airfare_id inner join route r on f.rt_id=r.rt_id;`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  router.post('/', (request, response) => {
    const {arrival_time, departure_time, flight_date, ac_id, airfare_id, rt_id} = request.body
    const statement = `insert into flight_schedule (arrival_time, departure_time, flight_date, ac_id, airfare_id, rt_id) 
    values ('${arrival_time}','${departure_time}','${flight_date}','${ac_id}','${airfare_id}','${rt_id}');`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  // router.put('/:id', (request, response) => {
  //   const {id} = request.params
  //   const {arrival_time, departure_time, flight_date, ac_id, airfare_id, rt_id} = request.body
    
  //   const statement = `update flight_schedule set arrival_time = '${arrival_time}', departure_time= '${departure_time}',
  //   flight_date = '${flight_date}', ac_id = '${ac_id}', airfare_id = '${airfare_id}', rt_id = '${rt_id}'
  //   where fls_id = ${id}`
    
    
  //   db.query(statement, (error, data) => {
  //     response.send(utils.createResult(error, data))
  //   })
  // })

  router.put('/:id', (request, response) => {
    const {id} = request.params
    const {arrival_time, departure_time, flight_date} = request.body
	console.log(arrival_time+" "+departure_time+" "+flight_date+" "+"id : "+id )
    const statement = `update flight_schedule set arrival_time = '${arrival_time}', departure_time= '${departure_time}',
    flight_date = '${flight_date}'
    where fls_id = ${id}`
    
    
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  router.delete('/:id', (request, response) => {
    const {id} = request.params
    const statement = `delete from flight_schedule where fls_id = ${id}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

module.exports = router
