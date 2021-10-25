const express = require('express')
const bodyParser = require('body-parser')
const routeAircraft = require('./admin/aircraft')
const routeUser = require('./admin/user')
const routeRoute = require('./admin/route')
const routeSchedule = require('./admin/schedule')
const routeAirfare = require('./admin/airfare')
const routeTransaction =require('./admin/transaction')
const routeSeat_Utility =require('./admin/seat_utility')
const cors = require('cors') 


const app = express()
app.use(bodyParser.json())
app.use(cors('*'))



app.use('/aircraft', routeAircraft)
app.use('/user', routeUser)
app.use('/route', routeRoute)
app.use('/schedule', routeSchedule)
app.use('/airfare', routeAirfare)
app.use('/transaction', routeTransaction)
app.use('/seat_utility', routeSeat_Utility)



app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
  })