require('./models/db')

const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
// const morgan = require('morgan')
const bodyparser = require("body-Parser");

const employeeControl = require('./controlls/employeeControl')

const app = express()

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// app.use(morgan('dev '))



app.use('/emp', employeeControl)



app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'hbs')

const port = process.env.PORT || 2022

app.listen(port, () => {
    console.log('server is connecte on port 2022...');
})

