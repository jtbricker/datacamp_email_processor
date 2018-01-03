'use strict';

exports.processEmail = function(req, res) {
    console.log(req.test);
    res.json({ message: 'Message Received' });    
};