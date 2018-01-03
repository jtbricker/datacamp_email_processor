'use strict';

exports.processEmail = function(req, res) {
    console.log(req.body);
    res.json({ message: 'Message Received' });    
};