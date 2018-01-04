'use strict';

exports.processEmail = function(req, res) {
    html = $.parseHTML(req.body.body);
    console.log(html);
    res.json({ message: 'Message Received' });    
};