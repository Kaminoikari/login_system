const express = require('express');
const exphbs = require('express-handlebars');
const User = require('./models/accounts.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const Swal = require('sweetalert2');

const port = 3000;

const app = express();

const routes = require('./routes');
require('./config/mongoose');

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'id',
    name: 'userId',
    saveUninitialized: false,
    resave: true,
  })
);
app.use(routes);
app.use(Swal);

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
