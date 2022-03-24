const express = require('express')
const exphbs = require('express-handlebars')
const User = require('./models/users.js')
const bodyParser = require('body-parser')
const session = require('express-session')

const port = 3000
const app = express()

const routes = require('./routes')
require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')