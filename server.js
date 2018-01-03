var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var routes = require('./api/routes/datacampEmailRoutes');
routes(app);

app.listen(port);

console.log('email processor RESTful API server started on: ' + port);