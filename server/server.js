const express = require('express'); 
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const userRouter = require('./routes/userRouter')
const vaccineController = require('./controllers/vaccineController');
const vaccRouter = require('./routes/vaccRouter');

const app = express(); 
const port = 3000; 

//root
app.get('/', (req, res) => {
     res.send('<h1>Welcome to the Covid-19 Vaccine Tracker</h1>')
});
app.use(express.static('bundle'))


//catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found'); 
    err.status = 404; 
    next(err); 
})


app.listen(port, () => {
    console.log(`The port is active and listening at ${port}`)
}) ;

module.exports  = app; 