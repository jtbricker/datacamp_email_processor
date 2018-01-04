'use strict';

exports.processEmail = function(req, res) {
    const cheerio = require('cheerio');
    const $ = cheerio.load(req.body.body);
    var links = $('a');
    $(links).each(function(i, link){
        console.log($(link).text() + ':\n  ' + $(link).attr('href'));
      });
    res.json({ message: 'Message Received' });    
};