const express = require('express')
var bodyParser = require('body-parser')
const userRoutes = require('./routes/user-routes')
const app = express ()
const port= 4000

 
var jsonParser = bodyParser.json()
 

app.use(jsonParser);
app.use('/api/',userRoutes)

app.use(function (req, res, next) {
    next(createError(404));
  });


app.listen(port, () => {
    console.log('Server is up and running on port 4000')
})