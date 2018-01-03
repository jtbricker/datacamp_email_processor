'use strict';

exports.processEmail = function(req, res) {
    console.log(req);
    res.json({ message: 'Message Received' });    
};