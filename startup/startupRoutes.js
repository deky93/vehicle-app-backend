const userRoutes = require('../routes/users');
const unitRoutes = require('../routes/units');
const userUnitsRoutes = require('../routes/users-units');


express = require('express');
app = express();



 module.exports = function(app, express) {   
    app.use(express.json());
    app.use('/users', userRoutes);
    app.use('/units', unitRoutes);
    app.use('/users-units', userUnitsRoutes);


}

//security ogranicenje
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  };
  
 app.use(allowCrossDomain)

//  // Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });