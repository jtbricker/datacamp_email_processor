'use strict';

exports.processEmail = function(req, res) {
    const cheerio = require('cheerio');
    const $ = cheerio.load(req.body.body);
    console.log($('a'));
    res.json({ message: 'Message Received' });    
};