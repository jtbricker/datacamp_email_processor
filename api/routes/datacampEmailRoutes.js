'use strict';
module.exports = function(app) {
    var datacampEmail = require('../controllers/datacampEmailController');

    app.route('/datacampEmail')
        .post(datacampEmail.processEmail);
};