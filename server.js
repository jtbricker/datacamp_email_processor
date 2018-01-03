var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.json({limit: '50mb'}));       // to support JSON-encoded bodies

var routes = require('./api/routes/datacampEmailRoutes');
routes(app);

app.listen(port);

console.log('email processor RESTful API server started on: ' + port);